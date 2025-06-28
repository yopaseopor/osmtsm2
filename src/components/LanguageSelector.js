import { setLanguage, getCurrentLanguage, languages } from '../i18n/index.js';

export class LanguageSelector {
    constructor(container) {
        this.container = container;
        this.currentIndex = 0;
        this.visibleCount = 5; // Number of languages to show at once
        this.languages = Object.entries(languages);
        this.render();
        this.setupEventListeners();
        this.updateButtonStates();
    }

    render() {
        const currentLang = getCurrentLanguage();
        const div = document.createElement('div');
        div.className = 'language-selector';
        
        // Create navigation buttons
        const navDiv = document.createElement('div');
        navDiv.className = 'language-nav';
        
        this.prevButton = document.createElement('button');
        this.prevButton.innerHTML = '&lt;';
        this.prevButton.className = 'language-nav-btn';
        navDiv.appendChild(this.prevButton);
        
        // Create container for language buttons
        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.className = 'language-buttons';
        navDiv.appendChild(this.buttonsContainer);
        
        this.nextButton = document.createElement('button');
        this.nextButton.innerHTML = '&gt;';
        this.nextButton.className = 'language-nav-btn';
        navDiv.appendChild(this.nextButton);
        
        // Create hidden select for form submission/fallback
        this.hiddenSelect = document.createElement('select');
        this.hiddenSelect.id = 'language-select';
        this.hiddenSelect.style.display = 'none';
        
        this.languages.forEach(([code, lang]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = lang.name;
            if (code === currentLang) {
                option.selected = true;
                // Find the page where this language is located
                this.currentIndex = Math.max(0, Math.min(
                    Math.floor(this.languages.findIndex(([c]) => c === code) / this.visibleCount) * this.visibleCount,
                    this.languages.length - this.visibleCount
                ));
            }
            this.hiddenSelect.appendChild(option);
        });
        
        div.appendChild(navDiv);
        div.appendChild(this.hiddenSelect);
        this.container.innerHTML = '';
        this.container.appendChild(div);
        
        this.updateVisibleLanguages();
    }
    
    updateVisibleLanguages() {
        if (!this.buttonsContainer) return;
        
        this.buttonsContainer.innerHTML = '';
        const endIndex = Math.min(this.currentIndex + this.visibleCount, this.languages.length);
        
        for (let i = this.currentIndex; i < endIndex; i++) {
            const [code, lang] = this.languages[i];
            const button = document.createElement('button');
            button.className = 'language-btn' + (code === getCurrentLanguage() ? ' active' : '');
            button.dataset.lang = code;
            button.textContent = lang.name.split(' ')[0]; // Show only the language name without (AI-IA)
            button.title = lang.name; // Show full name on hover
            this.buttonsContainer.appendChild(button);
        }
        
        this.updateButtonStates();
    }
    
    updateButtonStates() {
        if (this.prevButton) {
            this.prevButton.disabled = this.currentIndex === 0;
        }
        if (this.nextButton) {
            this.nextButton.disabled = this.currentIndex + this.visibleCount >= this.languages.length;
        }
    }
    
    navigate(direction) {
        const step = direction === 'prev' ? -this.visibleCount : this.visibleCount;
        this.currentIndex = Math.max(0, Math.min(
            this.currentIndex + step,
            this.languages.length - this.visibleCount
        ));
        this.updateVisibleLanguages();
    }

    setupEventListeners() {
        // Navigation buttons
        this.prevButton.addEventListener('click', () => this.navigate('prev'));
        this.nextButton.addEventListener('click', () => this.navigate('next'));
        
        // Language selection
        this.buttonsContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.language-btn');
            if (button) {
                const langCode = button.dataset.lang;
                setLanguage(langCode, true);
                this.updateActiveButton(langCode);
            }
        });
        
        // Update selector when URL changes
        window.addEventListener('popstate', () => {
            const currentLang = getCurrentLanguage();
            this.updateActiveButton(currentLang);
        });
    }
    
    updateActiveButton(langCode) {
        const buttons = this.buttonsContainer.querySelectorAll('.language-btn');
        buttons.forEach(btn => {
            if (btn.dataset.lang === langCode) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update hidden select
        if (this.hiddenSelect) {
            this.hiddenSelect.value = langCode;
        }
    }
}