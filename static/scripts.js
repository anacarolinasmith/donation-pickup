// NOTES:
// http://api.jquery.com/jquery.getjson/
// https://learn.jquery.com/using-jquery-core/iterating/
// https://developers.google.com/maps/documentation/javascript/examples/marker-remove

// Execute when the DOM is fully loaded
$(document).ready(function() {

    // Options for map
    // https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    let options = {
        center: {lat: 42.3250896, lng: -72.64120129999998}, // Northampton, Massachusetts
        zoom: 8,
    };

    // Get DOM node in which map will be instantiated
    let canvas = $("#map").get(0);

    // Instantiate map
    map = new google.maps.Map(canvas, options);

    // Store locations for markers
    var locations = [
        ['Downtown Boston', '24 Beacon St, Boston, MA 02133', 42.3581011, -71.0636606],
        ['Harvard Square', '51 Brattle St, Cambridge, MA 02138', 42.3745154, -71.1214778],
        ['Northampton', '1 John Street, Northampton, MA 01035', 42.3250896, -72.64120129999998],
        ['Plymouth', '1 Jake Street, Plymouth, MA 02330', 41.9584457, -70.66726210000002],
        ['Worcester', '1 David Street, Worcester, MA 02330', 42.2625932, -71.8022934]
    ];
    var infowindow = new google.maps.InfoWindow();

    // Setting up markers for locations and listen for clicks
    // https://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example
    for (var i = 0; i < locations.length; i++) {
        // var location = locations[i];
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][2], locations[i][3]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(
                    '<div id="content">'+
                    '<h1>' + locations[i][0] + '</h4>'+
                    '<p>' + locations[i][1] + '</p>' +
                    '</div>'
                )
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
});

