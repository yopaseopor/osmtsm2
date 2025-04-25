import { getTranslation } from '../../i18n/index.js';

export const educationOverlays = [
    {
        group: 'education',
        title: () => getTranslation('schools'),
        query: '[out:json][timeout:25];(nwr["amenity"="school"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/school.svg',
        style: (feature) => ({
            color: '#3D9970',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'education',
        title: () => getTranslation('universities'),
        query: '[out:json][timeout:25];(nwr["amenity"="university"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/university.svg',
        style: (feature) => ({
            color: '#2ECC40',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'education',
        title: () => getTranslation('libraries'),
        query: '[out:json][timeout:25];(nwr["amenity"="library"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/library.svg',
        style: (feature) => ({
            color: '#01FF70',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    }
]; 