const dataB = require('../models/query');
const axios = require('axios');

//A/c controller module
class AccountController {
  //Register-1 controller, Passing obj to be saved
  static async register1(user) {
    //registering in db
    let nuser = await dataB.register1(user);
    return nuser;
  }
  //API controller to fetch pincode
  static async pin(pincode) {
    try {
      //using this one b/c the other API was giving errcode 500, working fine atm
      const res = await axios.get(`http://www.postalpincode.in/api/pincode/${pincode}`);
      //if any error occurs/no record found
      if (res.status == 'Error') {
        console.log('No records Found, please check pincode');
      } else {
        //if success
        let state = res.data.PostOffice[0].State;
        return state;
      }
    } catch (err) {
      console.log(err);
    }
  }
  //Register-2 API controller for updating addtn data
  static async register2(detail) {
    //if there's no user._id
    if (!detail.id) {
      console.log('Error no uid');
    } else {
      //if user._id exist fetch state w/ pincode
      const state = await AccountController.pin(detail.pincode);
      if (!state) {
        //If error occurs/ no record found
        console.log('Please fill the pincode correctly');
      } else {
        //if success
        let uid = detail.id;
        let data = {
          addr: detail.addr,
          pincode: detail.pincode,
          state
        };
        //calling the register query for saving
        const res = await dataB.register2(data, uid);
        return res;
      }
    }
  }

  //login controller
  static async login(obj) {
    try {
      //obj for returning err
      let result = {};
      //querying the user
      const user = await dataB.login(obj);
      //if !found
      if (!user) {
        (result.status = 404), (result.message = 'User not found');
        //return err obj
        return result;
      } else {
        //success
        console.log(user);
        return user;
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AccountController;
