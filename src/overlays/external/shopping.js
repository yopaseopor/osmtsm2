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
        style: (feature) => ({
            color: '#001f3f',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
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
        style: (feature) => ({
            color: '#39CCCC',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    }
]; 