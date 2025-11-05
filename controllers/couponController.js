const QRCode = require('qrcode');
const Coupon = require('../models/Coupon');
const Partner = require('../models/Partner');
const Campaign = require('../models/Campaign');
const User = require('../models/User');

// @desc    Get all coupons
// @route   GET /api/coupons
// @access  Public (filtered)
exports.getCoupons = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      category,
      type,
      status = 'active',
      isPublic = true,
      sortBy = '-createdAt'
    } = req.query;

    const query = {};

    // Public can only see active and public coupons
    if (!req.user || req.user.role !== 'admin') {
      query.status = 'active';
      query.isPublic = true;
      query['validity.isActive'] = true;
      query['validity.endDate'] = { $gte: new Date() };
    } else {
      if (status) query.status = status;
    }

    if (category) query.category = category;
    if (type) query.type = type;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const coupons = await Coupon.find(query)
      .populate('issuer', 'name email')
      .populate('campaign', 'title')
      .populate('partner', 'name businessType')
      .sort(sortBy)
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    const total = await Coupon.countDocuments(query);

    // Add virtual fields
    const couponsWithVirtuals = coupons.map(coupon => ({
      ...coupon,
      remainingUses: coupon.usage.isUnlimited ? 'Unlimited' : Math.max(0, coupon.usage.maxUses - coupon.usage.usedCount),
      daysRemaining: Math.max(0, Math.ceil((new Date(coupon.validity.endDate) - new Date()) / (1000 * 60 * 60 * 24)))
    }));

    res.status(200).json({
      status: 'success',
      results: coupons.length,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      },
      data: couponsWithVirtuals
    });
  } catch (error) {
    console.error('Get coupons error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch coupons'
    });
  }
};

// @desc    Get single coupon
// @route   GET /api/coupons/:id
// @access  Public
exports.getCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id)
      .populate('issuer', 'name email phone')
      .populate('campaign', 'title description')
      .populate('partner', 'name businessType address services');

    if (!coupon) {
      return res.status(404).json({
        status: 'error',
        message: 'Coupon not found'
      });
    }

    // Check visibility
    if (!coupon.isPublic && (!req.user || (req.user.id !== coupon.issuer._id.toString() && req.user.role !== 'admin'))) {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to view this coupon'
      });
    }

    // Increment view count
    coupon.analytics.views += 1;
    await coupon.save();

    const couponData = coupon.toObject();
    couponData.remainingUses = coupon.usage.isUnlimited ? 'Unlimited' : Math.max(0, coupon.usage.maxUses - coupon.usage.usedCount);
    couponData.daysRemaining = Math.max(0, Math.ceil((new Date(coupon.validity.endDate) - new Date()) / (1000 * 60 * 60 * 24)));

    res.status(200).json({
      status: 'success',
      data: couponData
    });
  } catch (error) {
    console.error('Get coupon error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch coupon'
    });
  }
};

// @desc    Create new coupon
// @route   POST /api/coupons
// @access  Private
exports.createCoupon = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      type,
      value,
      campaign,
      partner,
      beneficiary,
      validity,
      usage,
      conditions,
      terms,
      isPublic = true
    } = req.body;

    // Add issuer
    req.body.issuer = req.user.id;

    // Generate unique coupon code
    const couponCode = await Coupon.generateUniqueCode(category.substring(0, 3).toUpperCase());
    req.body.code = couponCode;

    // Generate QR code
    const qrCodeData = JSON.stringify({
      code: couponCode,
      category: category,
      value: value,
      validUntil: validity.endDate
    });

    const qrCodeUrl = await QRCode.toDataURL(qrCodeData, {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      width: 300,
      margin: 1
    });

    req.body.qrCode = {
      url: qrCodeUrl,
      data: qrCodeData
    };

    // Set fraud prevention defaults
    req.body.fraudPrevention = {
      isVerified: true,
      verificationMethod: 'manual',
      maxRedemptionsPerDay: 1
    };

    // Set status to active by default if not provided
    if (!req.body.status) {
      req.body.status = 'active';
    }

    // Set validity.isActive to true if validity dates are valid
    if (req.body.validity && req.body.validity.startDate && req.body.validity.endDate) {
      const startDate = new Date(req.body.validity.startDate);
      const endDate = new Date(req.body.validity.endDate);
      const now = new Date();
      
      // Only set isActive if dates are valid and not in the past
      if (endDate >= now) {
        req.body.validity.isActive = true;
      }
    }

    const coupon = await Coupon.create(req.body);

    res.status(201).json({
      status: 'success',
      message: 'Coupon created successfully',
      data: coupon
    });
  } catch (error) {
    console.error('Create coupon error:', error);
    res.status(400).json({
      status: 'error',
      message: error.message || 'Failed to create coupon'
    });
  }
};

