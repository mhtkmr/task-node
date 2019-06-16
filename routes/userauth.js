const express = require('express');
const router = express.Router();
const accModule = require('./modules/account.module');

//routing for protected routes w/ middleware(s)
router.post('/register2', accModule.register2);
router.get('/protected', accModule.protect);

module.exports = router;
