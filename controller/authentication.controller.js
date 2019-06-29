// const jwt = require('jsonwebtoken');
// const config = require('../config/index');
// const client = require('../redis').getclient;

// //Auth controller
// class AuthenticationController {
//   //for checking whether authenticated
//   static async isAuthenticated(req) {
//     let result = await AuthenticationController.consumeToken(req);
//     return result;
//   }

//   //authenticating
//   static async authenticate(req) {
//     const payload = await AuthenticationController.consumeToken(req);
//     if (payload.status && payload.status !== 200) {
//       return payload;
//     }
//     return (req.user = payload.id);
//   }

//   //type-2 auth comp redis (key, value) => id:token
//   static async redauthenticate(req) {
//     //fetching token
//     let token = req.headers.authorization;
//     //fetching id
//     const uid = await this.authenticate(req);
//     //fetching token from redis
//     const sid = await client.getAsync(uid);
//     //if invalid unauth
//     if (sid !== token) {
//       return console.error('Unauthorized');
//     } else {
//       //success
//       return true;
//     }
//   }

//   //jwt sign controller
//   static signJwt(user) {
//     let payload = {
//       id: user._id,
//       email: user.email
//     };
//     const signOpts = { expiresIn: 3600 };
//     //return signed token
//     return jwt.sign(payload, config.secretOrKey, signOpts);
//   }
//   //decoding jwt
//   static decodeJwt(token) {
//     let payload = null;
//     try {
//       payload = jwt.decode(token, config.secretOrKey);
//     } catch (err) {
//       console.log(err);
//     }
//     return payload;
//   }

//   //consume token
//   static async consumeToken(req) {
//     let result = {};
//     if (!req.headers.authorization) {
//       result.status = 401;
//       result.message = 'Unauthorized no header';
//       return result;
//     }
//     //fetching token
//     let token = req.headers.authorization;
//     //decoding token
//     let payload = await AuthenticationController.decodeJwt(token);
//     //error
//     if (!payload || !payload.id) {
//       result.status = 401;
//       result, (message = 'Unauthorized');
//       return result;
//     }
//     return payload;
//   }
// }

// module.exports = AuthenticationController;