// @desc    Update coupon
// @route   PUT /api/coupons/:id
// @access  Private
exports.updateCoupon = async (req, res) => {
  try {
    let coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      return res.status(404).json({
        status: 'error',
        message: 'Coupon not found'
      });
    }

    // Check ownership or admin
    if (coupon.issuer.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to update this coupon'
      });
    }

    // Prevent updating certain fields if coupon has been used
    if (coupon.usage.usedCount > 0) {
      const restrictedFields = ['value', 'type', 'category'];
      restrictedFields.forEach(field => {
        if (req.body[field]) delete req.body[field];
      });
    }

    coupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: 'success',
      message: 'Coupon updated successfully',
      data: coupon
    });
  } catch (error) {
    console.error('Update coupon error:', error);
    res.status(400).json({
      status: 'error',
      message: error.message || 'Failed to update coupon'
    });
  }
};

// @desc    Delete coupon
// @route   DELETE /api/coupons/:id
// @access  Private
exports.deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      return res.status(404).json({
        status: 'error',
        message: 'Coupon not found'
      });
    }

    // Check ownership or admin
    if (coupon.issuer.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to delete this coupon'
      });
    }

    // Can only delete unused coupons
    if (coupon.usage.usedCount > 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Cannot delete coupon that has been redeemed. You can deactivate it instead.'
      });
    }

    await coupon.deleteOne();

    res.status(200).json({
      status: 'success',
      message: 'Coupon deleted successfully'
    });
  } catch (error) {
    console.error('Delete coupon error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete coupon'
    });
  }
};

// @desc    Redeem coupon
// @route   POST /api/coupons/:id/redeem
// @access  Private
exports.redeemCoupon = async (req, res) => {
  try {
    const { partnerId, location, notes } = req.body;

    const coupon = await Coupon.findById(req.params.id)
      .populate('partner');

    if (!coupon) {
      return res.status(404).json({
        status: 'error',
        message: 'Coupon not found'
      });
    }

    // Validate coupon is redeemable
    if (!coupon.isRedeemable()) {
      return res.status(400).json({
        status: 'error',
        message: 'Coupon is not valid or has expired'
      });
    }

    // Check if user is partner (for partner redemptions)
    if (req.user.role === 'partner') {
      const partner = await Partner.findOne({ email: req.user.email });
      if (!partner || (coupon.partner && coupon.partner._id.toString() !== partner._id.toString())) {
        return res.status(403).json({
          status: 'error',
          message: 'You are not authorized to redeem this coupon'
        });
      }
    }

    // Check daily redemption limit
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayRedemptions = coupon.redemptions.filter(r => {
      const redemptionDate = new Date(r.redeemedAt);
      redemptionDate.setHours(0, 0, 0, 0);
      return redemptionDate.getTime() === today.getTime();
    }).length;

    if (todayRedemptions >= coupon.fraudPrevention.maxRedemptionsPerDay) {
      return res.status(400).json({
        status: 'error',
        message: 'Daily redemption limit reached for this coupon'
      });
    }

    // Redeem coupon
    const redemptionData = {
      redeemedBy: req.user.id,
      redeemedAt: new Date(),
      amount: coupon.value.amount,
      partner: partnerId || coupon.partner,
      location: location || {},
      notes: notes || ''
    };

    await coupon.redeem(redemptionData);

    // Update partner analytics if applicable
    if (partnerId) {
      const partner = await Partner.findById(partnerId);
      if (partner) {
        partner.analytics.totalRedemptions += 1;
        partner.analytics.totalRevenue += coupon.value.amount;
        await partner.save();
      }
    }

    res.status(200).json({
      status: 'success',
      message: 'Coupon redeemed successfully',
      data: {
        couponCode: coupon.code,
        remainingUses: coupon.usage.isUnlimited ? 'Unlimited' : coupon.usage.maxUses - coupon.usage.usedCount
      }
    });
  } catch (error) {
    console.error('Redeem coupon error:', error);
    res.status(400).json({
      status: 'error',
      message: error.message || 'Failed to redeem coupon'
    });
  }
};

