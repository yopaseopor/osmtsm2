import { translatedOverlays } from './translated_overlays.js';
import { loadExternalOverlays } from './external/loader.js';

// Initialize empty allOverlays array
export let allOverlays = [...translatedOverlays];

// Make overlays available globally
window.allOverlays = allOverlays;

// Load external overlays
loadExternalOverlays().then(externalOverlays => {
    // Add external overlays to the array
    allOverlays = [...translatedOverlays, ...externalOverlays];
    // Update global reference
    window.allOverlays = allOverlays;
    // Dispatch event to notify that overlays have been updated
    window.dispatchEvent(new CustomEvent('overlaysUpdated', { detail: allOverlays }));
}).catch(error => {
    console.error('Error loading external overlays:', error);
});

export default allOverlays; 