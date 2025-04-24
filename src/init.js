import { LanguageSelector } from './components/LanguageSelector.js';
import { ProfileSelector } from './components/ProfileSelector.js';
import { setLanguage, getCurrentLanguage } from './i18n/index.js';

// Initialize the language selector and profile selector
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize language selector
        const languageSelectorContainer = document.getElementById('language-selector-container');
        if (!languageSelectorContainer) {
            console.error('Language selector container not found');
            return;
        }
        new LanguageSelector(languageSelectorContainer);
        console.log('Language selector initialized');

        // Initialize profile selector
        const profileSelectorContainer = document.getElementById('profile-selector-container');
        if (!profileSelectorContainer) {
            console.error('Profile selector container not found');
            return;
        }
        new ProfileSelector(profileSelectorContainer);
        console.log('Profile selector initialized');
    } catch (error) {
        console.error('Error initializing components:', error);
    }
}); 