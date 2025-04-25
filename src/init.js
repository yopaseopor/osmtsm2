import { LanguageSelector } from './components/LanguageSelector.js';
import { setLanguage, getCurrentLanguage } from './i18n/index.js';
import config from './config.js';
import { overlayConfig } from './config_overlay.js';
import './overlay_integration.js';

// Initialize language selector first
const languageSelectorContainer = document.getElementById('language-selector-container');
if (languageSelectorContainer) {
    new LanguageSelector(languageSelectorContainer);
    console.log('Language selector initialized');
} else {
    console.error('Language selector container not found');
}

// Initialize configuration
window.config = config;

// Initialize overlays
window.config.overlays = overlayConfig.overlays;

// Dispatch config loaded event after everything is initialized
window.dispatchEvent(new CustomEvent('configLoaded', {
    detail: window.config
}));

// Notify overlay searcher that overlays are ready
window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
    detail: {
        overlays: window.config.overlays
    }
}));

// Initialize map when document is ready
$(document).ready(function() {
    // Map initialization will be handled by index.js
}); 