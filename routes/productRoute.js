const router = require('express').Router();

const {isAuthenticated} = require('../middlewares/authMiddleware');
const {allProductsGetController} = require('../controllers/productController');

router.get('/allproducts', isAuthenticated, allProductsGetController);


module.exports = router