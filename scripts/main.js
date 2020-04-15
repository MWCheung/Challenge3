// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFud2VpY2hldW5nIiwiYSI6ImNrOGs1MHZxNjAyMnEzZ25rd2h6dzMybWUifQ.O6zLvQzHPd4iHYK1moKjWg';

// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',

 // Positioning the map on a certain longitute + latitude and zooming in
  center: [4.294496, 52.067578],
  zoom: 15,
});

var popup = new mapboxgl.Popup().setHTML('<h3>Landingsplek</h3><p>Dit gebied is een geschikte landingsplek.</p>');

// // Adding a marker based on lon lat coordinates
var marker = new mapboxgl.Marker()
.setLngLat([4.294496, 52.067578])
.setPopup(popup)
.addTo(map);

// Weer gedeelte
!function(d,s,id){
var js,fjs=d.getElementsByTagName(s)[0];
if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
