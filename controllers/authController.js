exports.signUpGetController = (req, res, next) => {
  res.render('pages/auth/signup.ejs', {
    title: 'Sign up here'
  })
}

exports.logInGetController = (req, res, next) => {
  res.render('pages/auth/login.ejs', {
    title: 'Log in here'
  })
}