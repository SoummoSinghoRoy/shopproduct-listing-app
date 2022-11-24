const router = require('express').Router();

const {createShopGetController} = require('../controllers/shopController');

router.get('/createshop', createShopGetController)

module.exports = router