/**
 * OSM Cat config
 */

//@@ Ruta de imágenes
var imgSrc = 'src/img/';

// Import overlays from the new structure
const { allOverlays } = require('./overlays/index.js');

//@@Coordenadas LONgitud LATitud Rotación Zoom, Zoom de la geolocalización, unidades
var config = {
    initialConfig: {
        lon: 1.59647,
        lat: 41.69689,
        rotation: 0, //in radians (positive rotation clockwise, 0 means North)
        zoom: 8,
        zoomGeolocation: 17,
        units: 'metric'
    },
    i18n: {
        //@@ Textos entre comillas.
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
    overpassApi: function(){
        //@@posibilidad de cambiar el servidor de overpass https://overpass-turbo.eu/
        var proxyOverpassApi = true;
        var overpassApi = 'https://overpass-api.de/api/interpreter';
        if (proxyOverpassApi)
        {
            overpassApi = 'https://overpass.kumi.systems/api/interpreter';
        }
        return overpassApi;
    },
    //@@ Mapas de fondo
    layers: [
        // ... existing layers ...
    ],
    overlays: allOverlays
};

// Expose config to global scope
window.config = config;

module.exports = config; 