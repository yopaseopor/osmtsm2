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
        
        // Road colors and widths based on OpenMapTiles schema
        // All widths are doubled for better visibility
        highway: {
            // Main road types
            motorway: { color: '#4a6bb5', width: 6.0, textColor: '#ffffff', casingWidth: 1.25, casingColor: 'rgba(0, 0, 0, 0.2)' },
            trunk: { color: '#5d8c47', width: 5.6, textColor: '#ffffff', casingWidth: 1.2, casingColor: 'rgba(0, 0, 0, 0.2)' },
            primary: { color: '#8d6b4a', width: 5.0, textColor: '#ffffff', casingWidth: 1.15, casingColor: 'rgba(0, 0, 0, 0.2)' },
            secondary: { color: '#a5927c', width: 4.0, textColor: '#000000', casingWidth: 1.1, casingColor: 'rgba(0, 0, 0, 0.15)' },
            tertiary: { color: '#c0b4a5', width: 3.6, textColor: '#000000', casingWidth: 1.05, casingColor: 'rgba(0, 0, 0, 0.1)' },
            
            // Other road types
            minor: { color: '#e0dcd6', width: 3.0, textColor: '#333333' },
            service: { color: '#e0dcd6', width: 2.0, textColor: '#666666' },
            track: { color: '#8b4513', width: 1.5, textColor: '#8b4513', dash: [4, 2] },
            path: { color: '#d4d0c9', width: 1.2, textColor: '#666666' },
            
            // Path types
            footway: { color: '#d4d0c9', width: 1.0, textColor: '#666666', dash: [2, 2] },
            cycleway: { color: '#4b8bff', width: 1.2, textColor: '#4b8bff' },
            bridleway: { color: '#8b4513', width: 1.0, textColor: '#8b4513', dash: [4, 4] },
            steps: { color: '#999999', width: 0.8, textColor: '#666666', dash: [1, 1] },
            
            // Special types
            raceway: { color: '#ff0000', width: 2.0, textColor: '#ff0000' },
            bus_guideway: { color: '#800080', width: 1.5, textColor: '#800080' },
            
            // Construction types
            motorway_construction: { color: '#4a6bb5', width: 6.0, textColor: '#4a6bb5', dash: [8, 4] },
            trunk_construction: { color: '#5d8c47', width: 5.6, textColor: '#5d8c47', dash: [8, 4] },
            primary_construction: { color: '#8d6b4a', width: 5.0, textColor: '#8d6b4a', dash: [8, 4] },
            secondary_construction: { color: '#a5927c', width: 4.0, textColor: '#a5927c', dash: [8, 4] },
            tertiary_construction: { color: '#c0b4a5', width: 3.6, textColor: '#c0b4a5', dash: [8, 4] },
            minor_construction: { color: '#e0dcd6', width: 3.0, textColor: '#e0dcd6', dash: [8, 4] },
            service_construction: { color: '#e0dcd6', width: 2.0, textColor: '#e0dcd6', dash: [8, 4] },
            track_construction: { color: '#8b4513', width: 1.5, textColor: '#8b4513', dash: [8, 4] },
            path_construction: { color: '#d4d0c9', width: 1.2, textColor: '#d4d0c9', dash: [8, 4] },
            raceway_construction: { color: '#ff0000', width: 2.0, textColor: '#ff0000', dash: [8, 4] },
            
            // Railway
            rail: { color: '#666666', width: 1.5, textColor: '#666666', dash: [5, 5] },
            narrow_gauge: { color: '#8b4513', width: 1.0, textColor: '#8b4513', dash: [5, 5] },
            light_rail: { color: '#666666', width: 1.0, textColor: '#666666', dash: [3, 3] },
            subway: { color: '#666666', width: 1.2, textColor: '#666666', dash: [4, 4] },
            tram: { color: '#006400', width: 1.0, textColor: '#006400', dash: [3, 3] }
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

        // Transportation Name Layer (road labels)
        if (layer === 'transportation_name') {
            try {
                // Get the road class from the feature
                const cls = feature.get('class') || '';
                const name = feature.get('name');
                const ref = feature.get('ref');
                
                // Skip if no name or ref
                if (!name && !ref) {
                    return [];
                }
                
                // Choose between name and ref based on road class
                let text = '';
                if (ref && ['motorway', 'trunk', 'primary', 'secondary'].includes(cls)) {
                    text = ref;
                } else if (name) {
                    text = name;
                } else {
                    return [];
                }
                
                // Simple style for now - we can enhance this later
                return [new ol.style.Style({
                    text: new ol.style.Text({
                        text: text,
                        font: ['motorway', 'trunk'].includes(cls) ? 'bold 12px Arial' : '11px Arial',
                        fill: new ol.style.Fill({
                            color: '#000'
                        }),
                        stroke: new ol.style.Stroke({
                            color: '#fff',
                            width: 3
                        }),
                        offsetY: 0,
                        textAlign: 'center',
                        textBaseline: 'middle',
                        overflow: true,
                        placement: 'line',
                        maxAngle: 0.5
                    })
                })];
            } catch (e) {
                console.error('Error in transportation_name style:', e);
                return [];
            }
        }
        
        // Transportation (roads, paths, etc.)
        if (layer === 'transportation') {
            const roadClass = cls || 'tertiary';
            const roadSubclass = feature.get('subclass');
            const brunnel = feature.get('brunnel');
            const isBridge = brunnel === 'bridge';
            const isTunnel = brunnel === 'tunnel';
            const isFord = brunnel === 'ford';
            const isRamp = roadSubclass === 'ramp';
            
            // Skip rendering tunnels for now
            if (isTunnel) {
                return [];
            }
            
            // Handle different road classes based on OpenMapTiles schema
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
                        width: trackStyle.width * (1 + (trackType * 0.2)), // Scale width based on tracktype
                        lineDash: trackStyle.dash,
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: 1
                }];
            }
            
            const name = feature.get('name');
            const ref = feature.get('ref');
            
            // Skip rendering tunnels (already handled at the start)
            
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
            const lineDash = roadStyle.dash || (roadType === 'living_street' ? [4, 2] : undefined);
            
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
        
    } catch (error) {
        console.error('Error styling feature:', error, feature);
        // POI (Point of Interest) styling
        const poiType = feature.get('amenity') || feature.get('shop') || 
                       feature.get('tourism') || feature.get('office') || 
                       feature.get('building') ? 'poi' : null;
        
        if (poiType) {
            const poiColor = '#666666';
            
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
