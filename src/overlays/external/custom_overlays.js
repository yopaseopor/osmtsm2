import { getTranslation } from '../../i18n/index.js';

export const customOverlays = [
    {
        group: getTranslation('food'),
        title: 'Starbucks',
        query: '(nwr["brand:wikidata"="Q37158"]({{bbox}});node(w););out meta;',
        iconSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/220px-Starbucks_Corporation_Logo_2011.svg.png',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(0,100,0,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(0,100,0,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/220px-Starbucks_Corporation_Logo_2011.svg.png',
                    scale: 0.10
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX: 7,
                    offsetY: -12,
                    fill: new ol.style.Fill({
                        color: 'rgba(0,0,0,1)'
                    }),
                }),
                fill: fill,
                stroke: stroke
            });
            return style;
        }
    }
]; 