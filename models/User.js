const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
});


userSchema.plugin(passportLocalMongoose);

// Especifica el nombre de la colección como "users"
const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
