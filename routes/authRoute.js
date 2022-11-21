const router = require('express').Router();
const {
  signUpGetController,
  logInGetController
} = require('../controllers/authController');

router.get('/signup', signUpGetController);

router.get('/login', logInGetController)

module.exports = router;