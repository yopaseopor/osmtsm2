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
        // Base colors - Standard OpenStreetMap style
        water: '#a5bfdd',
        waterIntermittent: '#c0d8e8',
        residential: '#f2e9e1',
        park: '#d6e7d5',
        forest: '#c8e9c3',
        building: '#e0e0e0',
        buildingOutline: '#cccccc',
        
        // Road colors and widths - Standard OpenStreetMap style
        highway: {
            motorway: { color: '#5b7de5', width: 2.0, textColor: '#2e3b4e' },     // blue
            trunk: { color: '#5b7de5', width: 1.8, textColor: '#2e3b4e' },       // blue
            primary: { color: '#f5c76c', width: 1.6, textColor: '#5e5e5e' },     // yellow
            secondary: { color: '#f5d1a9', width: 1.4, textColor: '#5e5e5e' },   // light orange
            tertiary: { color: '#f8f8f8', width: 1.2, textColor: '#5e5e5e' },   // white
            unclassified: { color: '#f8f8f8', width: 1.0, textColor: '#5e5e5e' },// white
            residential: { color: '#f8f8f8', width: 1.0, textColor: '#5e5e5e' }, // white
            service: { color: '#f8f8f8', width: 0.8, textColor: '#5e5e5e' },    // white
            path: { color: '#e9e9e9', width: 0.6, textColor: '#5e5e5e' },       // light gray
            pedestrian: { color: '#e9e9e9', width: 0.6, textColor: '#5e5e5e' }, // light gray
            footway: { color: '#e9e9e9', width: 0.4, textColor: '#5e5e5e' },    // light gray
            track: { color: '#e9e9e9', width: 0.6, textColor: '#5e5e5e' },      // light gray
            cycleway: { color: '#b3d1ff', width: 0.6, textColor: '#2e3b4e' }    // light blue
        },
        
        // Text styles - Standard OpenStreetMap style
        text: {
            fill: '#2e3b4e',
            stroke: 'rgba(255, 255, 255, 0.8)',
            strokeWidth: 2,
            font: '12px Noto Sans, Arial, sans-serif',
            offsetY: 0,
            padding: [2, 4],
            maxAngle: 30,
            overflow: true
        },
        landuse: {
            residential: '#f2e9e1',
            commercial: '#f2e9e1',
            industrial: '#e8e8e8',
            retail: '#f2e9e1',
            park: '#d6e7d5',
            forest: '#c8e9c3',
            grass: '#d6e7d5',
            cemetery: '#c8e9c3',
            school: '#f2e9e1',
            hospital: '#f2e9e1',
            military: '#e8e8e8',
            industrial: '#e8e8e8',
            construction: '#e8e8e8'
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
            
            // Add stroke for intermittent water
            if (isIntermittent) {
                styles[0].setStroke(new ol.style.Stroke({
                    color: colors.water,
                    width: 1,
                    lineDash: [4, 4]
                }));
            }
            
            // Add water label if name exists
            const name = getFeatureLabel(feature, '{name}');
            if (name) {
                styles.push(new ol.style.Style({
                    text: createTextStyle({
                        text: name,
                        font: {
                            style: 'italic',
                            size: 11,
                            weight: 'normal'
                        },
                        color: 'rgba(0, 0, 128, 0.8)',
                        haloColor: 'rgba(255, 255, 255, 0.7)',
                        haloWidth: 2,
                        offsetY: -10,
                        textBaseline: 'bottom',
                        textAlign: 'center'
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
            // Get the highway type from the feature properties
            const highwayType = feature.get('highway');
            // Use the highway type if available, otherwise fall back to cls or 'tertiary'
            const roadType = highwayType || cls || 'tertiary';
            // Get the style for this road type, defaulting to tertiary if not found
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
            
            // Main road fill
            styles.push(new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: roadStyle.color,
                    width: roadStyle.width,
                    lineCap: 'round',
                    lineJoin: 'round'
                }),
                zIndex: 2
            }));
            
            // For bridges, make the line slightly wider and lighter
            if (isBridge) {
                styles[styles.length - 1].getStroke().setWidth(roadStyle.width * 1.1);
                styles[styles.length - 1].getStroke().setColor(adjustColor(roadStyle.color, 15));
            }
            
            // Add road labels for named or numbered roads
            const label = getFeatureLabel(feature, '{name} {ref}');
            if (label) {
                const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadType);
                const fontSize = isMajorRoad ? 10 : 9;
                const textColor = isMajorRoad ? '#ffffff' : roadStyle.textColor || '#000000';
                const haloColor = isMajorRoad ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)';
                
                // Only show labels at appropriate zoom levels
                // For major roads, only show labels at higher zoom levels (lower resolution values)
                // For minor roads, show labels at even higher zoom levels
                // Adjusted to show fewer labels at higher zoom levels
                const showLabel = resolution < (isMajorRoad ? 3 : 0.8);
                
                if (showLabel) {
                    styles.push(new ol.style.Style({
                        text: createTextStyle({
                            text: label,
                            font: {
                                size: fontSize,
                                weight: isMajorRoad ? 'bold' : 'normal'
                            },
                            color: textColor,
                            haloColor: haloColor,
                            haloWidth: isMajorRoad ? 3 : 2,
                            placement: 'line',
                            maxAngle: 0.5, // ~28.6 degrees in radians
                            maxResolution: isMajorRoad ? 7 : 3,
                            textBaseline: 'alphabetic',
                            textAlign: 'center',
                            padding: isMajorRoad ? [2, 4, 2, 4] : [1, 2, 1, 2],
                            backgroundFill: isMajorRoad ? {
                                color: 'rgba(0, 0, 0, 0.3)'
                            } : null,
                            backgroundStroke: isMajorRoad ? {
                                color: 'rgba(0, 0, 0, 0.2)',
                                width: 1
                            } : null
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
            
            // Only show boundaries at appropriate zoom levels
            const showBoundary = resolution < (adminLevel <= 2 ? 100 : adminLevel <= 4 ? 50 : 10);
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
        // POI (Point of Interest) styling - only process if feature has a name
        const name = getFeatureLabel(feature, '{name}');
        if (!name) return [];
        
        const poiTypes = ['amenity', 'shop', 'tourism', 'office', 'building'];
        const poiType = poiTypes.find(type => feature.get(type));
        if (!poiType) return [];
        
        const poiColor = colors.poi[poiType] || colors.poi.default;
        const styles = [];
        
        // Get icon based on POI type
        const iconMap = {
            'cafe': 'cafe',
            'restaurant': 'restaurant',
            'hotel': 'lodging',
            'shop': 'shop',
            'office': 'commercial'
        };
        
        let iconName = 'marker';
        for (const [type, icon] of Object.entries(iconMap)) {
            if (feature.get(type) || (type === 'hotel' && feature.get('tourism') === 'hotel')) {
                iconName = icon;
                break;
            }
        }
        
        // Add icon style
        const iconStyle = getIconStyle(iconName, config, {
            size: 1,
            color: poiColor,
            opacity: 0.9
        });
        
        if (iconStyle) {
            styles.push(new ol.style.Style({
                image: iconStyle,
                // Add declutter to prevent overlapping icons
                declutter: true
            }));
        }
        
        // Add label only at zoom level 17+ with decluttering
        const zoom = Math.round(Math.log2(156543.03390625 / resolution));
        if (zoom >= 17) {
            styles.push(new ol.style.Style({
                text: createTextStyle({
                    text: name,
                    font: {
                        size: 10,
                        weight: 'normal'
                    },
                    color: '#000',
                    haloColor: '#fff',
                    haloWidth: 2,
                    offsetY: 12,
                    textBaseline: 'top',
                    textAlign: 'center',
                    // Enable decluttering for labels
                    declutter: true,
                    // Add a small buffer to prevent label overlap
                    overflow: false,
                    // Only show if there's enough space
                    maxResolution: 0.5
                }, config)
            }));
        }
        
        return styles;
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
