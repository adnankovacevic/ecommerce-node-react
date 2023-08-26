const User = require('../models/User');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
       const { email, password } = req.body;
       try {
              const user = await User.findOne({ email });
              if (user && (await user.matchPassword(password))) {
                     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                            expiresIn: '30d',
                     });

                     res.json({
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            isAdmin: user.isAdmin,
                            token,
                     });
              } else {
                     res.status(401).json({ message: 'Invalid email or password' });
              }
       } catch (error) {
              res.status(500).json({ message: 'Server Error' });
       }
};

const registerUser = async (req, res) => {
       const { name, email, password } = req.body;

       try {
              const userExists = await User.findOne({ email });

              if (userExists) {
                     res.status(400).json({ message: 'User already exists' });
                     return;
              }

              const user = await User.create({
                     name,
                     email,
                     password,
              });

              if (user) {
                     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                            expiresIn: '30d',
                     });

                     res.status(201).json({
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            isAdmin: user.isAdmin,
                            token,
                     });
              } else {
                     res.status(400).json({ message: 'Invalid user data' });
              }
       } catch (error) {
              res.status(500).json({ message: 'Server Error' });
       }
};

const getUserProfile = async (req, res) => {
       res.json(req.user);
};
// TODO: Add controller function for updating user info

module.exports = { loginUser, registerUser, getUserProfile };