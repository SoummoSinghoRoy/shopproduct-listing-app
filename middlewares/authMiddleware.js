const User = require("../models/User")

exports.bindUserProfileWithReq = () => {
  return async (req, res, next) => {
    if(!req.session.isLoggedIn) {
      return next()
    }
    try {
      let userprofile = await User.findById(req.session.userprofile._id)
      req.userprofile = userprofile
      next() 
    } catch (error) {
      next(error)
    }
  }
}

exports.isAuthenticated = (req, res, next) => {
  if(!req.session.isLoggedIn) {
    return res.redirect('/auth/login')
  }
  next()
}

exports.isUnAuthenticated = (req, res, next) => {
  if(req.session.isLoggedIn) {
    return res.redirect('/product/allproducts')
  }
  next()
}