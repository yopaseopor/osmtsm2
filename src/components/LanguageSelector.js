import { setLanguage, getCurrentLanguage, languages } from '../i18n/index.js';

export class LanguageSelector {
    constructor(container) {
        this.container = container;
        this.render();
        this.setupEventListeners();
        this.updateDocumentLang();
    }

    render() {
        const currentLang = getCurrentLanguage();
        const div = document.createElement('div');
        div.className = 'language-selector';
        
        const select = document.createElement('select');
        select.id = 'language-select';
        select.setAttribute('aria-label', 'Select language');
        select.title = 'Change language';
        
        Object.entries(languages).forEach(([code, lang]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = lang.name;
            option.setAttribute('lang', code);
            if (code === currentLang) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        div.appendChild(select);
        this.container.innerHTML = '';
        this.container.appendChild(div);
    }

    setupEventListeners() {
        const select = this.container.querySelector('#language-select');
        select.addEventListener('change', (e) => {
            const newLang = e.target.value;
            setLanguage(newLang);
            this.updateDocumentLang();
            this.triggerLanguageChangeEvent(newLang);
        });

        // Handle keyboard navigation
        select.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                select.click();
            }
        });
    }

    updateDocumentLang() {
        document.documentElement.lang = getCurrentLanguage();
    }

    triggerLanguageChangeEvent(newLang) {
        const event = new CustomEvent('languageChanged', {
            detail: { language: newLang },
            bubbles: true
        });
        this.container.dispatchEvent(event);
    }
} 