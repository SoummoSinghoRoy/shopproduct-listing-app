const router = require('express').Router();
const {
  signUpGetController
} = require('../controllers/authController');

router.get('/signup', signUpGetController);

module.exports = router;