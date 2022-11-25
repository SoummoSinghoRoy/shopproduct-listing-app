const router = require('express').Router();

const upload = require('../middlewares/uploadMiddleware');
const signupValidator = require('../validator/auth/signupValidator');
const loginValidator =  require('../validator/auth/loginValidator');
const {
  signUpGetController,
  signUpPostController,
  logInGetController,
  loginPostController,
  logOutController
} = require('../controllers/authController');
const {isAuthenticated, isUnAuthenticated} = require('../middlewares/authMiddleware');

router.get('/signup', isUnAuthenticated, signUpGetController);
router.post('/signup', isUnAuthenticated, upload.single('profilepic'), signupValidator, signUpPostController);

router.get('/login', isUnAuthenticated, logInGetController);
router.post('/login', isUnAuthenticated, loginValidator, loginPostController);

router.get('/logout', isAuthenticated, logOutController);

module.exports = router;