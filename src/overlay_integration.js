// Import the overlays
import { allOverlays } from './overlays/index.js';

// Function to convert overlay to OpenLayers layer
function createOlLayer(overlay) {
    const vectorSource = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        loader: function(extent, resolution, projection) {
            const epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
            const bbox = [epsg4326Extent[1], epsg4326Extent[0], epsg4326Extent[3], epsg4326Extent[2]].join(',');
            const query = overlay.query.replace('{{bbox}}', bbox);
            
            const url = config.overpassApi() + '?data=' + encodeURIComponent(query);
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const features = new ol.format.GeoJSON().readFeatures(osmtogeojson(data), {
                        featureProjection: projection
                    });
                    vectorSource.addFeatures(features);
                })
                .catch(error => console.error('Error loading overlay data:', error));
        },
        strategy: ol.loadingstrategy.bbox
    });

    return new ol.layer.Vector({
        title: overlay.title,
        group: overlay.group,
        type: 'overlay',
        source: vectorSource,
        style: overlay.style,
        visible: false
    });
}

// Function to integrate overlays
function integrateOverlays() {
    if (window.config && window.config.layers) {
        // Find or create the overlay group
        let overlayGroup = window.config.layers.find(layer => 
            layer.get && layer.get('type') === 'overlay'
        );

        if (!overlayGroup) {
            overlayGroup = new ol.layer.Group({
                title: 'External Overlays',
                type: 'overlay',
                layers: []
            });
            window.config.layers.push(overlayGroup);
        }

        // Convert our overlays to OpenLayers layers
        const olLayers = allOverlays.map(createOlLayer);
        
        // Add layers to the overlay group
        const collection = overlayGroup.getLayers();
        olLayers.forEach(layer => {
            collection.push(layer);
        });

        // Update window.overlays for the search functionality
        const existingOverlays = window.overlays || [];
        window.overlays = [
            ...existingOverlays,
            ...allOverlays.map(overlay => ({
                title: overlay.title,
                group: overlay.group,
                id: overlay.id || '',
                ...overlay
            }))
        ];

        // Dispatch event to notify that overlays are ready
        window.dispatchEvent(new CustomEvent('overlaysReady', {
            detail: { overlays: window.overlays }
        }));

        // Trigger overlay list update
        if (window.renderOverlayList) {
            window.renderOverlayList(window.overlays);
        }
    }
}

// Listen for config to be available
if (window.config) {
    integrateOverlays();
} else {
    window.addEventListener('configLoaded', integrateOverlays);
}

// Re-integrate when new overlays are loaded
window.addEventListener('overlaysUpdated', function(event) {
    if (window.config) {
        integrateOverlays();
    }
}); 