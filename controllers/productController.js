const fs = require('fs');
const {validationResult} = require('express-validator');

const Food = require('../models/products-categories/Food');
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

exports.foodProductCreatePostController = async (req, res, next) => {
  let {itemname, price, quantity, expireDate, manufactureCompany} = req.body
  if(req.files) {
    let imgname = []
    for(let img = 0; img < req.files.length; img++) {
      imgname.push(req.files[img].filename)
    }
    let uploadedProductImgs= []
    imgname.map(name => {
      uploadedProductImgs.push( `/uploads/products/${name}`)
    })

    let errors = validationResult(req).formatWith(err => err.msg)
    if(!errors.isEmpty()) {
      return res.render('pages/product/category/food/foodProduct.ejs', {
        title: 'Add food product item',
        errors: errors.mapped()
      })
    }

    try {
      let shop = await Shop.findOne({user: req.userprofile._id})
      let food = new Food({
        itemname, price, quantity, expireDate, manufactureCompany,
        itemimg: uploadedProductImgs,
        shop: shop._id
      })
  
      let addedFood = await food.save()
      await Shop.findOneAndUpdate(
        {user: req.userprofile._id},
        {$push: {'food': addedFood._id}}
      )

      return res.redirect(`/product/food/${addedFood._id}`)

    } catch (error) {
      next(error)
    }

  }else{
    let errors = validationResult(req).formatWith(err => err.msg)
    if(!errors.isEmpty()) {
      return res.render('pages/product/category/food/foodProduct.ejs', {
        title: 'Add food product item',
        errors: errors.mapped()
      })
    }
  }
  
}

exports.singleFoodProductGetController = async (req, res, next) => {
  let { productId } = req.params

  try {
    const shop = await Shop.findOne({user: req.userprofile._id})
    const singleFood = await Food.findOne({shop: shop._id, _id: productId})

    if(singleFood) {
      return res.render('pages/product/category/food/singleFood.ejs', {
        title: `${singleFood.itemname}`,
        singlefood: singleFood 
      })
    }else{
      let error = new Error('404 not found')
      error.status = 404
      throw error
    }
  } catch (error) {
    next(error)
  }
}

exports.foodProductEditGetController = async (req, res, next) => {
  let { productId } = req.params

  try {
    const shop = await Shop.findOne({user: req.userprofile._id})
    const singleFood = await Food.findOne({shop: shop._id, _id: productId})

    if(singleFood) {
      return res.render('pages/product/category/food/editFoodProduct.ejs', {
        title: 'Edit product',
        singlefood: singleFood,
        errors: {} 
      })
    }else{
      let error = new Error('404 not found')
      error.status = 404
      throw error
    }

  } catch (error) {
    next(error)
  }
}

exports.foodProductEditPostController = async (req, res, next) => {
  let {itemname, price, quantity, expireDate, manufactureCompany} = req.body
  let { productId } = req.params

  const shop = await Shop.findOne({user: req.userprofile._id})
  const singleFood = await Food.findOne({shop: shop._id, _id: productId})

  let errors = validationResult(req).formatWith(err => err.msg)
  if(!errors.isEmpty()) {
    return res.render('pages/product/category/food/editFoodProduct.ejs', {
      title: 'Edit product',
      singlefood: singleFood,
      errors: errors.mapped()
    })
  }

  try {
    let updateFood = { itemname, price, quantity, expireDate, manufactureCompany } 
    await Food.findByIdAndUpdate(
      {_id: singleFood._id},
      {$set: updateFood},
      {new: true}
    )
    return res.redirect(`/product/food/${singleFood._id}`)

  } catch (error) {
    next(error)
  }
}

exports.foodproductDeleteController = async (req, res, next) => {
  let { productId } = req.params

  try {
    const shop = await Shop.findOne({user: req.userprofile._id})
    const singleFood = await Food.findOne({shop: shop._id, _id: productId})

    if(singleFood) {
      await Food.findOneAndDelete({_id: productId})
      singleFood.itemimg.map(img => {
        fs.unlink(`public${img}`, err => {
          if(err) {
            throw err
          }
        })
      })
      await Shop.findOneAndUpdate(
        {user: req.userprofile._id},
        {$pull: {'food': singleFood._id}}
      )
      return res.redirect('/product/food')
    }else{
      let error = new Error('404 not found')
      error.status = 404
      throw error
    }
  } catch (error) {
    next(error)
  }
}

exports.allFoodCategoryProductsGetController = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({user: req.userprofile._id})
    const foods = await Food.find({shop: shop._id})
    if(foods.length === 0) {
      return res.redirect('/product/food/add-product')
    }else{
      return res.render('pages/product/category/food/allFoods.ejs', {
        title: 'All foods products',
        foods
      })
    }
  } catch (error) {
    next(error)
  }
}