import { getTranslation } from '../../i18n/index.js';

export const transportOverlays = [
    {
        group: 'transport',
        title: () => getTranslation('bus_stops'),
        query: `
            [out:json][timeout:25];
            (
              node["highway"="bus_stop"]({{bbox}});
              way["highway"="bus_stop"]({{bbox}});
              relation["highway"="bus_stop"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/bus.svg',
        style: (feature) => ({
            color: '#0074D9',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'transport',
        title: () => getTranslation('train_stations'),
        query: `
            [out:json][timeout:25];
            (
              node["railway"="station"]({{bbox}});
              way["railway"="station"]({{bbox}});
              relation["railway"="station"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/train.svg',
        style: (feature) => ({
            color: '#FF4136',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'transport',
        title: () => getTranslation('parking'),
        query: `
            [out:json][timeout:25];
            (
              node["amenity"="parking"]({{bbox}});
              way["amenity"="parking"]({{bbox}});
              relation["amenity"="parking"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/parking.svg',
        style: (feature) => ({
            color: '#AAAAAA',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    }
]; 