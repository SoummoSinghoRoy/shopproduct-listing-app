const router = require('express').Router();

const {shopimgsUpload} = require('../middlewares/uploadMiddleware');
const {
  createShopGetController,
  createShopPostcontroller,
  viewShopController,
  editShopGetController,
  editShopPostController
} = require('../controllers/shopController');
const {isAuthenticated} = require('../middlewares/authMiddleware');
const shopValidator = require('../validator/shop/shopValidator');
const editShopValidator = require('../validator/shop/editShopValidator');

router.get('/createshop', isAuthenticated, createShopGetController);
router.post('/createshop', isAuthenticated, shopimgsUpload.array('shopimgs', 3), shopValidator, createShopPostcontroller);

router.get('/', isAuthenticated, viewShopController);

router.get('/edit-shop', isAuthenticated, editShopGetController);
router.post('/edit-shop', isAuthenticated, editShopValidator, editShopPostController);

module.exports = router