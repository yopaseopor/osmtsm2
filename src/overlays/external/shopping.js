import { getTranslation } from '../../i18n/index.js';

export const shoppingOverlays = [
    {
        group: 'shopping',
        title: () => getTranslation('clothing_stores'),
        query: `
            [out:json][timeout:25];
            (
              node["shop"="clothes"]({{bbox}});
              way["shop"="clothes"]({{bbox}});
              relation["shop"="clothes"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/clothes.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(0,31,63,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(0,31,63,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: './icons/clothes.svg',
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
    },
    {
        group: 'shopping',
        title: () => getTranslation('supermarkets'),
        query: `
            [out:json][timeout:25];
            (
              node["shop"="supermarket"]({{bbox}});
              way["shop"="supermarket"]({{bbox}});
              relation["shop"="supermarket"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/supermarket.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(57,204,204,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(57,204,204,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: './icons/supermarket.svg',
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