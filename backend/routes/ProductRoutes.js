const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const { protect } = require('../middlewares/AuthMiddleware');

router.get('/products', productController.getProducts);
router.post('/add-product', productController.getProducts);
router.post('/delete-product', productController.getProducts);

// Define more routes here

module.exports = router;