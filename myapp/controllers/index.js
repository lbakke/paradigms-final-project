const fs = require('fs'); 

let rawdata = fs.readFileSync('controllers/likes.json'); 
let likes = JSON.parse(rawdata); 
console.log('likes: ', likes); 

exports.index = function(req, res, next) {
	res.render('index', { title: 'Express' });
}

exports.emperor = function(req, res, next) {
	res.render('emperor', {about: 'emperor', 'count': likes.emperor}); 
}

exports.macaroni = function(req, res, next) {
    res.render('macaroni', {'count': likes.macaroni}); 
}

exports.like_emperor = function(req, res, next) {
	likes.emperor += 1
	data = JSON.stringify(likes, null, 2); 
	fs.writeFile('controllers/likes.json', data, (err) => {
		if (err) throw err; 
		console.log("data successfully written to file"); 
	}); 
	res.redirect('/emperor');
}

exports.like_macaroni = function(req, res, next) {
	likes.macaroni += 1
	data = JSON.stringify(likes, null, 2); 
	fs.writeFile('controllers/likes.json', data, (err) => {
		if (err) throw err; 
		console.log("data successfully written to file"); 
	}); 
	res.redirect('/macaroni');
}


