const mongoose = require('mongoose');

const schema = mongoose.Schema({
  accountId: {
    type: String,
    required: true,
  },
  tokenId: {
    type: String,
    required: true,
  },
  payload: Array,
});

module.exports = mongoose.model('token', schema);
