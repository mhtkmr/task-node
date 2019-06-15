const express = require('express');
const router = express.Router();
const accModule = require('./modules/account.module');

router.post('/register2', accModule.register2);

module.exports = router;
