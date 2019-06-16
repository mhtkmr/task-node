const accController = require('../../controller/account.controller');
const authController = require('../../controller/authentication.controller');
const client = require('../../redis').getclient;

//Acc module
class AccountModule {
  //module for register-1
  static async register1(req, res) {
    //setting obj from req
    let user = {
      email: req.body.email,
      password: req.body.password
    };
    //passing data to register-1 controller
    const resp = await accController.register1(user);
    //signing token required for Register-2
    const tok = authController.signJwt(resp);
    return res.status(200).send(tok);
  }

  //module for fetching state from controller
  static async statedet(req, res) {
    //fetching pin code from params
    let pincode = req.params.pincode;
    //fetching data
    let resp = await accController.pin(pincode);
    return res.status(200).send(resp);
  }

  //middleware for type-1 Authentication
  static async accauthenticate(req, res, next) {
    //passing req to auth controller to verify token
    let resp = await authController.authenticate(req);
    //if error
    if (!resp) {
      res.status(401).send('Invalid');
    } else {
      //success
      resp;
      next();
    }
  }

  //Module for Register-2
  static async register2(req, res) {
    //setting data from req
    let detail = {
      addr: req.body.address,
      pincode: req.body.pincode,
      id: req.body.id
    };
    //passing data to controller
    const result = await accController.register2(detail);
    if (!result) {
      //if error
      return res.status(400).send('Error occured');
    } else {
      //success
      return res.status(200).send(result);
    }
  }

  //module for login
  static async login(req, res) {
    //setting data from req
    let user = {
      email: req.body.email,
      password: req.body.password
    };
    //passing data to controller
    const resp = await accController.login(user);
    //if err
    if (!resp) {
      return res.status(400).send('Login failed');
    } else {
      //success 1. sign token
      const tok = await authController.signJwt(resp);
      //2. convert id to string for redis
      let id = resp._id.toString();
      //setting the generated token against id of user in redis in key:value format
      const ur = client.setAsync(id, tok);
      return res.status(200).send(tok);
    }
  }
  //middleware for type-2 authentication
  static async logauthenticate(req, res, next) {
    //passing req for header to authController
    let resp = await authController.redauthenticate(req);
    //Failed- un auth
    if (!resp) {
      return res.status(401).send('unauth');
    }
    next();
  }
  //test module after loggingIn to check the valid token
  static async protect(req, res) {
    return res.status(200).send('success');
  }
}

module.exports = AccountModule;
