const authRoute = require('./authRoute');
const shopRoute = require('./shopRoute');
const productRoute = require('./productRoute');
const searchRoute = require('./searchRoute');
const allProductsApiRoute = require('../api/routes/allProductsApiRoute');

const routes = [
  {
    path: '/api',
    handler: allProductsApiRoute
  },
  {
    path: '/search',
    handler: searchRoute
  },
  {
    path: '/shop',
    handler: shopRoute
  },
  {
    path: '/product',
    handler: productRoute
  },
  {
    path: '/auth',
    handler: authRoute
  },
  {
    path: '/',
    handler: (req, res, next) => {
      res.render('pages/product/allproductsForVisitor.ejs', {
        title: 'All products',
        flashMessage: {}
      })
    }
  },
]

module.exports = (app) => {
  routes.forEach(route => {
    if(route.path == '/') {
      app.get(route.path, route.handler)
    } else{
      app.use(route.path, route.handler)
    }
  })
}