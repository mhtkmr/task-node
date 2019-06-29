const PaymentController = require('../../controller/payment.controller');

class PaymentModule{
  static async paymentMod(req, res) {
    let data = req.body;
    const post = await PaymentController.paymentcont(data);
    return res.send(post);
  }
}

module.exports = PaymentModule;