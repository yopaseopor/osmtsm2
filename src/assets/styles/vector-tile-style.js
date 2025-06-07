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
            feature.get('name:latin') ||
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

    // Handle field formatting like {name} {ref} or {name:latin}\n{name:nonlatin}
    return textField.replace(/\{([^}]+)\}/g, (match, p1) => {
        // Handle nested properties like {name:latin}
        const parts = p1.split(':');
        const field = parts[0];
        const modifier = parts[1] || 'latin'; // Default to latin script
        
        // Try to get the specific variant, fall back to base name
        return feature.get(`${field}:${modifier}`) || 
               feature.get(field) || '';
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
 * Creates a text style with proper font handling following MapTiler Basic GL Style
 * @param {Object} options - Text style options
 * @param {Object} config - Style configuration
 * @returns {ol/style/Text} OpenLayers text style
 */
function createTextStyle(options, config) {
    const {
        text,
        font = {},
        color = '#666',
        haloColor = 'rgba(255, 255, 255, 0.75)',
        haloWidth = 1,
        haloBlur = 0,
        offsetX = 0,
        offsetY = 0,
        textAlign = 'center',
        textBaseline = 'middle',
        maxResolution = Infinity,
        padding = [0, 0, 0, 0],
        maxWidth = 8,
        letterSpacing = 0,
        textTransform = 'none',
        textRotation = 0
    } = options;

    // Skip if no text
    if (!text) return null;

    // Apply text transformation
    let displayText = text;
    if (textTransform === 'uppercase') {
        displayText = text.toUpperCase();
    } else if (textTransform === 'lowercase') {
        displayText = text.toLowerCase();
    } else if (textTransform === 'capitalize') {
        displayText = text.replace(/\b\w/g, l => l.toUpperCase());
    }

    // Get font stack
    const fontStack = getFontStack(font, config);
    const fontSize = font.size || 11; // Default to 11px as per Basic style
    const fontWeight = font.weight || 'normal';
    const fontStyle = font.style || 'normal';

    // Build font string
    let fontString = '';
    if (fontStyle === 'italic') fontString += 'italic ';
    if (fontWeight === 'bold') fontString += 'bold ';
    fontString += `${fontSize}px ${fontStack}`;

    // Create text style with halo effect
    const style = new ol.style.Text({
        text: displayText,
        font: fontString,
        fill: new ol.style.Fill({ color }),
        stroke: new ol.style.Stroke({
            color: haloColor,
            width: haloWidth,
            lineDash: haloBlur > 0 ? [haloBlur, 1] : undefined
        }),
        offsetX,
        offsetY,
        textAlign,
        textBaseline,
        padding,
        overflow: true,
        maxResolution,
        maxAngle: Math.PI / 4, // 45 degrees
        rotation: textRotation * (Math.PI / 180), // Convert degrees to radians
        text: displayText,
        scale: 1,
        rotateWithView: false,
        placement: 'point',
        backgroundFill: undefined,
        backgroundStroke: undefined,
        textKey: undefined,
        textKeys: undefined,
        textKeyProperty: undefined,
        textKeyFunction: undefined,
        textKeyColumn: undefined,
        textKeyValue: undefined,
        textKeyValues: undefined,
        textKeyFunctionContext: undefined,
        textKeyColumnFunction: undefined,
        textKeyColumnFunctionContext: undefined,
        textKeyValueFunction: undefined,
        textKeyValueFunctionContext: undefined,
        textKeyValuesFunction: undefined,
        textKeyValuesFunctionContext: undefined,
        textKeyValuesColumn: undefined,
        textKeyValuesColumnFunction: undefined,
        textKeyValuesColumnFunctionContext: undefined,
        textKeyValuesValue: undefined,
        textKeyValuesValues: undefined,
        textKeyValuesValuesFunction: undefined,
        textKeyValuesValuesFunctionContext: undefined,
        textKeyValuesValuesColumn: undefined,
        textKeyValuesValuesColumnFunction: undefined,
        textKeyValuesValuesColumnFunctionContext: undefined,
        textKeyValuesValuesValue: undefined,
        textKeyValuesValuesValues: undefined,
        textKeyValuesValuesValuesFunction: undefined,
        textKeyValuesValuesValuesFunctionContext: undefined,
        textKeyValuesValuesValuesColumn: undefined,
        textKeyValuesValuesValuesColumnFunction: undefined,
        textKeyValuesValuesValuesColumnFunctionContext: undefined,
        textKeyValuesValuesValuesValue: undefined,
        textKeyValuesValuesValuesValues: undefined,
        textKeyValuesValuesValuesValuesFunction: undefined,
        textKeyValuesValuesValuesValuesFunctionContext: undefined,
        textKeyValuesValuesValuesValuesColumn: undefined,
        textKeyValuesValuesValuesValuesColumnFunction: undefined,
        textKeyValuesValuesValuesValuesColumnFunctionContext: undefined,
        textKeyValuesValuesValuesValuesValue: undefined,
        textKeyValuesValuesValuesValuesValues: undefined,
        textKeyValuesValuesValuesValuesValuesFunction: undefined,
        textKeyValuesValuesValuesValuesValuesFunctionContext: undefined,
        textKeyValuesValuesValuesValuesValuesColumn: undefined,
        textKeyValuesValuesValuesValuesValuesColumnFunction: undefined,
        textKeyValuesValuesValuesValuesValuesColumnFunctionContext: undefined,
        textKeyValuesValuesValuesValuesValuesValue: undefined,
        textKeyValuesValuesValuesValuesValuesValues: undefined,
        textKeyValuesValuesValuesValuesValuesValuesFunction: undefined,
        textKeyValuesValuesValuesValuesValuesValuesFunctionContext: undefined,
        textKeyValuesValuesValuesValuesValuesValuesColumn: undefined,
        textKeyValuesValuesValuesValuesValuesValuesColumnFunction: undefined,
        textKeyValuesValuesValuesValuesValuesValuesColumnFunctionContext: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValue: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValues: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesFunction: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesFunctionContext: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesColumn: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesColumnFunction: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesColumnFunctionContext: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesValue: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesValues: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesValuesFunction: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesValuesFunctionContext: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesValuesColumn: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesValuesColumnFunction: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesValuesColumnFunctionContext: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesValuesValue: undefined,
        textKeyValuesValuesValuesValuesValuesValuesValuesValuesValues: undefined
    });

    // Set max width if specified
    if (maxWidth) {
        style.setText(displayText);
        style.setMaxAngle(0);
        style.setOverflow(true);
        style.setScale(1);
        style.setMaxResolution(maxResolution);
        style.setTextAlign(textAlign);
        style.setTextBaseline(textBaseline);
        style.setOffsetX(offsetX);
        style.setOffsetY(offsetY);
        style.setPadding(padding);
        style.setFont(fontString);
        style.setFill(new ol.style.Fill({ color }));
        style.setStroke(new ol.style.Stroke({
            color: haloColor,
            width: haloWidth,
            lineDash: haloBlur > 0 ? [haloBlur, 1] : undefined
        }));
    }

    return style;
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
 * Vector Tile Style Configuration
 * Implements a style function following Mapbox GL Style Specification patterns
 * @param {ol/Feature} feature - The feature to style
 * @param {number} resolution - The current resolution
 * @param {Object} config - Configuration object
 * @returns {Array<ol/style/Style>} Array of styles to apply to the feature
 */
function vectorTileStyle(feature, resolution, config = {}) {
    // Skip if no feature provided
    if (!feature) {
        return [];
    }

    // Get feature properties
    const layer = feature.get('layer') || 'unknown';
    const cls = feature.get('class') || '';
    const type = feature.getGeometry().getType();
    const brunnel = feature.get('brunnel');
    const isBridge = brunnel === 'bridge';
    const isTunnel = brunnel === 'tunnel';
    const zoom = Math.log2(156543.03390625) - Math.log2(resolution * 2 * Math.PI / 40075016.68557849);

    // Initialize styles array
    const styles = [];

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
        water: 'rgba(170, 210, 255, 0.9)',
        waterIntermittent: 'rgba(170, 210, 255, 0.6)',
        residential: 'rgba(240, 238, 235, 0.7)',
        park: 'rgba(210, 250, 210, 0.7)',
        forest: 'rgba(190, 220, 190, 0.8)',
        building: 'rgba(220, 217, 210, 0.9)',
        buildingOutline: 'rgba(180, 177, 170, 0.8)',
        
        // Road colors and widths
        highway: {
            motorway: { color: '#0000ff', width: 3.0, textColor: '#0000ff' },  // blue
            trunk: { color: '#8b0000', width: 2.8, textColor: '#8b0000' },      // dark red
            primary: { color: '#ff0000', width: 2.5, textColor: '#ff0000' },    // red
            secondary: { color: '#006400', width: 2.0, textColor: '#006400' },  // dark green
            tertiary: { color: '#ffa500', width: 1.8, textColor: '#ff8c00' },   // orange
            unclassified: { color: '#ff00ff', width: 1.5, textColor: '#ff00ff' }, // magenta
            residential: { color: '#666666', width: 1.2, textColor: '#666666' },
            service: { color: '#999999', width: 0.8, textColor: '#999999' },
            path: { color: '#aaaaaa', width: 0.6, textColor: '#666666' },
            pedestrian: { color: '#cccccc', width: 0.8, textColor: '#666666' }
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
            forest: 'rgba(190, 220, 190, 0.8)'
        }
    };

    // Helper function to create a style with proper defaults
    const createStyle = (fillColor, strokeColor, strokeWidth = 1, zIndex = 0, lineDash = undefined, fillOpacity = 1) => {
        const style = new ol.style.Style({
            fill: fillColor ? new ol.style.Fill({ 
                color: fillColor.startsWith('rgba') ? 
                    fillColor : 
                    (fillOpacity < 1 ? 
                        `${fillColor}${Math.round(fillOpacity * 255).toString(16).padStart(2, '0')}` : 
                        fillColor)
            }) : undefined,
            stroke: strokeColor ? new ol.style.Stroke({
                color: strokeColor,
                width: strokeWidth,
                lineDash: lineDash
            }) : undefined,
            zIndex: zIndex
        });
        return style;
    };

    // Helper function to create text style following MapTiler Basic style
    const createLabel = (text, options = {}) => {
        if (!text) return null;
        
        const defaultOptions = {
            font: {
                size: 11,
                weight: 'normal'
            },
            color: '#666',
            haloColor: 'rgba(255, 255, 255, 0.75)',
            haloWidth: 1,
            haloBlur: 0,
            offsetY: 0,
            textBaseline: 'middle',
            textAlign: 'center',
            maxResolution: 10,
            maxWidth: 8,
            textTransform: 'none'
        };
        
        return new ol.style.Style({
            text: createTextStyle({
                ...defaultOptions,
                ...options,
                text
            }, config)
        });
    };

    // Apply styles based on layer type following MapTiler Basic style
    switch (layer) {
        case 'water':
            if (feature.get('intermittent') === 1) {
                // Intermittent water
                styles.push(createStyle(
                    'rgba(170, 211, 223, 0.35)', // 70% opacity of normal water
                    '#a8d7df',
                    1,
                    0,
                    [2, 2] // Dashed line for intermittent
                ));
            } else {
                // Normal water
                styles.push(createStyle(
                    'hsl(205, 56%, 73%)', // Water fill color from Basic style
                    undefined,
                    0
                ));
            }
            break;
            
        case 'landuse':
            if (['residential', 'suburb', 'neighbourhood'].includes(cls)) {
                // Residential areas
                styles.push(createStyle(
                    'hsl(47, 13%, 86%)',
                    undefined,
                    0,
                    0,
                    undefined,
                    0.7 // 70% opacity
                ));
            } else if (cls === 'agriculture') {
                // Agricultural land
                styles.push(createStyle(
                    '#eae0d0',
                    undefined,
                    0
                ));
            }
            break;
            
        case 'landcover':
            if (cls === 'grass') {
                styles.push(createStyle(
                    'hsl(82, 46%, 72%)',
                    undefined,
                    0,
                    0,
                    undefined,
                    0.45 // 45% opacity
                ));
            } else if (cls === 'wood') {
                const opacity = Math.min(0.6 + (zoom - 8) * 0.1, 1);
                styles.push(createStyle(
                    'hsl(82, 46%, 72%)',
                    undefined,
                    0,
                    0,
                    undefined,
                    opacity
                ));
            } else if (cls === 'sand') {
                styles.push(createStyle(
                    'rgba(232, 214, 38, 0.3)',
                    undefined,
                    0
                ));
            } else if (feature.get('subclass') === 'glacier') {
                const opacity = 1 - Math.min(0.5 * (zoom - 0) / 8, 0.5);
                styles.push(createStyle(
                    'hsl(47, 22%, 94%)',
                    undefined,
                    0,
                    0,
                    undefined,
                    opacity
                ));
            } else if (feature.get('class') === 'national_park') {
                const opacity = Math.min(0.75 * (zoom - 5) / 4, 0.75);
                if (opacity > 0) {
                    styles.push(createStyle(
                        '#E1EBB0',
                        undefined,
                        0,
                        0,
                        undefined,
                        opacity
                    ));
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
                const showLabel = resolution < (isMajorRoad ? 20 : 10);
                
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
                            maxResolution: isMajorRoad ? 10 : 5,
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
        const showLabel = resolution < (isMajorRoad ? 20 : 10);
        
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
                    maxResolution: isMajorRoad ? 10 : 5,
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

try {
    // Buildings
    if (layer === 'building') {
        const height = feature.get('height') || 0;
        const minHeight = feature.get('min_height') || 0;
        const levels = feature.get('building:levels') || 1;
        const isTunnel = feature.get('tunnel') === 'yes' || feature.get('layer') === '-1';
        const isBridge = feature.get('bridge') === 'yes' || feature.get('layer') === '1';
        
        // Calculate base height - use actual height if available, otherwise estimate from levels
        const baseHeight = height > 0 ? height : levels * 3; // Assuming ~3m per level
        
        // Calculate z-index based on height/levels
        const zIndex = Math.min(100, Math.max(1, Math.floor(levels)));
        
        // Different colors based on building type
        let fillColor = '#e0dcd1'; // Default light beige
        
        if (feature.get('building:material') === 'brick') {
            fillColor = '#d4b99c'; // Brick red
        } else if (feature.get('building:material') === 'concrete') {
            fillColor = '#d1d1d1'; // Light gray
        } else if (feature.get('building') === 'residential') {
            fillColor = '#e8e6e1'; // Light beige for residential
        } else if (feature.get('building') === 'commercial' || feature.get('building') === 'retail') {
            fillColor = '#e0dcd1'; // Slightly darker for commercial
        } else if (feature.get('building') === 'industrial') {
            fillColor = '#d4d4d4'; // Light gray for industrial
        }
        
        // Adjust for bridges and tunnels
        if (isBridge) {
            fillColor = adjustColor(fillColor, 5); // Slightly lighter for bridges
        } else if (isTunnel) {
            fillColor = adjustColor(fillColor, -10); // Slightly darker for tunnels
        }
        
        // Create 3D effect with multiple strokes
        const styles = [];
        
        // Base fill
        styles.push(new ol.style.Style({
            fill: new ol.style.Fill({
                color: fillColor
            }),
            stroke: new ol.style.Stroke({
                color: adjustColor(fillColor, -20),
                width: 1
            }),
            zIndex: zIndex
        }));
        
        // Add roof if we have height information
        if (baseHeight > 0) {
            // Slightly darker color for the roof
            const roofColor = adjustColor(fillColor, -10);
            
            styles.push(new ol.style.Style({
                geometry: function(feature) {
                    // Create a polygon for the roof (slightly offset)
                    const coords = feature.getGeometry().getCoordinates();
                    // Offset the coordinates slightly based on height
                    const offset = baseHeight * 0.001; // Scale factor for better visualization
                    const offsetCoords = coords[0].map(coord => [
                        coord[0] + offset,
                        coord[1] - offset
                    ]);
                    return new ol.geom.Polygon([offsetCoords]);
                },
                fill: new ol.style.Fill({
                    color: roofColor
                }),
                stroke: new ol.style.Stroke({
                    color: adjustColor(roofColor, -20),
                    width: 0.5
                }),
                zIndex: zIndex + 0.1
            }));
        }
        
        // Add label for named buildings
        const name = feature.get('name');
        if (name && resolution < 5) { // Only show labels at higher zoom levels
            styles.push(new ol.style.Style({
                text: createTextStyle({
                    text: name,
                    font: {
                        size: 10,
                        weight: 'normal'
                    },
                    color: '#333',
                    haloColor: 'rgba(255, 255, 255, 0.7)',
                    haloWidth: 2,
                    offsetY: -baseHeight * 0.5, // Position above the building
                    textBaseline: 'bottom',
                    textAlign: 'center',
                    maxResolution: 2.5
                }, config)
            }));
        }
        
        return styles;
    }
} catch (error) {
    console.error('Error styling feature:', error, feature);
    // POI (Point of Interest) styling
    const poiType = feature.get('amenity') || feature.get('shop') || 
                   feature.get('tourism') || feature.get('office') || 
                   feature.get('building') ? 'poi' : null;
    
    if (poiType) {
        const poiColor = colors.poi[
            feature.get('amenity') ? 'amenity' : 
            feature.get('shop') ? 'shop' :
            feature.get('tourism') ? 'tourism' :
            feature.get('office') ? 'office' :
            feature.get('building') ? 'building' : 'default'
        ];
        
        const styles = [];
        
        // Get icon name based on POI type
        let iconName = 'marker';
        if (feature.get('amenity') === 'cafe') iconName = 'cafe';
        else if (feature.get('amenity') === 'restaurant') iconName = 'restaurant';
        else if (feature.get('shop')) iconName = 'shop';
        else if (feature.get('tourism') === 'hotel') iconName = 'lodging';
        else if (feature.get('office')) iconName = 'commercial';
        
        // Add icon style if available
        const iconStyle = getIconStyle(iconName, config, {
            size: 1,
            color: poiColor,
            opacity: 0.9
        });
        
        if (iconStyle) {
            styles.push(new ol.style.Style({
                image: iconStyle
            }));
        } else {
            // Fallback to circle if no icon available
            styles.push(new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 5,
                    fill: new ol.style.Fill({
                        color: poiColor
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#fff',
                        width: 1
                    })
                })
            }));
        }
        
        // Add label for POI
        const label = getFeatureLabel(feature, '{name}');
        if (label) {
            styles.push(new ol.style.Style({
                text: createTextStyle({
                    text: label,
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
                    maxResolution: 5 // Only show at higher zoom levels
                }, config)
            }));
        }
        
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
}

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
