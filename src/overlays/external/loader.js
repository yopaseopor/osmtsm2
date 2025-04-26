import { foodOverlays } from './food.js';
import { customOverlays } from './custom_overlays.js';
import { shoppingOverlays } from '../groups/shopping.js';

// Function to load external overlay files
export function loadExternalOverlays() {
    return Promise.resolve([
        ...foodOverlays,
        ...shoppingOverlays,
        ...customOverlays
    ]);
} 