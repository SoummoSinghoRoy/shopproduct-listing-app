// check if a user exist then render createshop page.

exports.createShopGetController = (req, res, next) => {
  res.render('pages/shop/createShop.ejs', {
    title: 'Create a shop'
  })
}