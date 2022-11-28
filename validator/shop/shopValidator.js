const {body} = require('express-validator');

module.exports = [
  body('shopname')
      .trim()
      .not().isEmpty().withMessage(`Shop name can't be empty`)
      .isLength({max: 100}).withMessage(`Shop name can't be grater than 100 chars`),

  body('description')
      .trim()
      .not().isEmpty().withMessage(`Description can't be empty`)
      .isLength({min: 100, max: 500}).withMessage(`Description min length 100 chars & max length 500`),

  body('contact_no')
      .trim()
      .not().isEmpty().withMessage(`Contact no can't be empty`),

  body('street')
      .trim()
      .not().isEmpty().withMessage(`Street can't be empty`),

  body('city')
      .trim()
      .not().isEmpty().withMessage(`City can't be empty`),

  body('district')
      .trim()
      .not().isEmpty().withMessage(`District can't be empty`),

  body('country')
      .trim()
      .not().isEmpty().withMessage(`Country can't be empty`)
]