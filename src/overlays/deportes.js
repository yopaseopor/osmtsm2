const { createOverlay, imgSrc } = require('./base.js');

const deportesOverlays = [
    createOverlay({
        group: 'Deportes',
        title: 'Deportes Overlay',
        query: '', // Add specific query
        iconSrc: imgSrc + 'icones/deportes.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            // ... existing style code ...
        }
    })
];

module.exports = {
    deportesOverlays
}; 