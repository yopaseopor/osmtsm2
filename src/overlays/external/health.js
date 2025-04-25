import { getTranslation } from '../../i18n/index.js';

export const healthOverlays = [
    {
        group: 'health',
        title: () => getTranslation('pharmacies'),
        query: `
            [out:json][timeout:25];
            (
              node["amenity"="pharmacy"]({{bbox}});
              way["amenity"="pharmacy"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/pharmacy.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(46,204,64,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(46,204,64,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: './icons/pharmacy.svg',
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
        group: 'health',
        title: () => getTranslation('hospitals'),
        query: `
            [out:json][timeout:25];
            (
              node["amenity"="hospital"]({{bbox}});
              way["amenity"="hospital"]({{bbox}});
              relation["amenity"="hospital"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/hospital.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(255,65,54,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(255,65,54,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: './icons/hospital.svg',
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