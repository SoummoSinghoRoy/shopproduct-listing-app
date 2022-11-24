// check if a user exist then render createshop page.

exports.createShopGetController = (req, res, next) => {
  res.render('pages/shop/createShop.ejs', {
    title: 'Create a shop'
  })
}

// check if a shop exist under a user then render allproducts page.
exports.allProductsGetController = (req, res, next) => {
  res.render('pages/shop/allproducts.ejs', {
    title: 'All products'
  })
}