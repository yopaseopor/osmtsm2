const { createOverlay, imgSrc } = require('./base.js');

const alimentacionOverlays = [
    createOverlay({
        group: 'Alimentación',
        title: 'Supermercados',
        query: '(nwr["shop"="supermarket"]({{bbox}});node(w););out meta;',
        iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            // ... existing style code ...
        }
    }),
    // Add more alimentacion overlays here
];

module.exports = {
    alimentacionOverlays
}; 