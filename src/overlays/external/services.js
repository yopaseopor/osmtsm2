import { getTranslation } from '../../i18n/index.js';

export const servicesOverlays = [
    {
        group: 'services',
        title: () => getTranslation('banks'),
        query: '[out:json][timeout:25];(nwr["amenity"="bank"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/bank.svg',
        style: (feature) => ({
            color: '#FFDC00',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'services',
        title: () => getTranslation('post_offices'),
        query: '[out:json][timeout:25];(nwr["amenity"="post_office"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/post.svg',
        style: (feature) => ({
            color: '#FF851B',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'services',
        title: () => getTranslation('police'),
        query: '[out:json][timeout:25];(nwr["amenity"="police"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/police.svg',
        style: (feature) => ({
            color: '#B10DC9',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    }
]; 