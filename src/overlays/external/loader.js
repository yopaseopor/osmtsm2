import { foodOverlays } from './food.js';
import { shoppingOverlays } from './shopping.js';
import { transportOverlays } from './transport.js';
import { healthOverlays } from './health.js';
import { educationOverlays } from './education.js';
import { servicesOverlays } from './services.js';

// Function to load external overlay files
export async function loadExternalOverlays() {
    return [
        ...foodOverlays,
        ...shoppingOverlays,
        ...transportOverlays,
        ...healthOverlays,
        ...educationOverlays,
        ...servicesOverlays
    ];
} 