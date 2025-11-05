const Event = require('../models/Event');

// @desc    Get all events
// @route   GET /api/events
// @access  Public
exports.getEvents = async (req, res) => {
  try {
    const { status, isActive, page = 1, limit = 10, showAll } = req.query;

    const query = {};
    
    // Only apply filters if explicitly provided or if not admin/showAll
    // For admin panel, showAll=true will show all events regardless of status/active
    if (!showAll || showAll !== 'true') {
      // Default behavior for public: show only published and active events
      if (status) {
        query.status = status;
      } else {
        query.status = 'published'; // Default for public
      }
      
      if (isActive !== undefined) {
        query.isActive = isActive === 'true' || isActive === true;
      } else {
        query.isActive = true; // Default for public
      }
    }
    // If showAll=true, don't apply status/isActive filters - show everything

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const events = await Event.find(query)
      .populate('createdBy', 'name email')
      .sort('-date')
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    const total = await Event.countDocuments(query);

    res.status(200).json({
      status: 'success',
      results: events.length,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      },
      data: events
    });
  } catch (error) {
    console.error('Get events error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch events'
    });
  }
};

// @desc    Get single event
// @route   GET /api/events/:id
// @access  Public
exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('createdBy', 'name email');

    if (!event) {
      return res.status(404).json({
        status: 'error',
        message: 'Event not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: event
    });
  } catch (error) {
    console.error('Get event error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch event'
    });
  }
};

// @desc    Create new event
// @route   POST /api/events
// @access  Private/Admin
exports.createEvent = async (req, res) => {
  try {
    const {
      heading,
      shortBrief,
      description,
      date,
      location,
      picture,
      videos,
      images,
      status = 'published'
    } = req.body;

    // Validate required fields
    if (!heading || !shortBrief || !description || !date || !location || !picture) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide all required fields: heading, shortBrief, description, date, location, and picture'
      });
    }

    // Prepare event data
    const eventData = {
      heading: heading.trim(),
      shortBrief: shortBrief.trim(),
      description: description.trim(),
      date: new Date(date),
      location: location.trim(),
      picture: typeof picture === 'string' ? { url: picture } : picture,
      videos: videos || [],
      images: images || [],
      status,
      createdBy: req.user.id || req.user._id
    };

    const event = await Event.create(eventData);

    res.status(201).json({
      status: 'success',
      message: 'Event created successfully',
      data: event
    });
  } catch (error) {
    console.error('Create event error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors
      });
    }

    res.status(500).json({
      status: 'error',
      message: 'Failed to create event',
      ...(process.env.NODE_ENV === 'development' && { details: error.message })
    });
  }
};

// @desc    Update event
// @route   PUT /api/events/:id
// @access  Private/Admin
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        status: 'error',
        message: 'Event not found'
      });
    }

    // Check if user is admin or created the event
    if (req.user.role !== 'admin' && event.createdBy.toString() !== req.user.id.toString()) {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to update this event'
      });
    }

    // Update fields
    Object.keys(req.body).forEach(key => {
      if (req.body[key] !== undefined) {
        event[key] = req.body[key];
      }
    });

    // Handle date update
    if (req.body.date) {
      event.date = new Date(req.body.date);
    }

    await event.save();

    res.status(200).json({
      status: 'success',
      message: 'Event updated successfully',
      data: event
    });
  } catch (error) {
    console.error('Update event error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update event'
    });
  }
};

// @desc    Delete event
// @route   DELETE /api/events/:id
// @access  Private/Admin
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        status: 'error',
        message: 'Event not found'
      });
    }

    // Check if user is admin or created the event
    if (req.user.role !== 'admin' && event.createdBy.toString() !== req.user.id.toString()) {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to delete this event'
      });
    }

    await event.deleteOne();

    res.status(200).json({
      status: 'success',
      message: 'Event deleted successfully'
    });
  } catch (error) {
    console.error('Delete event error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete event'
    });
  }
};

