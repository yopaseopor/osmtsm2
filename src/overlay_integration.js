// Import the overlays
import { allOverlays } from './overlays/index.js';

// Function to convert overlay to OpenLayers layer
function createOlLayer(overlay) {
    return new ol.layer.Vector({
        title: overlay.title,
        group: overlay.group,
        type: 'overlay',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: function(extent) {
                return config.overpassApi() + '?data=' + encodeURIComponent(
                    overlay.query.replace('{{bbox}}', 
                    [extent[1], extent[0], extent[3], extent[2]].join(','))
                );
            },
            strategy: ol.loadingstrategy.bbox
        }),
        style: overlay.style,
        visible: false
    });
}

// Function to integrate overlays
function integrateOverlays() {
    if (window.config) {
        // Create overlay layer group if it doesn't exist
        let overlayGroup = config.layers.find(layer => layer.get && layer.get('type') === 'overlay');
        if (!overlayGroup) {
            overlayGroup = new ol.layer.Group({
                title: 'Overlays',
                type: 'overlay'
            });
            config.layers.push(overlayGroup);
        }

        // Convert our overlays to OpenLayers layers
        const olLayers = allOverlays.map(createOlLayer);
        
        // Add layers to the overlay group
        overlayGroup.getLayers().extend(olLayers);

        // Update window.overlays for the search functionality
        window.overlays = allOverlays.map(overlay => ({
            title: overlay.title,
            group: overlay.group,
            id: overlay.id || '',
            ...overlay
        }));

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