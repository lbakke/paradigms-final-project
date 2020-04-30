var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
let like = require('../public/javascripts/like');
let map = require('../public/javascripts/map');

/* GET home page. */
router.get('/', index.index);
router.get('/emperor', index.emperor);
router.get('/galapagos', index.galapagos);
router.get('/gentoo', index.gentoo);
router.get('/macaroni', index.macaroni);
router.get('/summary', index.summary);
router.get('/map', index.map);

router.post('/emperor', like.like);
router.post('/galapagos', like.like);
router.post('/gentoo', like.like);
router.post('/macaroni', like.like);

module.exports = router;
