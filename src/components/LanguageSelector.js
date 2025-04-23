import { setLanguage, getCurrentLanguage, languages, getTranslation } from '../i18n/index.js';

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
                <select id="language-select" data-i18n="languageSelect">
                    ${Object.entries(languages).map(([code, lang]) => `
                        <option value="${code}" ${code === currentLang ? 'selected' : ''}>
                            ${lang.name}
                        </option>
                    `).join('')}
                </select>
            </div>
        `;
        // Update the placeholder text
        const select = this.container.querySelector('#language-select');
        select.setAttribute('data-i18n', 'languageSelect');
        select.setAttribute('title', getTranslation('languageSelect'));
    }

    setupEventListeners() {
        const select = this.container.querySelector('#language-select');
        select.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            // Update the title after language change
            select.setAttribute('title', getTranslation('languageSelect'));
        });
    }
} 