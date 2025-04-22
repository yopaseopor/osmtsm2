import { en } from './en.js';
import { es } from './es.js';
import { ca } from './ca.js';

export const languages = {
    en: { name: 'English', translations: en },
    es: { name: 'Español', translations: es },
    ca: { name: 'Català', translations: ca }
};

let currentLanguage = 'en';

export function setLanguage(lang) {
    if (languages[lang]) {
        currentLanguage = lang;
        // Update all text elements with the new translations
        updateTranslations();
    }
}

export function getCurrentLanguage() {
    return currentLanguage;
}

export function getTranslation(key) {
    return languages[currentLanguage].translations[key] || key;
}

function updateTranslations() {
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key);
    });
}

// Initialize translations
document.addEventListener('DOMContentLoaded', updateTranslations); 