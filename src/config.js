import Alimentacion from './overlays/alimentacion.js';
import Comercio from './overlays/comercio.js';
import Exterior from './overlays/exterior.js';

var config = {
    initialConfig: {
        lon: 1.59647,
        lat: 41.69689,
        rotation: 0,
        zoom: 8,
        zoomGeolocation: 17,
        units: 'metric',
    },
    i18n: {
        layersLabel: 'Capas',
        completeWith: 'Completar con:',
        editWith: 'Editar con:',
        openWith: 'Abrir con:',
        showWith: 'Mostrar con:',
        show2With: 'Mostrar también con:',
        checkTools: 'Validar con:',
        copyDialog: "S'ha copiat l'enllaç al porta-retalls.Enlace copiado. Link has been copied",
        nodeLabel: 'Nodo:',
        noNodesFound: 'No se ha encontrado información.',
        wayLabel: 'Vía:',
    },
    overpassApi: function () {
        var proxyOverpassApi = true;
        var overpassApi = 'https://overpass-api.de/api/interpreter';
        if (proxyOverpassApi) {
            overpassApi = 'https://overpass.kumi.systems/api/interpreter';
        }
        return overpassApi;
    },
    layers: [
        // Background layers here
    ],
    overlays: [
        ...Alimentacion,
        ...Comercio,
        ...Exterior,
    ],
};