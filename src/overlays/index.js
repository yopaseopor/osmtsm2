import { foodOverlays } from './groups/food.js';
import { shoppingOverlays } from './groups/shopping.js';
import { transportOverlays } from './groups/transport.js';
import { healthOverlays } from './groups/health.js';
import { educationOverlays } from './groups/education.js';
import { loadExternalOverlays } from './external/loader.js';
import { translatedOverlays } from './translated_overlays.js';

console.log('Initializing overlays system...');

// Initialize overlays by group
window.allOverlays = {
    food: foodOverlays || [],
    shopping: shoppingOverlays || [],
    transport: transportOverlays || [],
    health: healthOverlays || [],
    education: educationOverlays || [],
    translated: translatedOverlays || [], // Preserve translated overlays
    external: [] // Will be populated later
};

// Load external overlays
loadExternalOverlays().then(externalOverlays => {
    console.log('External overlays loaded:', externalOverlays.length);
    window.allOverlays.external = externalOverlays;
    
    // Process all overlays to ensure they have required properties
    Object.values(window.allOverlays).forEach(overlayGroup => {
        if (Array.isArray(overlayGroup)) {
            overlayGroup.forEach(overlay => {
                // Ensure each overlay has required properties
                if (!overlay.id) overlay.id = `${overlay.group}-${overlay.title}`.toLowerCase().replace(/\s+/g, '-');
                if (!overlay.visible) overlay.visible = false;
                if (!overlay.style && overlay.iconSrc) {
                    overlay.style = function(feature) {
                        return new ol.style.Style({
                            image: new ol.style.Icon({
                                src: overlay.iconSrc,
                                scale: 0.10
                            })
                        });
                    };
                }
            });
        }
    });
    
    // Dispatch event to notify that overlays are ready
    window.dispatchEvent(new CustomEvent('overlaysUpdated', { 
        detail: window.allOverlays
    }));
}).catch(error => {
    console.error('Error loading external overlays:', error);
});

// Export all overlays for module usage
export const allOverlays = Object.values(window.allOverlays).flat();
export default allOverlays; 