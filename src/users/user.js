const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    Type: String,
    required: true,
    unique: true,
  },
  email: {
    Type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  passoword: {
    Type: String,
    required: true,
    // select: false,
  },
  avatar: {
    Type: String,
    required: true,
  },
});

const user = mongoose.model('User', userSchema);

module.exports = user;
