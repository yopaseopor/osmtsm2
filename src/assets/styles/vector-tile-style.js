/**
 * Enhanced vector tile style function with labels and icons
 */

console.log('Vector tile style script loaded');

// Style function with labels and icons
function vectorTileStyle(feature, resolution) {
    try {
        const layer = feature.get('layer') || 'unknown';
        const type = feature.getGeometry().getType();
        const zoom = this.getMap().getView().getZoom();
        const styles = [];
        
        // Base styles for different feature types
        switch(layer) {
            case 'water':
                styles.push(new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(170, 210, 255, 0.5)'
                    })
                }));
                
                // Add water labels
                const waterName = feature.get('name');
                if (waterName && zoom > 10) {
                    styles.push(new ol.style.Style({
                        text: new ol.style.Text({
                            text: waterName,
                            font: 'italic 11px Arial, sans-serif',
                            fill: new ol.style.Fill({
                                color: 'rgba(0, 0, 128, 0.8)'
                            }),
                            stroke: new ol.style.Stroke({
                                color: 'rgba(255, 255, 255, 0.7)',
                                width: 2
                            }),
                            offsetY: -10,
                            textBaseline: 'bottom',
                            textAlign: 'center',
                            overflow: true
                        })
                    }));
                }
                break;
                
            case 'transportation':
            case 'road':
            case 'highway':
                const highway = feature.get('class') || 'road';
                let width = 1;
                let color = '#ffffff';
                
                // Different styles for different road types
                switch(highway) {
                    case 'motorway':
                        width = Math.min(6, 1 + (zoom - 5) * 0.5);
                        color = '#ff6b6b';
                        break;
                    case 'trunk':
                        width = Math.min(5, 0.8 + (zoom - 7) * 0.4);
                        color = '#ff9e7d';
                        break;
                    case 'primary':
                        width = Math.min(4, 0.6 + (zoom - 9) * 0.3);
                        color = '#ffd166';
                        break;
                    default:
                        width = Math.min(3, 0.4 + (zoom - 11) * 0.2);
                        color = '#ffffff';
                }
                
                styles.push(new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: color,
                        width: width,
                        lineCap: 'round',
                        lineJoin: 'round'
                    }),
                    zIndex: 1
                }));
                
                // Add road labels
                const roadName = feature.get('name');
                if (roadName && zoom > 12) {
                    styles.push(new ol.style.Style({
                        text: new ol.style.Text({
                            text: roadName,
                            fill: new ol.style.Fill({ color: '#333' }),
                            stroke: new ol.style.Stroke({
                                color: 'rgba(255,255,255,0.8)',
                                width: 3
                            }),
                            font: 'bold 12px Arial, sans-serif',
                            offsetY: -10,
                            overflow: true
                        })
                    }));
                }
                break;
                
            case 'building':
                if (zoom >= 15) {
                    styles.push(new ol.style.Style({
                        fill: new ol.style.Fill({
                            color: 'rgba(200, 200, 200, 0.7)'
                        }),
                        stroke: new ol.style.Stroke({
                            color: 'rgba(100, 100, 100, 0.8)',
                            width: 0.5
                        })
                    }));
                }
                break;
                
            case 'landuse':
                styles.push(new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(200, 250, 200, 0.5)'
                    })
                }));
                
                // Add landuse labels
                const landuseName = feature.get('name');
                if (landuseName && zoom > 12) {
                    styles.push(new ol.style.Style({
                        text: new ol.style.Text({
                            text: landuseName,
                            font: 'italic 11px Arial, sans-serif',
                            fill: new ol.style.Fill({
                                color: 'rgba(0, 100, 0, 0.8)'
                            }),
                            stroke: new ol.style.Stroke({
                                color: 'rgba(255, 255, 255, 0.7)',
                                width: 2
                            })
                        })
                    }));
                }
                break;
                
            case 'place':
                // Add place labels (cities, towns, etc.)
                const place = feature.get('class');
                const placeName = feature.get('name');
                let fontSize = 0;
                
                if (placeName) {
                    switch(place) {
                        case 'city':
                            fontSize = Math.min(16, 10 + zoom * 0.5);
                            break;
                        case 'town':
                            fontSize = Math.min(14, 8 + zoom * 0.4);
                            break;
                        default:
                            fontSize = Math.min(12, 6 + zoom * 0.3);
                    }
                    
                    styles.push(new ol.style.Style({
                        text: new ol.style.Text({
                            text: placeName,
                            font: `bold ${fontSize}px Arial, sans-serif`,
                            fill: new ol.style.Fill({ color: '#333' }),
                            stroke: new ol.style.Stroke({
                                color: 'rgba(255,255,255,0.8)',
                                width: 3
                            }),
                            offsetY: fontSize / 4,
                            overflow: true
                        })
                    }));
                }
                break;
                
            case 'poi':
                // Add POI icons and labels
                const poiName = feature.get('name');
                const poiType = feature.get('class');
                
                if (poiName && zoom > 14) {
                    styles.push(new ol.style.Style({
                        text: new ol.style.Text({
                            text: poiName,
                            font: '11px Arial, sans-serif',
                            fill: new ol.style.Fill({ color: '#333' }),
                            offsetY: 10,
                            overflow: true
                        })
                    }));
                }
                break;
        }
        
        return styles.length > 0 ? styles : undefined;
    } catch (error) {
        console.error('Error in vector tile style function:', error);
        return undefined;
    }
}

// Export the vector tile style function
if (typeof window !== 'undefined') {
    window.vectorTileStyle = vectorTileStyle;
    console.log('Vector tile style function exported');
} else {
    console.error('Window object not available for vectorTileStyle export');
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
            if (label && shouldShowFeature('landuse', zoom, labelTileKey)) {
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
            if (label && shouldShowFeature('building', zoom, labelTileKey)) {
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
            const roadLabel = getFeatureLabel(feature, '{name} {ref}');
            if (roadLabel && shouldShowFeature('transportation', zoom, labelTileKey)) {
                const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadType);
                const fontSize = isMajorRoad ? 10 : 9;
                const textColor = isMajorRoad ? '#ffffff' : roadStyle.textColor || '#000000';
                const haloColor = isMajorRoad ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)';
                
                // Only show labels at appropriate zoom levels
                const showLabel = resolution < (isMajorRoad ? 20 : 10);
                
                if (showLabel) {
                    styles.push(new ol.style.Style({
                        text: createTextStyle({
                            text: roadLabel,
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
                if (name && (adminLevel <= 4 || boundaryType === 'protected_area') && 
                    shouldShowFeature('boundary', zoom, labelTileKey)) {
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
    }

    // Default style (fallback) - with label if available
    styles.push(new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(200, 200, 200, 0.3)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(100, 100, 100, 0.5)',
            width: 0.5
        })
    }));

    // Add label for any feature with a name or ref if we haven't hit the limit
    const label = getFeatureLabel(feature);
    if (label && shouldShowFeature('default', zoom, labelTileKey)) {
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

// Export the vector tile style function
if (typeof window !== 'undefined') {
    // Only set window.vectorTileStyle if window is defined (browser environment)
    window.vectorTileStyle = function(feature, resolution) {
        try {
            return vectorTileStyle(feature, resolution);
        } catch (error) {
            console.error('Error in vectorTileStyle:', error);
            return []; // Return empty styles array on error to prevent breaking the map
        }
    };
    
    console.log('Vector tile style function initialized');
}

// Debug log to verify the function is properly exported
console.log('Vector tile style function loaded and exported:', typeof window.vectorTileStyle === 'function');
console.log('Vector tile config:', window.vectorTileConfig);

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
