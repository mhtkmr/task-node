const client = require('../models/register');
const axios = require('axios');

class AccountController {
  static async register1(user) {
    let nuser = await client.register1(user);
    return nuser;
  }
  static async pin(pincode) {
    const res = await axios.get(`https://pincode.saratchandra.in/api/pincode/${pincode}`);

    if (!res.status == 200) {
      console.log('Please type corrent pin');
    } else {
      let state = res.data.data[0].state_name;
      return state;
    }
  }

  static async register2(detail) {
    if (!detail.id) {
      console.log('Error no uid');
    } else {
      const state = await AccountController.pin(detail.pincode);
      if (!state) {
        console.log('Please fill the pincode correctly');
      } else {
        let uid = detail.id;
        let data = {
          addr: detail.addr,
          pincode: detail.pincode,
          state
        };
        console.log(uid, data);

        const res = await client.register2(data, uid);
        return res;
      }
    }
  }
}

module.exports = AccountController;
