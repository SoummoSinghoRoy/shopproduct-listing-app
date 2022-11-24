const router = require('express').Router();

const upload = require('../middlewares/uploadMiddleware');
const signupValidator = require('../validator/auth/signupValidator');
const loginValidator =  require('../validator/auth/loginValidator');
const {
  signUpGetController,
  signUpPostController,
  logInGetController,
  loginPostController
} = require('../controllers/authController');

router.get('/signup', signUpGetController);
router.post('/signup', upload.single('profilepic'), signupValidator, signUpPostController);

router.get('/login', logInGetController);
router.post('/login', loginValidator, loginPostController);

module.exports = router;