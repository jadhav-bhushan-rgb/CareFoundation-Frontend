const express = require('express');
const { protect, optionalAuth } = require('../middleware/auth');
const { upload, uploadSingle, uploadMultiple, deleteFile } = require('../controllers/uploadController');

const router = express.Router();

// @desc    Upload single image (public for volunteer registration)
// @route   POST /api/upload/single
// @access  Public (optional auth)
router.post('/single', optionalAuth, upload.single('image'), uploadSingle);

// @desc    Upload multiple images
// @route   POST /api/upload/multiple
// @access  Private
router.post('/multiple', protect, upload.array('images', 10), uploadMultiple);

// @desc    Delete file
// @route   DELETE /api/upload/:filename
// @access  Private
router.delete('/:filename', protect, deleteFile);

module.exports = router;
