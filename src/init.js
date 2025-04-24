import { LanguageSelector } from './components/LanguageSelector.js';
import { setLanguage, getCurrentLanguage } from './i18n/index.js';
import config from './config.js';
import { overlayConfig } from './config_overlay.js';
import './overlay_integration.js';

// Initialize configuration
window.config = config;

// Initialize overlays
window.config.overlays = overlayConfig.overlays;

// Initialize the language selector
document.addEventListener('DOMContentLoaded', () => {
    try {
        const languageSelectorContainer = document.getElementById('language-selector-container');
        if (!languageSelectorContainer) {
            console.error('Language selector container not found');
            return;
        }
        new LanguageSelector(languageSelectorContainer);
        console.log('Language selector initialized');
    } catch (error) {
        console.error('Error initializing language selector:', error);
    }

    // Dispatch config loaded event after DOM is ready
    window.dispatchEvent(new CustomEvent('configLoaded', {
        detail: window.config
    }));

    // Notify overlay searcher that initial overlays are ready
    window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
        detail: {
            overlays: window.config.overlays
        }
    }));
});

// Initialize map when document is ready
$(document).ready(function() {
    // Map initialization will be handled by index.js
}); 