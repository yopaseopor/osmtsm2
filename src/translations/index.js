import en from './en.js';
import es from './es.js';
import ca from './ca.js';

const translations = {
    en,
    es,
    ca
};

class TranslationManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = translations;
        this.listeners = [];
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
            this.notifyListeners();
            // Update the select element
            const select = document.getElementById('lang-select');
            if (select) {
                select.value = lang;
            }
        }
    }

    translate(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key;
            }
        }
        
        return value;
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.currentLanguage));
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getAvailableLanguages() {
        return Object.keys(this.translations);
    }
}

// Create and export the translation manager
const i18n = new TranslationManager();

// Make it globally accessible
window.i18n = i18n;

// Initialize the language selector
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('lang-select');
    if (select) {
        select.value = i18n.getCurrentLanguage();
        select.addEventListener('change', (e) => {
            i18n.setLanguage(e.target.value);
        });
    }
});

export default i18n; 