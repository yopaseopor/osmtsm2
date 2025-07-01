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

// Function to create an OpenLayers group for overlays
function createOverlayGroup(title, layers) {
    // Ensure title is a string
    const groupName = String(title || '');
    
    // Get the translated title if translation function exists
    const translatedTitle = window.getTranslation ? window.getTranslation(groupName) : groupName;
    
    // Ensure layers is an array and create a new collection
    const layerCollection = new ol.Collection(Array.isArray(layers) ? layers : []);
    
    // Create the group with the original title (will be updated later)
    const group = new ol.layer.Group({
        title: groupName, // Will be updated to translated title
        type: 'overlay',
        layers: layerCollection,
        visible: true
    });
    
    // Store the original title for reference
    group.set('originalTitle', groupName);
    
    // Store the translated title
    group.set('translatedTitle', translatedTitle);
    
    // Set up layer references
    if (layers && layers.length) {
        layers.forEach(layer => {
            if (!layer) return;
            
            // Ensure the layer has an overlay property
            if (!layer.overlay) {
                layer.overlay = layer.get('overlay') || {};
            }
            
            // Store the original group reference
            layer.overlay._originalGroup = groupName;
            
            // Store a reference to the group on the layer
            layer.set('parentGroup', group);
            
            // Ensure the layer has a reference to its overlay data
            if (!layer.get('overlay')) {
                layer.set('overlay', layer.overlay);
            }
        });
    }
    
    return group;
}

// Function to integrate overlays
function integrateOverlays() {
    if (!window.config || !window.config.layers) return;
    
    console.log('Integrating overlays...');
    
    // Store the current map view state
    const mapView = window.map ? window.map.getView() : null;
    const viewState = mapView ? mapView.getState() : null;
    
    // Store current layer states
    const layerStates = new Map();
    window.config.layers.forEach(layer => {
        if (layer.get('type') === 'overlay') {
            layerStates.set(layer.get('title'), {
                visible: layer.getVisible(),
                opacity: layer.getOpacity()
            });
        }
    });
    
    // Remove only overlay layers, preserving base layers
    const baseLayers = window.config.layers.filter(layer => layer.get('type') !== 'overlay');
    window.config.layers = [...baseLayers];
    
    // Flatten all overlays from all groups
    const allOverlaysFlat = Object.values(window.allOverlays)
        .filter(Array.isArray)
        .flat()
        .map(overlay => ({
            ...overlay,
            // Preserve the original group name
            _originalGroup: overlay.group
        }));
    
    // Group overlays by their group property
    const groupMap = {};
    allOverlaysFlat.forEach(overlay => {
        if (!overlay.group) return;
        const groupKey = overlay.group;
        if (!groupMap[groupKey]) groupMap[groupKey] = [];
        groupMap[groupKey].push(overlay);
    });
    
    // Create OpenLayers groups for each unique group name
    const overlayGroups = {};
    
    Object.entries(groupMap).forEach(([groupName, overlays]) => {
        // Create layers for this group
        const layers = overlays.map(overlay => {
            const layer = createOlLayer(overlay);
            // Store the original overlay data on the layer for reference
            layer.overlay = overlay;
            return layer;
        });
        
        // Create the group with the original name (translation happens in createOverlayGroup)
        const group = createOverlayGroup(groupName, layers);
        
        // Store both original and translated group names
        group.set('originalGroupName', groupName);
        const translatedGroupName = window.getTranslation ? window.getTranslation(groupName) : groupName;
        group.set('title', translatedGroupName);
        
        // Restore previous state if available
        const prevState = layerStates.get(translatedGroupName) || layerStates.get(groupName);
        if (prevState) {
            group.setVisible(prevState.visible);
            if (prevState.opacity !== undefined) {
                group.setOpacity(prevState.opacity);
            }
        }
        
        // Store in overlayGroups with original name as key
        overlayGroups[groupName] = group;
    });
    
    // Add groups to config layers
    Object.values(overlayGroups).forEach(group => {
        window.config.layers.push(group);
    });
    
    // Update window.overlays for the search functionality
    console.log('Updating window.overlays...');
    window.overlays = [];
    
    Object.entries(overlayGroups).forEach(([groupName, group]) => {
        group.getLayers().forEach(layer => {
            window.overlays.push({
                title: layer.get('title'),
                group: groupName,
                id: layer.get('id') || '',
                _olLayer: layer,
                ...(layer.overlay || {}),
                _originalGroup: groupName
            });
        });
    });
    
    // Restore the map view if it was changed during overlay recreation
    if (mapView && viewState) {
        mapView.setState(viewState);
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
    
    // Update the map to reflect the changes
    if (window.map) {
        window.map.renderSync();
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