const { createOverlay, imgSrc, ol } = require('./base.js');

const alimentacionOverlays = [
    createOverlay({
        group: 'Alimentación',
        title: 'Supermercados',
        query: '(nwr["shop"="supermarket"]({{bbox}});node(w););out meta;',
        iconSrc: imgSrc + 'icones/maxspeed_empty.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(117,63,79,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(117,63,79,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: imgSrc + 'icones/maxspeed_empty.svg',
                    scale:0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX : 7,
                    offsetY : -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    }),
    // Add more alimentacion overlays here
];

module.exports = {
    alimentacionOverlays
}; 