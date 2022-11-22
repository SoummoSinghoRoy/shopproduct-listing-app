const router = require('express').Router();
const signupValidator = require('../validator/auth/signupValidator');

const {
  signUpGetController,
  signUpPostController,
  logInGetController
} = require('../controllers/authController');

router.get('/signup', signUpGetController);
router.post('/signup', signupValidator, signUpPostController)

router.get('/login', logInGetController)

module.exports = router;