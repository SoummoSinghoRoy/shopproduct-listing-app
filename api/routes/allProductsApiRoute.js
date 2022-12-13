const router = require('express').Router()

const { allProductsApiGetController, singleProductApiGetController } = require('../controllers/allProductsApiController')

router.get('/allproducts', allProductsApiGetController);

router.get('/allproducts/singleproduct/:productId', singleProductApiGetController);

module.exports = router;