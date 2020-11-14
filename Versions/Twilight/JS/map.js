/* 
*****************
TABLE OF CONTENTS
*****************

1. Coordinates 
2. Tiles

*/


/* Coordinates */
var mymap = L.map('mapview').setView([40.712772, -74.006058], 13);


/* Tiles */
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiam94dXMiLCJhIjoiY2tlYjFjNnpyMDFwajJ0bnhtdG5tdXY2aiJ9.TXVRWmnD4WHSvwvF2y4kXQ'
}).addTo(mymap);


setInterval(function () {
   mymap.invalidateSize();
}, 100);


var marker = L.marker([40.712772, -74.006058]).addTo(mymap);