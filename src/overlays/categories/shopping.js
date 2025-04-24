import { getTranslation } from '../../i18n/index.js';

export const shoppingOverlays = [
    {
        group: getTranslation('shopping'),
        title: 'Zara',
        query: '(nwr["brand:wikidata"="Q147662"]({{bbox}});node(w););out meta;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Zara_Logo.svg/1200px-Zara_Logo.svg.png',
        style: function(feature) {
            return new ol.style.Style({
                image: new ol.style.Icon({
                    src: this.iconSrc,
                    scale: 0.10
                }),
                text: new ol.style.Text({
                    text: feature.get('name') || '',
                    offsetX: 7,
                    offsetY: -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    })
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,0.4)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(0,0,0,1)',
                    width: 1
                })
            });
        }
    }
]; 