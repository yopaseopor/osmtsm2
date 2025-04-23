// Wait for both config and overlays to be available
window.addEventListener('load', function() {
    if (window.config && window.allOverlays) {
        // Function to update overlay translations
        function updateOverlayTranslations(lang) {
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
                    // Get translated group name
                    const translatedGroup = overlay.translations?.[lang]?.group || overlay.group;
                    
                    // Create new overlay with translated group
                    const translatedOverlay = {
                        ...overlay,
                        group: translatedGroup
                    };
                    
                    combinedOverlays.push(translatedOverlay);
                }
            });
            
            // Update config with combined overlays
            window.config.overlays = combinedOverlays;
            
            // Trigger overlay list update if available
            if (window.updateOverlayList) {
                window.updateOverlayList();
            }
        }

        // Initial update with default language
        updateOverlayTranslations('ca');

        // Listen for language changes
        document.addEventListener('languageChanged', (event) => {
            updateOverlayTranslations(event.detail.language);
        });
    }
}); 