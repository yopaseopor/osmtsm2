import { foodOverlays } from './groups/food.js';
import { shoppingOverlays } from './groups/shopping.js';
import { transportOverlays } from './groups/transport.js';
import { healthOverlays } from './groups/health.js';
import { educationOverlays } from './groups/education.js';
import { loadExternalOverlays } from './external/loader.js';
import { translatedOverlays } from './translated_overlays.js';

console.log('Initializing overlays system...');

// Initialize overlays by group
window.allOverlays = {
    food: foodOverlays,
    shopping: shoppingOverlays,
    transport: transportOverlays,
    health: healthOverlays,
    education: educationOverlays,
    translated: translatedOverlays || [], // Preserve translated overlays
    external: [] // Will be populated later
};

// Load external overlays
loadExternalOverlays().then(externalOverlays => {
    console.log('External overlays loaded:', externalOverlays.length);
    
    // Convert style objects to OpenLayers style functions
    const processedOverlays = externalOverlays.map(overlay => ({
        ...overlay,
        style: (feature) => {
            const styleConfig = typeof overlay.style === 'function' ? overlay.style(feature) : overlay.style;
            return new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 6,
                    fill: new ol.style.Fill({
                        color: styleConfig.color.replace('#', '#66') // Add transparency
                    }),
                    stroke: new ol.style.Stroke({
                        color: styleConfig.color,
                        width: styleConfig.weight || 2
                    })
                }),
                text: feature.get('name') ? new ol.style.Text({
                    text: feature.get('name'),
                    offsetX: 12,
                    offsetY: -12,
                    fill: new ol.style.Fill({
                        color: '#000000'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#ffffff',
                        width: 3
                    })
                }) : undefined,
                stroke: new ol.style.Stroke({
                    color: styleConfig.color,
                    width: styleConfig.weight || 2
                }),
                fill: new ol.style.Fill({
                    color: styleConfig.color.replace('#', '#33') // More transparent for polygons
                })
            });
        }
    }));
    
    window.allOverlays.external = processedOverlays;
    
    // Dispatch event to notify that overlays are ready
    window.dispatchEvent(new CustomEvent('overlaysUpdated', { 
        detail: window.allOverlays
    }));
}).catch(error => {
    console.error('Error loading external overlays:', error);
});

// Export all overlays for module usage
export const allOverlays = Object.values(window.allOverlays).flat();
export default allOverlays; 