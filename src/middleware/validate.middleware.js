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

const lawyerApplicationSchema = Joi.object({
  lsk_number: Joi.string().min(3).required().messages({
    'string.empty': 'LSK number is required',
    'string.min': 'LSK number must be at least 3 characters',
    'any.required': 'LSK number is required'
  }),
  category: Joi.string().required().messages({
    'string.empty': 'Category is required',
    'any.required': 'Category is required'
  }),
  consultation_fee: Joi.number().min(500).required().messages({
    'number.min': 'Minimum fee is 500',
    'any.required': 'Consultation fee is required'
  }),
  experience: Joi.number().min(0).max(60).required().messages({
    'any.required': 'Years of experience is required'
  }),
  description: Joi.string().min(80).max(600).required().messages({
    'string.min': 'Bio should be at least 80 characters',
    'any.required': 'Bio is required'
  }),
  phone_number: Joi.string().required().messages({
    'string.empty': 'Phone number is required',
    'any.required': 'Phone number is required'
  }),
  file_url: Joi.string().allow(null, '').optional(),
  profile_picture_url: Joi.string().allow(null, '').optional(),
})



module.exports = { validate, registerSchema, loginSchema, otpSchema, lawyerApplicationSchema };