/**
 * Mapillary Viewer Implementation
 */
function initMapillaryViewer(map) {
    // Create viewer container
    var viewerContainer = $('<div>').addClass('mapillary-viewer')
        .append($('<button>').addClass('close-button').html('<i class="fa fa-times"></i>'))
        .append($('<div>').addClass('resize-handle'))
        .append($('<div>').addClass('credits')
            .append($('<div>').addClass('credit').html('© <a href="https://www.mapillary.com" target="_blank">Mapillary</a>'))
            .append($('<div>').addClass('credit').html('© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors')))
        .append($('<iframe>').attr('id', 'mapillary-iframe'));
    
    $('body').append(viewerContainer);

    // Create viewer button control
    var viewerControlBuild = function() {
        var container = $('<div>').addClass('ol-control ol-unselectable osmcat-mapillary');
        
        // Map view button
        var mapViewButton = $('<button type="button">')
            .html('<i class="fa fa-camera"></i>')
            .on('click', function() {
                if ($('.mapillary-viewer').hasClass('active')) {
                    hideMapillaryViewer();
                } else {
                    // Hide Panoramax viewer if it's active
                    if ($('.panoramax-viewer').hasClass('active')) {
                        hidePanoraMaxViewer();
                        $('.osmcat-panoramax button').removeClass('active');
                    }
                    var center = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
                    var zoom = map.getView().getZoom();
                    showMapillaryViewer(center[1], center[0], zoom);
                }
                $(this).toggleClass('active');
            });
        
        container.append(mapViewButton);
        return container[0];
    };

    // Add the viewer control to the map
    map.addControl(new ol.control.Control({
        element: viewerControlBuild()
    }));

    // Handle viewer close button
    $('.mapillary-viewer .close-button').on('click', function() {
        hideMapillaryViewer();
        $('.osmcat-mapillary button').removeClass('active');
    });

    // Make viewer resizable
    $('.mapillary-viewer').resizable({
        handles: 'e, s, se',
        minWidth: 300,
        minHeight: 200,
        resize: function(event, ui) {
            $('.mapillary-viewer iframe').css({
                width: ui.size.width,
                height: ui.size.height - 30 // Account for credits height
            });
        }
    });

    // Function to show the viewer
    function showMapillaryViewer(lat, lon, zoom) {
        // Build URL with embed parameters
        var url = `https://www.mapillary.com/embed?` +
            `map_style=OpenStreetMap&` +
            `lat=${lat}&` +
            `lng=${lon}&` +
            `z=${zoom}&` +
            `style=classic`;
        
        var iframe = $('#mapillary-iframe');
        
        // Force reload the iframe with new coordinates
        iframe.attr('src', 'about:blank');
        setTimeout(function() {
            iframe.attr('src', url);
        }, 100);
        
        $('.mapillary-viewer').addClass('active');
        $('#map').addClass('viewer-active');
    }

    // Function to hide the viewer
    function hideMapillaryViewer() {
        $('.mapillary-viewer').removeClass('active');
        $('#map').removeClass('viewer-active');
        setTimeout(function() {
            $('#mapillary-iframe').attr('src', '');
        }, 300);
    }

    // Handle map click events
    map.on('click', function(evt) {
        if ($('.mapillary-viewer').hasClass('active')) {
            var coords = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
            var zoom = map.getView().getZoom();
            showMapillaryViewer(coords[1], coords[0], zoom);
        }
    });
} 