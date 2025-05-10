import { animalOverlays } from './groups/animal.js';
import { food_drinkOverlays } from './groups/food_drink.js';
import { shoppingOverlays } from './groups/shopping.js';
import { economyOverlays } from './groups/economy.js';
import { leisureOverlays } from './groups/leisure.js';
import { mobilityOverlays } from './groups/mobility.js';
import { transportOverlays } from './groups/transport.js';
import { healthOverlays } from './groups/health.js';
import { educationOverlays } from './groups/education.js';
import { loadExternalOverlays } from './external/loader.js';
import { translatedOverlays } from './translated_overlays.js';

console.log('Initializing overlays system...');

// Initialize overlays by group
export function getAllOverlays() {
    return {
		animal: animalOverlays(), // static for this example
        food_drink: food_drinkOverlays(), // always re-evaluate for translations
        shopping: shoppingOverlays(), // static for this example
		economy: economyOverlays(), // static for this example
		leisure: leisureOverlays(), // static for this example
		mobility: mobilityOverlays(), // static for this example
		education: educationOverlays(),
		health: healthOverlays(),
        transport: transportOverlays,
        translated: translatedOverlays || [],
        external: []
    };
}
// Make available globally for language change
window.getAllOverlays = getAllOverlays;

window.allOverlays = getAllOverlays();

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
export const allOverlays = Object.values(window.allOverlays).flat();
export default allOverlays; 