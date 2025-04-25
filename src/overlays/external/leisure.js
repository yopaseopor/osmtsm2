import { getTranslation } from '../../i18n/index.js';

export const leisureOverlays = [
    {
        group: 'leisure',
        title: () => getTranslation('parks'),
        query: `
            [out:json][timeout:25];
            (
              node["leisure"="park"]({{bbox}});
              way["leisure"="park"]({{bbox}});
              relation["leisure"="park"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/park.svg',
        style: (feature) => ({
            color: '#2ECC40',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'leisure',
        title: () => getTranslation('sports_centers'),
        query: `
            [out:json][timeout:25];
            (
              node["leisure"="sports_centre"]({{bbox}});
              way["leisure"="sports_centre"]({{bbox}});
              relation["leisure"="sports_centre"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/sports.svg',
        style: (feature) => ({
            color: '#39CCCC',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'leisure',
        title: () => getTranslation('cinemas'),
        query: `
            [out:json][timeout:25];
            (
              node["amenity"="cinema"]({{bbox}});
              way["amenity"="cinema"]({{bbox}});
              relation["amenity"="cinema"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/cinema.svg',
        style: (feature) => ({
            color: '#FF851B',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    }
]; 