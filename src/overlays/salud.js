const { createOverlay, imgSrc } = require('./base.js');

const saludOverlays = [
    createOverlay({
        group: 'Salud',
        title: 'Salud Overlay',
        query: '', // Add specific query
        iconSrc: imgSrc + 'icones/salud.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            // ... existing style code ...
        }
    })
];

module.exports = {
    saludOverlays
}; 