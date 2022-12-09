const Food = require('../models/products-categories/Food');
const Medicine = require('../models/products-categories/Medicine');
const Beauty = require('../models/products-categories/Beauty');

exports.searchResultController = async (req, res, next) => {
  let searchTerm = req.query.searchTerm
  let currentpage = parseInt(req.query.page) || 1
  let itemperPage = 1

  try {

    let foods = await Food.find(
      {$text: {'$search': searchTerm}}
    ) .skip((itemperPage * currentpage) - itemperPage)
      .limit(itemperPage)
    
    let medicines = await Medicine.find(
      {$text: {'$search': searchTerm}}
    ) .skip((itemperPage * currentpage) - itemperPage)
      .limit(itemperPage)

    let beauties = await Beauty.find(
      {$text: {'$search': searchTerm}}
    ) .skip((itemperPage * currentpage) - itemperPage)
      .limit(itemperPage)
      
    let totalFoods = await Food.countDocuments({
      $text: {'$search': searchTerm}
    })

    let totalMedicines = await Medicine.countDocuments({
      $text: {'$search': searchTerm}
    })

    let totalBeauties = await Beauty.countDocuments({
      $text: {'$search': searchTerm}
    })

    let totalPages = (totalBeauties || totalFoods || totalMedicines) / itemperPage

    return res.render('pages/search.ejs', {
      title: `Search result for - ${searchTerm}`,
      foods, medicines, beauties,
      totalPages,
      searchTerm,
      currentpage,
      itemperPage
    })
  } catch (error) {
    next(error)
  }
}