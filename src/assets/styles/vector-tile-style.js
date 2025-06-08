/**
 * Gets the best label text for a feature according to Mapbox GL Style Spec
 * @param {ol/Feature} feature - The feature to get label for
 * @param {string} [textField] - Field specification (e.g., '{name} {ref}')
 * @returns {string|null} The formatted label or null if none found
 */
function getFeatureLabel(feature, textField) {
    if (!textField) {
        // Default to name, then ref, then other common fields
        return (
            feature.get('name') ||
            feature.get('ref') ||
            feature.get('name_en') ||
            feature.get('name:en') ||
            feature.get('int_name') ||
            feature.get('loc_name') ||
            feature.get('alt_name') ||
            feature.get('addr:housename') ||
            feature.get('addr:housenumber') ||
            null
        );
    }

    // Handle field formatting like {name} {ref}
    return textField.replace(/\{([^}]+)\}/g, (match, p1) => {
        // Handle nested properties like {name:latin}
        const field = p1.split(':')[0];
        return feature.get(field) || '';
    }).trim() || null;
}

/**
 * Gets the appropriate font stack based on style properties
 * @param {Object} style - Style properties
 * @param {Object} config - Configuration with fontStacks
 * @returns {string} Font stack string
 */
function getFontStack(style, config) {
    if (!config || !config.fontStacks) return 'Arial, sans-serif';
    
    const weight = style.fontWeight === 'bold' ? 'bold' : 'regular';
    const styleType = style.fontStyle === 'italic' ? 'italic' : 'normal';
    
    let fontKey = weight;
    if (style.fontStyle === 'italic') {
        fontKey = weight === 'bold' ? 'bolditalic' : 'italic';
    }
    
    const stack = config.fontStacks[fontKey] || config.fontStacks.regular;
    return stack.map(font => `"${font}"`).concat('Arial, sans-serif').join(', ');
}

/**
 * Creates a text style with proper font handling
 * @param {Object} options - Text style options
 * @param {Object} config - Style configuration
 * @returns {ol/style/Text} OpenLayers text style
 */
function createTextStyle(options, config) {
    const {
        text,
        font = {},
        color = '#000000',
        haloColor = '#ffffff',
        haloWidth = 1,
        offsetX = 0,
        offsetY = 0,
        maxAngle = 0.785, // 45 degrees in radians
        placement = 'point',
        maxResolution,
        padding = [0, 0, 0, 0],
        textAlign = 'center',
        textBaseline = 'middle',
        rotation = 0
    } = options;
    
    const fontStack = getFontStack(font, config);
    const fontSize = font.size || 12;
    const fontStyle = font.style || 'normal';
    const fontWeight = font.weight || 'normal';
    
    return new ol.style.Text({
        text: text || '',
        font: `${fontStyle} ${fontWeight} ${fontSize}px ${fontStack}`,
        fill: new ol.style.Fill({ color }),
        stroke: new ol.style.Stroke({
            color: haloColor,
            width: haloWidth
        }),
        offsetX,
        offsetY,
        maxAngle,
        placement,
        maxResolution,
        padding,
        textAlign,
        textBaseline,
        rotation,
        overflow: true
    });
}

/**
 * Gets an icon style with sprite support
 * @param {string} iconName - Name of the icon in the sprite
 * @param {Object} config - Style configuration
 * @param {Object} options - Additional options
 * @returns {ol/style/Icon} Icon style
 */
function getIconStyle(iconName, config, options = {}) {
    const {
        size = 1,
        opacity = 1,
        rotation = 0,
        color,
        haloColor,
        haloWidth = 0
    } = options;
    
    const spriteUrl = config && config.spriteBaseUrl 
        ? `${config.spriteBaseUrl}?key=${config.apiKey || ''}`
        : null;
    
    if (!spriteUrl) {
        console.warn('Sprite base URL not configured');
        return null;
    }
    
    // In a real implementation, you would need to have the sprite metadata
    // to get the correct position and size of the icon in the sprite sheet
    // This is a simplified version
    return new ol.style.Icon({
        src: spriteUrl.replace('{icon}', iconName),
        scale: size,
        opacity,
        rotation,
        color,
        // Additional properties would be needed for proper sprite sheet handling
        // This is a simplified version
    });
}

