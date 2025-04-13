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
    },
    categories: {
        food: "Food",
        supermarkets: "Supermarkets",
        layers: "Layers",
        basemaps: "Base Maps"
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
    },
    categories: {
        food: "Alimentación",
        supermarkets: "Supermercados",
        layers: "Capas",
        basemaps: "Mapas Base"
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
    },
    categories: {
        food: "Alimentació",
        supermarkets: "Supermercats",
        layers: "Capes",
        basemaps: "Mapes Base"
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
            
            // Update all translatable elements
            this.updateAllTranslations();
            
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

    updateAllTranslations: function() {
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = this.translate(key);
        });

        // Update menu items
        this.updateMenuTranslations();
    },

    updateMenuTranslations: function() {
        // Update layer groups
        document.querySelectorAll('.osmcat-menu h3').forEach(element => {
            const originalText = element.getAttribute('data-original-text');
            if (originalText) {
                element.textContent = this.translate('categories.' + originalText.toLowerCase());
            }
        });

        // Update layer titles
        document.querySelectorAll('.osmcat-layer div').forEach(element => {
            const originalText = element.getAttribute('data-original-text');
            if (originalText) {
                const translated = this.translate('categories.' + originalText.toLowerCase());
                if (translated !== originalText) {
                    const img = element.querySelector('img');
                    if (img) {
                        element.innerHTML = img.outerHTML + ' ' + translated;
                    } else {
                        element.textContent = translated;
                    }
                }
            }
        });
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
    
    // Initial translation update
    i18n.updateAllTranslations();
}); 