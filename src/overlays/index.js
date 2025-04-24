import { translatedOverlays } from './translated_overlays.js';
import { customOverlays } from './external/custom_overlays.js';
import { foodOverlays } from './external/food.js';
import { loadExternalOverlays } from './external/loader.js';

console.log('Initializing overlays system...');

// Initialize with base overlays
let allOverlays = [...translatedOverlays];
console.log('Base overlays loaded:', allOverlays.length);

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

// Load and combine all overlays
Promise.all([
    Promise.resolve(translatedOverlays),
    loadExternalOverlays()
]).then(([baseOverlays, externalOverlays]) => {
    console.log('All overlays loaded:');
    console.log('- Base overlays:', baseOverlays.length);
    console.log('- External overlays:', externalOverlays.length);
    
    const combinedOverlays = [...baseOverlays, ...externalOverlays];
    updateOverlays(combinedOverlays);
}).catch(error => {
    console.error('Error loading overlays:', error);
});

// Listen for overlay updates
window.addEventListener('overlaysUpdated', (event) => {
    console.log('Overlays updated:', event.detail);
});

export { allOverlays };
export default allOverlays; 