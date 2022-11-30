const authRoute = require('./authRoute');
const shopRoute = require('./shopRoute');
const productRoute = require('./productRoute');

const routes = [
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
    handler: (req, res) => {
      res.send(`<h3>Greetings Product Listing App</h3>`)
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