/**
 * Gets the best label text for a feature
 * @param {ol/Feature} feature - The feature to get label for
 * @returns {string|null} The best available label text or null if none found
 */
function getFeatureLabel(feature) {
    // Try to get name, ref, or house number
    const name = feature.get('name');
    const ref = feature.get('ref');
    
    // For POIs, include their type (shop, amenity, etc.)
    const shop = feature.get('shop');
    const amenity = feature.get('amenity');
    const tourism = feature.get('tourism');
    
    // Return name if available, otherwise try to use POI type
    return name || ref || shop || amenity || tourism || null;
}

/**
 * Creates a text style with proper font stacks and halo
 * @param {Object} options - Style options
 * @returns {ol.style.Text} Text style
 */
function createTextStyle(options = {}) {
    const config = window.maptilerStyleConfig || {};
    const fontStack = (config.fontStacks && config.fontStacks[options.fontWeight || 'regular']) || 
                     ['Arial', 'sans-serif'];
    const fontSize = options.fontSize || 12;
    const textColor = options.color || '#000000';
    const haloColor = options.haloColor || 'rgba(255, 255, 255, 0.7)';
    const haloWidth = options.haloWidth || 1.5;
    
    return new ol.style.Text({
        text: options.text,
        font: `${options.fontWeight || 'normal'} ${fontSize}px ${fontStack.join(', ')}`,
        fill: new ol.style.Fill({ color: textColor }),
        stroke: new ol.style.Stroke({
            color: haloColor,
            width: haloWidth
        }),
        offsetX: options.offsetX || 0,
        offsetY: options.offsetY || 0,
        rotation: options.rotation || 0,
        scale: options.scale || 1,
        textAlign: options.textAlign || 'center',
        textBaseline: options.textBaseline || 'middle',
        overflow: options.overflow !== false,
        padding: options.padding || [2, 4],
        backgroundFill: options.backgroundFill ? new ol.style.Fill(options.backgroundFill) : undefined,
        backgroundStroke: options.backgroundStroke ? new ol.style.Stroke(options.backgroundStroke) : undefined
    });
}

/**
 * Creates an icon style with proper sprite support
 * @param {string} iconName - Name of the icon in the sprite sheet
 * @param {Object} options - Style options
 * @returns {ol.style.Style} Icon style
 */
function createIconStyle(iconName, options = {}) {
    const config = window.maptilerStyleConfig || {};
    const size = options.size || 1.0;
    const rotation = options.rotation || 0;
    const opacity = options.opacity !== undefined ? options.opacity : 1.0;
    
    return new ol.style.Style({
        image: new ol.style.Icon({
            src: `${config.spriteBaseUrl || ''}?key=tKDOqJGURiimBRaaKrDJ#${iconName}`,
            scale: size,
            rotation: rotation * (Math.PI / 180), // Convert degrees to radians
            opacity: opacity,
            anchor: options.anchor || [0.5, 0.5],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            crossOrigin: 'anonymous'
        }),
        zIndex: options.zIndex || 100
    });
}

/**
 * Vector Tile Style Configuration
 * Using MapTiler Basic GL Style with proper glyph and sprite support
 */
