const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');
const { sendEmail } = require('../utils/emailService');

// Generate JWT Token
const generateToken = (id) => {
  const secret = process.env.JWT_SECRET || 'care-foundation-fallback-secret-key-2024';
  return jwt.sign({ id }, secret, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  });
};

// Send token response
const sendTokenResponse = (user, statusCode, res) => {
  const token = generateToken(user._id);

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  };

  res.status(statusCode)
    .cookie('token', token, options)
    .json({
      status: 'success',
      token,
      user: user.getPublicProfile()
    });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {
  try {
    console.log('=== REGISTRATION REQUEST ===');
    console.log('Request body:', JSON.stringify(req.body, null, 2));
    
    const { name, email, password, phone, role = 'donor' } = req.body;

    console.log('Extracted values:', {
      name: name ? `${name.substring(0, 10)}... (${name.length} chars)` : 'MISSING',
      email: email || 'MISSING',
      phone: phone || 'MISSING',
      role: role,
      hasPassword: !!password,
      passwordLength: password ? password.length : 0
    });

    // Validate required fields
    if (!name || !email || !phone) {
      const missingFields = [];
      if (!name) missingFields.push('name');
      if (!email) missingFields.push('email');
      if (!phone) missingFields.push('phone');
      
      const errorMsg = `Missing required fields: ${missingFields.join(', ')}`;
      console.error('Validation error:', errorMsg);
      
      return res.status(400).json({
        status: 'error',
        message: errorMsg
      });
    }

    // Validate password if provided (or use default for volunteer)
    if (role === 'volunteer' && !password) {
      // Volunteer can have default password
      req.body.password = req.body.password || 'volunteer123';
    } else if (!password || password.length < 6) {
      return res.status(400).json({
        status: 'error',
        message: 'Password is required and must be at least 6 characters'
      });
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Please enter a valid email address'
      });
    }

    // Validate phone format (10-digit Indian phone number)
    // Remove any non-digit characters first
    const cleanedPhone = phone.toString().replace(/\D/g, '');
    console.log('Phone validation:', { original: phone, cleaned: cleanedPhone });
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanedPhone)) {
      const errorMsg = `Invalid phone number format. Expected 10 digits starting with 6-9, got: ${phone} (cleaned: ${cleanedPhone})`;
      console.error('Phone validation error:', errorMsg);
      
      return res.status(400).json({
        status: 'error',
        message: 'Please enter a valid 10-digit phone number starting with 6-9'
      });
    }
    
    // Use cleaned phone for creation
    const finalPhone = cleanedPhone;

    // Validate role
    const allowedRoles = ['donor', 'fundraiser', 'admin', 'partner', 'volunteer'];
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        status: 'error',
        message: `Invalid role. Allowed roles: ${allowedRoles.join(', ')}`
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'User already exists with this email address'
      });
    }

    // Create user
    let user;
    const userData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: password || 'volunteer123',
      phone: finalPhone, // Use cleaned phone
      role,
      // Set isActive to false for new registrations (except admin role)
      // Admin can approve users later through admin panel
      isActive: role === 'admin' ? true : false
    };

    // Add volunteerDetails if role is volunteer and volunteerDetails provided
    if (role === 'volunteer' && req.body.volunteerDetails) {
      const volunteerDetails = req.body.volunteerDetails;
      userData.volunteerDetails = {
        fathersName: volunteerDetails.fathersName || '',
        mothersName: volunteerDetails.mothersName || '',
        dateOfBirth: volunteerDetails.dateOfBirth ? new Date(volunteerDetails.dateOfBirth) : undefined,
        academicQualification: volunteerDetails.academicQualification || '',
        professionalQualification: volunteerDetails.professionalQualification || '',
        nationality: volunteerDetails.nationality || '',
        communicationAddress: volunteerDetails.communicationAddress || '',
        permanentAddress: volunteerDetails.permanentAddress || '',
        occupation: volunteerDetails.occupation || '',
        designation: volunteerDetails.designation || 'Volunteer CFT',
        hobbies: volunteerDetails.hobbies || '',
        whyVolunteer: volunteerDetails.whyVolunteer || '',
        profileImage: volunteerDetails.profileImage || '',
        identityProof: volunteerDetails.identityProof || ''
      };
      
      // Set avatar if profile image provided
      if (volunteerDetails.profileImage) {
        userData.avatar = volunteerDetails.profileImage;
      }
      
      // Set address from communication address if provided
      if (volunteerDetails.communicationAddress) {
        userData.address = {
          street: volunteerDetails.communicationAddress,
          city: '',
          state: '',
          country: 'India'
        };
      }
    }
    
    console.log('Attempting to create user with data:', {
      ...userData,
      password: '***hidden***',
      volunteerDetails: userData.volunteerDetails ? '***provided***' : undefined
    });
    
    try {
      user = await User.create(userData);
      console.log('User created successfully:', user._id);
    } catch (createError) {
      console.error('=== USER CREATION ERROR ===');
      console.error('Error name:', createError.name);
      console.error('Error code:', createError.code);
      console.error('Error message:', createError.message);
      
      if (createError.name === 'ValidationError') {
        console.error('Validation errors:');
        const errorDetails = {};
        Object.keys(createError.errors).forEach(key => {
          errorDetails[key] = createError.errors[key].message;
          console.error(`  - ${key}: ${createError.errors[key].message}`);
        });
        
        const errors = Object.values(createError.errors).map(err => err.message);
        const errorMessage = errors.join(', ');
        console.error('Final error message:', errorMessage);
        
        return res.status(400).json({
          status: 'error',
          message: errorMessage || 'Validation failed. Please check your inputs.',
          errors: errorDetails
        });
      }
      
      // Handle duplicate email error
      if (createError.code === 11000) {
        console.error('Duplicate email error');
        return res.status(400).json({
          status: 'error',
          message: 'User already exists with this email address'
        });
      }
      
      console.error('Unhandled error:', createError);
      throw createError;
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(20).toString('hex');
    user.verificationToken = verificationToken;
    user.verificationExpire = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    await user.save();

    // Send verification email
    try {
      await sendEmail({
        email: user.email,
        subject: 'Verify Your Email - Care Foundation',
        template: 'emailVerification',
        data: {
          name: user.name,
          verificationUrl: `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`
        }
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail registration if email fails
    }

    // If user is not active (pending approval), don't send token
    if (!user.isActive) {
      return res.status(201).json({
        status: 'success',
        message: 'Registration successful! Your account is pending admin approval. You will be notified once approved.',
        user: user.getPublicProfile(),
        requiresApproval: true
      });
    }

    sendTokenResponse(user, 201, res);
  } catch (error) {
    console.error('Registration error:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      body: req.body
    });
    
    // Return more detailed error in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? (error.message || 'Registration failed. Please try again.')
      : 'Registration failed. Please try again.';
    
    res.status(500).json({
      status: 'error',
      message: errorMessage,
      ...(process.env.NODE_ENV === 'development' && { 
        error: error.toString() 
      })
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists and include password for comparison
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid email or password'
      });
    }

    // Check if account is active
    if (!user.isActive) {
      return res.status(401).json({
        status: 'error',
        message: 'Your account is pending admin approval. Please wait for approval or contact support.'
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid email or password'
      });
    }

    sendTokenResponse(user, 200, res);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Login failed. Please try again.'
    });
  }
};

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
const logout = async (req, res) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully'
  });
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    res.status(200).json({
      status: 'success',
      user: user.getPublicProfile()
    });
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get user information'
    });
  }
};

