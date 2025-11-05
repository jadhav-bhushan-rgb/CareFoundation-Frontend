const Partner = require('../models/Partner');
const { sendEmail } = require('../utils/emailService');

// @desc    Create/Register a new partner
// @route   POST /api/partners
// @access  Public
exports.createPartner = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      businessType,
      category,
      description,
      address,
      contactPerson,
      services,
      message
    } = req.body;

    // Check if partner already exists
    const existingPartner = await Partner.findOne({ email });
    if (existingPartner) {
      return res.status(400).json({
        success: false,
        message: 'Partner with this email already exists'
      });
    }

    // Prepare partner data
    const partnerData = {
      name,
      email,
      phone,
      businessType,
      category,
      description: description || message || 'No description provided',
      address: typeof address === 'string' ? {
        street: address,
        city: 'N/A',
        state: 'N/A',
        pincode: '000000',
        country: 'India'
      } : address,
      contactPerson: contactPerson || {
        name: name,
        phone: phone,
        email: email
      },
      services: services || [],
      status: req.body.status || 'pending', // Allow status to be set (for admin-created partners)
      isActive: req.body.isActive !== undefined ? req.body.isActive : (req.body.status === 'approved' ? true : true) // Set isActive based on status
    };

    // Add documents if provided, otherwise use defaults
    if (req.body.documents && req.body.documents.businessLicense) {
      partnerData.documents = req.body.documents;
    } else {
      // For all partners, provide default document (required by model)
      partnerData.documents = {
        businessLicense: req.body.documents?.businessLicense || (req.body.status === 'approved' ? 'Admin-approved partner' : 'Pending verification'),
        gstNumber: req.body.documents?.gstNumber || '',
        panNumber: req.body.documents?.panNumber || ''
      };
    }

    // Add images if provided
    if (req.body.images) {
      partnerData.images = req.body.images;
    }

    // Add social links if provided
    if (req.body.socialLinks) {
      partnerData.socialLinks = req.body.socialLinks;
    }

    // Add operating hours if provided
    if (req.body.operatingHours) {
      partnerData.operatingHours = req.body.operatingHours;
    }

    // Add admin notes if provided
    if (req.body.adminNotes) {
      partnerData.adminNotes = req.body.adminNotes;
    }

    // Create partner
    const partner = await Partner.create(partnerData);

    // Send email notification to partner
    try {
      await sendEmail({
        to: email,
        subject: 'Partner Registration - Care Foundation',
        text: `Thank you for registering as a partner with Care Foundation Trust.
        
Your application has been received and is under review. Our team will contact you within 2-3 business days.

Partner Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Business Type: ${businessType}
- Category: ${category}

Thank you for your interest in partnering with us!

Best regards,
Care Foundation Team`,
        html: `
          <h2>Partner Registration Received</h2>
          <p>Thank you for registering as a partner with <strong>Care Foundation Trust</strong>.</p>
          <p>Your application has been received and is under review. Our team will contact you within 2-3 business days.</p>
          
          <h3>Partner Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Business Type:</strong> ${businessType}</li>
            <li><strong>Category:</strong> ${category}</li>
          </ul>
          
          <p>Thank you for your interest in partnering with us!</p>
          <p><strong>Best regards,</strong><br/>Care Foundation Team</p>
        `
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Partner registration submitted successfully. You will be notified once approved.',
      data: partner
    });

  } catch (error) {
    console.error('Partner creation error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to register partner'
    });
  }
};

// @desc    Get all partners (with filters)
// @route   GET /api/partners
// @access  Public
exports.getPartners = async (req, res) => {
  try {
    const {
      category,
      businessType,
      city,
      state,
      status = 'approved',
      page = 1,
      limit = 10,
      search
    } = req.query;

    const query = { status };

    // Add filters
    if (category) query.category = category;
    if (businessType) query.businessType = businessType;
    if (city) query['address.city'] = new RegExp(city, 'i');
    if (state) query['address.state'] = new RegExp(state, 'i');
    if (req.query.isActive !== undefined) {
      query.isActive = req.query.isActive === 'true';
    }
    
    // Search
    if (search) {
      query.$or = [
        { name: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') },
        { 'address.city': new RegExp(search, 'i') }
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const partners = await Partner.find(query)
      .select('-documents -adminNotes')
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Partner.countDocuments(query);

    res.status(200).json({
      success: true,
      data: partners,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / parseInt(limit))
      }
    });

  } catch (error) {
    console.error('Get partners error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch partners'
    });
  }
};

// @desc    Get single partner by ID
// @route   GET /api/partners/:id
// @access  Public
exports.getPartner = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id)
      .select('-documents -adminNotes');

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner not found'
      });
    }

    res.status(200).json({
      success: true,
      data: partner
    });

  } catch (error) {
    console.error('Get partner error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch partner'
    });
  }
};

// @desc    Update partner
// @route   PUT /api/partners/:id
// @access  Private/Admin
exports.updatePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Partner updated successfully',
      data: partner
    });

  } catch (error) {
    console.error('Update partner error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to update partner'
    });
  }
};

// @desc    Delete partner
// @route   DELETE /api/partners/:id
// @access  Private/Admin
exports.deletePartner = async (req, res) => {
  try {
    const partner = await Partner.findByIdAndDelete(req.params.id);

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Partner deleted successfully'
    });

  } catch (error) {
    console.error('Delete partner error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete partner'
    });
  }
};

// @desc    Add review to partner
// @route   POST /api/partners/:id/review
// @access  Private
exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const partner = await Partner.findById(req.params.id);

    if (!partner) {
      return res.status(404).json({
        success: false,
        message: 'Partner not found'
      });
    }

    // Check if user already reviewed
    const alreadyReviewed = partner.rating.reviews.find(
      review => review.user.toString() === req.user.id
    );

    if (alreadyReviewed) {
      return res.status(400).json({
        success: false,
        message: 'You have already reviewed this partner'
      });
    }

    // Add review
    await partner.addReview({
      user: req.user.id,
      rating: parseInt(rating),
      comment
    });

    res.status(201).json({
      success: true,
      message: 'Review added successfully',
      data: partner
    });

  } catch (error) {
    console.error('Add review error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add review'
    });
  }
};






