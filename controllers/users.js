const users = require('../models/users');
// const {v4:uuidv4}=require('uuid');
const {setUser,getUser}=require('../services/auth');

async function signUp(req,res){
    const {username,email,password} = req.body;
    await users.create({
        username,
        email,
        password,
    });
    return res.render('home');
}

async function logIn(req,res){
    const {email,password}=req.body;
    const user = await users.findOne({email,password});
    if(!user) return res.redirect('/login',{error:"Invalid email or password"});
    // const sessionId = uuidv4();
    // setUser(sessionId,user);
    const token=setUser(user);
    res.cookie("uid",token);
    return res.redirect('/');
}

module.exports ={
    signUp,
    logIn,
}