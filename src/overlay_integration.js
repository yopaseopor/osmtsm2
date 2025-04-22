// Wait for both config and overlays to be available
window.addEventListener('load', function() {
    if (window.config && window.allOverlays) {
        // Use the new translated overlays
        window.config.overlays = window.allOverlays;
        
        // Listen for language changes
        window.addEventListener('languageChanged', function() {
            if (window.config && window.allOverlays) {
                window.config.overlays = window.allOverlays;
            }
        });
    }
}); 