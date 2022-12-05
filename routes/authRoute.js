const router = require('express').Router();

const {profilePicUpload} = require('../middlewares/uploadMiddleware');
const signupValidator = require('../validator/auth/signupValidator');
const loginValidator =  require('../validator/auth/loginValidator');
const {
  signUpGetController,
  signUpPostController,
  logInGetController,
  loginPostController,
  logOutController,
  ownerProfileDeleteController
} = require('../controllers/authController');
const {isAuthenticated, isUnAuthenticated} = require('../middlewares/authMiddleware');

router.get('/signup', isUnAuthenticated, signUpGetController);
router.post('/signup', isUnAuthenticated, profilePicUpload.single('profilepic'), signupValidator, signUpPostController);

router.get('/login', isUnAuthenticated, logInGetController);
router.post('/login', isUnAuthenticated, loginValidator, loginPostController);

router.get('/logout', isAuthenticated, logOutController);

router.get('/delete', isAuthenticated, ownerProfileDeleteController);

module.exports = router;