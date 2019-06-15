const jwt = require('jsonwebtoken');
const config = require('../config/index');

class AuthenticationController {
  static async isAuthenticated(req) {
    let result = await AuthenticationController.consumeToken(req);
    return result;
  }

  static async authenticate(req) {
    const payload = await AuthenticationController.consumeToken(req);
    if (payload.status && payload.status !== 200) {
      return payload;
    }
    return (req.user = payload.id);
  }

  static signJwt(user) {
    let payload = {
      id: user._id,
      email: user.email
    };
    const signOpts = { expiresIn: 3600 };
    console.log('here in signjwt');

    return jwt.sign(payload, config.secretOrKey, signOpts);
  }

  static decodeJwt(token) {
    let payload = null;
    try {
      payload = jwt.decode(token, config.secretOrKey);
    } catch (err) {
      console.log(err);
    }
    return payload;
  }

  static bearer(token) {
    let payload = this.decodeJwt(token);

    return payload;
  }

  static async consumeToken(req) {
    let result = {};
    if (!req.headers.authorization) {
      result.status = 401;
      result.message = 'Unauthorized no header';
      return result;
    }
    let token = req.headers.authorization;

    let payload = await AuthenticationController.bearer(token);

    if (!payload || !payload.id) {
      console.log('hereunu');

      result.status = 401;
      result, (message = 'Unauthorized');
      return result;
    }
    return payload;
  }
}

module.exports = AuthenticationController;
