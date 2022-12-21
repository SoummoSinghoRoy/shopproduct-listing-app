require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const config = require('config');

const setMiddlewares = require('./middlewares/middlewares');
const setRoutes = require('./routes/routes');
setMiddlewares(app)
setRoutes(app)

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use((req, res, next)=> {
  let error = new Error('404 not found')
  error.status = 404
  next(error)
})
app.use((error, req, res, next)=> {
  if(error.status === 404) {
    return res.render('pages/error/404.ejs')
  }
  console.log(error);
  return res.render('pages/error/500.ejs')
})


const PORT = process.env.PORT || 5050

const DB_URI = `mongodb+srv://${config.get('db-admin')}:${config.get('db-password')}@shopproduct-listing.ecf4uv6.mongodb.net/shopproduct-listing-app`

mongoose.connect(DB_URI, {
  useNewUrlParser: true
})
        .then( () => {
          console.log('Database connected')
          app.listen(PORT, () => {
            console.log(`Server running successfully on: ${PORT}`);
          })
        })
        .catch(error => {
          return console.log(error)
        })
