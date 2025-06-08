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

        // Water (OpenMapTiles schema)
        if (layer === 'water') {
            const waterClass = feature.get('class') || 'ocean';
            const isIntermittent = feature.get('intermittent') === 1 || feature.get('intermittent') === '1';
            
            // Different water colors based on class
            const waterColors = {
                'ocean': 'rgba(170, 210, 255, 0.9)',
                'lake': 'rgba(170, 210, 255, 0.9)',
                'reservoir': 'rgba(170, 210, 255, 0.9)',
                'river': 'rgba(170, 210, 255, 0.9)',
                'canal': 'rgba(170, 210, 255, 0.9)',
                'basin': 'rgba(200, 230, 255, 0.9)',
                'pond': 'rgba(200, 230, 255, 0.9)'
            };
            
            const waterColor = isIntermittent ? 
                adjustColor(waterColors[waterClass] || waterColors.ocean, 10) : 
                waterColors[waterClass] || waterColors.ocean;
            
            const styles = [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: waterColor
                })
            })];
            
            // Add stroke for intermittent water or rivers/canals
            if (isIntermittent || waterClass === 'river' || waterClass === 'canal') {
                styles[0].setStroke(new ol.style.Stroke({
                    color: adjustColor(waterColor, -15),
                    width: waterClass === 'river' || waterClass === 'canal' ? 1.5 : 1,
                    lineDash: isIntermittent ? [4, 4] : null
                }));
            }
            
            // Add water label if name exists (for named water bodies)
            const name = getFeatureLabel(feature, '{name}');
            if (name && waterClass !== 'ocean') {  // Don't label the ocean
                const isRiver = waterClass === 'river' || waterClass === 'canal';
                const fontSize = isRiver ? 10 : 11;
                const textColor = isRiver ? 'rgba(0, 0, 128, 0.9)' : 'rgba(0, 0, 128, 0.8)';
                
                styles.push(new ol.style.Style({
                    text: createTextStyle({
                        text: name,
                        font: {
                            style: 'italic',
                            size: fontSize,
                            weight: isRiver ? 'normal' : 'bold'
                        },
                        color: textColor,
                        haloColor: 'rgba(255, 255, 255, 0.7)',
                        haloWidth: 2,
                        offsetY: isRiver ? 0 : -10,
                        textBaseline: isRiver ? 'middle' : 'bottom',
                        textAlign: 'center',
                        placement: isRiver ? 'line' : 'point',
                        maxResolution: isRiver ? 5 : 10
                    }, config)
                }));
            }
            
            return styles;
        }
        
        // Landuse (OpenMapTiles schema)
        if (layer === 'landuse') {
            const landuseClass = feature.get('class') || 'residential';
            const name = feature.get('name');
            const styles = [];
            
            // Define landuse colors based on OpenMapTiles classes
            const landuseColors = {
                'residential': 'rgba(240, 238, 235, 0.7)',
                'commercial': 'rgba(240, 235, 240, 0.5)',
                'industrial': 'rgba(230, 230, 220, 0.6)',
                'retail': 'rgba(245, 235, 235, 0.6)',
                'park': 'rgba(210, 250, 210, 0.7)',
                'forest': 'rgba(190, 220, 190, 0.8)',
                'grass': 'rgba(200, 250, 200, 0.6)',
                'cemetery': 'rgba(200, 230, 200, 0.7)',
                'hospital': 'rgba(255, 220, 220, 0.7)',
                'school': 'rgba(235, 235, 250, 0.7)',
                'university': 'rgba(235, 235, 250, 0.7)',
                'military': 'rgba(240, 220, 200, 0.7)',
                'beach': 'rgba(255, 250, 200, 0.7)'
            };
            
            const fillColor = landuseColors[landuseClass] || landuseColors.residential;
            
            // Only show landuse at appropriate zoom levels
            const showLanduse = resolution < (['park', 'forest', 'cemetery'].includes(landuseClass) ? 100 : 50);
            if (!showLanduse) {
                return [];
            }
            
            // Base fill with z-index based on landuse type
            const zIndex = ['park', 'forest', 'cemetery', 'hospital', 'school', 'university'].includes(landuseClass) ? 1 : 0;
            styles.push(new ol.style.Style({
                fill: new ol.style.Fill({
                    color: fillColor
                }),
                zIndex
            }));
            
            // Add stroke for certain landuse types
            if (['park', 'forest', 'cemetery', 'hospital', 'school', 'university'].includes(landuseClass)) {
                styles[0].setStroke(new ol.style.Stroke({
                    color: adjustColor(fillColor, -10),
                    width: 0.5,
                    lineDash: landuseClass === 'cemetery' ? [2, 2] : null
                }));
            }
            
            // Get label for any landuse with name, ref, or address
            const label = getFeatureLabel(feature, '{name}');
            if (label) {
                const isSignificant = ['park', 'forest', 'cemetery', 'hospital', 'school', 'university'].includes(landuseClass);
                const fontSize = isSignificant ? 10 : 9;
                
                // Different text colors based on landuse type
                let textColor = '#333333';
                if (landuseClass === 'park' || landuseClass === 'forest') textColor = '#2d5f2d';
                else if (landuseClass === 'cemetery') textColor = '#666666';
                else if (landuseClass === 'hospital') textColor = '#8b0000';
                else if (landuseClass === 'school' || landuseClass === 'university') textColor = '#000080';
                
                const showLabel = resolution < (isSignificant ? 20 : 10); // Only show labels when zoomed in
                
                if (showLabel) {
                    styles.push(new ol.style.Style({
                        text: createTextStyle({
                            text: label,
                            font: {
                                size: fontSize,
                                weight: isSignificant ? 'bold' : 'normal',
                                style: ['park', 'forest'].includes(landuseClass) ? 'italic' : 'normal'
                            },
                            color: textColor,
                            haloColor: 'rgba(255, 255, 255, 0.7)',
                            haloWidth: 2,
                            textBaseline: 'middle',
                            textAlign: 'center',
                            placement: 'point',
                            maxAngle: 0.7,
                            maxResolution: isSignificant ? 10 : 5,
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
        
        // Buildings (OpenMapTiles schema)
        if (layer === 'building') {
            const height = parseFloat(feature.get('render_height') || feature.get('height') || '0');
            const minHeight = parseFloat(feature.get('min_height') || '0');
            const levels = parseInt(feature.get('building:levels') || 
                                 feature.get('render_height') ? Math.round(parseFloat(feature.get('render_height')) / 3) : '1', 10);
            const buildingType = feature.get('class') || feature.get('building') || 'yes';
            
            // Calculate building color based on height/levels/type
            let buildingColor = '#e0dcd8'; // Default light gray
            
            // Different colors based on building type
            if (buildingType === 'commercial' || buildingType === 'retail') {
                buildingColor = '#e8d8d8'; // Light red
            } else if (buildingType === 'industrial' || buildingType === 'warehouse') {
                buildingColor = '#d8e0e8'; // Light blue
            } else if (buildingType === 'apartments' || buildingType === 'residential') {
                buildingColor = '#e0dcd8'; // Light gray
            } else if (buildingType === 'school' || buildingType === 'university') {
                buildingColor = '#e0d8e8'; // Light purple
            } else if (buildingType === 'hospital' || buildingType === 'clinic') {
                buildingColor = '#f0e0e0'; // Very light red
            }
            
            // Darken based on height
            if (height > 50) {
                buildingColor = adjustColor(buildingColor, -25);
            } else if (height > 20 || levels > 5) {
                buildingColor = adjustColor(buildingColor, -15);
            } else if (height > 0) {
                buildingColor = adjustColor(buildingColor, -5);
            }
            
            // Adjust for 3D effect
            const roofColor = adjustColor(buildingColor, -10);
            
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

        // Transportation (roads, paths, etc.) - OpenMapTiles schema
        if (layer === 'transportation') {
            const roadClass = feature.get('class') || 'minor';
            const roadSubclass = feature.get('subclass') || '';
            const isLink = roadSubclass.endsWith('_link');
            const isTunnel = feature.get('brunnel') === 'tunnel';
            const isBridge = feature.get('brunnel') === 'bridge';
            const layerValue = parseInt(feature.get('layer') || '0', 10);
            
            // Skip rendering tunnels if not enabled in config
            if (isTunnel && !(config.showTunnels === true)) {
                return [];
            }
            
            // Define road styles based on OpenMapTiles classes
            const roadStyles = {
                'motorway': { color: '#4a80f5', width: 3.0, casing: 4.0, zIndex: 10, label: true },
                'trunk': { color: '#a8cef7', width: 2.8, casing: 3.8, zIndex: 9, label: true },
                'primary': { color: '#f7a8a8', width: 2.5, casing: 3.5, zIndex: 8, label: true },
                'secondary': { color: '#f7d0a8', width: 2.2, casing: 3.0, zIndex: 7, label: true },
                'tertiary': { color: '#f7f7a8', width: 2.0, casing: 2.5, zIndex: 6, label: true },
                'minor': { color: '#f7f7f7', width: 1.5, casing: 0, zIndex: 5, label: false },
                'service': { color: '#f0f0f0', width: 1.0, casing: 0, zIndex: 4, label: false },
                'track': { color: '#e0e0a0', width: 1.0, casing: 0, zIndex: 3, label: false, dash: [2, 2] },
                'path': { color: '#d0d0d0', width: 0.8, casing: 0, zIndex: 2, label: false, dash: [3, 3] },
                'pedestrian': { color: '#e0e0e0', width: 0.8, casing: 0, zIndex: 1, label: false, dash: [5, 3] }
            };
            
            // Get the appropriate style for this road
            let roadStyle = roadStyles[roadClass] || roadStyles.minor;
            
            // Adjust for link roads (ramps)
            if (isLink) {
                roadStyle = {
                    ...roadStyle,
                    width: Math.max(1.0, roadStyle.width * 0.8),
                    casing: Math.max(0, (roadStyle.casing || 0) * 0.8)
                };
            }
            
            const styles = [];
            
            // Add road casing (for major roads)
            if (roadStyle.casing > 0) {
                styles.push(new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 0, 0, 0.3)',
                        width: roadStyle.casing,
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: roadStyle.zIndex * 10 + 1
                }));
            }
            
            // Main road fill
            styles.push(new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: isTunnel ? adjustColor(roadStyle.color, 20) : roadStyle.color,
                    width: roadStyle.width,
                    lineCap: 'round',
                    lineJoin: 'round',
                    lineDash: isTunnel ? [2, 2] : (roadStyle.dash || null)
                }),
                zIndex: roadStyle.zIndex * 10 + 2
            }));
            
            // For bridges, add a highlight effect
            if (isBridge) {
                styles.push(new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: adjustColor(roadStyle.color, 20),
                        width: roadStyle.width * 1.2,
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: roadStyle.zIndex * 10 + 3
                }));
            }
            
            // Add road labels for named or numbered roads
            const label = getFeatureLabel(feature, '{name} {ref}');
            if (label && roadStyle.label) {
                const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadClass);
                const fontSize = isMajorRoad ? 10 : 9;
                const textColor = isMajorRoad ? '#ffffff' : '#000000';
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
                        }, config),
                        zIndex: roadStyle.zIndex * 10 + 4
                    }));
                }
            }
            
            return styles;
        }
        
        // Boundaries (OpenMapTiles schema)
        if (layer === 'boundary') {
            const adminLevel = parseInt(feature.get('admin_level') || '0', 10);
            const boundaryType = feature.get('boundary') || '';
            const maritime = feature.get('maritime') === '1' || feature.get('maritime') === 1;
            const disputed = feature.get('disputed') === '1' || feature.get('disputed') === 1 || 
                           feature.get('dispute') === '1' || feature.get('dispute') === 1;
            const styles = [];
            
            // Define boundary style based on type and admin level
            let boundaryStyle = {
                stroke: new ol.style.Stroke({
                    color: maritime ? '#4a80f5' : '#777777',
                    width: 0.8,
                    lineDash: maritime ? [4, 2] : [5, 3]
                }),
                zIndex: 1
            };
            
            // National boundaries (admin_level 2)
            if (adminLevel <= 2) {
                boundaryStyle.stroke.color = maritime ? '#4a80f5' : (disputed ? '#ff0000' : '#000000');
                boundaryStyle.stroke.width = disputed ? 2.0 : 1.5;
                boundaryStyle.stroke.lineDash = maritime ? [4, 2] : (disputed ? [8, 4] : [6, 3]);
                boundaryStyle.zIndex = 3;
            } 
            // State/regional boundaries (admin_level 3-4)
            else if (adminLevel <= 4) {
                boundaryStyle.stroke.color = maritime ? '#4a80f5' : (disputed ? '#ff0000' : '#666666');
                boundaryStyle.stroke.width = disputed ? 1.5 : 1.0;
                boundaryStyle.stroke.lineDash = maritime ? [4, 2] : (disputed ? [6, 3] : [5, 3]);
                boundaryStyle.zIndex = 2;
            }
            // Protected areas and other boundaries
            else if (boundaryType === 'protected_area' || boundaryType === 'national_park') {
                boundaryStyle.stroke.color = '#2d5f2d'; // Dark green
                boundaryStyle.stroke.width = 1.0;
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
