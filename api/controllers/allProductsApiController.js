const Food = require('../../models/products-categories/Food');
const Medicine = require('../../models/products-categories/Medicine');
const Beauty = require('../../models/products-categories/Beauty');

exports.allProductsApiGetController = (req, res, next) => {
  let currentpage = parseInt(req.query.page) || 1
  let itemperPage = 3 // apatoto 3 pore 16 hobe

  getAllProducts(Food, Medicine, Beauty)
                .then(products => {
                  let totalProducts = products.length
                  let totalPages = totalProducts / itemperPage
                  res.json({
                    all_products: products,
                    pagination: {
                      total_products: totalProducts,
                      total_pages: totalPages,
                      per_page: itemperPage,
                      current_page: currentpage
                    }
                  })
                })
                .catch(error => {
                  res.json({
                    error: 'Something happend wrong',
                    status: '500'
                  })
                  next(error)
                })
}

exports.singleProductApiGetController = (req, res, next) => {
  let { productId } = req.params
  
  getAllProducts(Food, Medicine, Beauty)
                .then(products => {
                  let allproducts = products
                  for(let product of allproducts) {
                    if(product.id == productId) {
                      res.json({
                        product
                      })
                    }else{
                      res.json({
                        error: 'Not found',
                        status: '404'
                      })
                    }
                  }
                })
                .catch(error => {
                  console.log(error);
                  next(error)
                })
}


async function getAllProducts(Food, Medicine, Beauty){
  let allproducts = []

  let foods = await Food.find()
                        .populate({
                          path: 'shop',
                          select: 'shopname contact_no'
                        })
  foods.map(food => {
    let extractFoodData = {
      id: food._id, 
      name: food.itemname, 
      price: food.price, 
      images: food.itemimg, 
      manufacture_company: food.manufactureCompany
    }
    allproducts.push(extractFoodData)
  })

  let medicines = await Medicine.find()
                                .populate({
                                  path: 'shop',
                                  select: 'shopname contact_no'
                                })
  medicines.map(medicine => {
    let extractMedicineData = {
      id: medicine._id, 
      name: medicine.itemname, 
      price: medicine.price, 
      images: medicine.itemimg, 
      manufacture_company: medicine.manufactureCompany
    }
    allproducts.push(extractMedicineData)
  })

  let beauties_makeup = await Beauty.find()
                                    .populate({
                                      path: 'shop',
                                      select: 'shopname contact_no'
                                    })
  beauties_makeup.map(beauty => {
    let extractBeauty_MakeupData = {
      id: beauty._id, 
      name: beauty.itemname, 
      price: beauty.price, 
      images: beauty.itemimg, 
      manufacture_company: beauty.manufactureCompany,
    }  
    allproducts.push(extractBeauty_MakeupData)
  })

  return allproducts;
}