// @desc    Update user details
// @route   PUT /api/auth/updatedetails
// @access  Private
const updateDetails = async (req, res) => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      socialLinks: req.body.socialLinks,
      preferences: req.body.preferences
    };

    // Remove undefined fields
    Object.keys(fieldsToUpdate).forEach(key => {
      if (fieldsToUpdate[key] === undefined) {
        delete fieldsToUpdate[key];
      }
    });

    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      user: user.getPublicProfile()
    });
  } catch (error) {
    console.error('Update details error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update user details'
    });
  }
};

// @desc    Update password
// @route   PUT /api/auth/updatepassword
// @access  Private
const updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Get user with password
    const user = await User.findById(req.user.id).select('+password');

    // Check current password
    const isCurrentPasswordValid = await user.comparePassword(currentPassword);
    if (!isCurrentPasswordValid) {
      return res.status(400).json({
        status: 'error',
        message: 'Current password is incorrect'
      });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    sendTokenResponse(user, 200, res);
  } catch (error) {
    console.error('Update password error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update password'
    });
  }
};

// @desc    Forgot password
// @route   POST /api/auth/forgotpassword
// @access  Public
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'No user found with this email address'
      });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    // Send reset email
    try {
      await sendEmail({
        email: user.email,
        subject: 'Password Reset - Care Foundation',
        template: 'passwordReset',
        data: {
          name: user.name,
          resetUrl: `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`
        }
      });

      res.status(200).json({
        status: 'success',
        message: 'Password reset email sent'
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      
      // Clear reset token if email fails
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();

      res.status(500).json({
        status: 'error',
        message: 'Failed to send reset email. Please try again.'
      });
    }
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to process password reset request'
    });
  }
};

// @desc    Reset password
// @route   PUT /api/auth/resetpassword/:resettoken
// @access  Public
const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const resetToken = req.params.resettoken;

    // Get user by reset token
    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid or expired reset token'
      });
    }

    // Update password
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendTokenResponse(user, 200, res);
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to reset password'
    });
  }
};

// @desc    Verify email
// @route   GET /api/auth/verifyemail/:token
// @access  Public
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({
      verificationToken: token,
      verificationExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid or expired verification token'
      });
    }

    // Mark email as verified
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationExpire = undefined;
    await user.save();

    res.status(200).json({
      status: 'success',
      message: 'Email verified successfully'
    });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to verify email'
    });
  }
};

// @desc    Resend verification email
// @route   POST /api/auth/resendverification
// @access  Private
const resendVerification = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user.isVerified) {
      return res.status(400).json({
        status: 'error',
        message: 'Email is already verified'
      });
    }

    // Generate new verification token
    const verificationToken = crypto.randomBytes(20).toString('hex');
    user.verificationToken = verificationToken;
    user.verificationExpire = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    await user.save();

    // Send verification email
    try {
      await sendEmail({
        email: user.email,
        subject: 'Verify Your Email - Care Foundation',
        template: 'emailVerification',
        data: {
          name: user.name,
          verificationUrl: `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`
        }
      });

      res.status(200).json({
        status: 'success',
        message: 'Verification email sent'
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      res.status(500).json({
        status: 'error',
        message: 'Failed to send verification email'
      });
    }
  } catch (error) {
    console.error('Resend verification error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to resend verification email'
    });
  }
};

module.exports = {
  register,
  login,
  logout,
  getMe,
  updateDetails,
  updatePassword,
  forgotPassword,
  resetPassword,
  verifyEmail,
  resendVerification
};
