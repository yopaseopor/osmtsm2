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
            
            const url = window.config.overpassApi() + '?data=' + encodeURIComponent(query);
            
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

    const layer = new ol.layer.Vector({
        title: overlay.title,
        group: overlay.group,
        type: 'overlay',
        source: vectorSource,
        style: overlay.style,
        visible: false
    });

    // Add a reference to the original overlay for easier access
    layer.overlay = overlay;
    
    return layer;
}

// Function to integrate overlays
function integrateOverlays() {
    if (window.config && window.config.layers) {
        console.log('Integrating overlays...');
        
        // Find or create the overlay group
        let overlayGroup = window.config.layers.find(layer => 
            layer.get && layer.get('type') === 'overlay'
        );

        if (!overlayGroup) {
            console.log('Creating new overlay group...');
            overlayGroup = new ol.layer.Group({
                title: 'External Overlays',
                type: 'overlay',
                layers: new ol.Collection()
            });
            window.config.layers.push(overlayGroup);
        }

        // Convert our overlays to OpenLayers layers
        console.log('Creating overlay layers...');
        const olLayers = allOverlays.map(createOlLayer);
        
        // Add layers to the overlay group
        console.log('Adding layers to overlay group...');
        const collection = overlayGroup.getLayers();
        olLayers.forEach(layer => {
            collection.push(layer);
        });

        // Update window.overlays for the search functionality
        console.log('Updating window.overlays...');
        const existingOverlays = window.overlays || [];
        window.overlays = [
            ...existingOverlays,
            ...olLayers.map(layer => ({
                title: layer.get('title'),
                group: layer.get('group'),
                id: layer.get('id') || '',
                _olLayer: layer,
                ...layer.overlay
            }))
        ];

        // Dispatch event to notify that overlays are ready
        console.log('Dispatching overlaysReady event...');
        window.dispatchEvent(new CustomEvent('overlaysReady', {
            detail: { overlays: window.overlays }
        }));

        // Trigger overlay list update
        if (window.renderOverlayList) {
            console.log('Updating overlay list...');
            window.renderOverlayList(window.overlays);
        }
    } else {
        console.warn('Config or config.layers not available yet');
    }
}

// Initialize when the module loads
console.log('Overlay integration module loaded');

// Listen for config to be available
if (window.config) {
    console.log('Config already available, integrating overlays...');
    integrateOverlays();
} else {
    console.log('Waiting for config to be available...');
    window.addEventListener('configLoaded', () => {
        console.log('Config loaded, integrating overlays...');
        integrateOverlays();
    });
}

// Re-integrate when new overlays are loaded
window.addEventListener('overlaysUpdated', function(event) {
    console.log('Overlays updated, re-integrating...');
    if (window.config) {
        integrateOverlays();
    }
}); 