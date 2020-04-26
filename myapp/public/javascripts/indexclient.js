console.log("client side code running"); 

const myURL = "http://student04.cse.nd.edu:51025"; 

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

const indexButton = document.getElementById('indexButton'); 
indexButton.addEventListener('click', function(e) {
  console.log('home button clicekd'); 
  location.href = myURL.concat("/"); 
}); 

const socialCuesButton = document.getElementById('socialCuesButton'); 
socialCuesButton.addEventListener('click', function(e) {
  console.log("social cues pressed"); 
  location.href = myURL.concat("/social"); 
}); 
 
