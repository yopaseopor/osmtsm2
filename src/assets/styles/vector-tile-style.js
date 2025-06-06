// Debug function to log feature properties
function logFeature(feature) {
    console.log('Feature layer:', feature.get('layer'));
    console.log('Feature class:', feature.get('class'));
    console.log('Feature properties:', Object.entries(feature.getProperties())
        .filter(([key]) => !['geometry', 'layer', 'class'].includes(key)));
}

/**
 * Vector Tile Style Configuration
 * Minimal style to ensure labels are visible
 */
window.vectorTileStyle = function(feature, resolution) {
    // Debug: Uncomment to see feature properties in console
    // logFeature(feature);
    
    const styles = [];
    const layer = feature.get('layer');
    const name = feature.get('name') || feature.get('ref');
    
    // Add a simple style for the feature
    styles.push(new ol.style.Style({
        // Basic style for the feature
        fill: new ol.style.Fill({
            color: 'rgba(200, 200, 200, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(100, 100, 100, 0.5)',
            width: 1
        })
    }));
    
    // Add label if feature has a name or ref
    if (name) {
        const textStyle = new ol.style.Text({
            text: name,
            font: 'bold 14px Arial, sans-serif',
            fill: new ol.style.Fill({
                color: '#000000'
            }),
            stroke: new ol.style.Stroke({
                color: '#ffffff',
                width: 3
            }),
            offsetY: 0,
            overflow: true,
            placement: 'point',
            textAlign: 'left',
            textBaseline: 'bottom',
            padding: [2, 5],
            backgroundFill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.7)'
            })
        });
        
        styles.push(new ol.style.Style({
            text: textStyle,
            geometry: function(feature) {
                // For polygons, get the center point for the label
                const geom = feature.getGeometry();
                if (geom.getType() === 'Polygon' || geom.getType() === 'MultiPolygon') {
                    return new ol.geom.Point(ol.extent.getCenter(geom.getExtent()));
                }
                return null;
            }
        }));
    }
    
    return styles;
};

// Keep the original style function reference for future use
window.vectorTileStyleAdvanced = function(feature, resolution) {
    // Original style implementation will go here
    const colors = {
        // Text colors with better contrast
        text: {
            light: '#ffffff',
            dark: '#000000',  // Darker for better contrast
            road: '#000000',
            water: '#4a80b5',
            poi: '#000000',
            landuse: '#2d5f2d',
            boundary: '#000000'  // Darker for better contrast
        },
        // Text halo/outline for better readability
        textHalo: {
            light: 'rgba(255, 255, 255, 0.9)',  // Brighter white halo
            dark: 'rgba(0, 0, 0, 0.8)'  // Darker black halo
        },
        // Background for text labels
        textBackground: {
            light: 'rgba(255, 255, 255, 0.7)',
            dark: 'rgba(0, 0, 0, 0.5)'
        },
        // POI colors
        poi: {
            amenity: '#3498db',
            shop: '#9b59b6',
            tourism: '#e74c3c',
            office: '#2ecc71',
            building: '#e67e22',
            default: '#7f8c8d',
            // Brighter variants for better visibility
            bright: {
                amenity: '#42a5f5',
                shop: '#ab47bc',
                tourism: '#ef5350',
                office: '#66bb6a',
                building: '#ff9800',
                default: '#90a4ae'
            }
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
            if (label && resolution < 20) { // Only show labels at reasonable zoom levels
                const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadType);
                const fontSize = isMajorRoad ? 12 : 10;
                
                // Create a simple text style that will definitely be visible
                const textStyle = new ol.style.Text({
                    text: label,
                    font: `${isMajorRoad ? 'bold ' : ''}${fontSize}px Arial, sans-serif`,
                    fill: new ol.style.Fill({
                        color: isMajorRoad ? '#ffffff' : '#000000'
                    }),
                    stroke: new ol.style.Stroke({
                        color: isMajorRoad ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                        width: isMajorRoad ? 3 : 2
                    }),
                    offsetY: 0,
                    overflow: true,
                    placement: 'line',
                    maxAngle: 0.5,
                    textOverflow: 'ellipsis',
                    padding: [2, 4],
                    backgroundFill: new ol.style.Fill({
                        color: isMajorRoad ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.7)'
                    }),
                    backgroundStroke: new ol.style.Stroke({
                        color: isMajorRoad ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                        width: 0.5
                    })
                });
                
                styles.push(new ol.style.Style({
                    text: textStyle,
                    zIndex: 50
                }));
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
                const isMajorPOI = ['university', 'hospital', 'stadium', 'zoo', 'attraction'].includes(feature.get('amenity') || feature.get('tourism') || '');
                const labelFont = isMajorPOI ? 'bold 11px Arial' : '10px Arial';
                const textColor = colors.text.light; // White text for better contrast
                const haloColor = colors.textHalo.dark;
                
                styles.push(new ol.style.Style({
                    text: new ol.style.Text({
                        text: label,
                        font: labelFont,
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
