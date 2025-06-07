/**
 * Vector Tile Style for MapTiler/OpenMapTiles
 * Enhanced text rendering with proper font configuration
 */
window.vectorTileStyle = function(feature, resolution) {
    // Pre-load fonts to ensure they're available for rendering
    const loadFonts = () => {
        const style = document.createElement('style');
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');
        `;
        document.head.appendChild(style);
    };
    
    // Load fonts on first run
    if (!window._fontsLoaded) {
        loadFonts();
        window._fontsLoaded = true;
    }
    // Color definitions for text and basic features
    const colors = {
        // Basic feature colors
        water: '#9db9e8',
        land: '#f2efe9',
        
        // Text styling with improved font stack
        text: {
            // Road labels
            road: {
                fill: '#000000',
                stroke: '#ffffff',
                strokeWidth: 3,
                font: '600 14px "Noto Sans", Arial, sans-serif',
                fontScale: 1.0,
                minResolution: 0,
                maxResolution: 20,
                padding: [2, 2, 2, 2],
                textBaseline: 'middle',
                textAlign: 'center'
            },
            // Place labels (cities, towns, etc.)
            place: {
                fill: '#333333',
                stroke: '#ffffff',
                strokeWidth: 3,
                font: '600 16px "Noto Sans", Arial, sans-serif',
                fontScale: 1.0,
                minResolution: 0,
                maxResolution: 1000,
                padding: [3, 3, 3, 3],
                textBaseline: 'middle',
                textAlign: 'center'
            },
            // POI labels (points of interest)
            poi: {
                fill: '#555555',
                stroke: '#ffffff',
                strokeWidth: 2,
                font: '500 12px "Noto Sans", Arial, sans-serif',
                fontScale: 1.0,
                minResolution: 0,
                maxResolution: 100,
                padding: [1, 1, 1, 1],
                textBaseline: 'middle',
                textAlign: 'center'
            }
        },
        // Basic road styling (just enough to see where labels should go)
        highway: {
            motorway: { color: '#ff6b6b', width: 2.5 },
            trunk: { color: '#ff9e7d', width: 2.25 },
            primary: { color: '#ffd166', width: 2 },
            secondary: { color: '#f7fff7', width: 1.75 },
            tertiary: { color: '#f7fff7', width: 1.5 },
            residential: { color: '#f7fff7', width: 1 }
        }
    };

    try {
        // Get feature properties
        const layer = feature.get('layer') || 'unknown';
        const cls = feature.get('class') || '';
        const type = feature.getGeometry().getType();
        const name = feature.get('name');
        const place = feature.get('place');
        
        // Skip if no name (for text features)
        if (!name) {
            return [];
        }
        
        // Skip features that shouldn't be visible at current zoom
        if (resolution > 100) { // Very zoomed out
            if (['water', 'landuse', 'boundary', 'place'].indexOf(layer) === -1) {
                return [];
            }
        }
        
        // Water layer - just show the name
        if (layer === 'water' && name) {
            return [new ol.style.Style({
                text: new ol.style.Text({
                    text: name,
                    font: 'italic 14px "Noto Serif", serif',
                    fill: new ol.style.Fill({ color: '#1a5fb4' }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.8)',
                        width: 3
                    }),
                    padding: [3, 3, 3, 3],
                    overflow: true,
                    placement: 'line',
                    maxAngle: 0.4,
                    rotation: 0,
                    textBaseline: 'middle',
                    textAlign: 'center',
                    offsetY: 0,
                    offsetX: 0,
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
        
        // Enhanced place labels with better typography
        if (layer === 'place') {
            let fontSize = 12;
            let fontWeight = 'normal';
            let fontFamily = '"Noto Sans", Arial, sans-serif';
            let letterSpacing = '0px';
            
            // Adjust size and weight based on place type
            switch (place) {
                case 'city':
                    fontSize = 20;
                    fontWeight = '700';
                    letterSpacing = '0.5px';
                    break;
                case 'town':
                    fontSize = 16;
                    fontWeight = '600';
                    letterSpacing = '0.3px';
                    break;
                case 'village':
                    fontSize = 14;
                    fontWeight = '500';
                    break;
                case 'hamlet':
                    fontSize = 12;
                    fontWeight = 'normal';
                    break;
                case 'locality':
                    fontSize = 11;
                    fontWeight = 'normal';
                    break;
                default:
                    fontSize = 10;
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
            let icon = null;
            
            // Get appropriate icon based on POI class
            switch (poiClass) {
                case 'restaurant':
                case 'cafe':
                case 'bar':
                    icon = '🍽️';
                    break;
                case 'hotel':
                case 'hostel':
                    icon = '🏨';
                    break;
                case 'shop':
                    icon = '🛍️';
                    break;
                case 'attraction':
                case 'museum':
                    icon = '🏛️';
                    break;
                case 'park':
                case 'garden':
                    icon = '🌳';
                    break;
                default:
                    icon = '📍';
            }
            
            return [
                // Icon
                new ol.style.Style({
                    text: new ol.style.Text({
                        text: icon,
                        font: '20px "Noto Color Emoji", "Apple Color Emoji", sans-serif',
                        fill: new ol.style.Fill({ color: '#2c3e50' }),
                        offsetY: -10,
                        textAlign: 'center',
                        textBaseline: 'middle',
                        rotation: 0
                    })
                }),
                // Text label
                new ol.style.Style({
                    text: new ol.style.Text({
                        text: name,
                        font: '500 11px "Noto Sans", Arial, sans-serif',
                        fill: new ol.style.Fill({ color: '#2c3e50' }),
                        stroke: new ol.style.Stroke({
                            color: 'rgba(255, 255, 255, 0.8)',
                            width: 2
                        }),
                        offsetY: 12,
                        textAlign: 'center',
                        textBaseline: 'top',
                        overflow: true,
                        placement: 'point',
                        maxAngle: 0,
                        rotation: 0,
                        padding: [2, 4, 2, 4],
                        backgroundFill: new ol.style.Fill({
                            color: 'rgba(255, 255, 255, 0.7)'
                        }),
                        backgroundStroke: new ol.style.Stroke({
                            color: 'rgba(0, 0, 0, 0.1)',
                            width: 1
                        })
                    })
                })
            ];
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
                    color: fillColor
                })
            })];
        }
        
        // Road labels with improved styling
        if (layer === 'transportation_name' && name) {
            const roadClass = cls || 'tertiary';
            const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadClass);
            let fontSize = isMajorRoad ? 13 : 11;
            let fontWeight = isMajorRoad ? '600' : '500';
            let letterSpacing = isMajorRoad ? '0.5px' : '0.3px';
            
            // Adjust font size based on zoom level
            const zoom = Math.log2(156543.03390625) - Math.log2(resolution);
            if (zoom < 10) fontSize *= 0.8;
            if (zoom > 14) fontSize *= 1.2;
            
            return [new ol.style.Style({
                text: new ol.style.Text({
                    text: name.toUpperCase(),
                    font: `${fontWeight} ${fontSize}px/1.4 "Noto Sans", Arial, sans-serif`,
                    letterSpacing: letterSpacing,
                    fill: new ol.style.Fill({ 
                        color: isMajorRoad ? '#2c3e50' : '#34495e' 
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.8)',
                        width: 3
                    }),
                    padding: [2, 4, 2, 4],
                    offsetY: 0,
                    overflow: true,
                    placement: 'line',
                    maxAngle: 0.4,
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
                }),
                zIndex: 100
            }];
        }
        
        // Transportation layer (roads, paths, etc.) - simplified to just show roads
        if (layer === 'transportation') {
            const roadClass = cls || 'tertiary';
            // Only return styles for major roads to keep the map clean
            if (!['motorway', 'trunk', 'primary', 'secondary', 'tertiary'].includes(roadClass)) {
                return [];
            }
            
            const roadStyle = colors.highway[roadClass] || colors.highway.tertiary;
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: roadStyle.color,
                    width: roadStyle.width,
                    lineCap: 'round',
                    lineJoin: 'round'
                })
            })];
        }
            
            // Skip tunnels (they're handled separately)
            if (isTunnel) {
                return [];
            }
            
            // Determine road type
            let roadType = roadClass;
            
            // Handle construction types
            if (roadClass.endsWith('_construction')) {
                const baseType = roadClass.replace('_construction', '');
                roadType = baseType + '_construction';
            }
            
            // Handle ramps
            if (isRamp) {
                roadType = 'ramp';
            }
            
            // Get the road style, default to tertiary if not found
            const roadStyle = colors.highway[roadType] || colors.highway.tertiary;
            
            // Handle special road types
            if (roadClass === 'rail' || roadClass === 'transit') {
                const railType = roadSubclass || 'rail';
                const railStyle = colors.highway[railType] || colors.highway.rail;
                
                return [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: railStyle.color,
                        width: railStyle.width,
                        lineDash: railStyle.dash,
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: 3
                })];
            }
            
            // Handle track types
            if (roadClass === 'track') {
                const trackType = parseInt(feature.get('tracktype') || '1', 10);
                const trackStyle = colors.highway.track;
                
                return [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: trackStyle.color,
                        width: trackStyle.width * (1 + (trackType * 0.2)),
                        lineDash: trackStyle.dash,
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: 1
                })];
            }
            
            const name = feature.get('name');
            const ref = feature.get('ref');
            const styles = [];
            
            // Add casing for major roads
            if (roadStyle.casingWidth && roadStyle.casingColor) {
                styles.push(new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: roadStyle.casingColor,
                        width: roadStyle.width * roadStyle.casingWidth,
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: 1
                }));
            }
            
            // Main road fill with optional dash pattern
            styles.push(new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: roadStyle.color,
                    width: roadStyle.width,
                    lineDash: roadStyle.dash,
                    lineCap: 'round',
                    lineJoin: 'round'
                }),
                zIndex: 2
            }));
            
            // Add bridge styling
            if (isBridge) {
                styles.push(new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: '#ffffff',
                        width: roadStyle.width * 0.5,
                        lineDash: [4, 2],
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: 3
                }));
            }
            
            // Add road labels for named roads
            if (name && resolution < 20) {
                const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadType);
                const fontSize = isMajorRoad ? 11 : 10;
                
                styles.push(new ol.style.Style({
                    text: new ol.style.Text({
                        text: name,
                        font: `${fontSize}px Arial, sans-serif`,
                        fill: new ol.style.Fill({ color: colors.text.fill }),
                        stroke: new ol.style.Stroke({
                            color: colors.text.stroke,
                            width: colors.text.strokeWidth
                        }),
                        offsetY: -10,
                        overflow: true,
                        placement: 'line',
                        maxAngle: 0.4,
                        rotation: 0
                    }),
                    zIndex: 100
                }));
            }
            
            return styles;
        }
        
        // Building layer
        if (layer === 'building') {
            const height = parseFloat(feature.get('height') || '0');
            const levels = parseInt(feature.get('building:levels') || '1', 10);
            
            return [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: colors.building.fill
                }),
                stroke: new ol.style.Stroke({
                    color: colors.building.stroke,
                    width: 0.5
                })
            })];
        }
        
        // Boundary layer
        if (layer === 'boundary') {
            const adminLevel = parseInt(feature.get('admin_level') || '2', 10);
            let color, width, dash;
            
            switch(adminLevel) {
                case 2: // Country
                    color = colors.boundary.national;
                    width = 1.5;
                    break;
                case 4: // State/Region
                    color = colors.boundary.administrative;
                    width = 1;
                    dash = [5, 3];
                    break;
                case 6: // County
                    color = colors.boundary.administrative;
                    width = 0.75;
                    dash = [3, 3];
                    break;
                case 8: // City
                    color = colors.boundary.administrative;
                    width = 0.5;
                    dash = [2, 2];
                    break;
                default:
                    color = '#999999';
                    width = 0.5;
            }
            
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: color,
                    width: width,
                    lineDash: dash,
                    lineCap: 'round',
                    lineJoin: 'round'
                }),
                zIndex: 10
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
 * @param {string} color - Hex color code
 * @param {number} percent - Positive to lighten, negative to darken
 * @returns {string} Adjusted color
 */
function adjustColor(color, percent) {
    // Implementation of color adjustment
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    return '#' + (
        0x1000000 + 
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + 
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + 
        (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
}

// Ensure the style function is available globally
if (window) {
    window.vectorTileStyle = vectorTileStyle;
}
