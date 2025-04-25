import { getTranslation } from '../../i18n/index.js';

export const transportOverlays = [
    {
        group: 'transport',
        title: () => getTranslation('bus_stops'),
        query: '[out:json][timeout:25];(nwr["highway"="bus_stop"]({{bbox}}););out body;>;out skel qt;',
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
        title: () => getTranslation('subway_stations'),
        query: '[out:json][timeout:25];(nwr["railway"="station"]["station"="subway"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/subway.svg',
        style: (feature) => ({
            color: '#7FDBFF',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'transport',
        title: () => getTranslation('parking'),
        query: '[out:json][timeout:25];(nwr["amenity"="parking"]({{bbox}}););out body;>;out skel qt;',
        iconSrc: './icons/parking.svg',
        style: (feature) => ({
            color: '#001f3f',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    }
]; 