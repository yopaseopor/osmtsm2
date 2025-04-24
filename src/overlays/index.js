import { translatedOverlays } from './translated_overlays.js';
import { loadExternalOverlays } from './external/loader.js';

console.log('Initializing overlays system...');

// Initialize with base overlays
let allOverlays = [...translatedOverlays];
console.log('Base overlays loaded:', allOverlays.length);

// Make overlays available globally but organized by group
window.allOverlays = {
    translated: translatedOverlays,
    external: []
};

// Load and combine all overlays
loadExternalOverlays().then(externalOverlays => {
    console.log('External overlays loaded:', externalOverlays.length);
    window.allOverlays.external = externalOverlays;
    
    // Dispatch event to notify that overlays are ready
    window.dispatchEvent(new CustomEvent('overlaysUpdated', { 
        detail: { 
            translated: window.allOverlays.translated,
            external: window.allOverlays.external
        }
    }));
}).catch(error => {
    console.error('Error loading external overlays:', error);
});

export { allOverlays };
export default allOverlays; 