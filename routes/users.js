const express = require('express');
const router = express.Router();
// const users = require('../models/users');
const {signUp,logIn} = require('../controllers/users');


router.post('/signup',signUp);
router.post('/login',logIn);

module.exports=router;