const { createOverlay, imgSrc } = require('./base.js');

const comercioOverlays = [
    createOverlay({
        group: 'Comercio',
        title: 'Comercio Overlay',
        query: '', // Add specific query
        iconSrc: imgSrc + 'icones/comercio.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            // ... existing style code ...
        }
    })
];

module.exports = {
    comercioOverlays
}; 