window.vectorTileStyle = function(feature, resolution) {
    // Common colors from MapTiler Basic style
    const colors = {
        background: '#f8f4f0',
        water: '#a5bfdd',
        waterIntermittent: 'rgba(165, 191, 221, 0.5)',
        landuse: {
            residential: '#f2e9e1',
            park: '#d8e8c8',
            forest: '#b8d9a9',
            cemetery: '#b8d9a9',
            industrial: '#f2e9e1',
            commercial: '#f2e9e1',
            retail: '#f2e9e1',
            default: '#f2e9e1'
        },
        building: '#d4d4d4',
        buildingOutline: '#999999',
        road: {
            motorway: '#ff8753',
            trunk: '#fff2b2',
            primary: '#fff2b2',
            secondary: '#ffffff',
            tertiary: '#ffffff',
            residential: '#ffffff',
            service: '#ffffff',
            path: '#ffffff',
            track: '#ffffff',
            pedestrian: '#ffffff',
            default: '#ffffff'
        },
        boundary: {
            national: '#000000',
            administrative: '#9e9e9e',
            protected_area: '#2d5f2d',
            default: '#cccccc'
        },
        text: {
            primary: '#000000',
            secondary: '#555555',
            light: '#ffffff',
            highlight: '#1a73e8',
            water: '#5d8fbd',
            road: '#000000',
            place: '#000000',
            poi: '#333333',
            country: 'hsl(0, 0%, 13%)',
            city: '#000000',
            town: '#000000',
            village: 'hsl(0, 0%, 25%)',
            suburb: 'hsl(0, 0%, 25%)',
            hamlet: 'hsl(0, 0%, 25%)'
        },
        textHalo: {
            light: 'rgba(255, 255, 255, 0.75)',
            dark: 'rgba(0, 0, 0, 0.75)',
            white: '#ffffff',
            black: '#000000'
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
            
            // Add stroke for intermittent water
            if (isIntermittent) {
                styles[0].setStroke(new ol.style.Stroke({
                    color: colors.water,
                    width: 1,
                    lineDash: [4, 4]
                }));
            }
            
            // Add water label if name exists
            const name = feature.get('name');
            if (name) {
                const isLargeWaterBody = feature.get('area') > 1000000; // Large water bodies in square meters
                const fontSize = isLargeWaterBody ? 14 : 12;
                const textColor = colors.text.water;
                const haloColor = colors.textHalo.light;
                
                styles.push(new ol.style.Style({
                    text: new ol.style.Text({
                        text: name,
                        font: `italic ${fontSize}px Arial`,
                        fill: new ol.style.Fill({
                            color: textColor
                        }),
                        stroke: new ol.style.Stroke({
                            color: haloColor,
                            width: 3
                        }),
                        offsetY: isLargeWaterBody ? -15 : -12,
                        overflow: true,
                        placement: 'point',
                        textBaseline: 'bottom',
                        textAlign: 'center',
                        padding: [2, 4],
                        backgroundFill: new ol.style.Fill({
                            color: 'rgba(255, 255, 255, 0.3)'
                        }),
                        backgroundStroke: new ol.style.Stroke({
                            color: 'rgba(0, 0, 0, 0.2)',
                            width: 0.5
                        })
                    }),
                    zIndex: 40 // Above water but below roads and POIs
                }));
            }
            
            return styles;
        }
        
        // Landuse
        if (layer === 'landuse') {
            const fillColor = colors.landuse[cls] || colors.landuse.residential;
            const name = feature.get('name');
            const styles = [];
            
            // Base fill
            styles.push(new ol.style.Style({
                fill: new ol.style.Fill({
                    color: fillColor
                })
            }));
            
            // Get label for any landuse with name, ref, or address
            const label = getFeatureLabel(feature);
            if (label) {
                const isImportantLanduse = ['park', 'forest', 'cemetery', 'university', 'hospital'].includes(cls);
                const fontSize = isImportantLanduse ? 12 : 10;
                const textColor = colors.text.light; // White text for better contrast
                const haloColor = colors.textHalo.dark;
                const fontWeight = isImportantLanduse ? 'bold' : 'normal';
                
                styles.push(new ol.style.Style({
                    text: new ol.style.Text({
                        text: label,
                        font: `${fontWeight} ${fontSize}px Arial`,
                        fill: new ol.style.Fill({ 
                            color: textColor 
                        }),
                        stroke: new ol.style.Stroke({
                            color: haloColor,
                            width: 3
                        }),
                        offsetY: 0,
                        overflow: true,
                        textBaseline: 'middle',
                        textAlign: 'center',
                        placement: 'point',
                        maxAngle: 0.7,
                        padding: [3, 6],
                        backgroundFill: new ol.style.Fill({
                            color: 'rgba(0, 0, 0, 0.5)'
                        }),
                        backgroundStroke: new ol.style.Stroke({
                            color: 'rgba(255, 255, 255, 0.3)',
                            width: 1
                        })
                    }),
                    zIndex: 80 // Above most features but below POIs
                }));
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
            let roadType = cls || 'tertiary';
            
            // Handle railway specially
            if (roadType === 'rail') {
                return [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: '#000000',
                        width: 3.0, // Doubled from 1.5
                        lineDash: [5, 5],
                        lineCap: 'round'
                    }),
                    zIndex: 3
                })];
            }
            
            // Handle track types
            if (roadType === 'track') {
                const trackType = parseInt(feature.get('tracktype') || '1', 10);
                // Double the widths for better visibility
                const trackWidths = [0.8, 1.2, 1.6, 2.0, 2.4]; // Doubled widths for tracktypes 1-5
                const trackWidth = trackType >= 1 && trackType <= 5 ? trackWidths[trackType - 1] : 1.2;
                const trackColor = '#8b4513'; // Brown
                
                return [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: trackColor,
                        width: trackWidth,
                        lineCap: 'round',
                        lineJoin: 'round',
                        lineDash: [6, 3] // Slightly longer dashes for visibility
                    }),
                    zIndex: 1
                })];
            }
            
            const roadStyle = colors.road[roadType] || colors.road.tertiary;
            const name = feature.get('name');
            const ref = feature.get('ref');
            
            // Skip rendering tunnels for now
            if (isTunnel) {
                return [];
            }
            
            const styles = [];
            
            // Main road casing (wider, slightly transparent)
            if (['motorway', 'trunk', 'primary', 'secondary', 'tertiary'].includes(roadType)) {
                styles.push(new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.2)',
                        width: roadStyle.width * 1.25, // Slightly smaller multiplier since base widths are larger
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: 1
                }));
            }
            
            // Main road fill
            const lineDash = roadType === 'living_street' ? [4, 2] : undefined;
            
            styles.push(new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: roadStyle.color,
                    width: roadStyle.width,
                    lineCap: 'round',
                    lineJoin: 'round',
                    lineDash: lineDash
                }),
                zIndex: 2
            }));
            
            // For bridges, make the line slightly wider and lighter
            if (isBridge) {
                // Use a smaller multiplier since base widths are larger now
                styles[styles.length - 1].getStroke().setWidth(roadStyle.width * 1.05);
                styles[styles.length - 1].getStroke().setColor(adjustColor(roadStyle.color, 15));
                
                // Add a subtle white line in the middle for bridges
                styles.push(new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.3)',
                        width: roadStyle.width * 0.5,
                        lineDash: [10, 5],
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: 3
                }));
            }
            
            // Add road labels for named or numbered roads
            const label = getFeatureLabel(feature);
            if (label) {
                const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadType);
                const fontSize = isMajorRoad ? 11 : 10; // Slightly larger font
                
                // Special handling for different road types
                let textColor, strokeColor, strokeWidth;
                
                if (roadType === 'residential') {
                    textColor = '#ffffff'; // White text for black residential roads
                    strokeColor = 'rgba(0, 0, 0, 0.8)';
                    strokeWidth = 3;
                } else if (roadType === 'living_street') {
                    textColor = '#ffffff'; // White text for dark grey living streets
                    strokeColor = 'rgba(0, 0, 0, 0.8)';
                    strokeWidth = 2.5;
                } else if (roadType === 'pedestrian') {
                    textColor = '#333333'; // Dark text for light grey pedestrian areas
                    strokeColor = 'rgba(255, 255, 255, 0.9)';
                    strokeWidth = 2;
                } else if (isMajorRoad) {
                    textColor = '#ffffff'; // White text for major roads
                    strokeColor = 'rgba(0, 0, 0, 0.8)';
                    strokeWidth = 3;
                } else {
                    textColor = colors.text.road;
                    strokeColor = 'rgba(255, 255, 255, 0.9)';
                    strokeWidth = 2.5;
                }
                
                // Show labels at appropriate zoom levels based on road importance
                const showLabel = resolution < (isMajorRoad ? 15 : 7.5);
                
                if (showLabel) {
                    const textStyle = new ol.style.Text({
                        text: label,
                        font: isMajorRoad ? `bold ${fontSize}px Arial` : `${fontSize}px Arial`,
                        fill: new ol.style.Fill({ color: textColor }),
                        stroke: new ol.style.Stroke({
                            color: strokeColor,
                            width: strokeWidth
                        }),
                        offsetY: 0,
                        rotation: 0,
                        textAlign: 'center',
                        textBaseline: 'middle',
                        overflow: true,
                        placement: 'line',
                        maxAngle: 0.5,
                        textOverflow: 'ellipsis',
                        maxResolution: isMajorRoad ? 15 : 7.5,
                        padding: isMajorRoad ? [3, 6] : [2, 4],
                        backgroundFill: isMajorRoad ? new ol.style.Fill({
                            color: 'rgba(0, 0, 0, 0.4)'
                        }) : null,
                        backgroundStroke: isMajorRoad ? new ol.style.Stroke({
                            color: 'rgba(0, 0, 0, 0.2)',
                            width: 1
                        }) : null
                    });
                    
                    // For highways, add a second outline for better visibility
                    if (isMajorRoad) {
                        textStyle.setTextBaseline('middle');
                        textStyle.setStroke(new ol.style.Stroke({
                            color: 'rgba(0, 0, 0, 0.7)',
                            width: strokeWidth + 2
                        }));
                    }
                    
                    styles.push(new ol.style.Style({
                        text: textStyle,
                        zIndex: 50 // Ensure road labels are above most features
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
                })
            };
            
            // National boundaries
            if (cls === 'national' || adminLevel <= 2) {
                boundaryStyle.stroke.color = colors.boundary.national;
                boundaryStyle.stroke.width = 1.5;
                boundaryStyle.stroke.lineDash = [6, 3];
            } 
            // State/regional boundaries
            else if (adminLevel <= 4) {
                boundaryStyle.stroke.color = '#666666';
                boundaryStyle.stroke.width = 1;
                boundaryStyle.stroke.lineDash = [5, 3];
            }
            // Protected areas
            else if (boundaryType === 'protected_area' || cls === 'protected_area') {
                boundaryStyle.stroke.color = colors.boundary.protected_area;
                boundaryStyle.stroke.width = 1;
                boundaryStyle.stroke.lineDash = [3, 3];
            }
            
            styles.push(new ol.style.Style(boundaryStyle));
            
            // Add label for named boundaries (countries, states, etc.)
            if (name && (adminLevel <= 4 || boundaryType === 'protected_area')) {
                styles.push(new ol.style.Style({
                    text: new ol.style.Text({
                        text: name,
                        font: adminLevel <= 2 ? 'bold 11px Arial' : '10px Arial',
                        fill: new ol.style.Fill({
                            color: boundaryType === 'protected_area' ? colors.boundary.protected_area : '#666666'
                        }),
                        stroke: new ol.style.Stroke({
                            color: 'rgba(255, 255, 255, 0.7)',
                            width: adminLevel <= 2 ? 3 : 2
                        }),
                        overflow: true,
                        placement: 'line',
                        maxAngle: 0.7
                    })
                }));
            }
            
            return styles;
        }
        
        // POI (Point of Interest) styling
        const poiType = feature.get('amenity') || feature.get('shop') || feature.get('tourism');
        if (poiType) {
            const label = getFeatureLabel(feature);
            if (label) {
                const fontSize = 10;
                const textColor = colors.text.poi;
                const haloColor = colors.textHalo.dark;
                
                const styles = [new ol.style.Style({
                    text: new ol.style.Text({
                        text: label,
                        font: `${fontSize}px Arial`,
                        fill: new ol.style.Fill({
                            color: textColor
                        }),
                        stroke: new ol.style.Stroke({
                            color: haloColor,
                            width: 3
                        }),
                        offsetY: 12,
                        overflow: true,
                        padding: [2, 4],
                        backgroundFill: new ol.style.Fill({
                            color: 'rgba(0, 0, 0, 0.5)'
                        }),
                        backgroundStroke: new ol.style.Stroke({
                            color: 'rgba(255, 255, 255, 0.3)',
                            width: 1
                        })
                    }),
                    zIndex: 100 // Ensure POI labels are on top
                })];
                
                return styles;
            }
        }
        
        // Default style (fallback) - with label if available
        const styles = [new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(200, 200, 200, 0.3)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(100, 100, 100, 0.5)',
                width: 1
            })
        })];

        // Add label for any feature with a name or ref
        const label = getFeatureLabel(feature);
        if (label) {
            styles.push(new ol.style.Style({
                text: createTextStyle({
                    text: label,
                    fontSize: 10,
                    color: colors.text.primary,
                    haloColor: colors.textHalo.light,
                    haloWidth: 2,
                    textBaseline: 'bottom',
                    offsetY: 10
                })
            }));
        }
        
        return styles;
    }
    
    // Default style for any unhandled features
    return [new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(200, 200, 200, 0.3)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(100, 100, 100, 0.5)',
            width: 1
        })
    })];
};

/**
 * Adjusts a color by a percentage (lightens or darkens)
 * @param {string} color - Hex color code
 * @param {number} percent - Positive to lighten, negative to darken
 * @returns {string} Adjusted color in hex format
 */
/**
 * Adjusts a color by a percentage (lightens or darkens)
 * @param {string} color - Hex color code
 * @param {number} percent - Positive to lighten, negative to darken
 * @returns {string} Adjusted color in hex format
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
