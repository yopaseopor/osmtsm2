import { setLanguage, getCurrentLanguage } from '../i18n/index.js';

export class LanguageSelector {
    constructor(container) {
        this.container = container;
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.container.innerHTML = `
            <div class="language-selector">
                <select id="language-select">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="ca">Català</option>
                </select>
            </div>
        `;
        
        // Set the current language
        const select = this.container.querySelector('#language-select');
        select.value = getCurrentLanguage();
    }

    setupEventListeners() {
        const select = this.container.querySelector('#language-select');
        select.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
} 