// Translation system for OSM Traffic Signs Map
const translations = {
    // Default language (English)
    en: {
        // Interface elements
        'Layers': 'Layers',
        'Search': 'Search',
        'Router': 'Router',
        'Start': 'Start',
        'Via': 'Via',
        'End': 'End',
        'Car': 'Car',
        'Cycle': 'Cycle',
        'Complete with': 'Complete with',
        'Edit with': 'Edit with',
        'Open with': 'Open with',
        'Show with': 'Show with',
        'Show also with': 'Show also with',
        'Validate with': 'Validate with',
        'Node': 'Node',
        'No information found': 'No information found',
        'Way': 'Way',
        'Copy link to clipboard': 'Link has been copied to clipboard',
        'Error': 'Error',
        'Nodes Found': 'Nodes Found'
    },
    // Spanish
    es: {
        'Layers': 'Capas',
        'Search': 'Buscar',
        'Router': 'Ruta',
        'Start': 'Inicio',
        'Via': 'Vía',
        'End': 'Fin',
        'Car': 'Coche',
        'Cycle': 'Bicicleta',
        'Complete with': 'Completar con',
        'Edit with': 'Editar con',
        'Open with': 'Abrir con',
        'Show with': 'Mostrar con',
        'Show also with': 'Mostrar también con',
        'Validate with': 'Validar con',
        'Node': 'Nodo',
        'No information found': 'No se ha encontrado información',
        'Way': 'Vía',
        'Copy link to clipboard': 'Enlace copiado al portapapeles',
        'Error': 'Error',
        'Nodes Found': 'Nodos encontrados'
    },
    // Catalan
    ca: {
        'Layers': 'Capes',
        'Search': 'Cercar',
        'Router': 'Ruta',
        'Start': 'Inici',
        'Via': 'Via',
        'End': 'Fi',
        'Car': 'Cotxe',
        'Cycle': 'Bicicleta',
        'Complete with': 'Completar amb',
        'Edit with': 'Editar amb',
        'Open with': 'Obrir amb',
        'Show with': 'Mostrar amb',
        'Show also with': 'Mostrar també amb',
        'Validate with': 'Validar amb',
        'Node': 'Node',
        'No information found': 'No s\'ha trobat informació',
        'Way': 'Via',
        'Copy link to clipboard': 'Enllaç copiat al porta-retalls',
        'Error': 'Error',
        'Nodes Found': 'Nodes trobats'
    }
};

// Translation function
function translate(key, lang = 'en') {
    return translations[lang]?.[key] || translations['en'][key] || key;
}

// Language detection
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const lang = browserLang.split('-')[0];
    return translations[lang] ? lang : 'en';
}

// Export the translation system
window.i18n = {
    translate,
    detectLanguage,
    currentLanguage: detectLanguage(),
    setLanguage: function(lang) {
        if (translations[lang]) {
            this.currentLanguage = lang;
            // Trigger a custom event for language change
            const event = new CustomEvent('languageChanged', { detail: { language: lang } });
            document.dispatchEvent(event);
        }
    }
}; 