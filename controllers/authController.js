const { validationResult } = require('express-validator');

exports.signUpGetController = (req, res, next) => {
  res.render('pages/auth/signup.ejs', {
    title: 'Sign up here',
    errors: {}
  })
}

exports.signUpPostController = async (req, res, next) => {
  console.log(req.body);
  console.log(req.file);
  let errors = validationResult(req).formatWith(error => error.msg)
  res.render('pages/auth/signup.ejs', {
    title: 'Sign up here',
    errors: errors.mapped()
  })
}

exports.logInGetController = (req, res, next) => {
  res.render('pages/auth/login.ejs', {
    title: 'Log in here'
  })
}