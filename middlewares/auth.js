const {getUser} = require('../services/auth');

async function restrictToLoginUserOnly(req,res,next){
    const userUid = req.cookies?.uid;
    // console.log(req);

    if(!userUid) return res.redirect('/login');
    
    const user = getUser(userUid);
    // console.log(user)
    if(!user) return res.redirect('/login');
 
    req.user=user;
    next();
}

async function checkAuth(req,res,next){
    const userUid = req.cookies?.uid;
    const user = getUser(userUid);
    // console.log(user)
    req.user=user;
    next();
}

module.exports={
    restrictToLoginUserOnly,
    checkAuth,
}