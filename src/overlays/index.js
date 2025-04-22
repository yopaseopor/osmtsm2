import { translatedOverlays } from './translated_overlays.js';

// Export all overlays
export const allOverlays = [
    ...translatedOverlays
];

// Make overlays available globally for non-module scripts
window.allOverlays = allOverlays;

export default allOverlays; 