console.log("client side code running"); 

// const myURL = "http://student04.cse.nd.edu:51025";
const myURL = ""; 

const emperorButton = document.getElementById('emperorButton'); 
emperorButton.addEventListener('click', function(e) {
  console.log("emperor button clicked"); 
  location.href = myURL.concat("/emperor"); 
}); 

const macaroniButton = document.getElementById('macaroniButton'); 
macaroniButton.addEventListener('click', function(e) {
  console.log("macaroni button clicked"); 
  location.href = myURL.concat("/macaroni"); 
}); 

const mapButton = document.getElementById('mapButton'); 
mapButton.addEventListener('click', function(e) {
  console.log("map pressed"); 
  location.href = myURL.concat("/map"); 
}); 

const indexButton = document.getElementById('indexButton'); 
indexButton.addEventListener('click', function(e) {
  console.log('home button clicekd'); 
  location.href = myURL.concat("/"); 
}); 

const submitButton = document.getElementById('submitButton'); 
submitButton.addEventListener('click', function(e) {
  console.log("submitted..?");
}); 

function initMap() {
  var potowami = {
    lat: 41.670768,
    lng: -86.218401
  }; 

  var map = new google.maps.Map(document.getElementById('map'), {
    center: potowami,
    zoom: 18, 
    mapTypeId: 'satellite'
  }); 

  var monkeyCage = {
    lat: 41.670768,
    lng: -86.218338
  }; 
  var marker = new google.maps.Marker({
    position: monkeyCage,
    label: { color: '#f7f7f7', fontWeight: 'bold', fontSize: '10px', text: 'Camels' }, 
    map: map
  }); 
}
