class TranslationManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
        this.availableLanguages = ['en', 'es']; // Add more languages as needed
    }

    async loadLanguage(lang) {
        try {
            const response = await fetch(`/src/i18n/${lang}.json`);
            this.translations[lang] = await response.json();
            this.currentLanguage = lang;
            this.updateUI();
        } catch (error) {
            console.error(`Failed to load language ${lang}:`, error);
        }
    }

    t(key) {
        const translation = this.translations[this.currentLanguage];
        return translation?.[key] || key;
    }

    updateUI() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // Update all elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    getAvailableLanguages() {
        return this.availableLanguages;
    }
}

// Create a global instance
window.translationManager = new TranslationManager(); 