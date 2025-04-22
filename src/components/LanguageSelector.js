import { setLanguage, getCurrentLanguage, languages } from '../i18n/index.js';

export class LanguageSelector {
    constructor(container) {
        this.container = container;
        this.render();
        this.setupEventListeners();
    }

    render() {
        const currentLang = getCurrentLanguage();
        this.container.innerHTML = `
            <div class="language-selector">
                <select id="language-select">
                    ${Object.entries(languages).map(([code, lang]) => `
                        <option value="${code}" ${code === currentLang ? 'selected' : ''}>
                            ${lang.name}
                        </option>
                    `).join('')}
                </select>
            </div>
        `;
    }

    setupEventListeners() {
        const select = this.container.querySelector('#language-select');
        select.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
} 