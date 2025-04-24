import { getTranslation } from '../../i18n/index.js';

const imgSrc = 'src/img/';

export const foodOverlays = [
    {
        group: 'Alimentación',
        title: 'Restaurantes',
        query: '(nwr["amenity"="restaurant"]({{bbox}});node(w););out meta;',
        iconSrc: imgSrc + 'icones/restaurant.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const name = feature.get('name') || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            return new ol.style.Style({
                image: new ol.style.Icon({
                    src: imgSrc + 'icones/restaurant.svg',
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
    {
        group: 'Alimentación',
        title: 'Cafeterías',
        query: '(nwr["amenity"="cafe"]({{bbox}});node(w););out meta;',
        iconSrc: imgSrc + 'icones/cafe.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            const name = feature.get('name') || '';
            const fill = new ol.style.Fill({
                color: 'rgba(255,0,0,0.4)'
            });
            const stroke = new ol.style.Stroke({
                color: 'rgba(255,0,0,1)',
                width: 1
            });
            return new ol.style.Style({
                image: new ol.style.Icon({
                    src: imgSrc + 'icones/cafe.svg',
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