/**
 * PanoraMax Viewer Implementation
 */
function initPanoraMaxViewer(map) {
    // Create viewer container
    var viewerContainer = $('<div>').addClass('panoramax-viewer')
        .append($('<button>').addClass('close-button').html('<i class="fa fa-times"></i>'))
        .append($('<div>').addClass('resize-handle'))
        .append($('<div>').addClass('credits')
            .append($('<div>').addClass('credit').html('© <a href="https://panoramax.xyz" target="_blank">Panoramax</a>'))
            .append($('<div>').addClass('credit').html('© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'))
            .append($('<div>').addClass('credit').html('© <a href="#" class="photographer-credit" target="_blank">Photographer</a>')))
        .append($('<iframe>'));
    
    $('body').append(viewerContainer);

    // Create tracks layer
    var tracksLayer = new ol.layer.Vector({
        title: 'Panoramax Tracks',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: 'https://api.panoramax.xyz/api/tracks',
            strategy: ol.loadingstrategy.bbox
        }),
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#FF0000',
                width: 2
            })
        }),
        visible: false
    });

    // Add tracks layer to map
    map.addLayer(tracksLayer);

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
                var center = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
                var zoom = map.getView().getZoom();
                showPanoraMaxViewer(center[1], center[0], zoom);
            });
        
        // Tracks toggle button
        var tracksButton = $('<button type="button">')
            .html('<i class="fa fa-map-marker"></i>')
            .on('click', function() {
                tracksLayer.setVisible(!tracksLayer.getVisible());
                $(this).toggleClass('active');
            });
        
        container.append(mapViewButton, tracksButton);
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
        var zoom = map.getView().getZoom();
        showPanoraMaxViewer(coords[1], coords[0], zoom);
    });
} 