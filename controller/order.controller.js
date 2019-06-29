const query = require('../models/razorpayQuery');

class OrderController{
  static async orderPaid(data){
    const result={}
    if(!data){
      result.status= 404,
      result.message='Error no payload'
    } else {
      const resp = {
        orderId: data.payload.order.entity.id,
        receiptId:  data.payload.order.entity.receipt,
        payload: data,
      }
      const res = await query.orderPaid(resp);
      result.status = 200,
      result.message = 'success'
    };
    return result;
  }
}

module.exports = OrderController;