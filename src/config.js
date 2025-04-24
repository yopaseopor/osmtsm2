import { initialOverlays, allOverlays } from './overlays/index.js';
import { getTranslation } from './i18n/index.js';

/**
 * OSM Cat config
 */

const imgSrc = 'src/img/';

const config = {
    // Map initial configuration
    initialConfig: {
        lon: 2.1734,
        lat: 41.3851,
        rotation: 0,
        zoom: 14,
        zoomGeolocation: 17,
        units: 'metric'
    },

    // i18n configuration
    i18n: {
        locale: 'ca',
        languages: ['ca', 'es', 'en'],
        getTranslation: getTranslation,
        layersLabel: 'Capas',
        completeWith: 'Completar con:',
        editWith: 'Editar con:',
        openWith: 'Abrir con:',
        showWith: 'Mostrar con:',
        show2With: 'Mostrar también con:',
        checkTools: 'Validar con:',
        copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
        nodeLabel: 'Nodo:',
        noNodesFound: 'No se ha encontrado información.',
        wayLabel: 'Vía:'
    },

    // Overlay configuration
    overlays: initialOverlays,
    loadOverlays: allOverlays,

    // Overpass API configuration
    overpassApi: function(query) {
        const endpoint = 'https://overpass-api.de/api/interpreter';
        return fetch(endpoint, {
            method: 'POST',
            body: 'data=' + encodeURIComponent(query)
        }).then(response => response.json());
    },

    // Base layers configuration
    layers: [
        new ol.layer.Tile({
            title: 'OpenStreetMap',
            iconSrc: imgSrc + 'icones_web/osm_logo-layer.svg',
            source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
            title: 'OpenStreetMap DE',
            iconSrc: imgSrc + 'icones_web/osmbw_logo-layer.png',
            maxZoom: 18,
            source: new ol.source.XYZ({
                attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
            }),
            visible: false
        })
        // Additional layers can be added here
    ],

    imgSrc: imgSrc
};

export default config; 