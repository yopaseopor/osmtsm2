class TranslationManager {
    constructor() {
        this.currentLanguage = 'ca';
        this.translations = {};
        this.availableLanguages = ['en', 'es', 'ca'];
    }

    async loadLanguage(lang) {
        try {
            const response = await fetch(`src/i18n/${lang}.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.translations[lang] = await response.json();
            this.currentLanguage = lang;
            this.updateUI();
            console.log(`Language changed to ${lang}`);
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
            const translation = this.t(key);
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.value = translation;
            } else {
                element.textContent = translation;
            }
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