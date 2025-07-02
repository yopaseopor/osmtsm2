import { setLanguage, getCurrentLanguage, languages, getTranslation } from '../i18n/index.js';

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
        const selectWrapper = document.createElement('div');
        selectWrapper.className = 'language-select-wrapper';
        
        const select = document.createElement('select');
        select.id = 'language-select';
        select.className = 'language-select';
        
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
        applyButton.className = 'language-apply-button';
        applyButton.textContent = getTranslation('apply') || 'Apply';
        applyButton.disabled = true;
        
        selectWrapper.appendChild(select);
        selectWrapper.appendChild(applyButton);
        div.appendChild(selectWrapper);
        
        this.container.innerHTML = '';
        this.container.appendChild(div);
        
        // Store references to DOM elements
        this.selectElement = select;
        this.applyButton = applyButton;
    }

    applyLanguageChange() {
        const newLang = this.selectElement.value;
        if (newLang === this.selectedLanguage) {
            return; // No change needed
        }
        
        // Save UI state before reload
        this.saveUIState();
        
        // Update the language with a forced reload
        setLanguage(newLang, true, true);
    }
    
    saveUIState() {
        // Store scroll position
        sessionStorage.setItem('scrollPosition', window.scrollY || document.documentElement.scrollTop);
        
        // Store map state if available
        if (window.map) {
            const view = window.map.getView();
            const center = ol.proj.toLonLat(view.getCenter());
            const zoom = view.getZoom();
            sessionStorage.setItem('mapState', JSON.stringify({
                center,
                zoom,
                rotation: view.getRotation()
            }));
        }
        
        // Store visible layers
        if (window.config && window.config.layers) {
            const visibleLayers = window.config.layers
                .filter(layer => layer.getVisible() && layer.get('type') === 'overlay')
                .map(layer => layer.get('title'));
            sessionStorage.setItem('visibleLayers', JSON.stringify(visibleLayers));
        }
        
        // Store expanded groups
        const expandedGroups = [];
        $('.osmcat-menu h3').each(function() {
            const $h3 = $(this);
            const $content = $h3.next('.osmcat-content');
            if ($content.is(':visible')) {
                expandedGroups.push($h3.text().trim());
            }
        });
        sessionStorage.setItem('expandedGroups', JSON.stringify(expandedGroups));
    }

    setupEventListeners() {
        // Handle select change
        this.selectElement.addEventListener('change', (e) => {
            const newLang = e.target.value;
            // Enable the apply button when a different language is selected
            const isDifferentLanguage = (newLang !== this.selectedLanguage);
            this.applyButton.disabled = !isDifferentLanguage;
            
            // Update the URL without reloading
            const url = new URL(window.location);
            url.searchParams.set('lang', newLang);
            window.history.pushState({}, '', url);
        });
        
        // Handle apply button click
        this.applyButton.addEventListener('click', () => {
            this.applyLanguageChange();
        });
        
        // Handle Enter key on select
        this.selectElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.applyLanguageChange();
            }
        });
    }
} 