const router = require('express').Router();

const {productimgsUpload} = require('../middlewares/uploadMiddleware');
const {isAuthenticated, isUnAuthenticated} = require('../middlewares/authMiddleware');
const {allProductsGetController, 
      foodProductCreateGetController, 
      foodProductCreatePostController,
      singleFoodProductGetController,
      foodProductEditGetController,
      foodProductEditPostController,
      foodproductDeleteController,
      allFoodCategoryProductsGetController,
      beautyProductCreateGetController,
      beautyProductCreatePostController,
      singlebeautyProductGetController,
      beautyProductEditGetController,
      beautyProductEditPostController,
      beautyproductDeleteController,
      allBeautyCategoryProductsGetController
    } = require('../controllers/productController');
const productValidator = require('../validator/product/productValidator');

router.get('/allproducts', isAuthenticated, allProductsGetController);

router.get('/food', isAuthenticated, allFoodCategoryProductsGetController);
router.get('/food/add-product', isAuthenticated, foodProductCreateGetController);
router.post('/food/add-product', isAuthenticated, productimgsUpload.array('itemimg', 3), productValidator, foodProductCreatePostController);
router.get('/food/:productId', isAuthenticated, singleFoodProductGetController);
router.get('/food/edit-product/:productId', isAuthenticated, foodProductEditGetController);
router.post('/food/edit-product/:productId', isAuthenticated, productValidator, foodProductEditPostController);
router.get('/food/delete/:productId', isAuthenticated, foodproductDeleteController);

router.get('/beauty', isAuthenticated, allBeautyCategoryProductsGetController);
router.get('/beauty/add-product', isAuthenticated, beautyProductCreateGetController);
router.post('/beauty/add-product', isAuthenticated, productimgsUpload.array('itemimg', 3), productValidator, beautyProductCreatePostController);
router.get('/beauty/:productId', isAuthenticated, singlebeautyProductGetController);
router.get('/beauty/edit-product/:productId', isAuthenticated, beautyProductEditGetController);
router.post('/beauty/edit-product/:productId', isAuthenticated, productValidator, beautyProductEditPostController);
router.get('/beauty/delete/:productId', isAuthenticated, beautyproductDeleteController);


module.exports = router;