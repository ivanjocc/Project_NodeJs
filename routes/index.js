// Importing the necessary modules
const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');

// Main route to display all tweets
router.get('/', async (req, res) => {
  try {
    // Fetching all tweets from the database and populating the 'user' field
    const tweets = await Tweet.find().populate('user');

    // Rendering the 'index' view, passing the fetched tweets and the current user to the view
    res.render('index', { tweets, user: req.user });
  } catch (error) {
    // Handling errors by logging them and redirecting to the root route
    console.error(error);
    res.redirect('/');
  }
});

// Exporting the router for use in other parts of the application
module.exports = router;
