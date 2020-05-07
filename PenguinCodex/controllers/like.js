const fs = require('fs');

let rawdata = fs.readFileSync("data/likes.json");
let likes = JSON.parse(rawdata);

exports.like = function(req, res, next) {
    console.log(req.url.slice(1));

    switch (req.url.slice(1)) {
        case "emperor":
            likes.emperor += 1;
            break;
        case "galapagos":
            likes.galapagos += 1;
            break;
        case "gentoo":
            likes.gentoo += 1;
            break;
        case "macaroni":
            likes.macaroni += 1;
            break;
        default:
            console.log("Error");
    }
	data = JSON.stringify(likes, null, 2); 
	fs.writeFile('data/likes.json', data, (err) => {
		if (err) throw err; 
	});

    res.redirect(req.url);
}