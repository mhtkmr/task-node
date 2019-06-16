const User = require('./user');

//module for queries
class Client {
  //register query-1
  static async register1(obj) {
    try {
      /*
      since mongoose validation is there for unique email so passing the apt data
      that needed to be saved so in this case email & pwd
      */
      let user = new User(obj);
      const res = await user.save();
      return res;
    } catch (err) {
      console.log(err.errmsg);
    }
  }
  //register query-2
  static async register2(obj, uid) {
    try {
      /*
      passing object that needed to be save w/ uid w/ which I'm searching for user
      finding the user w/ _id and updating the doc w/ obj
      */

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

  //query for login
  static async login(obj) {
    //setting ercode and ermsg if occurs
    let result = {};
    try {
      //finding user w/ email
      let user = await User.findOne({ email: obj.email });
      //if  user !found
      if (!user) {
        result.status = 404;
        result.message = 'user not found';
        return result;
      } else {
        //if user found compare pwd
        const comp = await User.comparePassword(obj.password, user.password);
        if (!comp) {
          //if pwd mismatch occurs
          result.status = 401;
          result.message = 'Passsword mismatch';
          return result;
        } else {
          //success
          return user;
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Client;
