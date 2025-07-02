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
            console.warn('Config or layers not available');
            return;
        }
        
        console.log('Integrating overlays...');
        
        // Store current visibility state of layers by title
        const visibilityState = {};
        const originalTitles = {};
        
        // First, collect visibility states and original titles
        window.config.layers.forEach(layer => {
            if (layer.get('type') === 'overlay') {
                const title = layer.get('title');
                const originalTitle = layer.get('originalTitle') || title;
                if (title) {
                    visibilityState[originalTitle] = layer.getVisible();
                    originalTitles[title] = originalTitle;
                }
            }
        });
        
        // Clear existing overlay layers
        window.config.layers = window.config.layers.filter(layer => layer.get('type') !== 'overlay');
        
        // Flatten all overlays from all groups
        const allOverlaysFlat = Object.values(window.allOverlays)
            .filter(Array.isArray)
            .flat();
            
        // Group overlays by their group property
        const groupMap = {};
        allOverlaysFlat.forEach(overlay => {
            if (!overlay.group) return;
            
            // Store the original group name if not already set
            overlay._originalGroup = overlay._originalGroup || overlay.group;
            const groupKey = overlay._originalGroup;
            
            if (!groupMap[groupKey]) groupMap[groupKey] = [];
            groupMap[groupKey].push(overlay);
        });
        
        // Create OpenLayers groups for each unique group name
        const overlayGroups = {};
        Object.entries(groupMap).forEach(([groupName, overlays]) => {
            try {
                // Create layers for this group
                const layers = overlays.map(overlay => {
                    const layer = createOlLayer(overlay);
                    // Make sure the original title is preserved
                    if (overlay._originalTitle) {
                        layer.set('originalTitle', overlay._originalTitle);
                    }
                    return layer;
                });
                
                // Create the group with the original name (translation will happen in createOverlayGroup)
                const group = createOverlayGroup(groupName, layers);
                
                // Restore visibility state if it exists
                const originalGroupTitle = group.get('originalTitle') || groupName;
                if (originalGroupTitle in visibilityState) {
                    group.setVisible(visibilityState[originalGroupTitle]);
                }
                
                overlayGroups[groupName] = group;
            } catch (error) {
                console.error(`Error creating overlay group ${groupName}:`, error);
            }
        });
        
        // Add groups to config layers
        Object.values(overlayGroups).forEach(group => {
            if (group) {
                window.config.layers.push(group);
            }
        });
        
        // Update window.overlays for the search functionality
        console.log('Updating window.overlays...');
        window.overlays = [];
        
        Object.entries(overlayGroups).forEach(([groupName, group]) => {
            if (!group || !group.getLayers) return;
            
            const layers = group.getLayers().getArray();
            layers.forEach(layer => {
                window.overlays.push({
                    title: layer.get('title'),
                    group: groupName, // Keep original group name for reference
                    id: layer.get('id') || '',
                    _olLayer: layer,
                    ...(layer.overlay || {}),
                    _originalGroup: groupName
                });
            });
        });
        
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
        
        console.log('Overlay integration complete');
        
    } catch (error) {
        console.error('Error in integrateOverlays:', error);
        // Try to recover by dispatching the overlaysReady event anyway
        window.dispatchEvent(new CustomEvent('overlaysReady', {
            detail: { 
                overlays: window.overlays || [],
                groups: {}
            }
        }));
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