const { createOverlay, imgSrc } = require('./base.js');

const serviciosAsociacionesOverlays = [
    createOverlay({
        group: 'Servicios-Asociaciones',
        title: 'Servicios-Asociaciones Overlay',
        query: '', // Add specific query
        iconSrc: imgSrc + 'icones/servicios-asociaciones.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            // ... existing style code ...
        }
    })
];

module.exports = {
    serviciosAsociacionesOverlays
}; 