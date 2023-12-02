const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

// Especifica el nombre de la colección como "tweets"
const Tweet = mongoose.model('Tweet', tweetSchema, 'tweets');

module.exports = Tweet;
