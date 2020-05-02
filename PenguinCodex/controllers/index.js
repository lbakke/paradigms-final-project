const fs = require('fs');

let likedata = fs.readFileSync("data/likes.json");
let likes = JSON.parse(likedata);

let habitatdata = fs.readFileSync("data/habitats.json"); 
let habitats = JSON.parse(habitatdata); 

exports.index = function(req, res, next) {
    console.log("Rendering HOME");
    res.render('index', {header: "The Penguin Codex"});
}
exports.emperor = function(req, res, next) {
    console.log("Rendering EMPEROR");
    rawdata = fs.readFileSync("data/likes.json");
    likes = JSON.parse(rawdata);
    res.render('emperor', {header: "Emperor Penguin", likes: likes.emperor});
}
exports.galapagos = function(req, res, next) {
    console.log("Rendering GALAPAGOS");
    rawdata = fs.readFileSync("data/likes.json");
    likes = JSON.parse(rawdata);
    res.render('galapagos', {header: "Galapagos Penguin", likes: likes.galapagos});
}
exports.gentoo = function(req, res, next) {
    console.log("Rendering GENTOO");
    rawdata = fs.readFileSync("data/likes.json");
    likes = JSON.parse(rawdata);
    res.render('gentoo', {header: "Gentoo Penguin", likes: likes.gentoo});
}
exports.macaroni = function(req, res, next) {
    console.log("Rendering MACARONI")
    rawdata = fs.readFileSync("data/likes.json");
    likes = JSON.parse(rawdata);
    res.render('macaroni', {header: "Macaroni Penguin", likes: likes.macaroni});
}
exports.summary = function(req, res, next) {
    console.log("Rendering SUMMARY");
    res.render('summary', {header: "Summary"});
}
exports.map = function(req, res, next) {
    console.log("Rendering MAP");
    res.render('map', {header: "Map"});
}
exports.data = function(req, res, next) {
    res.json(habitats); 
}