/**
 * Vector Tile Style Configuration
 * Implements a style function following Mapbox GL Style Specification patterns
 */
window.vectorTileStyle = function(feature, resolution, config = {}) {
    // Common colors following Mapbox GL Style Specification naming
    const colors = {
        // POI colors
        poi: {
            amenity: '#3498db',
            shop: '#9b59b6',
            tourism: '#e74c3c',
            office: '#2ecc71',
            building: '#e67e22',
            default: '#7f8c8d'
        },
        // Base colors
        water: 'rgba(173, 216, 230, 0.9)',  // light blue
        waterIntermittent: 'rgba(173, 216, 230, 0.6)',  // light blue with lower opacity
        waterTransport: 'rgba(173, 216, 230, 0.7)',  // light blue for transport
        residential: 'rgba(240, 238, 235, 0.7)',
        park: 'rgba(210, 250, 210, 0.7)',
        forest: 'rgba(190, 220, 190, 0.8)',
        building: 'rgba(220, 217, 210, 0.9)',
        buildingOutline: 'rgba(180, 177, 170, 0.8)',
        
        // Road colors and widths
        highway: {
            motorway: { color: '#00008b', width: 4.0 },  // dark blue
            trunk: { color: '#8b0000', width: 3.5 },      // dark red
            primary: { color: '#ff0000', width: 3.0 },    // red
            secondary: { color: '#ffa500', width: 2.5 },   // orange
            tertiary: { color: '#ffd700', width: 2.0 },    // yellow-orange
            unclassified: { color: '#ffff00', width: 1.8 }, // yellow
            residential: { color: '#000000', width: 1.5 }, // black
            living_street: { color: '#a9a9a9', width: 1.2 }, // dark grey
            pedestrian: { color: '#d3d3d3', width: 1.0 },  // light grey
            sidewalk: { color: '#f0f0f0', width: 0.8 },    // very light grey
            service: { color: '#ffffff', width: 0.8 },      // white
            track: { color: '#8b4513', width: 0.6 },       // brown
            path: { color: '#d2b48c', width: 0.5 },        // tan (will be dotted)
            railway: { color: '#000000', width: 1.0 }       // black (will be dotted white)
        },
        
        // Text styles
        text: {
            fill: '#000000',
            stroke: '#ffffff',
            strokeWidth: 2,
            font: '12px Arial, sans-serif',
            offsetY: 0,
            padding: [2, 4],
            maxAngle: 30,
            overflow: true
        },
        landuse: {
            residential: 'rgba(240, 238, 235, 0.7)',
            commercial: 'rgba(240, 235, 240, 0.5)',
            industrial: 'rgba(230, 230, 220, 0.6)',
            retail: 'rgba(245, 235, 235, 0.6)',
            park: 'rgba(210, 250, 210, 0.7)',
            forest: 'rgba(190, 220, 190, 0.8)',
            grass: 'rgba(200, 250, 200, 0.6)',
            cemetery: 'rgba(200, 230, 200, 0.7)'
        },
        boundary: {
            national: '#000000',
            administrative: '#777777',
            protected_area: '#2d5f2d'
        }
    };

    try {
        // Get feature properties
        const layer = feature.get('layer') || 'unknown';
        const cls = feature.get('class') || '';
        const type = feature.getGeometry().getType();
        const brunnel = feature.get('brunnel');
        const isBridge = brunnel === 'bridge';
        const isTunnel = brunnel === 'tunnel';
        
        // Debug logging (uncomment if needed)
        // console.log(`Layer: ${layer}, Class: ${cls}, Type: ${type}`);

        // Water
        if (layer === 'water') {
            const isIntermittent = feature.get('intermittent') === 1 || feature.get('intermittent') === '1';
            const waterColor = isIntermittent ? colors.waterIntermittent : colors.water;
            
            const styles = [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: waterColor
                })
            })];
            
            // Add stroke for intermittent water with slashed pattern
            if (isIntermittent) {
                styles[0].setStroke(new ol.style.Stroke({
                    color: colors.water,
                    width: 1,
                    lineDash: [8, 4, 1, 4]  // Slashed pattern
                }));
            }
            
            // Water labels - only show at appropriate zoom levels
            const name = getFeatureLabel(feature, '{name}');
            if (layer === 'water' && name && resolution < 20) {
                styles.push(new ol.style.Style({
                    text: createTextStyle({
                        text: name,
                        font: {
                            style: 'italic',
                            size: 10,
                            weight: 'normal'
                        },
                        color: 'rgba(0, 0, 128, 0.8)',
                        haloColor: 'rgba(255, 255, 255, 0.7)',
                        haloWidth: 2,
                        offsetY: -10,
                        textBaseline: 'bottom',
                        textAlign: 'center',
                        maxResolution: 10  // Don't show labels when too zoomed out
                    }, config)
                }));
            }
            
            return styles;
        }
        
        // Landuse
        if (layer === 'landuse') {
            const fillColor = colors.landuse[cls] || colors.landuse.residential;
            const name = feature.get('name');
            const styles = [];
            
            // Only show landuse at appropriate zoom levels
            const showLanduse = resolution < (cls === 'park' || cls === 'forest' ? 100 : 50);
            if (!showLanduse) {
                return [];
            }
            
            // Base fill with z-index based on landuse type
            const zIndex = cls === 'park' || cls === 'forest' ? 1 : 0;
            styles.push(new ol.style.Style({
                fill: new ol.style.Fill({
                    color: fillColor
                }),
                zIndex
            }));
            
            // Add stroke for certain landuse types
            if (cls === 'park' || cls === 'forest' || cls === 'cemetery') {
                styles[0].setStroke(new ol.style.Stroke({
                    color: adjustColor(fillColor, -10),
                    width: 0.5
                }));
            }
            
            // Get label for any landuse with name, ref, or address
            const label = getFeatureLabel(feature, '{name}');
            if (label) {
                const fontSize = cls === 'park' || cls === 'forest' || cls === 'cemetery' ? 10 : 9;
                const textColor = cls === 'cemetery' ? '#666666' : 
                                 cls === 'park' || cls === 'forest' ? '#2d5f2d' : '#333333';
                const showLabel = resolution < 20; // Only show labels when zoomed in
                
                if (showLabel) {
                    styles.push(new ol.style.Style({
                        text: createTextStyle({
                            text: label,
                            font: {
                                size: fontSize,
                                weight: 'normal',
                                style: cls === 'park' || cls === 'forest' ? 'italic' : 'normal'
                            },
                            color: textColor,
                            haloColor: 'rgba(255, 255, 255, 0.7)',
                            haloWidth: 2,
                            textBaseline: 'middle',
                            textAlign: 'center',
                            placement: 'point',
                            maxAngle: 0.7,
                            maxResolution: 10,
                            padding: [2, 4, 2, 4],
                            backgroundFill: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            },
                            backgroundStroke: {
                                color: 'rgba(200, 200, 200, 0.7)',
                                width: 0.5
                            }
                        }, config)
                    }));
                }
            }
            
            return styles;
        }
        
        // Buildings
        if (layer === 'building') {
            const height = parseFloat(feature.get('height') || '0');
            const levels = parseInt(feature.get('building:levels') || '1', 10);
            const buildingType = feature.get('building');
            
            // Calculate building color based on height/levels/type
            let buildingColor = colors.building;
            if (height > 20 || levels > 5) {
                buildingColor = adjustColor(colors.building, -15); // Darker for taller buildings
            }
            
            const styles = [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: buildingColor
                }),
                stroke: new ol.style.Stroke({
                    color: colors.buildingOutline,
                    width: 0.5
                }),
                zIndex: 10 // Ensure buildings are above other features
            })];
            
            // Get label for building (name, ref, or address)
            const label = getFeatureLabel(feature);
            if (label) {
                // Only show labels for significant buildings or when zoomed in
                const showLabel = resolution < 10; // Adjust this value based on your needs
                if (showLabel) {
                    styles.push(new ol.style.Style({
                        text: new ol.style.Text({
                            text: label,
                            font: '9px Arial',
                            fill: new ol.style.Fill({
                                color: '#333333'
                            }),
                            stroke: new ol.style.Stroke({
                                color: 'rgba(255, 255, 255, 0.7)',
                                width: 2
                            }),
                            offsetY: 0,
                            overflow: true,
                            maxAngle: 0.7,
                            placement: 'point',
                            textAlign: 'center',
                            textBaseline: 'bottom',
                            padding: [2, 5, 2, 5],
                            backgroundFill: new ol.style.Fill({
                                color: 'rgba(255, 255, 255, 0.5)'
                            }),
                            backgroundStroke: new ol.style.Stroke({
                                color: 'rgba(200, 200, 200, 0.7)',
                                width: 1
                            })
                        }),
                        zIndex: 20 // Ensure labels are above buildings
                    }));
                }
            }
            
            return styles;
        }

        // Transportation (roads, paths, etc.)
        if (layer === 'transportation') {
            const roadType = cls || 'tertiary';
            const roadStyle = colors.highway[roadType] || colors.highway.tertiary;
            const name = feature.get('name');
            const ref = feature.get('ref');
            
            // Skip rendering tunnels for now
            if (isTunnel) {
                return [];
            }
            
            const styles = [];
            
            // Main road casing (wider, slightly transparent)
            if (['motorway', 'trunk', 'primary', 'secondary'].includes(roadType)) {
                styles.push(new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.3)',
                        width: roadStyle.width * 1.5,
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: 1
                }));
            }
            
            // Handle different road types with special styling
            let lineDash = null;
            let strokeColor = roadStyle.color;
            let strokeWidth = roadStyle.width;
            
            // Special styling for different road types
            if (roadType === 'track') {
                const tracktype = parseInt(feature.get('tracktype') || '1', 10);
                const dashLength = Math.max(1, Math.min(5, tracktype));
                lineDash = [dashLength, 2];
            } else if (roadType === 'path') {
                lineDash = [1, 2];  // Dotted pattern for paths
            } else if (roadType === 'railway') {
                strokeColor = '#ffffff';  // White dashes on black
                strokeWidth = 1.5;
                lineDash = [2, 2];
            }
            
            // For railways, add a black dashed line first
            if (roadType === 'railway') {
                styles.push(new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: '#000000',
                        width: 2.5,
                        lineCap: 'round',
                        lineJoin: 'round',
                        lineDash: [2, 2]
                    }),
                    zIndex: 1
                }));
            }
            
            // Add the main road/railway line
            styles.push(new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: strokeColor,
                    width: strokeWidth,
                    lineCap: 'round',
                    lineJoin: 'round',
                    lineDash: lineDash
                }),
                zIndex: roadType === 'railway' ? 2 : 2
            }));
            
            // For bridges, make the line slightly wider and lighter
            if (isBridge) {
                styles[styles.length - 1].getStroke().setWidth(roadStyle.width * 1.1);
                styles[styles.length - 1].getStroke().setColor(adjustColor(roadStyle.color, 15));
            }
            
            // Add road labels only for major roads and at appropriate zoom levels
            const label = getFeatureLabel(feature, '{name} {ref}');
            if (label && resolution < 20) {
                const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadType);
                if (isMajorRoad) {
                    styles.push(new ol.style.Style({
                        text: createTextStyle({
                            text: label,
                            font: {
                                size: 10,
                                weight: 'bold'
                            },
                            color: '#ffffff',
                            haloColor: 'rgba(0, 0, 0, 0.7)',
                            haloWidth: 2,
                            offsetY: -10,
                            textBaseline: 'bottom',
                            textAlign: 'center',
                            maxResolution: 20
                        }, config)
                    }));
                }
            }
            
            return styles;
        }
        
        // Boundaries
        if (layer === 'boundary') {
            const name = feature.get('name');
            const adminLevel = parseInt(feature.get('admin_level') || '0', 10);
            const boundaryType = feature.get('boundary') || '';
            const styles = [];
            
            // Define boundary style based on type and admin level
            let boundaryStyle = {
                stroke: new ol.style.Stroke({
                    color: colors.boundary.administrative,
                    width: 0.8,
                    lineDash: [4, 2]
                }),
                zIndex: 1
            };
            
            // National boundaries
            if (cls === 'national' || adminLevel <= 2) {
                boundaryStyle.stroke.color = colors.boundary.national;
                boundaryStyle.stroke.width = 1.5;
                boundaryStyle.stroke.lineDash = [6, 3];
                boundaryStyle.zIndex = 3;
            } 
            // State/regional boundaries
            else if (adminLevel <= 4) {
                boundaryStyle.stroke.color = '#666666';
                boundaryStyle.stroke.width = 1;
                boundaryStyle.stroke.lineDash = [5, 3];
                boundaryStyle.zIndex = 2;
            }
            // Protected areas
            else if (boundaryType === 'protected_area' || cls === 'protected_area') {
                boundaryStyle.stroke.color = colors.boundary.protected_area;
                boundaryStyle.stroke.width = 1;
                boundaryStyle.stroke.lineDash = [3, 3];
                boundaryStyle.zIndex = 1;
            }
            
            // Only show major boundaries at higher zoom levels
            const showBoundary = resolution < (adminLevel <= 2 ? 50 : adminLevel <= 4 ? 25 : 5);
            if (showBoundary) {
                styles.push(new ol.style.Style(boundaryStyle));
                
                // Add label for named boundaries (countries, states, etc.)
                if (name && (adminLevel <= 4 || boundaryType === 'protected_area')) {
                    const isNational = adminLevel <= 2;
                    const textColor = boundaryType === 'protected_area' ? colors.boundary.protected_area : '#666666';
                    
                    styles.push(new ol.style.Style({
                        text: createTextStyle({
                            text: name,
                            font: {
                                size: isNational ? 11 : 10,
                                weight: isNational ? 'bold' : 'normal'
                            },
                            color: textColor,
                            haloColor: 'rgba(255, 255, 255, 0.7)',
                            haloWidth: isNational ? 3 : 2,
                            placement: 'line',
                            maxAngle: 0.7,
                            maxResolution: isNational ? 20 : 10,
                            textBaseline: 'middle',
                            textAlign: 'center'
                        }, config)
                    }));
                }
            }
            
            return styles;
        }
        
    } catch (error) {
        console.error('Error styling feature:', error, feature);
        return []; // Return empty styles array on error
    }
    
    // Default style (fallback) - with label if available
    const styles = [new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(200, 200, 200, 0.3)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(100, 100, 100, 0.5)',
            width: 0.5
        })
    })];

    // Add label for any feature with a name or ref
    const label = getFeatureLabel(feature);
    if (label) {
        styles.push(new ol.style.Style({
            text: createTextStyle({
                text: label,
                font: {
                    size: 9,
                    weight: 'normal'
                },
                color: '#333',
                haloColor: 'rgba(255, 255, 255, 0.7)',
                haloWidth: 2,
                offsetY: 10,
                textBaseline: 'middle',
                textAlign: 'center',
                maxResolution: 10
            }, config)
        }));
    }
    
    return styles;
};

/**
 * Helper function to lighten or darken a color
 * @param {string} color - Hex color code
 * @param {number} percent - Positive to lighten, negative to darken
 * @returns {string} Adjusted color
 */
function adjustColor(color, percent) {
    // Convert hex to RGB
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;

    // Ensure values are within bounds
    const clamp = (value) => Math.min(255, Math.max(0, value));
    
    // Convert back to hex
    return '#' + (
        0x1000000 +
        (clamp(R) << 16) +
        (clamp(G) << 8) +
        clamp(B)
    ).toString(16).slice(1);
}
