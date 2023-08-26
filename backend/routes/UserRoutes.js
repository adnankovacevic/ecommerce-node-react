const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { protect } = require('../middlewares/AuthMiddleware');

router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);
router.get('/profile', protect, userController.getUserProfile);
// Define more routes here

module.exports = router;