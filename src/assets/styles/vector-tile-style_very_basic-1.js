// Vector Tile Style Configuration
window.vectorTileStyle = function(feature) {
    var style = new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(240, 240, 240, 0.8)'
        }),
        stroke: new ol.style.Stroke({
            color: '#999999',
            width: 1
        })
    });

    // Simple styling based on layer type
    var layer = feature.get('layer');
    if (layer === 'water') {
        style.getFill().setColor('rgba(170, 210, 255, 0.7)');
    } else if (layer === 'landuse') {
        style.getFill().setColor('rgba(200, 250, 200, 0.5)');
    } else if (layer === 'building') {
        style.getFill().setColor('rgba(220, 220, 220, 0.7)');
    } else if (layer === 'road') {
        style.getStroke().setColor('#666666');
        style.getStroke().setWidth(1);
    }
    return [style];
};
