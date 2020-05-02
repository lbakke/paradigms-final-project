var map;
var markers = []; 
var habitats; 

var madagascar = {
    lat: -18.365561, 
    lng: 45.360561
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: madagascar,
        zoom: 2.5, 
        mapTypeId: 'satellite'
    });
    getData();
}

function setIcons(habitats, species) {
    for (var i = 0; i < markers.length; i++) {      // remove current markers
        markers[i].setMap(null);    
    }

    markers = [];

    for (var i = 0; i < habitats[species]["habitats"].length; i++) {
        markers.push(new google.maps.Marker({
            position: habitats[species]["habitats"][i],
            map: map,
            icon: 'images/penguin_icon.png'
        }))
    }

    map.setZoom(2); 
}

function getData() {
	console.log("Fetching data from server..."); 
	$.ajax({
		url: '/data',
        type: 'GET', 

		success: function (data) {
			console.log("Incoming data...");
            console.log(data);
            habitats = data;
		}, 
		error: function (xhr, status, error) {
			console.log('Error: ' + error.message); 
		},
    });
}
	
const mapButton = document.getElementsByClassName('map-button');
for (let i=0; i<mapButton.length; i++) {
    mapButton[i].addEventListener('click', function(e) {
        setIcons(habitats, mapButton[i].textContent.toLowerCase());
    });
}
