import { getTranslation } from '../../i18n/index.js';

export const transportOverlays = [
    {
        group: 'transport',
        title: () => getTranslation('metro_stations'),
        query: `
            [out:json][timeout:25];
            (
              node["railway"="station"]["station"="subway"]({{bbox}});
              way["railway"="station"]["station"="subway"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/metro.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(0,116,217,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(0,116,217,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: './icons/metro.svg',
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
        group: 'transport',
        title: () => getTranslation('bus_stops'),
        query: `
            [out:json][timeout:25];
            (
              node["highway"="bus_stop"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/bus.svg',
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(61,153,112,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(61,153,112,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: './icons/bus.svg',
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