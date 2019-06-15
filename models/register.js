const User = require('./user');

class Client {
  static async register1(obj) {
    try {
      let user = new User(obj);
      console.log(user);

      const res = await user.save();
      console.log(res);

      return res;
    } catch (err) {
      console.log(err.errmsg);
    }
  }

  static async register2(obj, uid) {
    try {
      let user = await User.findByIdAndUpdate(uid, obj);
      if (!user) {
        console.error('No user found');
      } else {
        return user;
      }
    } catch (err) {
      console.log(err.errmsg);
    }
  }
}

module.exports = Client;
