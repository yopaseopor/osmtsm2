// Import the overlays
import { allOverlays } from './overlays/index.js';

// Function to integrate overlays
function integrateOverlays() {
    if (window.config) {
        // Preserve any existing overlays
        const existingOverlays = window.config.overlays || [];
        
        // Combine existing overlays with new ones, avoiding duplicates
        const combinedOverlays = [...existingOverlays];
        
        allOverlays.forEach(overlay => {
            // Check if overlay already exists
            const exists = combinedOverlays.some(existing => 
                existing.title === overlay.title && 
                existing.query === overlay.query
            );
            
            if (!exists) {
                combinedOverlays.push(overlay);
            }
        });
        
        // Update config with combined overlays
        window.config.overlays = combinedOverlays;
        
        // Dispatch event to notify that overlays are ready
        window.dispatchEvent(new CustomEvent('overlaysReady', {
            detail: { overlays: combinedOverlays }
        }));
    }
}

// Listen for config to be available
if (window.config) {
    integrateOverlays();
} else {
    window.addEventListener('configLoaded', integrateOverlays);
}

// Re-integrate when new overlays are loaded
window.addEventListener('overlaysUpdated', function(event) {
    if (window.config) {
        integrateOverlays();
    }
}); 