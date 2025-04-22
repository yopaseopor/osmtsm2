import { LanguageSelector } from './components/LanguageSelector.js';
import { setLanguage, getCurrentLanguage } from './i18n/index.js';

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
}); 