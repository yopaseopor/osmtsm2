/**
 * OSRM Router Implementation
 */
function initOSRMRouter(map) {
    // Create router container
    var routerContainer = $('<div>').addClass('osrm-router')
        .append($('<button>').addClass('close-button').html('<i class="fa fa-times"></i>'))
        .append($('<div>').addClass('resize-handle'))
        .append($('<div>').addClass('profile-selector')
            .append($('<select>').attr('id', 'osrm-profile')
                .append($('<option>').val('car').text('Car'))
                .append($('<option>').val('bike').text('Bike'))
                .append($('<option>').val('foot').text('Foot')))
        .append($('<iframe>').attr('id', 'osrm-iframe'));
    
    $('body').append(routerContainer);

    // Create router button control
    var routerControlBuild = function() {
        var container = $('<div>').addClass('ol-control ol-unselectable osmcat-osrm')
            .css({
                bottom: '150px',
                right: '8px'
            });
        
        // Router button
        var routerButton = $('<button type="button">')
            .html('<i class="fa fa-route"></i>')
            .on('click', function() {
                if ($('.osrm-router').hasClass('active')) {
                    hideOSRMRouter();
                } else {
                    var center = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
                    var zoom = map.getView().getZoom();
                    showOSRMRouter(center[1], center[0], zoom);
                }
                $(this).toggleClass('active');
            });
        
        container.append(routerButton);
        return container[0];
    };

    // Add the router control to the map
    map.addControl(new ol.control.Control({
        element: routerControlBuild()
    }));

    // Handle router close button
    $('.osrm-router .close-button').on('click', function() {
        hideOSRMRouter();
        $('.osmcat-osrm button').removeClass('active');
    });

    // Make router resizable
    $('.osrm-router').resizable({
        handles: 'e, s, se',
        minWidth: 300,
        minHeight: 200,
        resize: function(event, ui) {
            $('.osrm-router iframe').css({
                width: ui.size.width,
                height: ui.size.height - 30 // Account for profile selector height
            });
        }
    });

    // Function to show the router
    function showOSRMRouter(lat, lon, zoom) {
        var profile = $('#osrm-profile').val();
        // Build URL with official parameters
        var url = `https://map.project-osrm.org/#` +
            `profile=${profile}&` +
            `map=${zoom}/${lat}/${lon}`;
        
        var iframe = $('#osrm-iframe');
        
        // Force reload the iframe with new coordinates
        iframe.attr('src', 'about:blank');
        setTimeout(function() {
            iframe.attr('src', url);
        }, 100);
        
        $('.osrm-router').addClass('active');
        $('#map').addClass('router-active');
    }

    // Function to hide the router
    function hideOSRMRouter() {
        $('.osrm-router').removeClass('active');
        $('#map').removeClass('router-active');
        setTimeout(function() {
            $('#osrm-iframe').attr('src', '');
        }, 300);
    }

    // Handle profile change
    $('#osrm-profile').on('change', function() {
        if ($('.osrm-router').hasClass('active')) {
            var center = ol.proj.transform(map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326');
            var zoom = map.getView().getZoom();
            showOSRMRouter(center[1], center[0], zoom);
        }
    });
} 