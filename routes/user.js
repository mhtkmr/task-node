const express = require('express');
const router = express.Router();
const check = require('./modules/check.module');
// const accModule = require('./modules/account.module');

//unauth routes
router.get('/', check.self);
// router.post('/register1', accModule.register1);
// router.get('/pin/:pincode', accModule.statedet);
// router.post('/login', accModule.login);

module.exports = router;
