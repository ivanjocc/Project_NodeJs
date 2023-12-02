// Importing the necessary modules and middleware
const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');
const { ensureAuthenticated } = require('../middlewares/auth');

// Route for displaying all tweets and processing the tweet creation form
router.route('/')
  // GET request handling for displaying tweets
  .get(async (req, res) => {
    try {
      // Fetching all tweets from the database and populating the 'user' field
      const tweets = await Tweet.find().populate('user');
      res.render('timeline', { tweets });
    } catch (error) {
      // Handling errors by logging them and redirecting to the root route
      console.error(error);
      res.redirect('/');
    }
  })
  // POST request handling for creating a new tweet
  .post(ensureAuthenticated, async (req, res) => {
    try {
      // Extracting the content of the tweet from the request body
      const { content } = req.body;

      // Creating a new tweet using the Tweet model, associating it with the current user
      const newTweet = new Tweet({ content, user: req.user });

      // Saving the tweet to the database
      await newTweet.save();

      // Redirecting to the root route after successful tweet creation
      res.redirect('/');
    } catch (error) {
      // Handling errors by logging them and redirecting to the tweets route
      console.error(error);
      res.redirect('/tweets');
    }
  });

// Route for displaying the tweet creation page
router.get('/create', (req, res) => {
  // Rendering the 'createTweet' view for tweet creation
  res.render('createTweet');
});

// Exporting the router for use in other parts of the application
module.exports = router;
