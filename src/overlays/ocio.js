const { createOverlay, imgSrc } = require('./base.js');

const ocioOverlays = [
    createOverlay({
        group: 'Ocio',
        title: 'Ocio Overlay',
        query: '', // Add specific query
        iconSrc: imgSrc + 'icones/ocio.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            // ... existing style code ...
        }
    })
];

module.exports = {
    ocioOverlays
}; 