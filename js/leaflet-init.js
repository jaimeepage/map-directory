//Initialise Map and Set initial view
var map = L.map('mainMap').fitWorld();


//Add a tile layer to the map
var tileUrl = 'https://tile.thunderforest.com/cycle/{z}/{x}/{y}{r}.png?apikey=e097b5954d874a1c9e6954c7ecc91a72',
layer = new L.TileLayer(tileUrl, {maxZoom: 18});
layer.addTo(map);

//Add search functionality
var options = {
    collapsed: false,
    position: 'topleft',
    text: 'Let\'s Go',
    placeholder: 'Find somewhere',
    bounds: null,
    email: null,
    callback: function (results) {
			var bbox = results[0].boundingbox,
				first = new L.LatLng(bbox[0], bbox[2]),
				second = new L.LatLng(bbox[1], bbox[3]),
				bounds = new L.LatLngBounds([first, second]);
			this._map.fitBounds(bounds);
    }
};
var osmGeocoder = new L.Control.OSMGeocoder(options);
map.addControl(osmGeocoder);

//Turn on geolocation to zoom to users location
map.locate({setView: true, maxZoom: 13});

//Show an error if geolocation fails
function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);

//Add custom icons
var walkI = L.icon({
  //path to the icon
  iconUrl: 'map-icons/hiking.png',
  //size of the icon
  iconSize: [60, 52],
  iconAnchor: [0, 26],
  //point of the icon where popup window will open
  popupAnchor: [35, -26]
});

var divingI = L.icon({
  iconUrl: '../map-icons/diver.png',
  iconSize: [52, 60],
  iconAnchor: [26, 60],
  popupAnchor: [0, -60]
});


//Add location markers to the map

var p1 = L.marker([-35.287905, 174.088197], {icon: walkI}).addTo(map);
