/**
 * Alimentación overlays configuration
 */

const alimentacionOverlays = [
    {
        group: 'Alimentación',
        title: 'Supermercados',
        query: '(nwr["shop"="supermarket"]({{bbox}});node(w););out meta;',
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
    },
    {
        group: 'Alimentación',
        title: 'Aliprox',
        query: '(nwr["name"="Aliprox"]({{bbox}});node(w););out meta;',
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
    },
    // Add more overlays from the Alimentación group
];

export default alimentacionOverlays;
