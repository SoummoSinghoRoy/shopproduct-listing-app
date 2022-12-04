const fs = require('fs');
const { validationResult } = require('express-validator');

const Food = require('../models/products-categories/Food');
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
          shopimgs: uploadedShopImgs,
          user: req.userprofile._id
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
                          .populate({
                            path: 'user',
                            select: 'fullname mobile_no profilepic'
                          })
  try {
    if(shop) {
      return res.render('pages/shop/viewShop.ejs', {
        title: 'View shop',
        shop_profile: shop
      })
    }else{
      return res.redirect('/shop/createshop')
    }
  } catch (error) {
    next(error)
  }
}

exports.editShopGetController = async (req, res, next) => {
  const shop = await Shop.findOne({user: req.userprofile._id})

  try {
    if(shop) {
      return res.render('pages/shop/editShop.ejs',{
        title: 'Edit shop',
        errors: {},
        shop_profile: shop
      })
    }else{
      return res.redirect('/shop/createshop')
    }
  } catch (error) {
    next(error)
  }
}

exports.editShopPostController = async (req, res, next) => {
  let {shopname, description, contact_no, street, city, district} = req.body
  let errors = validationResult(req).formatWith(err => err.msg)

  if(!errors.isEmpty()) {
    return res.render('pages/shop/editShop.ejs',{
      title: 'Edit shop',
      errors: errors.mapped(),
      shop_profile: await Shop.findOne({user: req.userprofile._id})
    })
  }
  try {
    const shop = {
      shopname, description, contact_no, street, city, district
    }

    await Shop.findOneAndUpdate(
      {user: req.userprofile._id},
      {$set: shop},
      {new: true}
    )
    return res.redirect('/shop')
  } catch (error) {
    next(error)
  }
}

exports.deleteShopController = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({user: req.userprofile._id})
    const foods = await Food.find({shop: shop._id})
    if(shop) {
      await Shop.deleteOne({_id: shop._id})
      shop.shopimgs.map(img => {
        fs.unlink(`public${img}`, err => {
          if(err) {
            throw err
          }
        })
      })
      await Food.deleteMany({foods});
      foods.map(food => {
        food.itemimg.map(img => {
          fs.unlink(`public${img}`, err => {
            if(err) {
              throw err
            }
          })
        })
      })
      await User.findOneAndUpdate(
        {_id: req.userprofile._id},
        {$unset: {'shop': ""}}
      )
      return res.redirect('/shop/createshop')
    }else{
      let error = new Error('404 not found')
      error.status = 404
      throw error
    }
  } catch (error) {
    next(error)
  }
}