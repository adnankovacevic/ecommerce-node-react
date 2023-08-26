const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/DB');
const path = require('path'); // For serving static files

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for parsing url-encoded data
app.use(express.urlencoded({ extended: true }));

// CORS middleware (if you're allowing requests from a frontend on a different domain)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Change this to your frontend URL in production
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});

// Static files middleware (if you're serving your React build)
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/products', require('./routes/ProductRoutes'));
app.use('/api/orders', require('./routes/OrderRoutes'));

// Middleware for handling errors
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ message: 'Server Error' });
});

// For handling routes that are not found
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Port configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
