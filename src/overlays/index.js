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
    translated: translatedOverlays || [], // Ensure translated overlays group is present
    external: [] // Will be populated later
};

// Load external overlays
loadExternalOverlays().then(externalOverlays => {
    console.log('External overlays loaded:', externalOverlays.length);
    window.allOverlays.external = externalOverlays;
    
    // Dispatch event to notify that overlays are ready
    window.dispatchEvent(new CustomEvent('overlaysUpdated', { 
        detail: window.allOverlays
    }));
}).catch(error => {
    console.error('Error loading external overlays:', error);
});

// Export all overlays for module usage
export const allOverlays = window.allOverlays;
export default allOverlays; 