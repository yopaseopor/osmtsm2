import { translatedOverlays } from './translated_overlays.js';
import { externalOverlays } from './external/index.js';

// Export all overlays
export const allOverlays = [
    ...translatedOverlays,
    ...externalOverlays
];

// Make overlays available globally for non-module scripts
window.allOverlays = allOverlays;

export default allOverlays; 