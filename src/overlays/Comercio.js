const Comercio = [
    {
        group: 'Comercio',
        title: 'Mayoristas',
        query: '(nwr["shop"="wholesale"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/icones/maxspeed_empty.svg',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function (t) { return t.match(key_regex); }).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            return new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/icones/maxspeed_empty.svg',
                    scale: 0.03
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX: 7,
                    offsetY: -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    })
                }),
                fill: fill,
                stroke: stroke
            });
        }
    },
    // Add other overlays in the "Comercio" group
];

export default Comercio;