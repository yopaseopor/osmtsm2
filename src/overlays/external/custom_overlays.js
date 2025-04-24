import { getTranslation } from '../../i18n/index.js';

const imgSrc = 'src/img/';

export const customOverlays = [
    {
        group: 'custom',
        title: () => getTranslation('bike_parking'),
        query: `
            [out:json][timeout:25];
            (
              node["amenity"="bicycle_parking"]({{bbox}});
              way["amenity"="bicycle_parking"]({{bbox}});
              relation["amenity"="bicycle_parking"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/bicycle_parking.svg',
        style: (feature) => ({
            color: '#01FF70',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'custom',
        title: () => getTranslation('drinking_water'),
        query: `
            [out:json][timeout:25];
            (
              node["amenity"="drinking_water"]({{bbox}});
              way["amenity"="drinking_water"]({{bbox}});
              relation["amenity"="drinking_water"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/drinking_water.svg',
        style: (feature) => ({
            color: '#7FDBFF',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'Comercio',
        title: 'Supermercados',
        query: '(nwr["shop"="supermarket"]({{bbox}});node(w););out meta;',
        iconSrc: imgSrc + 'icones/supermarket.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const name = feature.get('name') || '';
            const fill = new ol.style.Fill({
                color: 'rgba(0,255,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(0,255,0,1)',
                width: 1
            });
            return new ol.style.Style({
                image: new ol.style.Icon({
                    src: imgSrc + 'icones/supermarket.svg',
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
    }
]; 