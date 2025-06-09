// Helper function to parse color values
function parseColor(color) {
    if (typeof color === 'string') {
        // Handle named colors or hex values
        if (color.startsWith('#')) {
            return color;
        }
        // Handle rgb/rgba strings
        if (color.startsWith('rgb')) {
            const parts = color.match(/[\d.]+/g);
            if (parts) {
                const [r, g, b, a] = parts.map(parseFloat);
                return a !== undefined ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
            }
        }
    }
    // Default fallback
    return 'rgba(0, 0, 0, 0.5)';
}

// Helper function to create OL style from Mapbox GL layer
function createStyleFromLayer(layer) {
    if (!layer.paint) return null;

    const style = new ol.style.Style({});

    // Handle fill layers
    if (layer.type === 'fill' && layer.paint['fill-color']) {
        style.setFill(new ol.style.Fill({
            color: parseColor(layer.paint['fill-color'])
        }));

        if (layer.paint['fill-outline-color']) {
            style.setStroke(new ol.style.Stroke({
                color: parseColor(layer.paint['fill-outline-color']),
                width: layer.paint['fill-outline-width'] || 1
            }));
        }
    }
    // Handle line layers
    else if (layer.type === 'line' && layer.paint['line-color']) {
        style.setStroke(new ol.style.Stroke({
            color: parseColor(layer.paint['line-color']),
            width: layer.paint['line-width'] || 1,
            lineCap: 'round',
            lineJoin: 'round'
        }));
    }

    return style;
}

// Function to apply vector tile style from JSON
function applyVectorTileStyle(vectorLayer, styleJson) {
    if (!vectorLayer || !styleJson || !styleJson.layers) return;

    // Create a style function for the vector layer
    vectorLayer.setStyle(function(feature, resolution) {
        const layerId = feature.get('layer');
        const styleCache = {};

        // Find matching style layers
        const matchingLayers = styleJson.layers.filter(layer => {
            // Simple filter matching - can be extended based on your needs
            return layer.id === layerId || 
                  (layer.source === 'openmaptiles' && layer['source-layer'] === layerId);
        });

        // Generate styles for matching layers
        const styles = [];
        matchingLayers.forEach(layer => {
            const styleKey = JSON.stringify(layer);
            if (!styleCache[styleKey]) {
                styleCache[styleKey] = createStyleFromLayer(layer);
            }
            if (styleCache[styleKey]) {
                styles.push(styleCache[styleKey]);
            }
        });

        return styles.length > 0 ? styles : undefined;
    });

    // Force a re-render
    vectorLayer.changed();
}

// Export the functions
window.vectorTileUtils = {
    applyVectorTileStyle,
    createStyleFromLayer,
    parseColor
};
