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
    // Sorted alphabetically by English name
    ar: { 
        name: 'العربية (IA-AI)', 
        enName: 'Arabic (IA-AI)',
        translations: ar, 
        rtl: true 
    },
    bn: { 
        name: 'বাংলা (IA-AI)', 
        enName: 'Bengali (IA-AI)',
        translations: bn 
    },
    ca: { 
        name: 'Català (IA-AI)', 
        enName: 'Catalan (IA-AI)',
        translations: ca 
    },
    zh: { 
        name: '中文 (IA-AI)', 
        enName: 'Chinese (IA-AI)',
        translations: zh 
    },
    da: { 
        name: 'Dansk (IA-AI)', 
        enName: 'Danish (IA-AI)',
        translations: da 
    },
    nl: { 
        name: 'Nederlands (IA-AI)', 
        enName: 'Dutch (IA-AI)',
        translations: nl 
    },
    en: { 
        name: 'English (IA-AI)', 
        enName: 'English (IA-AI)',
        translations: en 
    },
    fi: { 
        name: 'Suomi (IA-AI)', 
        enName: 'Finnish (IA-AI)',
        translations: fi 
    },
    fr: { 
        name: 'Français (IA-AI)', 
        enName: 'French (IA-AI)',
        translations: fr 
    },
    de: { 
        name: 'Deutsch (IA-AI)', 
        enName: 'German (IA-AI)',
        translations: de 
    },
    el: { 
        name: 'Ελληνικά (IA-AI)', 
        enName: 'Greek (IA-AI)',
        translations: el 
    },
    hi: { 
        name: 'हिन्दी (IA-AI)', 
        enName: 'Hindi (IA-AI)',
        translations: hi 
    },
    hu: { 
        name: 'Magyar (IA-AI)', 
        enName: 'Hungarian (IA-AI)',
        translations: hu 
    },
    id: { 
        name: 'Bahasa Indonesia (IA-AI)', 
        enName: 'Indonesian (IA-AI)',
        translations: id 
    },
    it: { 
        name: 'Italiano (IA-AI)', 
        enName: 'Italian (IA-AI)',
        translations: it 
    },
    ja: { 
        name: '日本語 (IA-AI)', 
        enName: 'Japanese (IA-AI)',
        translations: ja 
    },
    ko: { 
        name: '한국어 (IA-AI)', 
        enName: 'Korean (IA-AI)',
        translations: ko 
    },
    no: { 
        name: 'Norsk (IA-AI)', 
        enName: 'Norwegian (IA-AI)',
        translations: no 
    },
    pl: { 
        name: 'Polski (IA-AI)', 
        enName: 'Polish (IA-AI)',
        translations: pl 
    },
    pt: { 
        name: 'Português (IA-AI)', 
        enName: 'Portuguese (IA-AI)',
        translations: pt 
    },
    ro: { 
        name: 'Română (IA-AI)', 
        enName: 'Romanian (IA-AI)',
        translations: ro 
    },
    ru: { 
        name: 'Русский (IA-AI)', 
        enName: 'Russian (IA-AI)',
        translations: ru 
    },
    es: { 
        name: 'Español (IA-AI)', 
        enName: 'Spanish (IA-AI)',
        translations: es 
    },
    sv: { 
        name: 'Svenska (IA-AI)', 
        enName: 'Swedish (IA-AI)',
        translations: sv 
    },
    th: { 
        name: 'ไทย (IA-AI)', 
        enName: 'Thai (IA-AI)',
        translations: th 
    },
    tr: { 
        name: 'Türkçe (IA-AI)', 
        enName: 'Turkish (IA-AI)',
        translations: tr 
    },
    uk: { 
        name: 'Українська (IA-AI)', 
        enName: 'Ukrainian (IA-AI)',
        translations: uk 
    },
    vi: { 
        name: 'Tiếng Việt (IA-AI)', 
        enName: 'Vietnamese (IA-AI)',
        translations: vi 
    },
    // Regional languages
    an: { 
        name: 'Aragonés (IA-AI)', 
        enName: 'Aragonese (IA-AI)',
        translations: an 
    },
    ast: { 
        name: 'Asturianu (IA-AI)', 
        enName: 'Asturian (IA-AI)',
        translations: ast 
    },
    eu: { 
        name: 'Euskara (IA-AI)', 
        enName: 'Basque (IA-AI)',
        translations: eu 
    },
    gl: { 
        name: 'Galego (IA-AI)', 
        enName: 'Galician (IA-AI)',
        translations: gl 
    }
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