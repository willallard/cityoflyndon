
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
