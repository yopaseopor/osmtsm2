import { foodOverlays } from './food.js';
import { customOverlays } from './custom_overlays.js';

export const loadExternalOverlays = async () => {
    return [...foodOverlays, ...customOverlays];
}; 