import { foodOverlays } from './food.js';
import { leisureOverlays } from './leisure.js';
import { shoppingOverlays } from './shopping.js';
import { transportOverlays } from './transport.js';

// Function to load external overlay files
export function loadExternalOverlays() {
    return Promise.resolve([
        ...foodOverlays,
        ...leisureOverlays,
        ...shoppingOverlays,
        ...transportOverlays
    ]);
} 