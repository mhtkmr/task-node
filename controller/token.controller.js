const query = require('../models/razorpayQuery');

class TokenController{
  static async tokenres(data) {
    const result = {}
    if(!data){
      result.status= 404,
      result.message='Error no payload'
    } else {
      const resp = {
        accountId: data.account_id,
        tokenId: data.payload.token.entity.id,
        payload: data,
       }
       const res = await query.tokenres(resp);
       result.status = 200,
       result.message = 'success'
    };
    return result;
  }
}

module.exports = TokenController;