const {body} = require('express-validator');

module.exports = [
  body('itemname')
  .trim()
  .not().isEmpty().withMessage(`Product name can't be empty`),

body('price')
  .trim()
  .not().isEmpty().withMessage(`Pricecan't be empty`),

body('quantity')
  .trim()
  .not().isEmpty().withMessage(`Quantity can't be empty`),

body('expireDate')
  .trim()
  .not().isEmpty().withMessage(`Expire date can't be empty`),
body('manufactureCompany')
  .trim()
  .not().isEmpty().withMessage(`Manufacture company name can't be empty`)
]