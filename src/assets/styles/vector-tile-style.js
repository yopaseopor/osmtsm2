/**
 * Gets the best label text for a feature
 * @param {ol/Feature} feature - The feature to get label for
 * @returns {string|null} The best available label text or null if none found
 */
function getFeatureLabel(feature) {
    // Try to get name, ref, or house number
    const name = feature.get('name');
    const ref = feature.get('ref');
    const houseNumber = feature.get('addr:housenumber');
    
    // For POIs, include their type (shop, amenity, etc.)
    const shop = feature.get('shop');
    const amenity = feature.get('amenity');
    const tourism = feature.get('tourism');
    const office = feature.get('office');
    const building = feature.get('building');
    
    // Build label parts
    const parts = [];
    
    // Add ref if available
    if (ref) parts.push(ref);
    
    // Add name if available
    if (name) parts.push(name);
    
    // If no name or ref, try to use POI type
    if (parts.length === 0) {
        if (shop) parts.push(shop);
        else if (amenity) parts.push(amenity);
        else if (tourism) parts.push(tourism);
        else if (office) parts.push(office);
        else if (building) parts.push(building);
    }
    
    // Add house number if available
    if (houseNumber) parts.push(`#${houseNumber}`);
    
    return parts.length > 0 ? parts.join(' ') : null;
}

/**
 * Vector Tile Style Configuration
 * Inspired by OpenStreetMap Americana style patterns
 */
window.vectorTileStyle = function(feature, resolution) {
    // Debug logging (uncomment if needed)
    // console.log('Styling feature:', feature);
    
    // Common colors
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
                styles.push(new ol.style.Style({
                    text: new ol.style.Text({
                        text: name,
                        font: 'italic 11px Arial',
                        fill: new ol.style.Fill({
                            color: 'rgba(0, 0, 128, 0.8)'
                        }),
                        stroke: new ol.style.Stroke({
                            color: 'rgba(255, 255, 255, 0.7)',
                            width: 2
                        }),
                        offsetY: -10
                    })
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
                const fontSize = cls === 'park' || cls === 'forest' || cls === 'cemetery' ? 10 : 9;
                const textColor = cls === 'cemetery' ? '#666666' : 
                                 cls === 'park' || cls === 'forest' ? '#2d5f2d' : '#333333';
                
                styles.push(new ol.style.Style({
                    text: new ol.style.Text({
                        text: label,
                        font: `${fontSize}px Arial`,
                        fill: new ol.style.Fill({ color: textColor }),
                        stroke: new ol.style.Stroke({
                            color: 'rgba(255, 255, 255, 0.7)',
                            width: 2
                        }),
                        overflow: true,
                        textBaseline: 'middle',
                        textAlign: 'center',
                        placement: 'point',
                        maxAngle: 0.7
                    })
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
            const label = getFeatureLabel(feature);
            if (label) {
                const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadType);
                const fontSize = isMajorRoad ? 10 : 9;
                const textColor = isMajorRoad ? '#ffffff' : roadStyle.textColor || '#000000';
                const strokeColor = isMajorRoad ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)';
                
                // Only show labels at appropriate zoom levels
                const showLabel = resolution < (isMajorRoad ? 20 : 10);
                
                if (showLabel) {
                    styles.push(new ol.style.Style({
                        text: new ol.style.Text({
                            text: label,
                            font: isMajorRoad ? `bold ${fontSize}px Arial` : `${fontSize}px Arial`,
                            fill: new ol.style.Fill({
                                color: textColor
                            }),
                            stroke: new ol.style.Stroke({
                                color: strokeColor,
                                width: isMajorRoad ? 3 : 2
                            }),
                            offsetY: 0,
                            rotation: 0,
                            textAlign: 'center',
                            textBaseline: 'alphabetic',
                            overflow: true,
                            placement: 'line',
                            maxAngle: 0.5,
                            textOverflow: 'ellipsis',
                            maxResolution: isMajorRoad ? 10 : 5,
                            backgroundFill: isMajorRoad ? new ol.style.Fill({
                                color: 'rgba(0, 0, 0, 0.3)'
                            }) : null,
                            backgroundStroke: isMajorRoad ? new ol.style.Stroke({
                                color: 'rgba(0, 0, 0, 0.2)',
                                width: 1
                            }) : null,
                            padding: isMajorRoad ? [2, 4, 2, 4] : [1, 2, 1, 2]
                        }),
                        zIndex: 30 // Ensure road labels are above other features
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
            
            const styles = [
                new ol.style.Style({
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
                })
            ];
            
            // Add label for POI
            const label = getFeatureLabel(feature);
            if (label) {
                styles.push(new ol.style.Style({
                    text: new ol.style.Text({
                        text: label,
                        font: '10px Arial',
                        fill: new ol.style.Fill({
                            color: '#000'
                        }),
                        stroke: new ol.style.Stroke({
                            color: '#fff',
                            width: 2
                        }),
                        offsetY: 12,
                        overflow: true
                    })
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
                width: 1
            })
        })];
        
        // Add label for any feature with a name or ref
        const label = getFeatureLabel(feature);
        if (label) {
            styles.push(new ol.style.Style({
                text: new ol.style.Text({
                    text: label,
                    font: '9px Arial',
                    fill: new ol.style.Fill({
                        color: '#333'
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.7)',
                        width: 2
                    }),
                    offsetY: 10,
                    overflow: true
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
            width: 0.5
        })
    })];
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
