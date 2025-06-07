/**
 * Vector Tile Style for MapTiler/OpenMapTiles
 * Focused on text rendering with minimal base styles
 */
window.vectorTileStyle = function(feature, resolution) {
    // Color definitions for text and basic features
    const colors = {
        // Basic feature colors
        water: '#9db9e8',
        land: '#f2efe9',
        
        // Text styling
        text: {
            // Road labels
            road: {
                fill: '#000000',
                stroke: '#ffffff',
                strokeWidth: 3,
                font: 'bold 14px Arial, sans-serif',
                halo: true,
                minResolution: 0,
                maxResolution: 20
            },
            // Place labels (cities, towns, etc.)
            place: {
                fill: '#333333',
                stroke: '#ffffff',
                strokeWidth: 3,
                halo: true,
                minResolution: 0,
                maxResolution: 1000
            },
            // POI labels (points of interest)
            poi: {
                fill: '#555555',
                stroke: '#ffffff',
                strokeWidth: 2,
                halo: true,
                minResolution: 0,
                maxResolution: 100
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
                    font: 'italic 12px Arial, sans-serif',
                    fill: new ol.style.Fill({ color: '#1a5fb4' }),
                    stroke: new ol.style.Stroke({
                        color: '#ffffff',
                        width: 2
                    }),
                    overflow: true,
                    placement: 'line',
                    maxAngle: 0.4,
                    rotation: 0
                })
            })];
        }
        
        // Place labels (cities, towns, etc.)
        if (layer === 'place') {
            let fontSize = 12;
            let fontWeight = 'normal';
            
            // Adjust size based on place type
            switch (place) {
                case 'city':
                    fontSize = 18;
                    fontWeight = 'bold';
                    break;
                case 'town':
                    fontSize = 14;
                    fontWeight = 'bold';
                    break;
                case 'village':
                    fontSize = 12;
                    break;
                case 'hamlet':
                    fontSize = 10;
                    break;
                default:
                    fontSize = 10;
            }
            
            return [new ol.style.Style({
                text: new ol.style.Text({
                    text: name,
                    font: `${fontWeight} ${fontSize}px Arial, sans-serif`,
                    fill: new ol.style.Fill({ color: colors.text.place.fill }),
                    stroke: new ol.style.Stroke({
                        color: colors.text.place.stroke,
                        width: colors.text.place.strokeWidth
                    }),
                    offsetY: 0,
                    overflow: true,
                    placement: 'point',
                    maxAngle: 0,
                    rotation: 0
                })
            })];
        }
        
        // POI (Points of Interest)
        if (layer === 'poi' && name) {
            return [new ol.style.Style({
                text: new ol.style.Text({
                    text: name,
                    font: '11px Arial, sans-serif',
                    fill: new ol.style.Fill({ color: colors.text.poi.fill }),
                    stroke: new ol.style.Stroke({
                        color: colors.text.poi.stroke,
                        width: colors.text.poi.strokeWidth
                    }),
                    offsetY: 12,
                    textAlign: 'center',
                    textBaseline: 'bottom',
                    overflow: true,
                    placement: 'point',
                    maxAngle: 0,
                    rotation: 0
                })
            })];
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
        
        // Road labels
        if (layer === 'transportation_name' && name) {
            const roadClass = cls || 'tertiary';
            const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadClass);
            let fontSize = isMajorRoad ? 12 : 10;
            let fontWeight = isMajorRoad ? 'bold' : 'normal';
            
            return [new ol.style.Style({
                text: new ol.style.Text({
                    text: name,
                    font: `${fontWeight} ${fontSize}px Arial, sans-serif`,
                    fill: new ol.style.Fill({ color: colors.text.road.fill }),
                    stroke: new ol.style.Stroke({
                        color: colors.text.road.stroke,
                        width: colors.text.road.strokeWidth
                    }),
                    offsetY: 0,
                    overflow: true,
                    placement: 'line',
                    maxAngle: 0.4,
                    rotation: 0
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
