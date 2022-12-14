const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const config = require('config');
const MongoDBStore = require('connect-mongodb-session')(session);
const { bindUserProfileWithReq } = require('./authMiddleware');
const setLocals = require('./setLocals');
const flash = require('connect-flash');

const store = new MongoDBStore({
  uri: `mongodb+srv://${config.get('db-admin')}:${config.get('db-password')}@shopproduct-listing.ecf4uv6.mongodb.net/shopproduct-listing-app`,
  collection: 'sessions',
  expires: 1000 * 60 * 60 * 2,
})

const middlewares = [
  morgan('dev'),
  express.static('public'),
  express.json(),
  express.urlencoded({extended: true}),
  session({
    secret: config.get('secret') || 'Secret Cat',
    resave: false,
    saveUninitialized: false,
    store: store
  }),
  bindUserProfileWithReq(),
  setLocals(),
  flash()
]

module.exports = (app) => {
  middlewares.forEach(middleware => {
    app.use(middleware)
  })
}