const Shop = require('../models/Shop');

exports.allProductsGetController = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({user: req.userprofile._id})

    if(shop) {
      return res.render('pages/product/allproductsOwner.ejs', {
        title: 'All products'
      })
    }
    return res.redirect('/shop/createshop')
  } catch (error) {
    next(error)
  }
}

exports.foodProductCreateGetController = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({user: req.userprofile._id})

    if(shop) {
      return res.render('pages/product/category/food/foodProduct.ejs', {
        title: 'Add food product item',
        errors: {}
      })
    }
    return res.redirect('/shop/createshop')
  } catch (error) {
    next(error)
  }
}