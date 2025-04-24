// Import the overlays
import overlayCategories, { allOverlays } from './overlays/index.js';

// Function to convert overlay to OpenLayers layer
function createOlLayer(overlay) {
    const vectorSource = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        loader: function(extent, resolution, projection) {
            const epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
            const bbox = [epsg4326Extent[1], epsg4326Extent[0], epsg4326Extent[3], epsg4326Extent[2]].join(',');
            const query = overlay.query.replace('{{bbox}}', bbox);
            
            const url = window.config.overpassApi() + '?data=' + encodeURIComponent(query);
            console.log('Loading overlay data from:', url);
            
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Received data for ' + overlay.title + ':', data);
                    if (!data || !data.elements) {
                        console.warn('No elements found in response');
                        return;
                    }
                    const geojson = osmtogeojson(data);
                    console.log('Converted to GeoJSON:', geojson);
                    const features = new ol.format.GeoJSON().readFeatures(geojson, {
                        featureProjection: projection
                    });
                    console.log('Created features:', features);
                    vectorSource.addFeatures(features);
                })
                .catch(error => console.error('Error loading overlay data:', error));
        },
        strategy: ol.loadingstrategy.bbox
    });

    const layer = new ol.layer.Vector({
        title: overlay.title,
        group: overlay.group,
        category: overlay.category,
        type: 'overlay',
        source: vectorSource,
        style: function(feature) {
            if (typeof overlay.style === 'function') {
                return overlay.style.call(overlay, feature);
            }
            // Default style if none provided
            return new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 6,
                    fill: new ol.style.Fill({
                        color: 'rgba(0, 0, 255, 0.4)'
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'blue',
                        width: 1
                    })
                })
            });
        },
        visible: false
    });

    // Add a reference to the original overlay for easier access
    layer.overlay = overlay;
    
    return layer;
}

// Function to create overlay group
function createOverlayGroup(title, layers) {
    return new ol.layer.Group({
        title: title,
        type: 'overlay',
        layers: new ol.Collection(layers),
        visible: true
    });
}

// Function to integrate overlays
function integrateOverlays() {
    if (window.config && window.config.layers) {
        console.log('Integrating overlays...');
        
        // Create layers for each category
        const categoryGroups = {};
        Object.entries(overlayCategories).forEach(([category, overlays]) => {
            console.log(`Creating layers for category ${category}...`);
            const layers = overlays.map(overlay => {
                overlay.category = category; // Add category to overlay
                return createOlLayer(overlay);
            });
            categoryGroups[category] = createOverlayGroup(
                getTranslation(category) || category,
                layers
            );
        });
        
        // Add category groups to config layers
        Object.values(categoryGroups).forEach(group => {
            window.config.layers.push(group);
        });

        // Update window.overlays for the search functionality
        console.log('Updating window.overlays...');
        window.overlays = allOverlays.map(overlay => ({
            title: overlay.title,
            group: overlay.group,
            category: overlay.category,
            id: overlay.id || '',
            query: overlay.query,
            iconSrc: overlay.iconSrc,
            style: overlay.style
        }));

        // Dispatch event to notify that overlays are ready
        console.log('Dispatching overlaysReady event...');
        window.dispatchEvent(new CustomEvent('overlaysReady', {
            detail: { 
                overlays: window.overlays,
                categories: categoryGroups
            }
        }));

        // Update overlay list
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
    console.log('Overlays updated, re-integrating...', event.detail);
    if (window.config) {
        integrateOverlays();
    }
}); 