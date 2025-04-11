/**
 * Nominatim Search Implementation
 */
function initNominatimSearch(map) {
    // Search Control
    var searchControlBuild = function () {
        var container = $('<div>').addClass('ol-control ol-unselectable nominatim-search')
            .html($('<button type="button"><i class="fa fa-search"></i></button>'));
        
        var searchInput = $('<input type="text" placeholder="Search...">').hide();
        container.append(searchInput);

        container.on('click', 'button', function(e) {
            e.preventDefault();
            searchInput.toggle();
            if (searchInput.is(':visible')) {
                searchInput.focus();
            }
        });

        searchInput.on('keypress', function(e) {
            if (e.which === 13) { // Enter key
                var query = $(this).val();
                if (query) {
                    // Show loading state
                    container.addClass('loading');
                    
                    // Make the Nominatim API call
                    $.ajax({
                        url: 'https://nominatim.openstreetmap.org/search',
                        data: {
                            q: query,
                            format: 'json',
                            limit: 1
                        },
                        success: function(data) {
                            if (data && data.length > 0) {
                                var result = data[0];
                                var coordinates = ol.proj.fromLonLat([
                                    parseFloat(result.lon),
                                    parseFloat(result.lat)
                                ]);

                                // Animate to location
                                map.getView().animate({
                                    center: coordinates,
                                    zoom: 17,
                                    duration: 1000
                                });

                                // Add temporary marker
                                var markerElement = $('<div>')
                                    .addClass('nominatim-marker')
                                    .html('<i class="fa fa-map-marker"></i>')[0];

                                var marker = new ol.Overlay({
                                    position: coordinates,
                                    positioning: 'bottom-center',
                                    element: markerElement,
                                    offset: [0, -20]
                                });
                                map.addOverlay(marker);

                                // Remove marker after 5 seconds
                                setTimeout(function() {
                                    map.removeOverlay(marker);
                                }, 5000);
                            }
                            container.removeClass('loading');
                            searchInput.hide().val('');
                        },
                        error: function() {
                            container.removeClass('loading');
                            searchInput.hide().val('');
                            console.error('Geocoding error');
                        }
                    });
                }
            }
        });

        return container[0];
    };

    // Add the search control to the map
    map.addControl(new ol.control.Control({
        element: searchControlBuild()
    }));
} 