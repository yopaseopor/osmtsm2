/**
 * Deportes overlays configuration
 */

const deportesOverlays = [
    {
        group: 'Deportes',
        title: 'Alimentación deportiva',
        query: '(nwr["shop"="health_food"]({{bbox}});node(w););out meta;',
        iconSrc: 'src/img/icones/maxspeed_empty.svg',
        style: function(feature) {
            return [
                new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'src/img/icones/maxspeed_empty.svg',
                        scale: 0.5
                    })
                })
            ];
        }
    }
];

export default deportesOverlays;
