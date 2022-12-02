const router = require('express').Router();

const {productimgsUpload} = require('../middlewares/uploadMiddleware');
const {isAuthenticated} = require('../middlewares/authMiddleware');
const {allProductsGetController, 
      foodProductCreateGetController, 
      foodProductCreatePostController,
      singleFoodProductGetController
    } = require('../controllers/productController');
const productValidator = require('../validator/product/productValidator');

router.get('/allproducts', isAuthenticated, allProductsGetController);

router.get('/food/add-product', isAuthenticated, foodProductCreateGetController);
router.post('/food/add-product', isAuthenticated, productimgsUpload.array('itemimg', 3), productValidator, foodProductCreatePostController);
router.get('/food/:productId', isAuthenticated, singleFoodProductGetController);

module.exports = router;