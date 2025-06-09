/**
 * Loads and applies a MapTiler style to a vector tile layer
 * @param {string} styleUrl - URL to the MapTiler style JSON
 * @param {ol.layer.VectorTile} layer - The vector tile layer to apply the style to
 */
function loadMapTilerStyle(styleUrl, layer) {
    // Create a style function that will be used by the layer
    const styleFunction = function(feature, resolution) {
        if (!window.maptilerStyle || !window.maptilerStyle.layers) {
            return [];
        }

        const styles = [];
        const zoom = map.getView().getZoom();
        
        // Simple implementation - you might need to enhance this based on your needs
        window.maptilerStyle.layers.forEach(styleLayer => {
            // Skip layers that aren't visible or aren't for the current zoom level
            if (styleLayer.layout && styleLayer.layout.visibility === 'none') {
                return;
            }
            
            if (styleLayer.minzoom !== undefined && zoom < styleLayer.minzoom) {
                return;
            }
            
            if (styleLayer.maxzoom !== undefined && zoom > styleLayer.maxzoom) {
                return;
            }
            
            // Basic style creation - expand this with more style properties as needed
            const style = new ol.style.Style({
                fill: styleLayer.paint && styleLayer.paint['fill-color'] ? 
                    new ol.style.Fill({
                        color: styleLayer.paint['fill-color']
                    }) : undefined,
                stroke: styleLayer.paint && styleLayer.paint['line-color'] ? 
                    new ol.style.Stroke({
                        color: styleLayer.paint['line-color'],
                        width: styleLayer.paint['line-width'] || 1
                    }) : undefined,
                text: styleLayer.layout && styleLayer.layout['text-field'] ?
                    new ol.style.Text({
                        text: feature.get(styleLayer['source-layer'])?.name || '',
                        fill: new ol.style.Fill({
                            color: styleLayer.paint && styleLayer.paint['text-color'] || '#000000'
                        }),
                        stroke: new ol.style.Stroke({
                            color: styleLayer.paint && styleLayer.paint['text-halo-color'] || '#ffffff',
                            width: styleLayer.paint && styleLayer.paint['text-halo-width'] || 1
                        })
                    }) : undefined
            });
            
            styles.push(style);
        });
        
        return styles;
    };

    // Set the style function to the window for the layer to use
    window.maptilerCustomStyle = styleFunction;

    // Fetch the style JSON
    fetch(styleUrl)
        .then(response => response.json())
        .then(style => {
            // Store the style for later use
            window.maptilerStyle = style;
            
            // Force a re-render of the layer
            if (layer) {
                layer.changed();
            }
        })
        .catch(error => {
            console.error('Error loading MapTiler style:', error);
        });
}

// Export the function for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadMapTilerStyle };
}
