import { setLanguage, getCurrentLanguage, languages, updateLanguageInURL } from '../i18n/index.js';

export class LanguageSelector {
    constructor(container) {
        this.container = container;
        this.selectedLanguage = getCurrentLanguage();
        this.render();
        this.setupEventListeners();
    }

    render() {
        const currentLang = this.selectedLanguage;
        const div = document.createElement('div');
        div.className = 'language-selector';
        
        // Create select element
        const select = document.createElement('select');
        select.id = 'language-select';
        select.className = 'language-select';
        
        // Add language options
        Object.entries(languages).forEach(([code, lang]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = lang.name;
            if (code === currentLang) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        // Create apply button
        const applyButton = document.createElement('button');
        applyButton.id = 'language-apply';
        applyButton.className = 'language-apply';
        applyButton.textContent = 'Apply';
        applyButton.title = 'Apply language and reload page';

        // Add elements to container
        const selectContainer = document.createElement('div');
        selectContainer.className = 'language-select-container';
        selectContainer.appendChild(select);
        selectContainer.appendChild(applyButton);
        
        div.appendChild(selectContainer);
        this.container.innerHTML = '';
        this.container.appendChild(div);
    }

    setupEventListeners() {
        const select = this.container.querySelector('#language-select');
        const applyButton = this.container.querySelector('#language-apply');
        
        // Update selected language when changed
        select.addEventListener('change', (e) => {
            this.selectedLanguage = e.target.value;
        });

        // Handle apply button click
        applyButton.addEventListener('click', () => {
            const newLang = this.selectedLanguage;
            if (newLang !== getCurrentLanguage()) {
                // Update URL with new language
                updateLanguageInURL(newLang);
                
                // Force a full page reload to ensure everything is reinitialized
                window.location.reload();
            }
        });

        // Handle Enter key on select
        select.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                applyButton.click();
            }
        });

        // Update selector when URL changes
        window.addEventListener('popstate', () => {
            const currentLang = getCurrentLanguage();
            if (select && select.value !== currentLang) {
                select.value = currentLang;
                this.selectedLanguage = currentLang;
            }
        });
    }
} 