import { setLanguage, getCurrentLanguage, languages } from '../i18n/index.js';

export class LanguageSelector {
    constructor(container) {
        this.container = container;
        this.render();
        this.setupEventListeners();
    }

    render() {
        const currentLang = getCurrentLanguage();
        const div = document.createElement('div');
        div.className = 'language-selector';
        
        const select = document.createElement('select');
        select.id = 'language-select';
        
        Object.entries(languages).forEach(([code, lang]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = lang.name;
            if (code === currentLang) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        div.appendChild(select);
        this.container.innerHTML = '';
        this.container.appendChild(div);
    }

    updateUrlLanguage(lang) {
        // First update the language in the URL without reloading
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        // Remove the hash if present to avoid scrolling to it after reload
        url.hash = '';
        
        // Store the current UI state
        // Store scroll position in sessionStorage before reload
        sessionStorage.setItem('scrollPosition', window.scrollY || document.documentElement.scrollTop);
        
        // Store the current map view state if available
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
        
        // Force a hard reload with the new language
        window.location.href = url.toString();
    }

    setupEventListeners() {
        const select = this.container.querySelector('#language-select');
        select.addEventListener('change', (e) => {
            const newLang = e.target.value;
            // First update the language in the URL without reloading
            const url = new URL(window.location);
            url.searchParams.set('lang', newLang);
            window.history.pushState({}, '', url);
            
            // Then call updateUrlLanguage which will do the reload
            this.updateUrlLanguage(newLang);
        });

        // Update selector when URL changes
        window.addEventListener('popstate', () => {
            const currentLang = getCurrentLanguage();
            const select = this.container.querySelector('#language-select');
            if (select && select.value !== currentLang) {
                select.value = currentLang;
            }
        });
    }
} 