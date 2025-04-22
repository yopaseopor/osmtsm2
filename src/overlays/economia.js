const { createOverlay, imgSrc } = require('./base.js');

const economiaOverlays = [
    createOverlay({
        group: 'Economía',
        title: 'Bancos',
        query: '(nwr["amenity"="bank"]({{bbox}});node(w););out meta;',
        iconSrc: imgSrc + 'icones/bank.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            // ... existing style code ...
        }
    }),
    // Add more economia overlays here
];

module.exports = {
    economiaOverlays
}; 