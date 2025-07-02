// Import the overlays
import { allOverlays } from './overlays/index.js';
import { getCurrentLanguage } from './i18n/index.js';

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
                    console.log('Received data for ' + overlay.title);
                    if (!data || !data.elements) {
                        console.warn('No elements found in response for ' + overlay.title);
                        return;
                    }
                    const geojson = osmtogeojson(data);
                    const features = new ol.format.GeoJSON().readFeatures(geojson, {
                        featureProjection: projection
                    });
                    console.log('Added ' + features.length + ' features for ' + overlay.title);
                    vectorSource.addFeatures(features);
                })
                .catch(error => console.error('Error loading overlay data for ' + overlay.title + ':', error));
        },
        strategy: ol.loadingstrategy.bbox
    });

    const layer = new ol.layer.Vector({
        title: overlay.title,
        group: overlay.group,
        type: 'overlay',
        source: vectorSource,
        style: typeof overlay.style === 'function' ? overlay.style : undefined,
        visible: false
    });

    // Add a reference to the original overlay for easier access
    layer.overlay = overlay;
    
    return layer;
}

// Function to create overlay group
function createOverlayGroup(title, layers) {
    // Get the translated title
    const translatedTitle = window.getTranslation ? window.getTranslation(title) : title;
    
    // Create the group with the translated title
    const group = new ol.layer.Group({
        title: translatedTitle,
        type: 'overlay',
        // Store the original untranslated title for future translations
        originalTitle: title,
        layers: new ol.Collection(layers),
        visible: true
    });
    
    // Store the original title on each layer for reference
    layers.forEach(layer => {
        if (layer.overlay) {
            layer.overlay._originalGroup = title;
        }
    });
    
    return group;
}

// Function to integrate overlays
function integrateOverlays() {
    try {
        if (!window.config || !window.config.layers) {
            console.warn('Config or layers not available yet');
            return;
        }
        
        console.log('Integrating overlays...');
        
        // Store current visibility state
        const visibilityState = new Map();
        window.config.layers.forEach(layer => {
            if (layer.get('type') === 'overlay') {
                const title = layer.get('title');
                if (title) {
                    visibilityState.set(title, layer.getVisible());
                }
            }
        });
        
        // Clear existing overlay layers
        window.config.layers = window.config.layers.filter(layer => layer.get('type') !== 'overlay');
        
        // Flatten all overlays from all groups
        const allOverlaysFlat = [];
        Object.values(window.allOverlays || {}).forEach(group => {
            if (Array.isArray(group)) {
                allOverlaysFlat.push(...group);
            }
        });
        
        // Group overlays by their group property
        const groupMap = {};
        allOverlaysFlat.forEach(overlay => {
            if (!overlay || !overlay.group) return;
            const groupKey = overlay.group;
            if (!groupMap[groupKey]) {
                groupMap[groupKey] = [];
            }
            groupMap[groupKey].push(overlay);
        });
        
        // Create OpenLayers groups for each unique group name
        const overlayGroups = [];
        
        Object.entries(groupMap).forEach(([groupName, overlays]) => {
            try {
                const layers = overlays
                    .filter(overlay => overlay) // Filter out any null/undefined overlays
                    .map(overlay => createOlLayer(overlay));
                
                if (layers.length > 0) {
                    const group = createOverlayGroup(groupName, layers);
                    
                    // Restore visibility state if it exists
                    const groupTitle = group.get('title');
                    if (visibilityState.has(groupTitle)) {
                        group.setVisible(visibilityState.get(groupTitle));
                    }
                    
                    overlayGroups.push(group);
                }
            } catch (error) {
                console.error(`Error creating overlay group ${groupName}:`, error);
            }
        });
        
        // Add groups to config layers
        overlayGroups.forEach(group => {
            if (group) {
                window.config.layers.push(group);
            }
        });
        
        // Update window.overlays for the search functionality
        console.log('Updating window.overlays...');
        window.overlays = [];
        
        overlayGroups.forEach(group => {
            if (!group) return;
            
            const layers = group.getLayers().getArray();
            const groupName = group.get('originalTitle') || group.get('title');
            
            layers.forEach(layer => {
                if (layer) {
                    window.overlays.push({
                        title: layer.get('title'),
                        group: groupName,
                        id: layer.get('id') || '',
                        _olLayer: layer,
                        ...(layer.overlay || {}),
                        _originalGroup: groupName
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error integrating overlays:', error);
    }
    
    // Dispatch event to notify that overlays are ready
    console.log('Dispatching overlaysReady event...');
    window.dispatchEvent(new CustomEvent('overlaysReady', {
        detail: { 
            overlays: window.overlays,
            groups: overlayGroups
        }
    }));
    
    // Trigger overlay list update
    if (window.renderOverlayList) {
        console.log('Updating overlay list...');
        window.renderOverlayList(window.overlays);
    }
}

// Make integrateOverlays available globally
window.integrateOverlays = integrateOverlays;

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