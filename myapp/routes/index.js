var express = require('express');
var router = express.Router();

let index = require('../controllers/index'); 

router.get('/', index.index); 
router.get('/emperor', index.emperor); 
router.get('/macaroni', index.macaroni); 
router.post('/emperor', index.like_emperor); 
router.post('/macaroni', index.like_macaroni); 

module.exports = router;
