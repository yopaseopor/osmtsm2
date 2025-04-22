const { createOverlay, imgSrc } = require('./base.js');

// This file contains all the overlays from the original config.js
// They are organized by group and can be moved to their respective group files

const overlays = [
    // Alimentación group
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
    // Add more overlays here...
];

module.exports = overlays; 