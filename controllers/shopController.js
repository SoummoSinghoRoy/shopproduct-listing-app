const Shop = require('../models/Shop');

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

exports.createShopPostcontroller = async (req, res, next) => {
  let {shopname, description, contact_no, street, city, district, country} = req.body
  
  if(req.files) {
    let imgname = []
    for(let img = 0; img < req.files.length; img++) {
      imgname.push(req.files[img].filename)
    }
    let uploadedShopImgs= []
    imgname.map(name => {
      uploadedShopImgs.push( `/uploads/shops/${name}`)
    })
    try {
      const shop = new Shop({
        shopname, description, contact_no, street, city, district, country,
        shopimgs: uploadedShopImgs
      })
      await shop.save()
      return res.render('pages/shop/createShop.ejs', {
        title: 'Create a shop',
        errors: {}
      })
    } catch (error) {
      next(error)
    }
  }
  return res.render('pages/shop/createShop.ejs', {
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