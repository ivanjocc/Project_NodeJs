// Importing the necessary modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining a Mongoose schema for the "tweets" collection
const tweetSchema = new Schema({
  // Content of the tweet, a required string field
  content: { type: String, required: true },

  // User associated with the tweet, referenced by ObjectId, and required
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

// Creating a Mongoose model named "Tweet" based on the tweetSchema
// Also specifying the name of the collection as "tweets"
const Tweet = mongoose.model('Tweet', tweetSchema, 'tweets');

// Exporting the Tweet model for use in other parts of the application
module.exports = Tweet;
