import { foodOverlays } from './food.js';
import { shoppingOverlays } from './shopping.js';
import { transportOverlays } from './transport.js';
import { healthOverlays } from './health.js';

// Function to load external overlay files
export function loadExternalOverlays() {
    return Promise.resolve([
        ...foodOverlays,
        ...shoppingOverlays,
        ...transportOverlays,
        ...healthOverlays
    ]);
} 