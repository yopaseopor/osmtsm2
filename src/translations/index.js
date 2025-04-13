// Import translations
const en = {
    ui: {
        loading: "Loading... You need Javascript...",
        layersLabel: "Layers",
        completeWith: "Complete with:",
        editWith: "Edit with:",
        openWith: "Open with:",
        showWith: "Show with:",
        show2With: "Also show with:",
        checkTools: "Validate with:",
        copyDialog: "Link has been copied",
        nodeLabel: "Node:",
        noNodesFound: "No information found.",
        wayLabel: "Way:",
        languageSelector: "Select language"
    }
};

const es = {
    ui: {
        loading: "Cargando... Necesitas Javascript...",
        layersLabel: "Capas",
        completeWith: "Completar con:",
        editWith: "Editar con:",
        openWith: "Abrir con:",
        showWith: "Mostrar con:",
        show2With: "Mostrar también con:",
        checkTools: "Validar con:",
        copyDialog: "Enlace copiado",
        nodeLabel: "Nodo:",
        noNodesFound: "No se ha encontrado información.",
        wayLabel: "Vía:",
        languageSelector: "Seleccionar idioma"
    }
};

const ca = {
    ui: {
        loading: "Carregant... Necessites Javascript...",
        layersLabel: "Capes",
        completeWith: "Completar amb:",
        editWith: "Editar amb:",
        openWith: "Obrir amb:",
        showWith: "Mostrar amb:",
        show2With: "Mostrar també amb:",
        checkTools: "Validar amb:",
        copyDialog: "S'ha copiat l'enllaç",
        nodeLabel: "Node:",
        noNodesFound: "No s'ha trobat informació.",
        wayLabel: "Via:",
        languageSelector: "Seleccionar idioma"
    }
};

const translations = {
    en,
    es,
    ca
};

// Create translation manager
const i18n = {
    currentLanguage: localStorage.getItem('language') || 'en',
    translations: translations,
    listeners: [],

    setLanguage: function(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
            this.notifyListeners();
            // Update the select element
            const select = document.getElementById('lang-select');
            if (select) {
                select.value = lang;
            }
        }
    },

    translate: function(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key;
            }
        }
        
        return value;
    },

    addListener: function(callback) {
        this.listeners.push(callback);
    },

    removeListener: function(callback) {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    },

    notifyListeners: function() {
        this.listeners.forEach(listener => listener(this.currentLanguage));
    },

    getCurrentLanguage: function() {
        return this.currentLanguage;
    },

    getAvailableLanguages: function() {
        return Object.keys(this.translations);
    }
};

// Make i18n globally available
window.i18n = i18n;

// Initialize the language selector
document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('lang-select');
    if (select) {
        select.value = i18n.getCurrentLanguage();
        select.addEventListener('change', function(e) {
            i18n.setLanguage(e.target.value);
        });
    }
}); 