// Language selector component
class LanguageSelector {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'language-selector';
        this.render();
        this.setupEventListeners();
    }

    render() {
        const currentLang = window.i18n.currentLanguage;
        this.container.innerHTML = `
            <select class="language-select">
                <option value="en" ${currentLang === 'en' ? 'selected' : ''}>English</option>
                <option value="es" ${currentLang === 'es' ? 'selected' : ''}>Español</option>
                <option value="ca" ${currentLang === 'ca' ? 'selected' : ''}>Català</option>
            </select>
        `;
    }

    setupEventListeners() {
        const select = this.container.querySelector('.language-select');
        select.addEventListener('change', (e) => {
            window.i18n.setLanguage(e.target.value);
        });

        // Listen for language changes to update the selector
        document.addEventListener('languageChanged', () => {
            this.render();
        });
    }

    getElement() {
        return this.container;
    }
}

// Export the language selector
window.LanguageSelector = LanguageSelector; 