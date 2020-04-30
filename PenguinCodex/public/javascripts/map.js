/* penguin coordinates */ 
var madagascar = {
    lat: -19.135824,
    lng: 46.911128
}; 

var antarctica = {
    lat: -74.082431, 
    lng: 43.863030
};

var galapagos1 = {
    lat: -0.300635, 
    lng: -90.643811
};

var galapagos2 = {
    lat: -0.547820, 
    lng: -91.072278
};

var gentoo1 = {
    lat: -54.418799, 
    lng: -36.376509
};

var gentoo2 = {
    lat: -60.592629, 
    lng: -45.558194
};

var gentoo3 = {
    lat: -49.641175,
    lng: 70.017057
};

var macaroni1 = {
    lat: -55.431455, 
    lng: -68.253017
}; 

var macaroni2 = {
    lat: -63.272406, 
    lng: -55.111493
}; 

// console.log(habitats);

var map;
var markers = []; 
var habitats; 
const fs = require('fs');

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: madagascar,
        zoom: 2.5, 
        mapTypeId: 'satellite'
    });


    let rawdata = fs.readFileSync("data/habitats.json");
    habitats = JSON.parse(rawdata);
    console.log("habitats: ", habitats);
}

function setIcons(species) {

    for (var i = 0; i < markers.length; i++) {      // remove current markers
        markers[i].setMap(null);    
    }

    markers = [];

    for (var i = 0; i < habitats[species]["habitats"].length; i++) {
        markers.push(new google.maps.Marker({
            position: habitats[species]["habitats"][i],
            map: map,
            icon: 'javascripts/penguin.png'
        }))
    }

    map.setZoom(2); 
    map.setCenter(habitats[species]["origin"]);      // center around antarctica
}

const mapButton = document.getElementsByClassName('map-button');
console.log(mapButton);
for (let i=0; i<mapButton.length; i++) {
    mapButton[i].addEventListener('click', function(e) {
        switch (mapButton[i].textContent.toLowerCase()) {
            case "emperor":
                console.log("emperor!");
                setIcons("emperor"); 
                break;
            case "galapagos":
                setIcons("galapagos"); 
                console.log("galapagos!");
                break;
            case "gentoo":
                setIcons("gentoo"); 
                console.log("gentoo!");
                break;
            case "macaroni":
                setIcons("macaroni"); 
                console.log("macaroni!");
                break;
            default:
                console.log("switch error");
        }
    });
}