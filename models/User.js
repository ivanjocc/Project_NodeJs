// Importing the necessary modules
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

// Defining a Mongoose schema for the "users" collection
const userSchema = new Schema({
  // Username of the user, a required and unique string field
  username: { type: String, required: true, unique: true },

  // Email of the user, a required and unique string field
  email: { type: String, required: true, unique: true },

  // Password of the user, not explicitly marked as required (handled by passport-local-mongoose)
  password: { type: String, required: false },
});

// Plugin for adding Passport-Local Mongoose functionality to the user schema
userSchema.plugin(passportLocalMongoose);

// Creating a Mongoose model named "User" based on the userSchema
// Also specifying the name of the collection as "users"
const User = mongoose.model('User', userSchema, 'users');

// Exporting the User model for use in other parts of the application
module.exports = User;
