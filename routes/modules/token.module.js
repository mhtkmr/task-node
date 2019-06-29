const TokenController = require('../../controller/token.controller');

class TokenModule{
  static async tokenMod(req, res) {
    let data = req.body;
    const post = await TokenController.tokenres(data);
    return res.send(post);
  }
}

module.exports = TokenModule;