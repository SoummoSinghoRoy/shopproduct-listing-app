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
  body('fullname')
    .notEmpty().withMessage(`Name can't be empty`)
    .trim()
    .custom(async fullname => {
      const full_name = await User.findOne({fullname})
      if(full_name) {
        return Promise.reject(`Name already exist`)
      }
    }),
  body('mobile_no')
    .notEmpty().withMessage(`Mobile no can't be empty`)
    .trim()
    .custom(async mobile_no => {
      const mobileno = await User.findOne({mobile_no})
      if(mobileno) {
        return Promise.reject(`Mobile no already exist`)
      }
    }),
  body('password')
    .notEmpty().withMessage(`Password can't be empty`)
    .isLength({min: 5}).withMessage(`Password can't less than 5 chars`)
    .trim(),
]
