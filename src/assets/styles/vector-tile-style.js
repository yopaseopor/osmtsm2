/**
 * Vector Tile Style Configuration
 * Combines styles from style.json and maptiler-style.json
 */
window.vectorTileStyle = function(feature, resolution) {
    var zoom = map ? map.getView().getZoom() : 0;
    var type = feature.getGeometry().getType();
    var layer = feature.get('layer');
    var cls = feature.get('class');
    var styles = [];

    // Helper function to create a basic style
    function createStyle(options) {
        var style = new ol.style.Style({
            fill: options.fill ? new ol.style.Fill({
                color: options.fill.color || 'rgba(0, 0, 0, 0)'
            }) : null,
            stroke: options.stroke ? new ol.style.Stroke({
                color: options.stroke.color || '#000000',
                width: options.stroke.width || 1,
                lineDash: options.stroke.dashArray
            }) : null,
            text: options.text ? new ol.style.Text({
                text: options.text.label,
                font: options.text.font || '12px Arial',
                fill: new ol.style.Fill({
                    color: options.text.color || '#000000'
                }),
                stroke: options.text.stroke ? new ol.style.Stroke({
                    color: options.text.stroke.color || '#ffffff',
                    width: options.text.stroke.width || 2
                }) : null,
                offsetX: options.text.offsetX || 0,
                offsetY: options.text.offsetY || 0,
                rotation: options.text.rotation || 0
            }) : null
        });
        return style;
    }

    // Water
    if (layer === 'water') {
        styles.push(createStyle({
            fill: {
                color: 'hsl(205, 56%, 73%)' // Light blue from style.json
            }
        }));
    }
    
    // Landuse
    else if (layer === 'landuse') {
        if (cls === 'residential' || cls === 'suburb' || cls === 'neighbourhood') {
            styles.push(createStyle({
                fill: {
                    color: 'hsl(47, 13%, 86%)', // Light beige from style.json
                    opacity: 0.7
                }
            }));
        } else if (cls === 'grass' || cls === 'park' || cls === 'forest' || cls === 'cemetery') {
            styles.push(createStyle({
                fill: {
                    color: 'hsl(82, 46%, 72%)', // Light green from maptiler-style.json
                    opacity: 0.45
                }
            }));
        }
    }

    
    // Buildings
    else if (layer === 'building') {
        styles.push(createStyle({
            fill: {
                color: 'hsl(0, 0%, 83%)', // Light gray from maptiler-style.json
                opacity: 0.7
            },
            stroke: {
                color: 'hsl(0, 0%, 70%)',
                width: 0.5
            }
        }));
    }
    
    // Roads
    else if (layer === 'transportation') {
        var roadStyle = {
            stroke: {
                color: '#666666',
                width: 1
            }
        };
        
        // Different road types
        if (cls === 'motorway' || cls === 'trunk') {
            roadStyle.stroke.width = 2;
            roadStyle.stroke.color = '#4a4a4a';
        } else if (cls === 'primary') {
            roadStyle.stroke.width = 1.5;
            roadStyle.stroke.color = '#5a5a5a';
        } else if (cls === 'secondary') {
            roadStyle.stroke.width = 1.25;
            roadStyle.stroke.color = '#6a6a6a';
        }
        
        styles.push(createStyle(roadStyle));
    }
    
    // Default style for any unhandled features
    if (styles.length === 0) {
        styles.push(createStyle({
            fill: {
                color: 'rgba(240, 240, 240, 0.5)'
            },
            stroke: {
                color: '#999999',
                width: 0.5
            }
        }));
    }
    
    return styles;
};
