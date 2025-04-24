import { allOverlays } from './overlays/index.js';

// Create overlay configuration
export const overlayConfig = {
    overlays: Object.entries(allOverlays).flatMap(([groupName, groupOverlays]) => {
        if (!Array.isArray(groupOverlays)) return [];
        return groupOverlays.map(overlay => ({
            group: overlay.group || groupName,
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
    })
};

// Update overlays when they change
window.addEventListener('overlaysUpdated', function(event) {
    if (window.allOverlays && window.config) {
        window.config.overlays = Object.entries(window.allOverlays).flatMap(([groupName, groupOverlays]) => {
            if (!Array.isArray(groupOverlays)) return [];
            return groupOverlays.map(overlay => ({
                group: overlay.group || groupName,
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
        });
        
        // Dispatch event to notify overlay searcher
        window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
            detail: {
                overlays: window.config.overlays
            }
        }));
    }
}); 