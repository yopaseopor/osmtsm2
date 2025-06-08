import { allOverlays } from './overlays/index.js';
import { getTranslation } from '/i18n/index.js';

// Create overlay configuration
// Helper to merge overlays from group folders
function mergeGroupOverlays(baseOverlays, allOverlays) {
    const groupKeys = ['animal', 'business', 'culture', 'economy', 'mobility', 'education', 'food_drink', 'health', 'leisure', 'logistics', 'shopping', 'transport', 'others', 'translated'];
    let overlays = baseOverlays.slice();
    groupKeys.forEach(groupName => {
        if (Array.isArray(allOverlays[groupName])) {
            allOverlays[groupName].forEach(overlay => {
                // Always use translated group name
                const translatedGroup = overlay.group || getTranslation(groupName);
                // Avoid duplicates by title+translated group
                if (!overlays.some(ov => ov.title === overlay.title && ov.group === translatedGroup)) {
                    overlays.push({
                        group: translatedGroup,
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

export const overlayConfig = {
    overlays: mergeGroupOverlays(
        Object.entries(allOverlays).flatMap(([groupName, groupOverlays]) => {
            if (!Array.isArray(groupOverlays)) return [];
            return groupOverlays.map(overlay => {
                const translatedGroup = overlay.group || getTranslation(groupName);
                return {
                    group: translatedGroup,
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
                };
            });
        }),
        allOverlays
    )
};

// Update overlays when they change
window.addEventListener('overlaysUpdated', function(event) {
    if (window.allOverlays && window.config) {
        window.config.overlays = mergeGroupOverlays(
            Object.entries(window.allOverlays).flatMap(([groupName, groupOverlays]) => {
                if (!Array.isArray(groupOverlays)) return [];
                return groupOverlays.map(overlay => {
                    const translatedGroup = overlay.group || getTranslation(groupName);
                    return {
                        group: translatedGroup,
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
                    };
                });
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