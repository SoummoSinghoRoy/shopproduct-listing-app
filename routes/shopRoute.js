const router = require('express').Router();

const {
  createShopGetController,
  allProductsGetController
} = require('../controllers/shopController');

router.get('/createshop', createShopGetController);

router.get('/allproducts', allProductsGetController);


module.exports = router