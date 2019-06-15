const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  addr: String,
  pincode: Number,
  state: String
});

module.exports = mongoose.model('User', schema);
