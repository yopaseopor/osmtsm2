/**
 * Nominatim Search Implementation
 */
function initNominatimSearch(map) {
    const geocoder = new Geocoder('nominatim', {
        provider: 'nominatim',
        targetType: 'glass-button',
        lang: 'en',
        placeholder: 'Search for a location...',
        limit: 5,
        keepOpen: true,
        preventDefault: true,
        autoComplete: true,
        autoCompleteMinLength: 2,
        debug: false,
        position: 'top-left',
        // Add custom styling
        className: 'nominatim-search',
        // Add custom messages
        messages: {
            noResults: 'No locations found',
            results: function(count) {
                return count + ' locations found';
            }
        }
    });

    // Add loading indicator
    geocoder.on('searchstart', function() {
        const searchInput = document.querySelector('.nominatim-search input');
        if (searchInput) {
            searchInput.style.backgroundImage = 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%23666\' d=\'M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z\'/%3E%3C/svg%3E")';
            searchInput.style.backgroundRepeat = 'no-repeat';
            searchInput.style.backgroundPosition = 'right 8px center';
            searchInput.style.backgroundSize = '16px';
        }
    });

    // Remove loading indicator
    geocoder.on('searchend', function() {
        const searchInput = document.querySelector('.nominatim-search input');
        if (searchInput) {
            searchInput.style.backgroundImage = 'none';
        }
    });

    // Handle search results
    geocoder.on('addresschosen', function(evt) {
        const result = evt.address;
        const view = map.getView();
        const coordinates = result.coordinate;
        
        // Center the map on the selected location
        view.animate({
            center: coordinates,
            zoom: 17, // Zoom to street level
            duration: 1000 // Animation duration in milliseconds
        });

        // Add a marker at the selected location
        const marker = new ol.Overlay({
            position: coordinates,
            positioning: 'bottom-center',
            element: document.createElement('div'),
            offset: [0, -20]
        });
        marker.getElement().className = 'nominatim-marker';
        marker.getElement().innerHTML = '<i class="fa fa-map-marker"></i>';
        map.addOverlay(marker);

        // Remove marker after 5 seconds
        setTimeout(function() {
            map.removeOverlay(marker);
        }, 5000);
    });

    // Handle errors
    geocoder.on('error', function(error) {
        console.error('Geocoding error:', error);
        // You could show a user-friendly error message here
    });

    map.addControl(geocoder);
} 