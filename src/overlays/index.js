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
    food: foodOverlays,
    shopping: shoppingOverlays,
    transport: transportOverlays,
    health: healthOverlays,
    education: educationOverlays,
    translated: translatedOverlays || [], // Preserve translated overlays
    external: [] // Will be populated later
};

// Load external overlays
import { integrateOverlays } from '../overlay_integration.js';

loadExternalOverlays().then(externalOverlays => {
    console.log('External overlays loaded:', externalOverlays.length);
    window.allOverlays.external = externalOverlays;
    
    // Dispatch event to notify that overlays are ready
    window.dispatchEvent(new CustomEvent('overlaysUpdated', { 
        detail: window.allOverlays
    }));

    // Integrate overlays into map layers (ensure shopping overlays are visible)
    if (typeof integrateOverlays === 'function') {
        integrateOverlays();
    } else {
        console.warn('integrateOverlays function not found!');
    }
}).catch(error => {
    console.error('Error loading external overlays:', error);
});

// Export all overlays for module usage
export const allOverlays = Object.values(window.allOverlays).flat();
export default allOverlays; 