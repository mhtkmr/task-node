const query = require('../models/razorpayQuery');

class PaymentController{
  static async paymentcont(data){
    const result = {}
    if(!data){
      result.status = 404,
      result.message = 'Error: no payload'
    } else {
      const resp = {
        accountId:data.account_id,
        orderId: data.payload.payment.entity.order_id,
        paymentId: data.payload.payment.entity.id,
        payload: data
      }
      const res = await query.paymentres(resp);
      result.status = 200,
      result.message = 'success'
    };
    return result;
  }
}

module.exports = PaymentController;