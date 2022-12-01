const router = require('express').Router();

const {isAuthenticated} = require('../middlewares/authMiddleware');
const {allProductsGetController, foodProductCreateGetController} = require('../controllers/productController');

router.get('/allproducts', isAuthenticated, allProductsGetController);

router.get('/food/add-product', isAuthenticated, foodProductCreateGetController);

module.exports = router