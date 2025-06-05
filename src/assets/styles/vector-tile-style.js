// Vector Tile Style Configuration
window.vectorTileStyle = function(feature, resolution) {
    console.log('Styling feature:', feature);
    
    // Default style
    var style = new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(200, 200, 200, 0.3)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(100, 100, 100, 0.5)',
            width: 0.5
        })
    });

    try {
        // Get feature properties
        var layer = feature.get('layer') || 'unknown';
        var cls = feature.get('class') || '';
        var type = feature.getGeometry().getType();
        
        console.log('Feature layer:', layer, 'class:', cls, 'type:', type);
        
        // Water
        if (layer === 'water') {
            style.getFill().setColor('rgba(170, 210, 255, 0.7)');
        } 
        // Landuse
        else if (layer === 'landuse') {
            if (['residential', 'suburb', 'neighbourhood'].includes(cls)) {
                style.getFill().setColor('rgba(240, 235, 220, 0.7)');
            } else if (['grass', 'park', 'forest', 'cemetery'].includes(cls)) {
                style.getFill().setColor('rgba(200, 250, 200, 0.5)');
            } else {
                style.getFill().setColor('rgba(240, 240, 240, 0.3)');
            }
        }
        // Buildings
        else if (layer === 'building') {
            style.getFill().setColor('rgba(220, 220, 220, 0.7)');
            style.getStroke().setColor('rgba(200, 200, 200, 0.8)');
            style.getStroke().setWidth(0.5);
        }
        // Roads
        else if (layer === 'transportation') {
            style = new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#666666',
                    width: 1
                })
            });
            
            // Style different road types
            if (['motorway', 'trunk'].includes(cls)) {
                style.getStroke().setColor('#4a4a4a');
                style.getStroke().setWidth(2);
            } else if (cls === 'primary') {
                style.getStroke().setColor('#5a5a5a');
                style.getStroke().setWidth(1.5);
            } else if (cls === 'secondary') {
                style.getStroke().setColor('#6a6a6a');
                style.getStroke().setWidth(1.25);
            }
        }
    } catch (error) {
        console.error('Error styling feature:', error);
        // Fallback style if there's an error
        style = new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 0, 0, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#ff0000',
                width: 1
            })
        });
    }
    
    return [style];
};
