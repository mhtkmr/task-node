const express = require('express');
const router = express.Router();
const check = require('./modules/check.module');
const accModule = require('./modules/account.module');
const authController = require('../controller/authentication.controller');

router.get('/', check.self);
router.post('/register1', accModule.register1);
router.get('/pin/:pincode', accModule.statedet);

module.exports = router;
