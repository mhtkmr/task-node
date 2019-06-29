const OrderController = require('../../controller/order.controller');

class OrderModule{
  static async orderPaid(req, res) {
    let data= req.body;
    const post = await OrderController.orderPaid(data);
    return res.send(post);
  }
}

module.exports = OrderModule;