const Joi = require('joi');

const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        const messages = error.details.map(d => d.message).join(', ');
        return res.status(400).json({ success: false, message: messages });
    }
    next();
};

const registerSchema = Joi.object({
    first_name:  Joi.string().min(2).max(50).required().messages({
        'string.min': 'First name must be at least 2 characters',
        'any.required': 'First name is required'
    }),
    second_name: Joi.string().min(2).max(50).required().messages({
        'string.min': 'Second name must be at least 2 characters',
        'any.required': 'Second name is required'
    }),
    email:    Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email address',
        'any.required': 'Email is required'
    }),
    password: Joi.string().min(8).required().messages({
        'string.min': 'Password must be at least 8 characters',
        'any.required': 'Password is required'
    }),
    dob: Joi.date().max('now').required().messages({
        'date.max': 'Date of birth cannot be in the future',
        'any.required': 'Date of birth is required'
    }),
    role: Joi.string().valid('CLIENT', 'LAWYER').required().messages({
            'any.only': 'Role must be CLIENT, or LAWYER',
            'any.required': 'Role is required'
    })
})

//TODO application_id

const loginSchema = Joi.object({
    email:    Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email address',
        'any.required': 'Email is required'
    }),
    password: Joi.string().required().messages({
        'any.required': 'Password is required'
    }),
});



const otpSchema = Joi.object({
    email: Joi.string().email().required(),
    otp:   Joi.string().length(6).pattern(/^[0-9]+$/).required().messages({
        'string.length':  'OTP must be exactly 6 digits',
        'string.pattern.base': 'OTP must contain only numbers'
    }),
});
const phoneValidationSchema = Joi.object({
  phoneNumber: Joi.string().trim().required().pattern(/^(?:\+?254|0)(7|1)\d{8}$/).messages({
    'string.empty': 'Phone number is required',
    'any.required': 'Phone number is required',
    'string.pattern.base': 'Please provide a valid Kenyan phone number (e.g. 0768863372 or 254768863372)'
  }),
});

const lawyerApplicationSchema = Joi.object({
 
  // ── Certificate URL — required, must be a valid URL ──────────────────────
  file_url: Joi.string().uri().required().messages({
    'string.empty':  'Certificate file URL is required',
    'string.uri':    'Certificate file URL must be a valid URL',
    'any.required':  'Certificate file URL is required',
  }),
 
  // ── Profile picture — optional, null allowed ──────────────────────────────
  profile_picture_url: Joi.string().uri().allow(null, '').optional().messages({
    'string.uri': 'Profile picture must be a valid URL',
  }),
 
  // ── LSK number ────────────────────────────────────────────────────────────
  lsk_number: Joi.string().min(3).required().messages({
    'string.empty': 'LSK number is required',
    'string.min':   'LSK number must be at least 3 characters',
    'any.required': 'LSK number is required',
  }),
 
  // ── Category / specialization ─────────────────────────────────────────────
  category: Joi.string().required().messages({
    'string.empty': 'Category is required',
    'any.required': 'Category is required',
  }),
 
  // ── Consultation fee — minimum KSh 500 ───────────────────────────────────
  consultation_fee: Joi.number().integer().min(500).required().messages({
    'number.base':    'Consultation fee must be a number',
    'number.integer': 'Consultation fee must be a whole number',
    'number.min':     'Minimum consultation fee is KSh 500',
    'any.required':   'Consultation fee is required',
  }),
 
  // ── Years of experience ───────────────────────────────────────────────────
  experience: Joi.number().integer().min(0).max(60).required().messages({
    'number.base':    'Experience must be a number',
    'number.integer': 'Experience must be a whole number',
    'number.min':     'Experience cannot be negative',
    'number.max':     'Experience cannot exceed 60 years',
    'any.required':   'Years of experience is required',
  }),
 
  // ── Bio / description ─────────────────────────────────────────────────────
  description: Joi.string().min(80).max(600).required().messages({
    'string.empty': 'Bio is required',
    'string.min':   'Bio must be at least 80 characters',
    'string.max':   'Bio cannot exceed 600 characters',
    'any.required': 'Bio is required',
  }),
 
  // ── Phone — accepts 07XXXXXXXX or 254XXXXXXXXX ───────────────────────────
  // Normalised to 254XXXXXXXXX before saving (see middleware below)
  phone_number: Joi.string()
    .trim()
    .pattern(/^(?:0|\+?254)(7|1)\d{8}$/)
    .required()
    .messages({
      'string.empty':        'Phone number is required',
      'any.required':        'Phone number is required',
      'string.pattern.base': 'Enter a valid Kenyan number (07 0r 254)',
    }),
 
  // ── user_id — UUID from localStorage pendingUser ─────────────────────────
  user_id: Joi.string().uuid().required().messages({
    'string.empty': 'User ID is required',
    'string.guid':  'User ID must be a valid UUID',
    'any.required': 'User ID is required',
  }),
 
});



module.exports = { validate, registerSchema, loginSchema, otpSchema, lawyerApplicationSchema, phoneValidationSchema };