import { getTranslation } from '../../i18n/index.js';

export const healthOverlays = [
    {
        group: 'health',
        title: () => getTranslation('pharmacies'),
        query: `
            [out:json][timeout:25];
            (
              node["amenity"="pharmacy"]({{bbox}});
              way["amenity"="pharmacy"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/pharmacy.svg',
        style: (feature) => ({
            color: '#2ECC40',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    },
    {
        group: 'health',
        title: () => getTranslation('hospitals'),
        query: `
            [out:json][timeout:25];
            (
              node["amenity"="hospital"]({{bbox}});
              way["amenity"="hospital"]({{bbox}});
              relation["amenity"="hospital"]({{bbox}});
            );
            out body;
            >;
            out skel qt;
        `,
        iconSrc: './icons/hospital.svg',
        style: (feature) => ({
            color: '#FF4136',
            weight: 2,
            opacity: 0.8,
            fillOpacity: 0.3
        })
    }
]; 