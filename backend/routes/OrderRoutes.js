const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');
const { protect } = require('../middlewares/AuthMiddleware');

router.post('/create', protect, orderController.createOrder);
router.get('/:id', protect, orderController.getOrderById);
// Define more routes here

module.exports = router;