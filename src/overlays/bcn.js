const { createOverlay, imgSrc } = require('./base.js');

const bcnOverlays = [
    createOverlay({
        group: 'BCN (CC 4.0 Dades Ajuntament BCN)',
        title: 'BCN Overlay',
        query: '', // Add specific query
        iconSrc: imgSrc + 'icones/bcn.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            // ... existing style code ...
        }
    })
];

module.exports = {
    bcnOverlays
}; 