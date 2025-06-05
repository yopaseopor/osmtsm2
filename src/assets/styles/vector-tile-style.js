// Vector Tile Style Configuration
// Inspired by OpenStreetMap Americana styling patterns
window.vectorTileStyle = function(feature, resolution) {
    // Get zoom level from the map if available
    var zoom = map ? map.getView().getZoom() : 0;
    
    // Get feature properties with fallbacks
    var layer = feature.get('layer') || '';
    var cls = feature.get('class') || '';
    var type = feature.getGeometry().getType();
    var brunnel = feature.get('brunnel') || '';
    var isToll = feature.get('toll') === 1;
    
    // Base style with defaults
    var style = new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(240, 240, 240, 0.3)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(100, 100, 100, 0.5)',
            width: 0.5
        })
    });

    try {
        // Water features
        if (layer === 'water') {
            const isIntermittent = feature.get('intermittent') === 1;
            style.getFill().setColor(isIntermittent ? 'rgba(170, 210, 255, 0.5)' : 'rgba(170, 210, 255, 0.7)');
            
            // Add water line for larger water bodies
            if (['river', 'lake', 'ocean'].includes(cls) && zoom >= 8) {
                return [
                    style,
                    new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'rgba(100, 150, 255, 0.8)',
                            width: zoom >= 12 ? 1.5 : 0.75,
                            lineDash: isIntermittent ? [4, 2] : undefined
                        })
                    })
                ];
            }
        } 
        // Landuse features
        else if (layer === 'landuse') {
            if (['residential', 'suburb', 'neighbourhood'].includes(cls)) {
                style.getFill().setColor('rgba(240, 235, 220, 0.7)');
            } else if (['grass', 'park', 'garden', 'village_green'].includes(cls)) {
                style.getFill().setColor('rgba(210, 250, 210, 0.6)');
            } else if (['forest', 'wood', 'nature_reserve'].includes(cls)) {
                style.getFill().setColor('rgba(180, 220, 180, 0.6)');
            } else if (['industrial', 'commercial', 'retail'].includes(cls)) {
                style.getFill().setColor('rgba(230, 220, 220, 0.6)');
            } else if (['cemetery', 'grave_yard'].includes(cls)) {
                style.getFill().setColor('rgba(200, 210, 200, 0.7)');
            }
        }
        // Buildings
        else if (layer === 'building') {
            const height = feature.get('height') || 3;
            const color = zoom >= 16 ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 87%)';
            
            return [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: color
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(180, 180, 180, 0.8)',
                    width: 0.5
                })
            })];
        }
        // Transportation (roads, paths, etc.)
        else if (layer === 'transportation') {
            const isTunnel = brunnel === 'tunnel';
            const isBridge = brunnel === 'bridge';
            const isLink = feature.get('ramp') === 1;
            
            // Base road style
            let color, width, dashArray;
            
            // Determine style based on road class
            if (['motorway', 'trunk'].includes(cls)) {
                color = isToll ? 'hsl(48, 80%, 50%)' : 'hsl(0, 0%, 30%)';
                width = isLink ? 1.5 : 2.5;
            } else if (cls === 'primary') {
                color = isToll ? 'hsl(48, 80%, 50%)' : 'hsl(0, 0%, 40%)';
                width = isLink ? 1.25 : 2;
            } else if (cls === 'secondary') {
                color = 'hsl(0, 0%, 50%)';
                width = isLink ? 1 : 1.5;
            } else if (cls === 'tertiary') {
                color = 'hsl(0, 0%, 60%)';
                width = 1.25;
            } else if (['service', 'residential'].includes(cls)) {
                color = 'hsl(0, 0%, 70%)';
                width = 1;
            } else {
                color = 'hsl(0, 0%, 80%)';
                width = 0.75;
            }
            
            // Adjust for tunnels
            if (isTunnel) {
                dashArray = [2, 2];
                color = color.replace(')', ', 0.5)').replace('hsl', 'hsla');
            }
            
            // Create the style
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: color,
                    width: width,
                    lineDash: dashArray,
                    lineCap: 'round',
                    lineJoin: 'round'
                })
            })];
        }
        // Boundaries
        else if (layer === 'boundary') {
            const adminLevel = feature.get('admin_level');
            if (adminLevel) {
                const level = parseInt(adminLevel);
                if (level <= 2) {
                    return [new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'rgba(180, 50, 50, 0.8)',
                            width: 1.5,
                            lineDash: [4, 2]
                        })
                    })];
                } else if (level <= 4) {
                    return [new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: 'rgba(200, 100, 100, 0.6)',
                            width: 1,
                            lineDash: [3, 3]
                        })
                    })];
                }
            }
        }
    } catch (error) {
        console.error('Error styling feature:', error);
        // Fallback style for errors
        return [new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 0, 0, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#ff0000',
                width: 1
            })
        })];
    }
    
    // Return default style if no specific style was applied
    return [style];
};
