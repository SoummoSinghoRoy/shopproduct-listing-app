const fs = require('fs')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const Shop = require('../models/Shop');
const User = require('../models/User');
const Food = require('../models/products-categories/Food');

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

    return res.redirect('/product/allproducts')
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

exports.ownerProfileDeleteController = async (req, res, next) => {
  try {
    const userprofile = await User.findOne({_id: req.userprofile._id})
    const shop = await Shop.findOne({user: req.userprofile._id})
    const foods = await Food.find({shop: shop._id})

    if(userprofile) {
      await User.deleteOne({_id: req.userprofile._id})
      fs.unlink(`public${userprofile.profilepic}`, err => {
        if(err) {
          throw err
        }
      })

      await Shop.deleteOne({user: req.userprofile._id})
      shop.shopimgs.map(img => {
        fs.unlink(`public${img}`, err => {
          if(err) {
            throw err
          }
        })
      })

      if(foods.length !== 0) {
        await Food.deleteMany({foods})
        foods.map(food => {
          food.itemimg.map(img => {
            fs.unlink(`public${img}`, err => {
              if(err) {
                throw err
              }
            })
          })
        })
      }
      
      req.session.destroy(err => {
        if(err) {
          return next(err)
        }
        return res.redirect('/')
      })
    }else{
      return res.redirect('/')
    }
  } catch (error) {
    next(error)
  }
}