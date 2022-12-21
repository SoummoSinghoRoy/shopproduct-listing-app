const {body} = require('express-validator');
const User = require('../../models/User');

module.exports = [
  body('email')
    .notEmpty().withMessage(`Email can't be empty`)
    .trim()
    .normalizeEmail()
    .custom(async email => {
      const emailadd = await User.findOne({ email })
      if(emailadd) {
        return Promise.reject(`Email already exist`)
      }
    }),
  body('oldpassword')
    .notEmpty().withMessage(`Must provide old password`)
    .custom(async oldpassword => {
      const previousPass = await User.findOne({ oldpassword })
      if(!previousPass) {
        return Promise.reject(`Password doesn't matched`)
      }
    }),
  body('newpassword')
    .notEmpty().withMessage(`Password can't be empty`)
    .isLength({min: 5}).withMessage(`Password can't less than 5 chars`)
    .trim(),
]