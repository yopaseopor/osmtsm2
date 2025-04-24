import { LanguageSelector } from './components/LanguageSelector.js';
import { setLanguage, getCurrentLanguage } from './i18n/index.js';
import config from './config.js';
import { overlayConfig } from './config_overlay.js';
import './overlay_integration.js';

// Make config available globally
window.config = config;

// Initialize overlays
window.config.overlays = overlayConfig.overlays;

// Function to initialize everything in the correct order
async function initializeApp() {
    try {
        // First, initialize language
        const currentLang = getCurrentLanguage();
        await setLanguage(currentLang, false);
        
        // Then initialize language selector
        const languageSelectorContainer = document.getElementById('language-selector-container');
        if (!languageSelectorContainer) {
            throw new Error('Language selector container not found');
        }
        const langSelector = new LanguageSelector(languageSelectorContainer);
        console.log('Language selector initialized');

        // Dispatch config loaded event
        window.dispatchEvent(new CustomEvent('configLoaded', {
            detail: window.config
        }));

        // Notify overlay searcher that overlays are ready
        window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
            detail: {
                overlays: window.config.overlays
            }
        }));

        // Initialize map
        if (typeof $ !== 'undefined') {
            $(document).ready(function() {
                // Map initialization will be handled by index.js
            });
        }
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
} 