import { getTranslation } from '../../i18n/index.js';

export const amenityOverlays = [
    {
        group: getTranslation('amenities'),
        title: getTranslation('bike_parking'),
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
                    color: 'rgba(1,255,112,0.4)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(1,255,112,1)',
                    width: 1
                })
            });
        }
    },
    {
        group: getTranslation('amenities'),
        title: getTranslation('drinking_water'),
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
                    color: 'rgba(127,219,255,0.4)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'rgba(127,219,255,1)',
                    width: 1
                })
            });
        }
    }
]; 