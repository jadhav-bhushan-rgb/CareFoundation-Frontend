const express = require('express');
const { protect, authorize, optionalAuth } = require('../middleware/auth');
const { 
  validateCouponCreation, 
  validatePagination, 
  validateObjectId 
} = require('../middleware/validation');
const {
  getCoupons,
  getCoupon,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  redeemCoupon,
  getCouponByCode,
  getMyCoupons,
  getCouponAnalytics,
  validateCoupon
} = require('../controllers/couponController');

const router = express.Router();

// Public routes (must be before /:id routes)
// @desc    Get coupon by code
// @route   GET /api/coupons/code/:code
// @access  Public
router.get('/code/:code', getCouponByCode);

// @desc    Validate coupon
// @route   POST /api/coupons/validate
// @access  Public
router.post('/validate', validateCoupon);

// @desc    Get user's coupons
// @route   GET /api/coupons/my-coupons
// @access  Private
router.get('/my-coupons', protect, validatePagination, getMyCoupons);

// @desc    Get all coupons (Public with filters)
// @route   GET /api/coupons
// @access  Public
router.get('/', optionalAuth, validatePagination, getCoupons);

// @desc    Get single coupon
// @route   GET /api/coupons/:id
// @access  Public
router.get('/:id', optionalAuth, validateObjectId(), getCoupon);

// @desc    Create new coupon
// @route   POST /api/coupons
// @access  Private
router.post('/', protect, validateCouponCreation, createCoupon);

// @desc    Update coupon
// @route   PUT /api/coupons/:id
// @access  Private
router.put('/:id', protect, validateObjectId(), updateCoupon);

// @desc    Delete coupon
// @route   DELETE /api/coupons/:id
// @access  Private
router.delete('/:id', protect, validateObjectId(), deleteCoupon);

// @desc    Redeem coupon
// @route   POST /api/coupons/:id/redeem
// @access  Private
router.post('/:id/redeem', protect, validateObjectId(), redeemCoupon);

// @desc    Get coupon analytics
// @route   GET /api/coupons/:id/analytics
// @access  Private
router.get('/:id/analytics', protect, validateObjectId(), getCouponAnalytics);

module.exports = router;



