const Order = require('./order');
const Payment = require('./payment');
const Token = require('./token');

class response{
  static async orderPaid(resp){
    const order = new Order(resp);
    const res = await order.save();
    return res;
  }
  static async paymentres(resp){
    // const payment = new Payment(resp);
    const payment = Payment.findOneAndUpdate({accountId: resp.accountId}, resp)
    const res = await payment.save();
    return res;
  }
  static async tokenres(resp){
    const token = new Token(resp);
    const res = await token.save();
    return res;
  }
}

module.exports = response;