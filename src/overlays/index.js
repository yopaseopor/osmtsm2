import { translatedOverlays } from './translated_overlays.js';
import { loadExternalOverlays } from './external/loader.js';

console.log('Initializing overlays system...');
console.log('Base overlays loaded:', translatedOverlays.length);

// Initialize empty allOverlays array
export let allOverlays = [...translatedOverlays];

// Make overlays available globally
window.allOverlays = allOverlays;

// Function to update overlays
function updateOverlays(newOverlays) {
    console.log('Updating overlays:', newOverlays.length);
    allOverlays = newOverlays;
    window.allOverlays = allOverlays;
    window.dispatchEvent(new CustomEvent('overlaysUpdated', { 
        detail: { 
            overlays: allOverlays,
            count: allOverlays.length
        }
    }));
}

// Load external overlays
console.log('Loading external overlays...');
loadExternalOverlays().then(externalOverlays => {
    console.log('External overlays loaded:', externalOverlays.length);
    const combinedOverlays = [...translatedOverlays, ...externalOverlays];
    updateOverlays(combinedOverlays);
}).catch(error => {
    console.error('Error loading external overlays:', error);
});

// Listen for overlay updates
window.addEventListener('overlaysUpdated', (event) => {
    console.log('Overlays updated:', event.detail);
});

export default allOverlays; 