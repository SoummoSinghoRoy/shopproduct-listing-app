const Shop = require('../models/Shop');

// check if a user exist then render createshop page.
exports.createShopGetController = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({user: req.userprofile._id})
    if(!shop) {
      return res.render('pages/shop/createShop.ejs', {
        title: 'Create a shop',
        errors: {}
      })
    }
    return res.redirect('/shop/allproducts')
  } catch (error) {
    next(error)
  }
}

exports.createShopPostcontroller = (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  res.render('pages/shop/createShop.ejs', {
    title: 'Create a shop',
    errors: {}
  })
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