/**
 * Loads and applies a Mapbox GL style to an OpenLayers vector tile layer
 * @param {ol.layer.VectorTile} layer - The vector tile layer to apply the style to
 * @param {string} styleUrl - URL to the Mapbox GL style JSON
 * @param {Object} options - Additional options
 * @param {string} [options.spriteBaseUrl] - Base URL for sprites
 * @param {Object} [options.glyphs] - Glyphs configuration
 */
function applyVectorStyle(layer, styleUrl, options = {}) {
    fetch(styleUrl)
        .then(response => response.json())
        .then(style => {
            // Store the style for later use
            window.vectorTileStyle = createStyleFunction(style, options);
            
            // Set the style function on the layer
            layer.setStyle((feature, resolution) => {
                try {
                    return window.vectorTileStyle(feature, resolution);
                } catch (e) {
                    console.error('Error in vectorTileStyle:', e);
                    return [];
                }
            });
        })
        .catch(error => {
            console.error('Error loading vector style:', error);
        });
}

/**
 * Creates a style function from a Mapbox GL style
 */
function createStyleFunction(style, options) {
    const styleCache = {};
    const textCache = {};
    
    // Process the style layers and create OpenLayers style functions
    const styleLayers = processStyleLayers(style.layers || [], options);
    
    return function(feature, resolution) {
        const layerId = feature.get('layer');
        const geometryType = feature.getGeometry().getType();
        const key = `${layerId}|${geometryType}|${Math.floor(resolution)}`;
        
        if (styleCache[key]) {
            return styleCache[key];
        }
        
        const styles = [];
        
        // Find matching style layers for this feature
        for (const styleLayer of styleLayers) {
            if (matchesFilter(feature, styleLayer.filter)) {
                const style = createOlStyle(styleLayer, feature, resolution, options);
                if (style) {
                    styles.push(style);
                }
            }
        }
        
        styleCache[key] = styles;
        return styles;
    };
}

/**
 * Process Mapbox GL style layers into a more usable format
 */
function processStyleLayers(layers, options) {
    return layers.map(layer => ({
        id: layer.id,
        type: layer.type,
        filter: layer.filter,
        paint: layer.paint || {},
        layout: layer.layout || {},
        source: layer.source,
        'source-layer': layer['source-layer']
    }));
}

/**
 * Check if a feature matches a Mapbox GL filter
 */
function matchesFilter(feature, filter) {
    if (!filter) return true;
    // Simplified filter matching - implement full filter logic as needed
    return true;
}

/**
 * Create an OpenLayers style from a Mapbox GL style layer
 */
function createOlStyle(styleLayer, feature, resolution, options) {
    const { type, paint, layout } = styleLayer;
    
    switch (type) {
        case 'fill':
            return new ol.style.Style({
                fill: new ol.style.Fill({
                    color: paint['fill-color'] || 'rgba(0, 0, 0, 0.1)'
                }),
                stroke: paint['fill-outline-color'] ? new ol.style.Stroke({
                    color: paint['fill-outline-color'],
                    width: 1
                }) : undefined,
                zIndex: 1
            });
            
        case 'line':
            return new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: paint['line-color'] || '#000',
                    width: getLineWidth(paint['line-width'], resolution),
                    lineCap: layout['line-cap'] || 'butt',
                    lineJoin: layout['line-join'] || 'miter',
                    lineDash: paint['line-dasharray'] || undefined
                }),
                zIndex: 2
            });
            
        case 'symbol':
            const text = layout['text-field'];
            if (!text) return null;
            
            // Simple text rendering - expand this for full text formatting
            const textStyle = new ol.style.Text({
                text: text.replace(/\{([^}]+)\}/g, (match, p1) => feature.get(p1) || ''),
                font: '12px Arial, sans-serif',
                fill: new ol.style.Fill({
                    color: paint['text-color'] || '#000'
                }),
                stroke: paint['text-halo-color'] ? new ol.style.Stroke({
                    color: paint['text-halo-color'],
                    width: paint['text-halo-width'] || 1
                }) : undefined,
                offsetY: -10,
                padding: [2, 2, 2, 2]
            });
            
            return new ol.style.Style({
                text: textStyle,
                zIndex: 10
            });
            
        default:
            return null;
    }
}

/**
 * Calculate line width based on zoom level
 */
function getLineWidth(width, resolution) {
    if (typeof width === 'number') return width;
    if (width && width.stops) {
        // Simple implementation - find the closest zoom level
        const zoom = Math.round(Math.log2(156543.03390625 / resolution));
        let result = 1;
        
        for (const stop of width.stops) {
            if (stop[0] <= zoom) {
                result = stop[1];
            } else {
                break;
            }
        }
        
        return result;
    }
    return 1;
}

export { applyVectorStyle };