// @desc    Get coupon by code
// @route   GET /api/coupons/code/:code
// @access  Public
exports.getCouponByCode = async (req, res) => {
  try {
    const { code } = req.params;

    const coupon = await Coupon.findOne({ code: code.toUpperCase() })
      .populate('issuer', 'name email')
      .populate('campaign', 'title')
      .populate('partner', 'name businessType address');

    if (!coupon) {
      return res.status(404).json({
        status: 'error',
        message: 'Coupon not found'
      });
    }

    // Check if coupon is public or user has access
    if (!coupon.isPublic && (!req.user || (req.user.id !== coupon.issuer._id.toString() && req.user.role !== 'admin'))) {
      return res.status(403).json({
        status: 'error',
        message: 'Invalid coupon code'
      });
    }

    const couponData = coupon.toObject();
    couponData.remainingUses = coupon.usage.isUnlimited ? 'Unlimited' : Math.max(0, coupon.usage.maxUses - coupon.usage.usedCount);
    couponData.isRedeemable = coupon.isRedeemable();

    res.status(200).json({
      status: 'success',
      data: couponData
    });
  } catch (error) {
    console.error('Get coupon by code error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch coupon'
    });
  }
};

// @desc    Get user's coupons
// @route   GET /api/coupons/my-coupons
// @access  Private
exports.getMyCoupons = async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const query = { issuer: req.user.id };
    if (status) query.status = status;

    const coupons = await Coupon.find(query)
      .populate('campaign', 'title')
      .populate('partner', 'name businessType')
      .sort('-createdAt')
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    const total = await Coupon.countDocuments(query);

    res.status(200).json({
      status: 'success',
      results: coupons.length,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      },
      data: coupons
    });
  } catch (error) {
    console.error('Get my coupons error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch coupons'
    });
  }
};

// @desc    Get coupon analytics
// @route   GET /api/coupons/:id/analytics
// @access  Private
exports.getCouponAnalytics = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      return res.status(404).json({
        status: 'error',
        message: 'Coupon not found'
      });
    }

    // Check permission
    if (coupon.issuer.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to view analytics'
      });
    }

    // Calculate redemption rate
    const redemptionRate = coupon.usage.maxUses > 0 
      ? Math.round((coupon.usage.usedCount / coupon.usage.maxUses) * 100)
      : 0;

    // Get redemption timeline
    const redemptionTimeline = coupon.redemptions.map(r => ({
      date: r.redeemedAt,
      amount: r.amount,
      partner: r.partner
    }));

    // Group redemptions by date
    const dailyRedemptions = {};
    coupon.redemptions.forEach(r => {
      const date = new Date(r.redeemedAt).toISOString().split('T')[0];
      dailyRedemptions[date] = (dailyRedemptions[date] || 0) + 1;
    });

    const analytics = {
      overview: {
        totalViews: coupon.analytics.views,
        totalShares: coupon.analytics.shares,
        totalDownloads: coupon.analytics.downloads,
        totalRedemptions: coupon.usage.usedCount,
        remainingUses: coupon.usage.isUnlimited ? 'Unlimited' : coupon.usage.maxUses - coupon.usage.usedCount,
        redemptionRate: redemptionRate
      },
      redemptionTimeline,
      dailyRedemptions,
      status: coupon.status,
      daysRemaining: Math.max(0, Math.ceil((new Date(coupon.validity.endDate) - new Date()) / (1000 * 60 * 60 * 24)))
    };

    res.status(200).json({
      status: 'success',
      data: analytics
    });
  } catch (error) {
    console.error('Get coupon analytics error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch coupon analytics'
    });
  }
};

// @desc    Validate coupon code
// @route   POST /api/coupons/validate
// @access  Public
exports.validateCoupon = async (req, res) => {
  try {
    const { code } = req.body;

    const coupon = await Coupon.findOne({ code: code.toUpperCase() });

    if (!coupon) {
      return res.status(404).json({
        status: 'error',
        message: 'Invalid coupon code',
        valid: false
      });
    }

    const isRedeemable = coupon.isRedeemable();

    res.status(200).json({
      status: 'success',
      valid: isRedeemable,
      data: isRedeemable ? {
        code: coupon.code,
        title: coupon.title,
        category: coupon.category,
        value: coupon.value,
        validUntil: coupon.validity.endDate,
        remainingUses: coupon.usage.isUnlimited ? 'Unlimited' : coupon.usage.maxUses - coupon.usage.usedCount
      } : null,
      message: isRedeemable ? 'Coupon is valid' : 'Coupon is invalid or expired'
    });
  } catch (error) {
    console.error('Validate coupon error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to validate coupon'
    });
  }
};

