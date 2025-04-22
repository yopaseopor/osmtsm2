import { LanguageSelector } from './components/LanguageSelector.js';
import { setLanguage, getCurrentLanguage } from './i18n/index.js';

// Initialize the language selector
document.addEventListener('DOMContentLoaded', () => {
    const languageSelectorContainer = document.getElementById('language-selector-container');
    new LanguageSelector(languageSelectorContainer);

    // Set initial language based on browser language
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['en', 'es', 'ca'];
    const initialLang = supportedLangs.includes(browserLang) ? browserLang : 'en';
    setLanguage(initialLang);
}); 