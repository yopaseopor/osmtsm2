const { alimentacionOverlays } = require('./alimentacion.js');
const { economiaOverlays } = require('./economia.js');

// Combine all overlays
const allOverlays = [
    ...alimentacionOverlays,
    ...economiaOverlays,
    // Add more overlay groups here
];

module.exports = {
    allOverlays
}; 