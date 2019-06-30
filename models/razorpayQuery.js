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
    const payment = await Payment.findOne({accountId: resp.accountId});
    if(!payment){      
      const pay = new Payment(resp);      
      const res = await pay.save();
      return res;
    } else {
      const res = payment.payload.push(resp.payload);      
      const pay =await Payment.findOneAndUpdate({accountId: payment.accountId}, payment);            
      return pay;
    }
  }
  static async tokenres(resp){
    const token = new Token(resp);
    const res = await token.save();
    return res;
  }
}

module.exports = response;