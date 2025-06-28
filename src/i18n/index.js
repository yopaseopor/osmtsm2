import { en } from './en.js';
import { es } from './es.js';
import { ca } from './ca.js';
import { fr } from './fr.js';
import { de } from './de.js';
import { it } from './it.js';
import { pt } from './pt.js';
import { nl } from './nl.js';
import { ru } from './ru.js';
import { zh } from './zh.js';
import { ja } from './ja.js';
import { ko } from './ko.js';
import { ar } from './ar.js';
import { eu } from './eu.js';
import { gl } from './gl.js';
import { ast } from './ast.js';
import { an } from './an.js';
import { pl } from './pl.js';
import { uk } from './uk.js';
import { tr } from './tr.js';
import { vi } from './vi.js';

export const languages = {
    en: { name: 'English (IA-AI)', translations: en },
    es: { name: 'Español (IA-AI)', translations: es },
    ca: { name: 'Català (IA-AI)', translations: ca },
    fr: { name: 'Français (IA-AI)', translations: fr },
    de: { name: 'Deutsch (IA-AI)', translations: de },
    it: { name: 'Italiano (IA-AI)', translations: it },
    pt: { name: 'Português (IA-AI)', translations: pt },
    nl: { name: 'Nederlands (IA-AI)', translations: nl },
    ru: { name: 'Русский (IA-AI)', translations: ru },
    zh: { name: '中文 (IA-AI)', translations: zh },
    ja: { name: '日本語 (IA-AI)', translations: ja },
    ko: { name: '한국어 (IA-AI)', translations: ko },
    ar: { name: 'العربية (IA-AI)', translations: ar, rtl: true },
    eu: { name: 'Euskara (IA-AI)', translations: eu },
    gl: { name: 'Galego (IA-AI)', translations: gl },
    ast: { name: 'Asturianu (IA-AI)', translations: ast },
    an: { name: 'Aragonés (IA-AI)', translations: an },
    pl: { name: 'Polski (IA-AI)', translations: pl },
    uk: { name: 'Українська (IA-AI)', translations: uk },
    tr: { name: 'Türkçe (IA-AI)', translations: tr },
    vi: { name: 'Tiếng Việt (IA-AI)', translations: vi }
};

let currentLanguage = 'en';

export function setLanguage(lang, updateURL = true) {
    if (languages[lang]) {
        currentLanguage = lang;
        // Update the HTML lang attribute
        document.documentElement.lang = lang;
        // Update all text elements with the new translations
        updateTranslations();
        // Re-initialize overlays with translations for the new language
        if (window.getAllOverlays) {
            window.allOverlays = window.getAllOverlays();
            window.dispatchEvent(new CustomEvent('overlaysUpdated', { detail: window.allOverlays }));
        }
        // Update config i18n if it exists
        if (window.config && window.config.i18n) {
            Object.keys(window.config.i18n).forEach(key => {
                window.config.i18n[key] = getTranslation(key);
            });
        }
        // Update URL if requested
        if (updateURL) {
            updateLanguageInURL(lang);
        }
    }
}

export function getCurrentLanguage() {
    return currentLanguage;
}

export function getTranslation(key) {
    // First try to get translation from the module system
    const moduleTranslation = languages[currentLanguage].translations[key];
    if (moduleTranslation) return moduleTranslation;
    
    // Then try to get it from config if available
    if (window.config && window.config.i18n && window.config.i18n[key]) {
        return window.config.i18n[key];
    }
    
    // Finally return the key itself if no translation found
    return key;
}

export function updateTranslations() {
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
}

function getLanguageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    return languages[langParam] ? langParam : null;
}

function updateLanguageInURL(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
}

// Handle URL changes
window.addEventListener('popstate', () => {
    const urlLang = getLanguageFromURL();
    if (urlLang) {
        setLanguage(urlLang, false);
    }
});

// Expose updateTranslations globally for overlays/layers re-render
window.updateTranslations = updateTranslations;

// Initialize translations when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // First check URL for language parameter
    const urlLang = getLanguageFromURL();
    if (urlLang) {
        setLanguage(urlLang, false);
        return;
    }

    // If no URL parameter, use browser language
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['en', 'es', 'ca'];
    const initialLang = supportedLangs.includes(browserLang) ? browserLang : 'en';
    setLanguage(initialLang, true);
}); 