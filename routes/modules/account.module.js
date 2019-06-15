const accController = require('../../controller/account.controller');
const authController = require('../../controller/authentication.controller');

class AccountModule {
  static async register1(req, res) {
    let user = {
      email: req.body.email,
      password: req.body.password
    };
    const resp = await accController.register1(user);
    const tok = authController.signJwt(resp);
    return res.status(200).send(tok);
  }

  static async statedet(req, res) {
    let pincode = req.params.pincode;
    let resp = await accController.pin(pincode);
    return res.status(200).send(resp);
  }
  static async accauthenticate(req, res, next) {
    let resp = await authController.authenticate(req);
    if (!resp) {
      res.status(401);
    } else {
      console.log(resp);

      resp;
      next();
    }
  }

  static async register2(req, res) {
    console.log('in here');

    let detail = {
      addr: req.body.address,
      pincode: req.body.pincode,
      id: req.body.id
    };
    console.log(detail);

    const result = await accController.register2(detail);
    if (!result) {
      console.log('Error occured');
    } else {
      return res.status(200).send(result);
    }
  }
}

module.exports = AccountModule;
