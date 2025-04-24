import { foodOverlays } from './categories/food.js';
import { amenityOverlays } from './categories/amenities.js';
import { shoppingOverlays } from './categories/shopping.js';

console.log('Initializing overlays system...');

// Organize overlays by category
const overlayCategories = {
    food: foodOverlays,
    amenities: amenityOverlays,
    shopping: shoppingOverlays
};

// Make overlays available globally
window.allOverlays = overlayCategories;

// Create a flattened array of all overlays for compatibility
export const allOverlays = Object.values(overlayCategories).flat();

// Dispatch event to notify that overlays are ready
window.dispatchEvent(new CustomEvent('overlaysUpdated', { 
    detail: { 
        categories: overlayCategories,
        all: allOverlays
    }
}));

export default overlayCategories; 