const router = require('express').Router();

const {productimgsUpload} = require('../middlewares/uploadMiddleware');
const {isAuthenticated} = require('../middlewares/authMiddleware');
const {allProductsGetController, 
      foodProductCreateGetController, 
      foodProductCreatePostController,
      singleFoodProductGetController,
      foodProductEditGetController,
      foodProductEditPostController,
      foodproductDeleteController
    } = require('../controllers/productController');
const productValidator = require('../validator/product/productValidator');

router.get('/allproducts', isAuthenticated, allProductsGetController);

router.get('/food/add-product', isAuthenticated, foodProductCreateGetController);
router.post('/food/add-product', isAuthenticated, productimgsUpload.array('itemimg', 3), productValidator, foodProductCreatePostController);
router.get('/food/:productId', isAuthenticated, singleFoodProductGetController);
router.get('/food/edit-product/:productId', isAuthenticated, foodProductEditGetController);
router.post('/food/edit-product/:productId', isAuthenticated, productValidator, foodProductEditPostController);
router.get('/food/delete/:productId', isAuthenticated, foodproductDeleteController);


module.exports = router;