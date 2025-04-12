/**
 * PanoraMax Viewer Implementation
 */
function initPanoraMaxViewer(map) {
    // Create viewer container
    var viewerContainer = $('<div>').addClass('panoramax-viewer')
        .append($('<button>').addClass('close-button').html('<i class="fa fa-times"></i>'))
        .append($('<iframe>'));
    
    $('body').append(viewerContainer);

    // Create viewer button control
    var viewerControlBuild = function() {
        var container = $('<div>').addClass('ol-control ol-unselectable osmcat-panoramax')
            .css({
                bottom: '70px',
                right: '8px'
            });
        
        var button = $('<button type="button">')
            .html('<i class="fa fa-street-view"></i>')
            .on('click', function() {
                var center = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
                showPanoraMaxViewer(center[1], center[0]);
            });
        
        container.append(button);
        return container[0];
    };

    // Add the viewer control to the map
    map.addControl(new ol.control.Control({
        element: viewerControlBuild()
    }));

    // Handle viewer close button
    $('.panoramax-viewer .close-button').on('click', function() {
        hidePanoraMaxViewer();
    });

    // Function to show the viewer
    function showPanoraMaxViewer(lat, lon) {
        var url = `https://api.panoramax.xyz/embed?lat=${lat}&lon=${lon}`;
        $('.panoramax-viewer iframe').attr('src', url);
        $('.panoramax-viewer').addClass('active');
        $('#map').addClass('viewer-active');
    }

    // Function to hide the viewer
    function hidePanoraMaxViewer() {
        $('.panoramax-viewer').removeClass('active');
        $('#map').removeClass('viewer-active');
        setTimeout(function() {
            $('.panoramax-viewer iframe').attr('src', '');
        }, 300);
    }

    // Handle map click events
    map.on('click', function(evt) {
        var coords = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
        showPanoraMaxViewer(coords[1], coords[0]);
    });
} 