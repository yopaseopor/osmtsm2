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

        // Create reload icon button
        const applyButton = document.createElement('button');
        applyButton.id = 'language-apply';
        applyButton.className = 'language-apply';
        applyButton.title = 'Apply language and reload page';
        applyButton.innerHTML = '&#x21bb;'; // Unicode reload symbol
        applyButton.setAttribute('aria-label', 'Apply language and reload page');

        // Create a wrapper for the select and button
        const selectContainer = document.createElement('div');
        selectContainer.className = 'language-select-container';
        
        // Add button first, then select
        selectContainer.appendChild(applyButton);
        selectContainer.appendChild(select);
        
        // Add elements to the container
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
                // Show loading state
                this.container.classList.add('language-applying');
                applyButton.disabled = true;
                
                // Small delay to show the loading animation
                setTimeout(() => {
                    // Update URL with new language
                    updateLanguageInURL(newLang);
                    
                    // Force a full page reload to ensure everything is reinitialized
                    window.location.reload();
                }, 300);
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