const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/User');

exports.signUpGetController = (req, res, next) => {
  res.render('pages/auth/signup.ejs', {
    title: 'Sign up here',
    errors: {}
  })
}

exports.signUpPostController = async (req, res, next) => {
  let {email, fullname, mobile_no, password} = req.body

  if(req.file) {
    let errors = validationResult(req).formatWith(error => error.msg)
    let uploadedProfilepic = `/uploads/profilePics/${req.file.filename}`
    if(!errors.isEmpty()) {
      return res.render('pages/auth/signup.ejs', {
        title: 'Sign up here',
        errors: errors.mapped()
      })
    }
    try {
      let hashedpassword = await bcrypt.hash(password, 12)
  
      let profile = new User({
        email, fullname, mobile_no, 
        password: hashedpassword,
        profilepic: uploadedProfilepic
      })
      await profile.save()
      return res.redirect('/shop/createshop')
  
    } catch (error) {
      console.log(error);
      next(error)
    }
  }else {
    let errors = validationResult(req).formatWith(error => error.msg)
    if(!errors.isEmpty()) {
      return res.render('pages/auth/signup.ejs', {
        title: 'Sign up here',
        errors: errors.mapped()
      })
    }
  }
}

exports.logInGetController = (req, res, next) => {
  res.render('pages/auth/login.ejs', {
    title: 'Log in here'
  })
}