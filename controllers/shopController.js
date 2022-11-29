const { validationResult } = require('express-validator');
const Shop = require('../models/Shop');
const User = require('../models/User');

exports.createShopGetController = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({user: req.userprofile._id})
    if(!shop) {
      return res.render('pages/shop/createShop.ejs', {
        title: 'Create a shop',
        errors: {}
      })
    }
    return res.redirect('/shop')
  } catch (error) {
    next(error)
  }
}

exports.createShopPostcontroller = async (req, res, next) => {

  let {shopname, description, contact_no, street, city, district, country} = req.body
  
  const shop = await Shop.findOne({user: req.userprofile._id})

  if(!shop) {
    if(req.files) {
      let errors = validationResult(req).formatWith(err => err.msg)
  
      let imgname = []
      for(let img = 0; img < req.files.length; img++) {
        imgname.push(req.files[img].filename)
      }
      let uploadedShopImgs= []
      imgname.map(name => {
        uploadedShopImgs.push( `/uploads/shops/${name}`)
      })
  
      if(!errors.isEmpty()) {
        return res.render('pages/shop/createShop.ejs', {
          title: 'Create a shop',
          errors: errors.mapped()
        })
      }
  
      try {
        const shop = new Shop({
          shopname, description, contact_no, street, city, district, country,
          user: req.userprofile._id,
          shopimgs: uploadedShopImgs
        })
        let userShop =  await shop.save()
        await User.findOneAndUpdate(
          {_id: req.userprofile._id},
          {$set: {shop: userShop._id}}
        )
  
        return res.redirect('/shop')
  
      } catch (error) {
        next(error)
      }
    } else{
      let errors = validationResult(req).formatWith(err => err.msg)
      if(!errors.isEmpty()) {
        return res.render('pages/shop/createShop.ejs', {
          title: 'Create a shop',
          errors: errors.mapped()
        })
      }
    }
  }else{
    return res.redirect('/shop')
  }
}

exports.viewShopController = async (req, res, next) => {
  const shop = await Shop.findOne({user: req.userprofile._id})

  try {
    if(shop) {
      return res.render('pages/shop/viewShop.ejs', {
        title: 'View shop'
      })
    }else{
      return res.redirect('/shop/createshop')
    }
  } catch (error) {
    next(error)
  }
}

exports.allProductsGetController = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({user: req.userprofile._id})

    if(shop) {
      return res.render('pages/shop/allproductsOwner.ejs', {
        title: 'All products'
      })
    }
    return res.redirect('/shop/createshop')
  } catch (error) {
    next(error)
  }
}