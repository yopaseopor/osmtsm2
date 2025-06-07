/**
 * Vector Tile Style for MapTiler/OpenMapTiles
 * Optimized for MapTiler vector tiles
 */
window.vectorTileStyle = function(feature, resolution) {
    // Get feature properties and type
    const layer = feature.get('layer');
    const type = feature.getGeometry().getType();
    const zoom = Math.round(Math.log(156543.03390625 / resolution) / Math.LN2);
    
    // Helper function to create text style
    const createTextStyle = (text, options = {}) => {
        if (!text) return null;
        
        return new ol.style.Style({
            text: new ol.style.Text({
                text: text,
                font: options.font || '12px "Noto Sans", Arial, sans-serif',
                fill: new ol.style.Fill({ 
                    color: options.fill || '#333' 
                }),
                stroke: new ol.style.Stroke({
                    color: options.stroke || 'rgba(255, 255, 255, 0.8)',
                    width: options.strokeWidth || 2
                }),
                offsetX: options.offsetX || 0,
                offsetY: options.offsetY || 0,
                padding: options.padding || [2, 2, 2, 2],
                maxAngle: options.maxAngle || 0.4,
                placement: options.placement || 'point',
                textBaseline: options.textBaseline || 'middle',
                textAlign: options.textAlign || 'center',
                backgroundFill: new ol.style.Fill({
                    color: options.backgroundFill || 'rgba(255, 255, 255, 0.6)'
                })
            })
        });
    };
    // Base styles for different feature types
    const baseStyles = {
        water: {
            fill: new ol.style.Fill({ color: '#a4bee8' }),
            stroke: new ol.style.Stroke({ color: '#7ba2d1', width: 1 })
        },
        landuse: {
            fill: new ol.style.Fill({ color: '#f2f0e9' })
        },
        highway: {
            motorway: { color: '#ff6b6b', width: 2.5 },
            trunk: { color: '#ff9e7d', width: 2.25 },
            primary: { color: '#ffd166', width: 2 },
            secondary: { color: '#f7fff7', width: 1.75 },
            tertiary: { color: '#f7fff7', width: 1.5 },
            residential: { color: '#f7fff7', width: 1 },
            service: { color: '#f7fff7', width: 0.75 }
        },
        building: {
            fill: new ol.style.Fill({ color: '#e0dcd3' }),
            stroke: new ol.style.Stroke({ color: '#c0bdb6', width: 0.5 })
        },
        poi: {
            icon: '📍',
            font: '20px "Noto Color Emoji", "Apple Color Emoji", sans-serif',
            fill: '#2c3e50',
            textFont: '500 11px "Noto Sans", Arial, sans-serif',
            textFill: '#2c3e50',
            textStroke: 'rgba(255, 255, 255, 0.8)',
            textStrokeWidth: 2,
            minZoom: 14
        }
    };

    try {
        // Get feature properties
        const layer = feature.get('layer') || 'unknown';
        const cls = feature.get('class') || '';
        const name = feature.get('name') || feature.get('name_en') || '';
        const place = feature.get('place');
        
        // Always return a default style for any feature
        if (!layer) {
            return [new ol.style.Style({
                fill: new ol.style.Fill({ color: 'rgba(200, 200, 200, 0.3)' }),
                stroke: new ol.style.Stroke({ color: '#999', width: 0.5 })
            })];
        }
        
        // Water features
        if (layer === 'water') {
            return [new ol.style.Style({
                fill: baseStyles.water.fill,
                stroke: baseStyles.water.stroke
            })];
        }
        
        // Place labels (cities, towns, etc.)
        if (layer === 'place' && name) {
            const style = {
                font: '12px "Noto Sans", Arial, sans-serif',
                fill: '#333',
                stroke: '#fff',
                strokeWidth: 2,
                placement: 'point'
            };
            
            if (place === 'city') {
                style.font = 'bold 16px "Noto Sans", Arial, sans-serif';
                style.fill = '#1a237e';
            } else if (place === 'town') {
                style.font = '600 14px "Noto Sans", Arial, sans-serif';
                style.fill = '#283593';
            } else if (place === 'village') {
                style.font = '500 12px "Noto Sans", Arial, sans-serif';
                style.fill = '#303f9f';
            }
            
            const textStyle = createTextStyle(name, style);
            return textStyle ? [textStyle] : [];
        }
        
        // Enhanced POI (Points of Interest) with icons and better text
        if (layer === 'poi' && name) {
            const poiClass = cls || 'other';
            let icon = baseStyles.poi.icon;
            
            // Map POI classes to emoji icons
            const iconMap = {
                'restaurant': '🍽️', 'cafe': '☕', 'bar': '🍻',
                'hotel': '🏨', 'hostel': '🏠', 'shop': '🛍️',
                'attraction': '🏛️', 'museum': '🏛️', 'park': '🌳',
                'garden': '🌷', 'hospital': '🏥', 'school': '🏫',
                'university': '🎓', 'airport': '✈️', 'station': '🚉',
                'bus': '🚌', 'fuel': '⛽', 'parking': '🅿️',
                'bank': '🏦', 'atm': '💳', 'pharmacy': '💊',
                'cinema': '🎬', 'theatre': '🎭', 'stadium': '🏟️',
                'swimming': '🏊', 'golf': '⛳', 'soccer': '⚽'
            };
            
            if (iconMap[poiClass]) {
                icon = iconMap[poiClass];
            }
            
            // Only show POIs at higher zoom levels
            if (zoom < baseStyles.poi.minZoom) return [];
            
            const styles = [
                // Icon
                new ol.style.Style({
                    text: new ol.style.Text({
                        text: icon,
                        font: baseStyles.poi.font,
                        fill: new ol.style.Fill({ color: baseStyles.poi.fill }),
                        offsetY: -10,
                        textAlign: 'center',
                        textBaseline: 'middle'
                    })
                })
            ];
            
            // Add text label
            const textStyle = createTextStyle(name, {
                font: baseStyles.poi.textFont,
                fill: baseStyles.poi.textFill,
                stroke: baseStyles.poi.textStroke,
                strokeWidth: baseStyles.poi.textStrokeWidth,
                offsetY: 12,
                textBaseline: 'top',
                padding: [2, 4, 2, 4],
                backgroundFill: 'rgba(255, 255, 255, 0.7)',
                minResolution: 0,
                maxResolution: 50
            });
            
            if (textStyle) styles.push(textStyle);
            return styles;
        }
        
        // Landuse layer - just show the name if it has one
        if (layer === 'landuse' && name) {
            return [new ol.style.Style({
                text: new ol.style.Text({
                    text: name,
                    font: 'italic 11px Arial, sans-serif',
                    fill: new ol.style.Fill({ color: '#2e7d32' }),
                    stroke: new ol.style.Stroke({
                        color: '#ffffff',
                        width: 2
                    }),
                    placement: 'point',
                    maxAngle: 0
                })
            })];
        }
        
        // Road labels
        if (layer === 'transportation_name' && name) {
            const isMajor = ['motorway', 'trunk', 'primary'].includes(cls);
            return [createTextStyle(name, {
                font: isMajor ? '600 12px "Noto Sans"' : '500 11px "Noto Sans"',
                fill: isMajor ? '#2c3e50' : '#34495e',
                stroke: '#fff',
                strokeWidth: 2,
                placement: 'line',
                maxAngle: 0.4
            })];
        }
        
        // Transportation layer (roads, paths, etc.) - simplified to just show roads
        if (layer === 'transportation') {
            const style = baseStyles.highway[cls] || baseStyles.highway.tertiary;
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: style.color,
                    width: style.width,
                    lineCap: 'round',
                    lineJoin: 'round'
                })
            })];
        }
        
        // Buildings
        if (layer === 'building') {
            return [new ol.style.Style({
                fill: baseStyles.building.fill,
                stroke: baseStyles.building.stroke
            })];
        }
        
        // Boundary layer
        if (layer === 'boundary') {
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#999',
                    width: 1,
                    lineDash: [4, 4]
                })
            })];
        }
        
        // Default style - return empty array for unhandled layers
        return [new ol.style.Style({
            fill: new ol.style.Fill({ color: 'rgba(200, 200, 200, 0.1)' }),
            stroke: new ol.style.Stroke({ color: '#ddd', width: 0.5 })
        })];
        
    } catch (error) {
        console.error('Error styling feature:', error, feature);
        return [];
    }
};

/**
 * Simple color adjustment function
 * @param {string} hex - Hex color code
 * @param {number} percent - Positive to lighten, negative to darken
 * @returns {string} Adjusted color
 */
function adjustColor(hex, percent) {
    if (!hex || typeof hex !== 'string') return hex;
    
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Parse hex to RGB
    const num = parseInt(hex, 16);
    let r = (num >> 16) + percent;
    let g = (num & 0x0000FF) + percent;
    let b = ((num >> 8) & 0x00FF) + percent;
    
    // Clamp values
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    
    // Convert back to hex
    return '#' + (g | (b << 8) | (r << 16) | (1 << 24)).toString(16).slice(1);
}

// Ensure the style function is available globally
if (window) {
    window.vectorTileStyle = vectorTileStyle;
}
