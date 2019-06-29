const mongoose = require('mongoose');

const schema = mongoose.Schema({
  accountId: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  payload: Array,

});

module.exports = mongoose.model('Payment', schema);
