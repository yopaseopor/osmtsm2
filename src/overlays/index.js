const { alimentacionOverlays } = require('./alimentacion.js');
const { economiaOverlays } = require('./economia.js');
const { bcnOverlays } = require('./bcn.js');
const { casaBricolajeOverlays } = require('./casa-bricolaje.js');
const { comercioOverlays } = require('./comercio.js');
const { deportesOverlays } = require('./deportes.js');
const { exteriorOverlays } = require('./exterior.js');
const { saludOverlays } = require('./salud.js');
const { serviciosAsociacionesOverlays } = require('./servicios-asociaciones.js');
const { ocioOverlays } = require('./ocio.js');

// Combine all overlays
const allOverlays = [
    ...alimentacionOverlays,
    ...economiaOverlays,
    ...bcnOverlays,
    ...casaBricolajeOverlays,
    ...comercioOverlays,
    ...deportesOverlays,
    ...exteriorOverlays,
    ...saludOverlays,
    ...serviciosAsociacionesOverlays,
    ...ocioOverlays
];

module.exports = {
    allOverlays
}; 