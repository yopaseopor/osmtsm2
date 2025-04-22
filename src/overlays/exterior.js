const { createOverlay, imgSrc } = require('./base.js');

const exteriorOverlays = [
    createOverlay({
        group: 'Exterior',
        title: 'Exterior Overlay',
        query: '', // Add specific query
        iconSrc: imgSrc + 'icones/exterior.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            // ... existing style code ...
        }
    })
];

module.exports = {
    exteriorOverlays
}; 