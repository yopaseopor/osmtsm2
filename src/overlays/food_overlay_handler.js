import { foodOverlays } from './groups/food.js';

export function initializeFoodOverlays(map, config) {
    const overlayGroups = {};
    
    foodOverlays.forEach(overlay => {
        const vectorSource = new ol.source.Vector({
            format: new ol.format.OSMXML(),
            loader: function(extent, resolution, projection) {
                const epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
                const bbox = epsg4326Extent[1] + ',' + epsg4326Extent[0] + ',' + epsg4326Extent[3] + ',' + epsg4326Extent[2];
                const query = overlay.query.replace(/{{bbox}}/g, bbox);

                // Show loading indicator
                if (window.loading && window.loading.show) {
                    window.loading.show();
                }

                fetch(config.overpassApi(), {
                    method: 'POST',
                    body: query
                })
                .then(response => response.text())
                .then(data => {
                    const features = new ol.format.OSMXML().readFeatures(data, {
                        featureProjection: projection
                    });
                    vectorSource.addFeatures(features);
                })
                .catch(error => {
                    console.error('Error loading food overlay:', error);
                })
                .finally(() => {
                    // Hide loading indicator
                    if (window.loading && window.loading.hide) {
                        window.loading.hide();
                    }
                });
            },
            strategy: ol.loadingstrategy.bbox
        });

        const vectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: overlay.style,
            visible: false,
            title: overlay.title,
            group: overlay.group
        });

        // Add to overlay groups
        if (!overlayGroups[overlay.group]) {
            overlayGroups[overlay.group] = [];
        }
        overlayGroups[overlay.group].push(vectorLayer);
    });

    // Create layer groups and add to map
    Object.entries(overlayGroups).forEach(([groupName, layers]) => {
        const layerGroup = new ol.layer.Group({
            title: groupName,
            type: 'overlay',
            layers: layers
        });
        map.addLayer(layerGroup);
    });

    // Return the overlay groups for further use
    return overlayGroups;
}

// Food overlay handler - integrates with existing overlay system
(function(window) {
    // Food overlays configuration
    window.foodOverlays = [
        {
            group: 'Food',
            title: 'McDonald\'s',
            query: '(nwr["brand:wikidata"="Q38076"]({{bbox}});node(w););out meta;',
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png',
            iconStyle: 'background-color:rgba(255,255,255,0.4)',
            style: function (feature) {
                var name = feature.get('name') || '';
                return new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png',
                        scale: 0.10
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX: 7,
                        offsetY: -12,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
                    })
                });
            }
        },
        {
            group: 'Food',
            title: 'Starbucks',
            query: '(nwr["brand:wikidata"="Q37158"]({{bbox}});node(w););out meta;',
            iconSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/1200px-Starbucks_Coffee_Logo.svg.png',
            iconStyle: 'background-color:rgba(255,255,255,0.4)',
            style: function (feature) {
                var name = feature.get('name') || '';
                return new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/1200px-Starbucks_Coffee_Logo.svg.png',
                        scale: 0.10
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX: 7,
                        offsetY: -12,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        })
                    })
                });
            }
        }
    ];

    // Add food overlays to config.overlays
    if (!config.overlays) {
        config.overlays = [];
    }
    config.overlays = config.overlays.concat(window.foodOverlays);

})(window); 