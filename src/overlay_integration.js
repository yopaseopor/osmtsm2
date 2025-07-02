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
        console.log('Integrating overlays...');
        
        if (!window.config) {
            console.error('Window config is not available');
            return;
        }
        
        if (!window.config.layers) {
            console.error('Config layers is not available');
            return;
        }
        
        // Store current overlay visibility states
        const visibilityStates = new Map();
        const overlayLayers = window.config.layers.filter(layer => layer.get('type') === 'overlay');
        
        overlayLayers.forEach(layer => {
            const title = layer.get('title');
            if (title) {
                visibilityStates.set(title, {
                    visible: layer.getVisible(),
                    expanded: layer.get('expanded')
                });
            }
            
            // Clean up old layers
            if (layer.getLayers) {
                const layers = layer.getLayers().getArray();
                layers.forEach(l => {
                    const source = l.getSource();
                    if (source && source.clear) {
                        source.clear(true);
                    }
                    l.dispose && l.dispose();
                });
            }
            
            if (layer.dispose) {
                layer.dispose();
            }
        });
        
        // Clear existing overlay layers
        window.config.layers = window.config.layers.filter(layer => layer.get('type') !== 'overlay');
        
        // Flatten all overlays from all groups
        const allOverlaysFlat = Object.values(window.allOverlays || {})
            .filter(Array.isArray)
            .flat()
            .filter(overlay => overlay && overlay.group); // Filter out invalid overlays
        
        console.log(`Processing ${allOverlaysFlat.length} overlays...`);
        
        // Group overlays by their group property
        const groupMap = new Map();
        allOverlaysFlat.forEach(overlay => {
            if (!overlay.group) return;
            
            const groupKey = overlay.group;
            overlay._originalGroup = groupKey; // Store original group for reference
            
            if (!groupMap.has(groupKey)) {
                groupMap.set(groupKey, []);
            }
            groupMap.get(groupKey).push(overlay);
        });
        
        console.log(`Created ${groupMap.size} overlay groups`);
        
        // Create OpenLayers groups for each unique group name
        const overlayGroups = new Map();
        
        groupMap.forEach((overlays, groupName) => {
            try {
                const layers = overlays.map(overlay => {
                    try {
                        return createOlLayer(overlay);
                    } catch (error) {
                        console.error(`Error creating layer for overlay:`, overlay, error);
                        return null;
                    }
                }).filter(Boolean);
                
                if (layers.length > 0) {
                    const group = createOverlayGroup(groupName, layers);
                    overlayGroups.set(groupName, group);
                    
                    // Restore visibility state if it exists
                    const groupTitle = group.get('title');
                    const state = visibilityStates.get(groupTitle);
                    
                    if (state) {
                        group.setVisible(state.visible);
                        group.set('expanded', state.expanded);
                    }
                }
            } catch (error) {
                console.error(`Error processing overlay group ${groupName}:`, error);
            }
        });
        
        // Add groups to config layers
        overlayGroups.forEach(group => {
            window.config.layers.push(group);
        });
        
        // Update window.overlays for the search functionality
        console.log('Updating window.overlays...');
        window.overlays = [];
        
        overlayGroups.forEach((group, groupName) => {
            const layers = group.getLayers().getArray();
            layers.forEach(layer => {
                if (layer && layer.get('title')) {
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
        
        console.log(`Updated ${window.overlays.length} overlay references`);
        
        // Dispatch event to notify that overlays have been updated
        window.dispatchEvent(new CustomEvent('overlaysUpdated', {
            detail: { overlays: window.overlays }
        }));
        
        return window.overlays;
        
    } catch (error) {
        console.error('Error in integrateOverlays:', error);
        // Try to recover by reloading the page
        setTimeout(() => window.location.reload(), 1000);
        return [];
    }
    
    // The overlaysReady event is now dispatched in the main try-catch block
    // This ensures it only happens once after all overlays are properly initialized
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