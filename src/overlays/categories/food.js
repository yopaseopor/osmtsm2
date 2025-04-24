import { getTranslation } from '../../i18n/index.js';

export const foodOverlays = [
    {
        group: getTranslation('food'),
        title: 'McDonald\'s',
        query: '(nwr["brand:wikidata"="Q38076"]({{bbox}});node(w););out meta;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png',
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
                })
            });
        }
    },
    {
        group: getTranslation('food'),
        title: 'Starbucks',
        query: '(nwr["brand:wikidata"="Q37158"]({{bbox}});node(w););out meta;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/1200px-Starbucks_Coffee_Logo.svg.png',
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
                })
            });
        }
    }
]; 