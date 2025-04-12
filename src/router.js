/* global config, ol */
function initRouter(map) {
    // Add route layer
    const routeLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: '#ff0000',
                width: 4
            })
        })
    });
    map.addLayer(routeLayer);

    // Initialize loading spinner
    const loading = {
        init: function () {
            this.count = 0;
            this.spinner = $('<div>').addClass('ol-control osmcat-loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
            $('#map').append(this.spinner);
        },
        show: function () {
            this.spinner.show();
            ++this.count;
        },
        hide: function () {
            --this.count;
            if (this.count < 1) {
                this.spinner.hide();
                this.count = 0;
            }
        }
    };
    loading.init();

    let startPlace = null;
    let endPlace = null;
    let viaPlace = null;
    let startMarker = null;
    let endMarker = null;
    let viaMarker = null;
    let clickHandler = null;

    // Create markers for points
    const createMarker = function(coordinate, type) {
        const icon = {
            start: 'play-circle',
            via: 'dot-circle',
            end: 'stop-circle'
        }[type];
        
        const marker = new ol.Overlay({
            position: coordinate,
            element: $('<div>')
                .addClass('route-marker')
                .html(`<i class="fa fa-${icon}"></i>`)[0],
            positioning: 'center-center'
        });
        map.addOverlay(marker);
        return marker;
    };

    // Add router button and dialog
    const routerButton = $('<button>')
        .addClass('osmcat-button')
        .html('<i class="fa fa-route"></i> Route')
        .on('click', function() {
            // Clear any existing markers and route
            if (startMarker) map.removeOverlay(startMarker);
            if (endMarker) map.removeOverlay(endMarker);
            if (viaMarker) map.removeOverlay(viaMarker);
            routeLayer.getSource().clear();
            
            startPlace = null;
            endPlace = null;
            viaPlace = null;
            startMarker = null;
            endMarker = null;
            viaMarker = null;

            const dialog = $('<div>').addClass('router-dialog').html(`
                <div class="router-form">
                    <div class="router-input">
                        <label>Start:</label>
                        <div class="location-input">
                            <input type="text" class="start-place" placeholder="Search start location...">
                            <button class="search-button"><i class="fa fa-search"></i></button>
                        </div>
                        <div class="search-results start-results"></div>
                    </div>
                    <div class="router-input">
                        <label>Via:</label>
                        <div class="location-input">
                            <input type="text" class="via-place" placeholder="Search via location...">
                            <button class="search-button"><i class="fa fa-search"></i></button>
                        </div>
                        <div class="search-results via-results"></div>
                    </div>
                    <div class="router-input">
                        <label>End:</label>
                        <div class="location-input">
                            <input type="text" class="end-place" placeholder="Search end location...">
                            <button class="search-button"><i class="fa fa-search"></i></button>
                        </div>
                        <div class="search-results end-results"></div>
                    </div>
                    <div class="router-input">
                        <label>Profile:</label>
                        <select class="profile-select">
                            <option value="driving">Car</option>
                            <option value="cycling">Bicycle</option>
                            <option value="foot">Walking</option>
                        </select>
                    </div>
                    <div class="click-hint">
                        <i class="fa fa-info-circle"></i> Click on the map to set locations
                    </div>
                    <button class="calculate-route">Calculate Route</button>
                </div>
            `);

            // Handle place search
            const searchPlace = function(input, resultsDiv) {
                const query = input.val();
                if (query.length < 3) return;

                fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
                    .then(response => response.json())
                    .then(data => {
                        resultsDiv.empty().show();
                        data.forEach(place => {
                            const result = $('<div>')
                                .addClass('search-result')
                                .html(`${place.display_name}<br><small>${place.lat}, ${place.lon}</small>`)
                                .on('click', function() {
                                    input.val(place.display_name);
                                    resultsDiv.hide();
                                    const coordinate = ol.proj.fromLonLat([parseFloat(place.lon), parseFloat(place.lat)]);
                                    if (input.hasClass('start-place')) {
                                        if (startMarker) map.removeOverlay(startMarker);
                                        startPlace = place;
                                        startMarker = createMarker(coordinate, 'start');
                                    } else if (input.hasClass('via-place')) {
                                        if (viaMarker) map.removeOverlay(viaMarker);
                                        viaPlace = place;
                                        viaMarker = createMarker(coordinate, 'via');
                                    } else {
                                        if (endMarker) map.removeOverlay(endMarker);
                                        endPlace = place;
                                        endMarker = createMarker(coordinate, 'end');
                                    }
                                });
                            resultsDiv.append(result);
                        });
                    });
            };

            // Setup search handlers
            dialog.find('.search-button').on('click', function() {
                const input = $(this).siblings('input');
                const resultsDiv = input.closest('.router-input').find('.search-results');
                searchPlace(input, resultsDiv);
            });

            // Handle map clicks
            clickHandler = function(evt) {
                const coordinate = evt.coordinate;
                const lonlat = ol.proj.toLonLat(coordinate);
                
                if (!startPlace) {
                    if (startMarker) map.removeOverlay(startMarker);
                    startPlace = { lon: lonlat[0], lat: lonlat[1] };
                    startMarker = createMarker(coordinate, 'start');
                    dialog.find('.start-place').val('Selected on map');
                } else if (!viaPlace) {
                    if (viaMarker) map.removeOverlay(viaMarker);
                    viaPlace = { lon: lonlat[0], lat: lonlat[1] };
                    viaMarker = createMarker(coordinate, 'via');
                    dialog.find('.via-place').val('Selected on map');
                } else if (!endPlace) {
                    if (endMarker) map.removeOverlay(endMarker);
                    endPlace = { lon: lonlat[0], lat: lonlat[1] };
                    endMarker = createMarker(coordinate, 'end');
                    dialog.find('.end-place').val('Selected on map');
                }
            };

            map.on('singleclick', clickHandler);

            // Calculate route
            dialog.find('.calculate-route').on('click', function() {
                if (!startPlace || !endPlace) {
                    alert('Please select both start and end locations');
                    return;
                }

                const profile = dialog.find('.profile-select').val();
                loading.show();
                
                // Build waypoints string
                let waypoints = `${startPlace.lon},${startPlace.lat}`;
                if (viaPlace) {
                    waypoints += `;${viaPlace.lon},${viaPlace.lat}`;
                }
                waypoints += `;${endPlace.lon},${endPlace.lat}`;
                
                const url = `https://router.project-osrm.org/route/v1/${profile}/${waypoints}?overview=full&geometries=geojson`;
                
                console.log('Calculating route with URL:', url); // Debug log
                
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Route data:', data); // Debug log
                        if (data.routes && data.routes[0]) {
                            const route = data.routes[0];
                            const format = new ol.format.GeoJSON();
                            const features = format.readFeatures(route.geometry);
                            routeLayer.getSource().clear();
                            routeLayer.getSource().addFeatures(features);
                            
                            // Show route info
                            const distance = (route.distance / 1000).toFixed(1);
                            const duration = Math.round(route.duration / 60);
                            alert(`Route calculated!\nDistance: ${distance} km\nDuration: ${duration} minutes`);
                            
                            // Zoom to route
                            const extent = routeLayer.getSource().getExtent();
                            map.getView().fit(extent, {
                                padding: [50, 50, 50, 50],
                                duration: 1000
                            });
                        } else {
                            throw new Error('No route found');
                        }
                        loading.hide();
                        dialog.dialog('close');
                    })
                    .catch(error => {
                        console.error('Error fetching route:', error);
                        loading.hide();
                        alert('Error calculating route: ' + error.message);
                    });
            });

            dialog.dialog({
                title: 'Route Calculator',
                width: 400,
                modal: true,
                close: function() {
                    if (clickHandler) {
                        map.un('singleclick', clickHandler);
                        clickHandler = null;
                    }
                    $(this).dialog('destroy');
                }
            });
        });

    $('#menu').append(routerButton);

    // Add CSS for router dialog
    $('<style>')
        .text(`
            .router-dialog .router-form {
                padding: 10px;
            }
            .router-dialog .router-input {
                margin-bottom: 15px;
            }
            .router-dialog label {
                display: block;
                margin-bottom: 5px;
            }
            .router-dialog .location-input {
                display: flex;
                gap: 5px;
            }
            .router-dialog .location-input input {
                flex: 1;
                padding: 5px;
            }
            .router-dialog .search-button {
                padding: 5px 10px;
                background-color: #4CAF50;
                color: white;
                border: none;
                cursor: pointer;
            }
            .router-dialog .search-button:hover {
                background-color: #45a049;
            }
            .router-dialog select {
                width: 100%;
                padding: 5px;
            }
            .router-dialog .search-results {
                max-height: 150px;
                overflow-y: auto;
                border: 1px solid #ccc;
                margin-top: 5px;
                display: none;
            }
            .router-dialog .search-result {
                padding: 5px;
                cursor: pointer;
                border-bottom: 1px solid #eee;
            }
            .router-dialog .search-result:hover {
                background-color: #f0f0f0;
            }
            .router-dialog .click-hint {
                margin: 10px 0;
                color: #666;
                font-style: italic;
            }
            .router-dialog .calculate-route {
                width: 100%;
                padding: 10px;
                background-color: #4CAF50;
                color: white;
                border: none;
                cursor: pointer;
            }
            .router-dialog .calculate-route:hover {
                background-color: #45a049;
            }
            .route-marker {
                font-size: 24px;
                color: #4CAF50;
                text-shadow: 0 0 3px white;
            }
        `)
        .appendTo('head');
}