import { getTranslation } from '../../i18n/index.js';

export const shoppingOverlays = [
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
            color: '#01FF70',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'shopping',
        title: () => getTranslation('malls'),
        query: `
            [out:json][timeout:25];
            (
              node["shop"="mall"]({{bbox}});
              way["shop"="mall"]({{bbox}});
              relation["shop"="mall"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/mall.svg',
        style: (feature) => ({
            color: '#7FDBFF',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'shopping',
        title: () => getTranslation('convenience'),
        query: `
            [out:json][timeout:25];
            (
              node["shop"="convenience"]({{bbox}});
              way["shop"="convenience"]({{bbox}});
              relation["shop"="convenience"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/convenience.svg',
        style: (feature) => ({
            color: '#F012BE',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    }
]; 