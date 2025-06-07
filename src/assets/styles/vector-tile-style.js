/**
 * Vector Tile Style for MapTiler/OpenMapTiles
 * Optimized for MapTiler vector tiles
 */
window.vectorTileStyle = function(feature, resolution) {
    // Get feature properties and type
    const props = feature.getProperties();
    const layer = feature.get('layer');
    const type = feature.getGeometry().getType();
    
    // Common style properties
    const styles = [];
    const zoom = Math.round(Math.log(156543.03390625 / resolution) / Math.LN2);
    
    // Helper function to create text style
    const createTextStyle = (text, options = {}) => {
        if (!text) return null;
        
        const {
            font = '12px "Noto Sans", Arial, sans-serif',
            fill = '#333',
            stroke = 'rgba(255, 255, 255, 0.8)',
            strokeWidth = 2,
            offsetX = 0,
            offsetY = 0,
            padding = [2, 2, 2, 2],
            maxAngle = 0.4,
            placement = 'point',
            backgroundFill = 'rgba(255, 255, 255, 0.6)',
            backgroundStroke = 'rgba(0, 0, 0, 0.1)',
            textBaseline = 'middle',
            textAlign = 'center',
            maxResolution = Infinity,
            minResolution = 0
        } = options;
        
        // Skip if outside resolution range
        if (resolution < minResolution || resolution > maxResolution) {
            return null;
        }
        
        return new ol.style.Style({
            text: new ol.style.Text({
                text: text,
                font: font,
                fill: new ol.style.Fill({ color: fill }),
                stroke: new ol.style.Stroke({
                    color: stroke,
                    width: strokeWidth
                }),
                offsetX: offsetX,
                offsetY: offsetY,
                padding: padding,
                maxAngle: maxAngle,
                placement: placement,
                textBaseline: textBaseline,
                textAlign: textAlign,
                backgroundFill: new ol.style.Fill({
                    color: backgroundFill
                }),
                backgroundStroke: new ol.style.Stroke({
                    color: backgroundStroke,
                    width: 1
                })
            })
        });
    };
    // Base styles for different feature types
    const baseStyles = {
        // Default style for other features
        default: {
            fill: new ol.style.Fill({
                color: '#a4bee8'
            }),
            stroke: new ol.style.Stroke({
                color: '#7ba2d1',
                width: 1
            })
        },
        // Water features
        water: {
            fill: new ol.style.Fill({
                color: '#a4bee8'
            }),
            stroke: new ol.style.Stroke({
                color: '#7ba2d1',
                width: 1
            })
        },
        // Landuse features
        landuse: {
            fill: new ol.style.Fill({
                color: '#f2f0e9'
            })
        },
        // Roads
        highway: {
            motorway: {
                color: '#ff6b6b',
                width: 2.5
            },
            trunk: {
                color: '#ff9e7d',
                width: 2.25
            },
            primary: {
                color: '#ffd166',
                width: 2
            },
            secondary: {
                color: '#f7fff7',
                width: 1.75
            },
            tertiary: {
                color: '#f7fff7',
                width: 1.5
            },
            residential: {
                color: '#f7fff7',
                width: 1
            },
            service: {
                color: '#f7fff7',
                width: 0.75
            }
        },
        // Buildings
        building: {
            fill: new ol.style.Fill({
                color: '#e0dcd3'
            }),
            stroke: new ol.style.Stroke({
                color: '#c0bdb6',
                width: 0.5
            })
        },
        // POI (Points of Interest)
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
        const isTunnel = feature.get('tunnel') === 'yes' || feature.get('layer') === 'tunnel';
        const isBridge = feature.get('bridge') === 'yes' || feature.get('layer') === 'bridge';
        
        // Skip features that shouldn't be visible at current zoom
        if (resolution > 100) { // Very zoomed out
            if (!['water', 'landuse', 'boundary', 'place', 'country', 'state'].includes(layer)) {
                return [];
            }
        }
        
        // Water features
        if (layer === 'water') {
            const styles = [new ol.style.Style({
                fill: baseStyles.water.fill,
                stroke: baseStyles.water.stroke
            })];
            
            // Add water name if available
            if (name) {
                const textStyle = createTextStyle(name, {
                    font: 'italic 14px "Noto Sans", Arial, sans-serif',
                    fill: '#1a5fb4',
                    placement: 'line',
                    maxAngle: 0.4,
                    minResolution: 0,
                    maxResolution: 40
                });
                if (textStyle) styles.push(textStyle);
            }
            
            return styles;
        }
        
        // Place labels (cities, towns, etc.)
        if (layer === 'place' && name) {
            let fontSize = 12;
            let fontWeight = 'normal';
            let fillColor = '#333333';
            
            // Adjust style based on place type
            switch (place) {
                case 'city':
                    fontSize = 16 + Math.min(4, Math.max(0, zoom - 8));
                    fontWeight = 'bold';
                    fillColor = '#1a237e';
                    break;
                case 'town':
                    fontSize = 14 + Math.min(2, Math.max(0, zoom - 10));
                    fontWeight = '600';
                    fillColor = '#283593';
                    break;
                case 'village':
                    fontSize = 12 + Math.min(1, Math.max(0, zoom - 12));
                    fontWeight = '500';
                    fillColor = '#303f9f';
                    break;
                case 'hamlet':
                case 'locality':
                default:
                    fontSize = 10 + Math.min(1, Math.max(0, zoom - 14));
                    fontWeight = 'normal';
            }
            
            // Adjust size based on zoom level
            const zoom = Math.log2(156543.03390625) - Math.log2(resolution);
            if (zoom < 8) fontSize = Math.max(10, fontSize * 0.8);
            if (zoom > 14) fontSize = fontSize * 1.2;
            
            return [new ol.style.Style({
                text: new ol.style.Text({
                    text: name,
                    font: `${fontWeight} ${fontSize}px ${fontFamily}`,
                    letterSpacing: letterSpacing,
                    fill: new ol.style.Fill({ 
                        color: place === 'city' ? '#1a237e' : '#283593' 
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.8)',
                        width: 3
                    }),
                    padding: [3, 6, 3, 6],
                    offsetY: 0,
                    overflow: true,
                    placement: 'point',
                    maxAngle: 0,
                    rotation: 0,
                    textBaseline: 'middle',
                    textAlign: 'center',
                    backgroundFill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.6)'
                    }),
                    backgroundStroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.3)',
                        width: 1
                    })
                })
            })];
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
        
        // Road labels with improved styling
        if (layer === 'transportation_name' && name) {
            const roadClass = cls || 'tertiary';
            const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadClass);
            let fontSize = isMajorRoad ? 13 : 11;
            let fontWeight = isMajorRoad ? '600' : '500';
            
            // Adjust font size based on zoom level
            if (zoom < 10) fontSize = Math.max(8, fontSize - 2);
            if (zoom > 14) fontSize = Math.min(16, fontSize + 2);
            
            const textStyle = createTextStyle(name.toUpperCase(), {
                font: `${fontWeight} ${fontSize}px "Noto Sans", Arial, sans-serif`,
                fill: isMajorRoad ? '#2c3e50' : '#34495e',
                stroke: 'rgba(255, 255, 255, 0.8)',
                strokeWidth: 3,
                placement: 'line',
                maxAngle: 0.4,
                padding: [2, 4, 2, 4],
                backgroundFill: 'rgba(255, 255, 255, 0.6)',
                minResolution: 0,
                maxResolution: 1000
            });
            
            return textStyle ? [textStyle] : [];
        }
        
        // Transportation layer (roads, paths, etc.) - simplified to just show roads
        if (layer === 'transportation') {
            const roadClass = cls || 'tertiary';
            
            // Skip tunnels (they're handled separately)
            if (isTunnel) {
                return [];
            }
            
            // Get road style or use default
            const roadStyle = baseStyles.highway[roadClass] || baseStyles.highway.tertiary;
            
            // Base style
            const style = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: roadStyle.color,
                    width: roadStyle.width,
                    lineCap: 'round',
                    lineJoin: 'round'
                })
            });
            
            // Add casing for major roads
            if (['motorway', 'trunk', 'primary', 'secondary'].includes(roadClass)) {
                style.setStroke(new ol.style.Stroke({
                    color: '#ffffff',
                    width: roadStyle.width + 2,
                    lineCap: 'round',
                    lineJoin: 'round'
                }));
                
                style.setImage(new ol.style.Circle({
                    radius: (roadStyle.width + 2) / 2,
                    fill: new ol.style.Fill({ color: '#ffffff' })
                }));
                
                return [
                    style,
                    new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: roadStyle.color,
                            width: roadStyle.width,
                            lineCap: 'round',
                            lineJoin: 'round'
                        }),
                        zIndex: 1
                    })
                ];
            }
            
            return [style];
        }
        
        // Buildings
        if (layer === 'building') {
            const height = parseFloat(feature.get('height') || '0');
            const levels = parseInt(feature.get('building:levels') || '1', 10);
            
            // Only show buildings at higher zoom levels
            if (zoom < 15) return [];
            
            return [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: adjustColor(baseStyles.building.fill.getColor(), -10 * (levels - 1))
                }),
                stroke: new ol.style.Stroke({
                    color: adjustColor(baseStyles.building.stroke.getColor(), -20 * (levels - 1)),
                    width: baseStyles.building.stroke.getWidth()
                })
            })];
        }
        
        // Boundary layer
        if (layer === 'boundary') {
            const adminLevel = parseInt(feature.get('admin_level') || '2', 10);
            
            // Only show country and state boundaries at appropriate zoom levels
            if (adminLevel > 4 || zoom < 8) return [];
            
            let color = '#999999';
            let width = 1;
            
            switch (adminLevel) {
                case 2: // Country
                    color = '#666666';
                    width = 2;
                    break;
                case 4: // State/Region
                    if (zoom < 10) return [];
                    color = '#888888';
                    width = 1.5;
                    break;
            }
            
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: color,
                    width: width,
                    lineDash: [4, 4]
                }),
                zIndex: 0
            })];
        }
        
        // Default style - return empty array for unhandled layers
        return [];
        
    } catch (error) {
        console.error('Error styling feature:', error, feature);
        return [];
    }
};

/**
 * Helper function to lighten or darken a color
 * @param {string} color - Hex color code or ol.color
 * @param {number} percent - Positive to lighten, negative to darken
 * @returns {string} Adjusted color
 */
function adjustColor(color, percent) {
    // Handle ol.color objects
    if (typeof color === 'object' && color.getColor) {
        color = color.getColor();
    }
    
    // Convert hex to RGB
    let r, g, b;
    if (color.startsWith('#')) {
        const hex = color.substring(1);
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    } else if (color.startsWith('rgb')) {
        const parts = color.match(/\d+/g);
        if (parts) {
            r = parseInt(parts[0], 10);
            g = parseInt(parts[1], 10);
            b = parseInt(parts[2], 10);
        } else {
            return color; // Return as is if we can't parse
        }
    } else {
        return color; // Return as is if not hex or rgb
    }
    
    // Calculate adjustment
    const factor = 1 + (percent / 100);
    r = Math.min(255, Math.max(0, Math.round(r * factor)));
    g = Math.min(255, Math.max(0, Math.round(g * factor)));
    b = Math.min(255, Math.max(0, Math.round(b * factor)));
    
    // Convert back to hex
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Ensure the style function is available globally
if (window) {
    window.vectorTileStyle = vectorTileStyle;
}
