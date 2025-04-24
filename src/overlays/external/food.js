import { getTranslation } from '../../i18n/index.js';

export const foodOverlays = [
    {
        group: 'food',
        title: getTranslation('restaurants'),
        query: '[out:json][timeout:25];(node["amenity"="restaurant"]({{bbox}});way["amenity"="restaurant"]({{bbox}});relation["amenity"="restaurant"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: 'src/img/icons/restaurant.svg',
        style: function(feature) {
            const name = feature.get('name') || '';
            return new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/icons/restaurant.svg',
                    scale: 0.5
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX: 0,
                    offsetY: -20,
                    fill: new ol.style.Fill({
                        color: '#000000'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#ffffff',
                        width: 3
                    })
                })
            });
        }
    },
    {
        group: 'food',
        title: getTranslation('cafes'),
        query: '[out:json][timeout:25];(node["amenity"="cafe"]({{bbox}});way["amenity"="cafe"]({{bbox}});relation["amenity"="cafe"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: 'src/img/icons/cafe.svg',
        style: function(feature) {
            const name = feature.get('name') || '';
            return new ol.style.Style({
                image: new ol.style.Icon({
                    src: 'src/img/icons/cafe.svg',
                    scale: 0.5
                }),
                text: new ol.style.Text({
                    text: name,
                    offsetX: 0,
                    offsetY: -20,
                    fill: new ol.style.Fill({
                        color: '#000000'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#ffffff',
                        width: 3
                    })
                })
            });
        }
    }
]; 