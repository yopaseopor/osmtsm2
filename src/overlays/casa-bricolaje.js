const { createOverlay, imgSrc } = require('./base.js');

const casaBricolajeOverlays = [
    createOverlay({
        group: 'Casa-Bricolaje',
        title: 'Casa-Bricolaje Overlay',
        query: '', // Add specific query
        iconSrc: imgSrc + 'icones/casa-bricolaje.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            // ... existing style code ...
        }
    })
];

module.exports = {
    casaBricolajeOverlays
}; 