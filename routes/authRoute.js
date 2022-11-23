const router = require('express').Router();

const upload = require('../middlewares/uploadMiddleware');
const signupValidator = require('../validator/auth/signupValidator');
const {
  signUpGetController,
  signUpPostController,
  logInGetController
} = require('../controllers/authController');

router.get('/signup', signUpGetController);
router.post('/signup', upload.single('profilepic'), signupValidator, signUpPostController)

router.get('/login', logInGetController)

module.exports = router;