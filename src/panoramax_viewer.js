/**
 * PanoraMax Viewer Implementation
 */
function initPanoraMaxViewer(map) {
    // Create viewer container
    var viewerContainer = $('<div>').addClass('panoramax-viewer')
        .append($('<button>').addClass('close-button').html('<i class="fa fa-times"></i>'))
        .append($('<div>').addClass('resize-handle'))
        .append($('<div>').addClass('controls')
            .append($('<button>').addClass('prev-button').html('<i class="fa fa-chevron-left"></i>'))
            .append($('<button>').addClass('next-button').html('<i class="fa fa-chevron-right"></i>')))
        .append($('<div>').addClass('credits')
            .append($('<div>').addClass('credit').html('© <a href="https://panoramax.xyz" target="_blank">Panoramax</a>'))
            .append($('<div>').addClass('credit').html('© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'))
            .append($('<div>').addClass('credit').html('© <span class="photographer"></span>')))
        .append($('<iframe>'));
    
    $('body').append(viewerContainer);

    // Create viewer button control
    var viewerControlBuild = function() {
        var container = $('<div>').addClass('ol-control ol-unselectable osmcat-panoramax')
            .css({
                bottom: '70px',
                right: '8px'
            });
        
        // Map view button
        var mapViewButton = $('<button type="button">')
            .html('<i class="fa fa-map"></i>')
            .on('click', function() {
                if ($('.panoramax-viewer').hasClass('active')) {
                    hidePanoraMaxViewer();
                } else {
                    var center = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
                    var zoom = map.getView().getZoom();
                    showPanoraMaxViewer(center[1], center[0], zoom);
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
    $('.panoramax-viewer .close-button').on('click', function() {
        hidePanoraMaxViewer();
        $('.osmcat-panoramax button').removeClass('active');
    });

    // Handle navigation buttons
    $('.panoramax-viewer .prev-button').on('click', function() {
        var iframe = $('.panoramax-viewer iframe')[0];
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage('prev', '*');
        }
    });

    $('.panoramax-viewer .next-button').on('click', function() {
        var iframe = $('.panoramax-viewer iframe')[0];
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage('next', '*');
        }
    });

    // Make viewer resizable
    $('.panoramax-viewer').resizable({
        handles: 'e, s, se',
        minWidth: 300,
        minHeight: 200,
        resize: function(event, ui) {
            $('.panoramax-viewer iframe').css({
                width: ui.size.width,
                height: ui.size.height - 30 // Account for credits height
            });
        }
    });

    // Function to show the viewer
    function showPanoraMaxViewer(lat, lon, zoom) {
        var url = `https://api.panoramax.xyz/#focus=map&map=${zoom}/${lat}/${lon}`;
        var iframe = $('.panoramax-viewer iframe');
        if (iframe.attr('src') !== url) {
            iframe.attr('src', url);
        }
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
        if ($('.panoramax-viewer').hasClass('active')) {
            var coords = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
            var zoom = map.getView().getZoom();
            showPanoraMaxViewer(coords[1], coords[0], zoom);
        }
    });
} 