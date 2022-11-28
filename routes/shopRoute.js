const router = require('express').Router();

const {shopimgsUpload} = require('../middlewares/uploadMiddleware');
const {
  createShopGetController,
  allProductsGetController,
  createShopPostcontroller
} = require('../controllers/shopController');
const {isAuthenticated} = require('../middlewares/authMiddleware');
const shopValidator = require('../validator/shop/shopValidator');

router.get('/createshop', isAuthenticated, createShopGetController);
router.post('/createshop', isAuthenticated, shopimgsUpload.array('shopimgs', 3), shopValidator, createShopPostcontroller);

router.get('/allproducts', isAuthenticated, allProductsGetController);


module.exports = router