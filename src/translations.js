/**
 * Translations for OSM Traffic Signs Map
 */

const translations = {
    en: {
        // General UI
        title: 'OpenStreetMap POIs Map',
        description: 'OpenStreetMap POIs Map',
        loading: 'Loading... You need Javascript enabled to view this map.',
        
        // Menu and Layers
        layersLabel: 'Layers',
        completeWith: 'Complete with:',
        editWith: 'Edit with:',
        openWith: 'Open with:',
        showWith: 'Show with:',
        show2With: 'Also show with:',
        checkTools: 'Validate with:',
        
        // Messages
        copyDialog: 'Link has been copied to clipboard',
        nodeLabel: 'Node:',
        noNodesFound: 'No information found.',
        wayLabel: 'Way:',
        
        // Map Controls
        zoomIn: 'Zoom in',
        zoomOut: 'Zoom out',
        rotateLeft: 'Rotate left',
        rotateRight: 'Rotate right',
        resetRotation: 'Reset rotation',
        
        // Search
        searchPlaceholder: 'Search location...',
        searchNoResults: 'No results found',
        
        // Errors
        error: 'Error',
        connectionError: 'Connection error. Please try again later.',
        geolocationError: 'Could not get your location',
        geolocationDenied: 'Geolocation permission denied',
        
        // Map Types
        mapTypeStandard: 'Standard',
        mapTypeSatellite: 'Satellite',
        mapTypeTerrain: 'Terrain',
        
        // Traffic Signs
        signInfo: 'Sign Information',
        signType: 'Type',
        signValue: 'Value',
        signDirection: 'Direction',
        signLocation: 'Location',
        signLastEdit: 'Last edited',
        signContributor: 'Contributor'
    },
    es: {
        // General UI
        title: 'Mapa de POIs de OpenStreetMap',
        description: 'Mapa de POIs de OpenStreetMap',
        loading: 'Cargando... Necesitas Javascript habilitado para ver este mapa.',
        
        // Menu and Layers
        layersLabel: 'Capas',
        completeWith: 'Completar con:',
        editWith: 'Editar con:',
        openWith: 'Abrir con:',
        showWith: 'Mostrar con:',
        show2With: 'Mostrar también con:',
        checkTools: 'Validar con:',
        
        // Messages
        copyDialog: 'Enlace copiado al portapapeles',
        nodeLabel: 'Nodo:',
        noNodesFound: 'No se ha encontrado información.',
        wayLabel: 'Vía:',
        
        // Map Controls
        zoomIn: 'Acercar',
        zoomOut: 'Alejar',
        rotateLeft: 'Girar a la izquierda',
        rotateRight: 'Girar a la derecha',
        resetRotation: 'Restablecer rotación',
        
        // Search
        searchPlaceholder: 'Buscar ubicación...',
        searchNoResults: 'No se encontraron resultados',
        
        // Errors
        error: 'Error',
        connectionError: 'Error de conexión. Por favor, inténtelo de nuevo más tarde.',
        geolocationError: 'No se pudo obtener su ubicación',
        geolocationDenied: 'Permiso de geolocalización denegado',
        
        // Map Types
        mapTypeStandard: 'Estándar',
        mapTypeSatellite: 'Satélite',
        mapTypeTerrain: 'Terreno',
        
        // Traffic Signs
        signInfo: 'Información de la señal',
        signType: 'Tipo',
        signValue: 'Valor',
        signDirection: 'Dirección',
        signLocation: 'Ubicación',
        signLastEdit: 'Última edición',
        signContributor: 'Contribuidor'
    },
    ca: {
        // General UI
        title: 'Mapa de POIs d\'OpenStreetMap',
        description: 'Mapa de POIs d\'OpenStreetMap',
        loading: 'Carregant... Necessites Javascript habilitat per veure aquest mapa.',
        
        // Menu and Layers
        layersLabel: 'Capes',
        completeWith: 'Completar amb:',
        editWith: 'Editar amb:',
        openWith: 'Obrir amb:',
        showWith: 'Mostrar amb:',
        show2With: 'Mostrar també amb:',
        checkTools: 'Validar amb:',
        
        // Messages
        copyDialog: 'Enllaç copiat al porta-retalls',
        nodeLabel: 'Node:',
        noNodesFound: 'No s\'ha trobat informació.',
        wayLabel: 'Via:',
        
        // Map Controls
        zoomIn: 'Apropar',
        zoomOut: 'Allunyar',
        rotateLeft: 'Girar a l\'esquerra',
        rotateRight: 'Girar a la dreta',
        resetRotation: 'Restablir rotació',
        
        // Search
        searchPlaceholder: 'Cercar ubicació...',
        searchNoResults: 'No s\'han trobat resultats',
        
        // Errors
        error: 'Error',
        connectionError: 'Error de connexió. Si us plau, torneu-ho a provar més tard.',
        geolocationError: 'No s\'ha pogut obtenir la vostra ubicació',
        geolocationDenied: 'Permís de geolocalització denegat',
        
        // Map Types
        mapTypeStandard: 'Estàndard',
        mapTypeSatellite: 'Satèl·lit',
        mapTypeTerrain: 'Terreny',
        
        // Traffic Signs
        signInfo: 'Informació de la senyal',
        signType: 'Tipus',
        signValue: 'Valor',
        signDirection: 'Direcció',
        signLocation: 'Ubicació',
        signLastEdit: 'Última edició',
        signContributor: 'Col·laborador'
    }
};

// Default language
let currentLanguage = 'en';

// Function to set language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        updateTranslations();
    }
}

// Function to get translation
function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Function to update all translations in the DOM
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'META') {
            element.setAttribute('content', t(key));
        } else {
            element.textContent = t(key);
        }
    });
}

// Export functions
window.setLanguage = setLanguage;
window.t = t;
window.updateTranslations = updateTranslations; 