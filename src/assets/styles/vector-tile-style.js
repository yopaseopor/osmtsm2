/**
 * Vector Tile Style for MapTiler/OpenMapTiles
 * Implements a comprehensive style for OpenMapTiles vector tiles
 */
window.vectorTileStyle = function(feature, resolution) {
    // Color definitions
    const colors = {
        // Water and natural features
        water: '#9db9e8',
        land: '#f2efe9',
        park: '#d1e9c3',
        forest: '#c8e6c9',
        
        // Transportation colors
        highway: {
            motorway: { color: '#ff6b6b', width: 2.5, casingWidth: 3, casingColor: '#333' },
            trunk: { color: '#ff9e7d', width: 2.25, casingWidth: 2.5, casingColor: '#333' },
            primary: { color: '#ffd166', width: 2, casingWidth: 2.25, casingColor: '#333' },
            secondary: { color: '#f7fff7', width: 1.75, casingWidth: 2, casingColor: '#333' },
            tertiary: { color: '#f7fff7', width: 1.5, casingColor: '#666' },
            residential: { color: '#f7fff7', width: 1 },
            service: { color: '#f7fff7', width: 0.75 },
            path: { color: '#d9d9d9', width: 0.5, dash: [2, 2] },
            rail: { color: '#a3a3a3', width: 1.5, dash: [5, 5] },
            track: { color: '#b38867', width: 1, dash: [4, 2] },
            construction: { color: '#ffd700', width: 1, dash: [3, 3] },
            ramp: { color: '#ff9999', width: 1.5 }
        },
        
        // Landuse colors
        landuse: {
            residential: '#e8e8e8',
            commercial: '#ffe0b2',
            industrial: '#d7ccc8',
            retail: '#ffccbc',
            cemetery: '#b5d3c7',
            hospital: '#ffcdd2',
            school: '#d1c4e9',
            stadium: '#dcedc8',
            park: '#c8e6c9',
            forest: '#a5d6a7',
            grass: '#dcedc8',
            farm: '#f0f4c3',
            farmland: '#f0f4c3',
            wetland: '#b3e5fc',
            beach: '#fff9c4',
            military: '#bcbcbc'
        },
        
        // Building colors
        building: {
            fill: '#e0e0e0',
            stroke: '#bdbdbd',
            roof: '#9e9e9e',
            highlight: '#ffffff'
        },
        
        // Boundary colors
        boundary: {
            national: '#000000',
            administrative: '#666666',
            disputed: '#ff0000'
        },
        
        // Text styling
        text: {
            fill: '#000000',
            stroke: '#ffffff',
            strokeWidth: 2,
            font: '12px Arial, sans-serif',
            halo: true
        }
    };

    try {
        // Get feature properties
        const layer = feature.get('layer') || 'unknown';
        const cls = feature.get('class') || '';
        const type = feature.getGeometry().getType();
        
        // Skip features that shouldn't be visible at current zoom
        if (resolution > 100) { // Very zoomed out
            if (['water', 'landuse', 'boundary'].indexOf(layer) === -1) {
                return [];
            }
        }
        
        // Water layer
        if (layer === 'water') {
            return [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: colors.water
                })
            })];
        }
        
        // Landuse layer
        if (layer === 'landuse') {
            const fillColor = colors.landuse[cls] || colors.landuse.residential;
            return [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: fillColor
                })
            })];
        }
        
        // Transportation layer (roads, paths, etc.)
        if (layer === 'transportation') {
            const roadClass = cls || 'tertiary';
            const roadSubclass = feature.get('subclass');
            const brunnel = feature.get('brunnel');
            const isBridge = brunnel === 'bridge';
            const isTunnel = brunnel === 'tunnel';
            const isRamp = roadClass.endsWith('_link') || roadClass === 'ramp';
            
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
        
        // Default style for any unhandled layers
        return [new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(200, 200, 200, 0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: '#999999',
                width: 0.5
            })
        })];
        
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
