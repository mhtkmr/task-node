const express = require('express');
const router = express.Router();
const orderMod = require('./modules/order.module');
const paymentMod = require('./modules/payment.module');
const tokenMod = require('./modules/token.module');

router.post('/order', orderMod.orderPaid);
router.post('/payment', paymentMod.paymentMod);
router.post('/token', tokenMod.tokenMod);

module.exports = router;