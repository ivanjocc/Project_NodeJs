// Importing the necessary modules and models
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

// Route for rendering the registration form
router.get('/register', (req, res) => {
  res.render('register');
});

// Route for processing the registration form
router.post('/register', async (req, res) => {
  try {
    // Logging the request body to the console
    console.log(req.body);

    // Extracting username, email, and password from the request body
    const { username, email, password } = req.body;

    // Creating a new User instance with the provided username and email
    const newUser = new User({ username, email });

    // Using the register method provided by passport-local-mongoose to register the new user
    await User.register(newUser, password);

    // Authenticating the user after successful registration
    passport.authenticate('local')(req, res, () => {
      res.redirect('/');
    });
  } catch (error) {
    // Handling errors by logging them and redirecting to the registration form
    console.error(error);
    res.redirect('/users/register');
  }
});

// Route for rendering the login form
router.get('/login', (req, res) => {
  res.render('login');
});

// Route for processing the login form
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true,
  })
);

// Route for logging out
router.get('/logout', (req, res) => {
  req.logOut(err => {
    if (err) {
      // Handling errors by logging them and redirecting to the home page
      console.error(err);
      return res.redirect('/');
    }
    // Redirecting to the home page after successful logout
    res.redirect('/');
  });
});

// Exporting the router for use in other parts of the application
module.exports = router;
