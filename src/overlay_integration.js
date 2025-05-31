// Import the overlays
import { allOverlays } from './overlays/index.js';
import { getCurrentLanguage, getTranslation } from './i18n/index.js';
import { languages } from './i18n/index.js';

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
        // Flatten all overlays from all groups
        const allOverlaysFlat = Object.values(window.allOverlays)
            .filter(Array.isArray)
            .flat();
        // Group overlays by their translated group property
        const groupMap = {};
        allOverlaysFlat.forEach(overlay => {
            if (!overlay.group || !overlay._groupKey) return;
            // Always use the group name in the current language for grouping
            let groupKey = getTranslation(overlay._groupKey);
            if (!groupMap[groupKey]) groupMap[groupKey] = [];
            groupMap[groupKey].push(overlay);
        });
        // Only keep groups that match the current language's translation
        const filteredGroupMap = {};
        const currentLang = getCurrentLanguage && getCurrentLanguage();
        Object.entries(groupMap).forEach(([groupName, overlays]) => {
            // For English, groupName must match the English translation; for others, must match the current language translation
            if (currentLang === 'en') {
                if (languages.en.translations[overlays[0]._groupKey] === groupName) {
                    filteredGroupMap[groupName] = overlays;
                }
            } else {
                if (languages[currentLang] && languages[currentLang].translations[overlays[0]._groupKey] === groupName) {
                    filteredGroupMap[groupName] = overlays;
                }
            }
        });
        // Create OpenLayers groups for each unique group name
        const overlayGroups = {};
        Object.entries(filteredGroupMap).forEach(([groupName, overlays]) => {
            const layers = overlays.map(overlay => createOlLayer(overlay));
            overlayGroups[groupName] = createOverlayGroup(groupName, layers);
        });
        // Add groups to config layers
        Object.values(overlayGroups).forEach(group => {
            window.config.layers.push(group);
        });
        // Update window.overlays for the search functionality
        console.log('Updating window.overlays...');
        window.overlays = Object.entries(overlayGroups).flatMap(([groupName, group]) => 
            group.getLayers().getArray().map(layer => ({
                title: layer.get('title'),
                group: groupName,
                id: layer.get('id') || '',
                _olLayer: layer,
                ...layer.overlay
            }))
        );
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