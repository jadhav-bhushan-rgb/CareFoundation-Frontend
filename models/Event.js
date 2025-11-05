const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, 'Event heading is required'],
    trim: true,
    maxlength: [200, 'Heading cannot exceed 200 characters']
  },
  shortBrief: {
    type: String,
    required: [true, 'Event short brief is required'],
    trim: true,
    maxlength: [500, 'Short brief cannot exceed 500 characters']
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Event date is required']
  },
  location: {
    type: String,
    required: [true, 'Event location is required'],
    trim: true
  },
  picture: {
    url: {
      type: String,
      required: [true, 'Event picture is required']
    },
    publicId: String,
    caption: String
  },
  videos: [{
    url: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      enum: ['youtube', 'vimeo', 'other'],
      default: 'youtube'
    },
    thumbnail: String
  }],
  images: [{
    url: {
      type: String,
      required: true
    },
    publicId: String,
    caption: String
  }],
  status: {
    type: String,
    enum: ['draft', 'published', 'cancelled'],
    default: 'published'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Index for better query performance
eventSchema.index({ date: -1 });
eventSchema.index({ status: 1 });
eventSchema.index({ isActive: 1 });

module.exports = mongoose.model('Event', eventSchema);

