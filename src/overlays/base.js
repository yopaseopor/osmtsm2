/**
 * Base overlay configuration
 */

// Import OpenLayers
const ol = require('ol');

// Common overlay structure
const overlayStructure = {
    group: '', // string: group name
    title: '', // string: layer title
    query: '', // string: overpass query
    iconSrc: '', // string: icon path
    iconStyle: '', // string: icon style
    style: null // function: style function
};

// Helper function to create an overlay
function createOverlay(config) {
    return {
        ...overlayStructure,
        ...config
    };
}

// Export the imgSrc path
const imgSrc = 'src/img/';

module.exports = {
    overlayStructure,
    createOverlay,
    imgSrc,
    ol
}; 