const mongoose = require('mongoose');

//schema defm
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

//method for pwd comp
schema.statics.comparePassword = function(p1, p2) {
  if (p1 !== p2) {
    return false;
  } else return true;
};

module.exports = mongoose.model('User', schema);
