exports.signUpGetController = (req, res, next) => {
  res.render('pages/auth/signup.ejs', {
    title: 'SIgn up here'
  })
} 