const router = require('express').Router();

const {
  createShopGetController,
  allProductsGetController
} = require('../controllers/shopController');
const {isAuthenticated} = require('../middlewares/authMiddleware');

router.get('/createshop', isAuthenticated, createShopGetController);

router.get('/allproducts', isAuthenticated, allProductsGetController);


module.exports = router