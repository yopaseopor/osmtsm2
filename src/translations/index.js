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

export const i18n = new TranslationManager();
export default i18n; 