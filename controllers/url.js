const URL = require('../models/url');
const shortid = require('shortid');

async function generateShortLink(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({msg:"url is required"})
    const newShortId =shortid(8);
    await URL.create({
        shortId:newShortId,
        redirectUrl:body.url,
        visitHistory:[],
        createdBy:req.user._id,  
    });
    return res.render('home.ejs',{
      id:newShortId,
    });
}

async function redirect(req,res){
    const shortId = req.params.shortId;
    const entry =await URL.findOneAndUpdate({shortId},{$push:{visitHistory:{timestamp:Date.now()}}});
    
    if(!entry) return res.status(404).json({msg:"no url found"});
    return res.redirect(entry.redirectUrl);
}

async function getAnalytics(req,res){
  const shortId = req.params.shortId;
  const result = await URL.findOne({shortId});
  return res.json({
    totalClicks:result.visitHistory.length,
    analytics:result.visitHistory
  })
}

module.exports ={
    generateShortLink,
    redirect,
    getAnalytics,
}