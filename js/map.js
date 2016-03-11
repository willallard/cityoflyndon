/*
  var neighborhoods = [
  {lat: 38.2698291, lng: -85.6175582},
  {lat: 52.549, lng: 13.422},
  {lat: 52.497, lng: 13.396},
  {lat: 52.517, lng: 13.394}
];

var markers = [];
var map;


  function initMap() {
  var myLatLng = {lat: 38.2628323, lng: -85.6052176};
  
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
     
    zoom: 15
  });
  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    
  });
     
    }

function drop() {
  clearMarkers();
  for (var i = 0; i < neighborhoods.length; i++) {
    addMarkerWithTimeout(neighborhoods[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
} */


// If you're adding a number of markers, you may want to drop them on the map
// consecutively rather than all at once. This example shows how to use
// window.setTimeout() to space your markers' animation.

var neighborhoods = [
  
  {lat: 38.2575598, lng: -85.6062541},
  {lat: 38.265912, lng: -85.605535},
  {lat: 38.254517, lng: -85.598750},
  {lat: 38.267862, lng: -85.612494},
  {lat: 38.262266, lng: -85.581579},
];

var markers = [];
var map;

var styleArray = [
    {
        featureType: "all",
        stylers: [
            { hue: "#003DA5" },
            
            
            
        
        ]
    
    }

];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 38.2628323, lng: -85.6052176},
    scrollwheel: false,
    styles: styleArray, 
    
  });
}

function drop() {
  clearMarkers();
  for (var i = 0; i < neighborhoods.length; i++) {
    addMarkerWithTimeout(neighborhoods[i], i * 300);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}


 