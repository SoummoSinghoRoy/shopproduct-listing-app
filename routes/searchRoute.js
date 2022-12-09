const router = require('express').Router()

const { isAuthenticated } = require('../middlewares/authMiddleware');
const { searchResultController } = require('../controllers/searchController');

router.get('/', isAuthenticated, searchResultController);

module.exports = router