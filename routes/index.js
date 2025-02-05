const express = require('express');
const router =express.Router();
const {generateShortLink,redirect,getAnalytics} =require('../controllers/url');

router.post('/',generateShortLink);
router.get('/:shortId',redirect);
router.get('/analytics/:shortId',getAnalytics);

module.exports =router;