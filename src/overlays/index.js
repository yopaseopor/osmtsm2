const { alimentacionOverlays } = require('./alimentacion.js');
const { economiaOverlays } = require('./economia.js');

// Combine all overlays
const allOverlays = [
    ...alimentacionOverlays,
    ...economiaOverlays
];

module.exports = {
    allOverlays
}; 