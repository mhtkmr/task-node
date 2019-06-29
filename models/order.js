const mongoose = require('mongoose');

const schema = mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  receiptId: {
    type: String,
    required: true,
  },
  payload: {
    type: Array,
  },
});

module.exports = mongoose.model('Order', schema);
