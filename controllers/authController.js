const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const Shop = require('../models/Shop');

exports.signUpGetController = async (req, res, next) => {
  return res.render('pages/auth/signup.ejs', {
    title: 'Sign up here',
    errors: {}
  })
}

exports.signUpPostController = async (req, res, next) => {
  let {email, fullname, mobile_no, password} = req.body

  if(req.file) {
    let errors = validationResult(req).formatWith(error => error.msg)
    const uploadedProfilepic = `/uploads/profilePics/${req.file.filename}`
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
        profilepic: uploadedProfilepic,
      })
      await profile.save()
       req.session.isLoggedIn = true
       req.session.userprofile = profile
       req.session.save(err => {
        if(err) {
          return next(err)
        }
      })

      return res.redirect('/shop/createshop')
  
    } catch (error) {
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
    title: 'Log in here',
    errors: {}
  })
}

exports.loginPostController = async (req, res, next) => {
  let {email, password} = req.body
  let errors = validationResult(req).formatWith(error => error.msg)

  if(!errors.isEmpty()) {
    return res.render('pages/auth/login.ejs', {
      title: 'Log in here',
      errors: errors.mapped()
    })
  }

  try {
    const profile = await User.findOne({email})

    if(!profile) {
      return res.render('pages/auth/login.ejs', {
        title: 'Log in here',
        errors: errors.mapped()
      })
    }

    const passwordmatch = await bcrypt.compare(password, profile.password) 
    if(!passwordmatch) {
      return res.render('pages/auth/login.ejs', {
        title: 'Log in here',
        errors: errors.mapped()
      })
    }
    req.session.isLoggedIn = true
    req.session.userprofile = profile
    req.session.save(err => {
      if(err) {
        return next(err)
      }
    })

    return res.redirect('/shop/allproducts')
  } catch (error) {
    next(error)
  }
}

exports.logOutController = (req, res, next) => {
  req.session.destroy(err => {
    if(err) {
      return next(err)
    }
    return res.redirect('/auth/login')
  })
}