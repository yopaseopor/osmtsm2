import { setLanguage, getCurrentLanguage } from './i18n/index.js';
import { config } from './config.js';
import { overlayConfig } from './config_overlay.js';
import './overlay_integration.js';

// Initialize configuration
window.config = config;

// Initialize overlays
if (overlayConfig && overlayConfig.overlays) {
    window.config.overlays = overlayConfig.overlays;
}

// Initialize i18n if available
if (typeof setLanguage === 'function') {
    setLanguage(navigator.language || 'en');
}

// Dispatch config loaded event after everything is initialized
window.dispatchEvent(new CustomEvent('configLoaded', {
    detail: window.config
}));

// Notify overlay searcher that overlays are ready
window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
    detail: {
        overlays: window.config.overlays || []
    }
}));

// Initialize map when document is ready
$(document).ready(function() {
    // Import and initialize the main application
    import('./index.js').catch(error => {
        console.error('Failed to initialize application:', error);
    });
}); 