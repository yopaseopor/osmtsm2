import { an } from './an.js';
import { ar } from './ar.js';
import { ast } from './ast.js';
import { bn } from './bn.js';
import { ca } from './ca.js';
import { da } from './da.js';
import { de } from './de.js';
import { en } from './en.js';
import { es } from './es.js';
import { eu } from './eu.js';
import { fi } from './fi.js';
import { fr } from './fr.js';
import { gl } from './gl.js';
import { hi } from './hi.js';
import { it } from './it.js';
import { ja } from './ja.js';
import { ko } from './ko.js';
import { nl } from './nl.js';
import { no } from './no.js';
import { pl } from './pl.js';
import { pt } from './pt.js';
import { ru } from './ru.js';
import { sv } from './sv.js';
import { uk } from './uk.js';
import { vi } from './vi.js';
import { zh } from './zh.js';

export const languages = {
    an: { name: 'Aragonés (AI-IA)', translations: an },
    ar: { name: 'العربية (AI-IA)', translations: ar, rtl: true },
    ast: { name: 'Asturianu (AI-IA)', translations: ast },
    bn: { name: 'বাংলা (AI-IA)', translations: bn },
    ca: { name: 'Català (AI-IA)', translations: ca },
    da: { name: 'Dansk (AI-IA)', translations: da },
    de: { name: 'Deutsch (AI-IA)', translations: de },
    en: { name: 'English', translations: en },
    es: { name: 'Español', translations: es },
    eu: { name: 'Euskara (AI-IA)', translations: eu },
    fi: { name: 'Suomi (AI-IA)', translations: fi },
    fr: { name: 'Français', translations: fr },
    gl: { name: 'Galego (AI-IA)', translations: gl },
    hi: { name: 'हिन्दी (AI-IA)', translations: hi },
    it: { name: 'Italiano', translations: it },
    ja: { name: '日本語', translations: ja },
    ko: { name: '한국어', translations: ko },
    nl: { name: 'Nederlands', translations: nl },
    no: { name: 'Norsk (AI-IA)', translations: no },
    pl: { name: 'Polski (AI-IA)', translations: pl },
    pt: { name: 'Português', translations: pt },
    ru: { name: 'Русский', translations: ru },
    sv: { name: 'Svenska (AI-IA)', translations: sv },
    uk: { name: 'Українська (AI-IA)', translations: uk },
    vi: { name: 'Tiếng Việt (AI-IA)', translations: vi },
    zh: { name: '中文', translations: zh }
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