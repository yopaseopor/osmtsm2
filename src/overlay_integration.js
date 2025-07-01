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
    
    // Store the original title and group on each layer for reference
    layers.forEach(layer => {
        if (layer.overlay) {
            // Preserve the original group name
            if (!layer.overlay._originalGroup) {
                layer.overlay._originalGroup = title;
            }
            
            // Ensure the layer has a reference to its overlay
            if (!layer.overlay.layer) {
                layer.overlay.layer = layer;
            }
            
            // Ensure the layer has the correct title and group
            layer.set('title', layer.overlay.title || title);
            layer.set('group', translatedTitle);
            
            // Store a reference to the original overlay object
            layer.originalOverlay = layer.overlay;
        }
    });
    
    // Store a reference to the original overlay objects
    group.originalOverlays = layers.map(layer => layer.overlay);
    
    return group;
}

// Function to integrate overlays
function integrateOverlays() {
    if (!window.config || !window.config.layers) return;
    
    console.log('Integrating overlays...');
    
    // Store existing overlay layers and their sources
    const existingOverlays = new Map();
    window.config.layers.forEach(layer => {
        if (layer.get('type') === 'overlay') {
            const title = layer.get('title');
            const visible = layer.getVisible();
            const source = layer.getSource();
            existingOverlays.set(title, { visible, source });
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
        let groupKey = overlay.group;
        // Store the original group key for reference
        overlay._originalGroup = groupKey;
        if (!groupMap[groupKey]) groupMap[groupKey] = [];
        groupMap[groupKey].push(overlay);
    });
    
    // Create OpenLayers groups for each unique group name
    const overlayGroups = {};
    Object.entries(groupMap).forEach(([groupName, overlays]) => {
        const layers = overlays.map(overlay => {
            // Check if we have an existing layer with the same title
            const existingLayer = Array.from(existingOverlays.entries()).find(
                ([title, _]) => title === overlay.title
            );
            
            if (existingLayer) {
                // Reuse the existing source if available
                const existingSource = existingLayer[1].source;
                if (existingSource) {
                    // Create a new layer with the existing source
                    const layer = new ol.layer.Vector({
                        title: overlay.title,
                        group: overlay.group,
                        type: 'overlay',
                        source: existingSource,
                        style: typeof overlay.style === 'function' ? overlay.style : undefined,
                        visible: existingLayer[1].visible
                    });
                    layer.overlay = overlay;
                    return layer;
                }
            }
            
            // Otherwise create a new layer
            return createOlLayer(overlay);
        });
        
        overlayGroups[groupName] = createOverlayGroup(groupName, layers);
    });
    
    // Add groups to config layers
    Object.values(overlayGroups).forEach(group => {
        window.config.layers.push(group);
    });
    
    // Update window.overlays for the search functionality
    console.log('Updating window.overlays...');
    window.overlays = Object.entries(overlayGroups).flatMap(([groupName, group]) => {
        return group.getLayers().getArray().map(layer => ({
            title: layer.get('title'),
            group: groupName, // Keep original group name for reference
            id: layer.get('id') || '',
            _olLayer: layer,
            ...layer.overlay,
            _originalGroup: groupName
        }));
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