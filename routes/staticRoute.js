const express = require('express');
const URL = require('../models/url');
const user = require('../models/users');
const router =express.Router();

router.get('/',async (req,res)=>{
    if(!req.user) return res.redirect('/login');
    // console.log(req.user);
    const allURL = await URL.find({createdBy:req.user._id});
    console.log(allURL);
    return res.render("home.ejs",{
        urls:allURL,
    })
});

router.get('/signup',(req,res)=>{
    res.render('signup.ejs');
});

router.get('/login',(req,res)=>{
    res.render('login.ejs');
})
module.exports =router;