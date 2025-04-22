// Wait for both config and overlays to be available
window.addEventListener('load', function() {
    if (window.config && window.allOverlays) {
        // Preserve any existing overlays
        const existingOverlays = window.config.overlays || [];
        
        // Combine existing overlays with new ones, avoiding duplicates
        const combinedOverlays = [...existingOverlays];
        
        window.allOverlays.forEach(overlay => {
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
    }
}); 