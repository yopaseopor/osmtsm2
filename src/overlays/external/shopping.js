import { getTranslation } from '../../i18n/index.js';

export const shoppingOverlays = [
    {
        group: 'shopping',
        title: () => getTranslation('supermarkets'),
        query: '[out:json][timeout:25];(nwr["shop"="supermarket"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/supermarket.svg',
        style: (feature) => ({
            color: '#2ECC40',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'shopping',
        title: () => getTranslation('clothing'),
        query: '[out:json][timeout:25];(nwr["shop"="clothes"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/clothes.svg',
        style: (feature) => ({
            color: '#FF851B',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'shopping',
        title: () => getTranslation('electronics'),
        query: '[out:json][timeout:25];(nwr["shop"="electronics"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/electronics.svg',
        style: (feature) => ({
            color: '#39CCCC',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    }
]; 