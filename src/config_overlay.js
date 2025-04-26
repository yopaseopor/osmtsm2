import { allOverlays } from './overlays/index.js';

// Create overlay configuration
// Helper to merge overlays from group folders
function mergeGroupOverlays(baseOverlays, allOverlays) {
    const groupKeys = ['food', 'shopping', 'health', 'transport', 'education', 'translated'];
    let overlays = baseOverlays.slice();
    groupKeys.forEach(groupName => {
        if (Array.isArray(allOverlays[groupName])) {
            allOverlays[groupName].forEach(overlay => {
                // Avoid duplicates by title+group
                if (!overlays.some(ov => ov.title === overlay.title && ov.group === (overlay.group || groupName))) {
                    overlays.push({
                        group: (typeof window.getTranslation === 'function' && ['food','shopping','health','transport','education','leisure','culture','services','accommodation','religion'].includes((overlay.group || groupName)))
    ? window.getTranslation(overlay.group || groupName)
    : (overlay.group || groupName),
                        title: overlay.title,
                        query: overlay.query,
                        iconSrc: overlay.iconSrc,
                        iconStyle: overlay.iconStyle,
                        style: overlay.style || function(feature) {
                            return new ol.style.Style({
                                image: new ol.style.Icon({
                                    src: overlay.iconSrc,
                                    scale: 0.5
                                })
                            });
                        },
                        visible: false
                    });
                }
            });
        }
    });
    return overlays;
}

// Patch: When creating overlay groups, store the original group key for translation
function patchOverlayGroupsWithGroupKey(layers, allOverlays) {
    const groupKeys = ['food', 'shopping', 'health', 'transport', 'education', 'leisure', 'culture', 'services', 'accommodation', 'religion', 'translated'];
    layers.forEach(layer => {
        if (layer.get && layer.get('type') === 'overlay') {
            // Try to match by group title
            for (const groupKey of groupKeys) {
                if (Array.isArray(allOverlays[groupKey])) {
                    const match = allOverlays[groupKey].some(overlay => layer.getLayers().getArray().some(ol => ol.get('title') === overlay.title));
                    if (match) {
                        layer.set('groupKey', groupKey);
                        break;
                    }
                }
            }
        }
    });
}

export const overlayConfig = {
    overlays: mergeGroupOverlays(
        Object.entries(allOverlays).flatMap(([groupName, groupOverlays]) => {
            if (!Array.isArray(groupOverlays)) return [];
            return groupOverlays.map(overlay => ({
                group: (typeof window.getTranslation === 'function' && ['food','shopping','health','transport','education','leisure','culture','services','accommodation','religion'].includes((overlay.group || groupName)))
    ? window.getTranslation(overlay.group || groupName)
    : (overlay.group || groupName),
                title: overlay.title,
                query: overlay.query,
                iconSrc: overlay.iconSrc,
                iconStyle: overlay.iconStyle,
                style: overlay.style || function(feature) {
                    return new ol.style.Style({
                        image: new ol.style.Icon({
                            src: overlay.iconSrc,
                            scale: 0.5
                        })
                    });
                },
                visible: false
            }));
        }),
        allOverlays
    )
};

// Update overlays when they change
window.addEventListener('overlaysUpdated', function(event) {
    if (window.allOverlays && window.config) {
        // Patch: only update group titles for overlay groups in config.layers
        if (Array.isArray(window.config.layers)) {
            window.config.layers.forEach(layer => {
                if (layer.get && layer.get('type') === 'overlay') {
                    // Use a stored groupKey if available, otherwise fallback to current title
                    const groupKey = layer.get('groupKey') || layer.get('title');
                    if (typeof window.getTranslation === 'function') {
                        layer.set('title', window.getTranslation(groupKey));
                    }
                }
            });
        }
        window.config.overlays = mergeGroupOverlays(
            Object.entries(window.allOverlays).flatMap(([groupName, groupOverlays]) => {
                if (!Array.isArray(groupOverlays)) return [];
                return groupOverlays.map(overlay => ({
                    group: (typeof window.getTranslation === 'function' && ['food','shopping','health','transport','education','leisure','culture','services','accommodation','religion'].includes((overlay.group || groupName)))
    ? window.getTranslation(overlay.group || groupName)
    : (overlay.group || groupName),
                    title: overlay.title,
                    query: overlay.query,
                    iconSrc: overlay.iconSrc,
                    iconStyle: overlay.iconStyle,
                    style: overlay.style || function(feature) {
                        return new ol.style.Style({
                            image: new ol.style.Icon({
                                src: overlay.iconSrc,
                                scale: 0.5
                            })
                        });
                    },
                    visible: false
                }));
            }),
            window.allOverlays
        );
        // Dispatch event to notify overlay searcher
        window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
            detail: {
                overlays: window.config.overlays
            }
        }));
    }
}); 