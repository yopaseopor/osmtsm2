/**
 * Minimal vector tile style function for testing
 * This is a simplified version to help diagnose issues
 */

console.log('Vector tile style script loaded');

// Simple style function that returns basic styles for testing
function vectorTileStyle(feature, resolution) {
    try {
        // Get basic feature info
        const layer = feature.get('layer') || 'unknown';
        
        // Simple style based on layer type
        switch(layer) {
            case 'water':
                return [new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(170, 210, 255, 0.5)'
                    })
                })];
                
            case 'road':
            case 'highway':
            case 'transportation':
                return [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: '#ffffff',
                        width: 2
                    })
                })];
                
            case 'building':
                return [new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(200, 200, 200, 0.5)'
                    })
                })];
                
            case 'landuse':
                return [new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(200, 250, 200, 0.5)'
                    })
                })];
                
            default:
                // Default style for any other features
                return [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: '#3399CC',
                        width: 1
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(51, 153, 204, 0.1)'
                    })
                })];
        }
    } catch (error) {
        console.error('Error in vectorTileStyle:', error);
        return []; // Return empty array on error
    }
}

// Export the vector tile style function
if (typeof window !== 'undefined') {
    window.vectorTileStyle = vectorTileStyle;
    console.log('Vector tile style function exported');
} else {
    console.error('Window object not available for vectorTileStyle export');
}
