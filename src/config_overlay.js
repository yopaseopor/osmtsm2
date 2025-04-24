import { allOverlays } from './overlays/index.js';
import { loadExternalOverlays } from './overlays/external/loader.js';

// Create initial overlay configuration
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

// Initialize external overlays
loadExternalOverlays().then(externalOverlays => {
    if (window.config && window.config.overlays) {
        // Convert external overlays to the correct format
        const formattedExternalOverlays = externalOverlays.map(overlay => ({
            group: overlay.group || 'External',
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

        // Add external overlays to config
        window.config.overlays = [...window.config.overlays, ...formattedExternalOverlays];

        // Notify the system that overlays have been updated
        window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
            detail: {
                overlays: window.config.overlays
            }
        }));
    }
}).catch(error => {
    console.error('Error loading external overlays:', error);
});

// Update overlays when they change
window.addEventListener('overlaysUpdated', function(event) {
    if (window.allOverlays && window.config) {
        const newOverlays = Object.entries(window.allOverlays).flatMap(([groupName, groupOverlays]) => {
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
        
        window.config.overlays = newOverlays;
        
        // Dispatch event to notify overlay searcher
        window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
            detail: {
                overlays: window.config.overlays
            }
        }));
    }
}); 