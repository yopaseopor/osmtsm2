import { foodOverlays } from './groups/food.js';
import { getTranslation } from '../i18n/index.js';

// Helper function to create a vector source from an overlay config
function createVectorSource(overlay, overpassApi) {
    return new ol.source.Vector({
        format: new ol.format.OSMXML(),
        loader: function(extent, resolution, projection) {
            const epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
            let query = '[maxsize:536870912];' + overlay.query;
            query = query.replace(/{{bbox}}/g, epsg4326Extent[1] + ',' + epsg4326Extent[0] + ',' + epsg4326Extent[3] + ',' + epsg4326Extent[2]);

            const client = new XMLHttpRequest();
            client.open('POST', overpassApi);
            
            client.onload = () => {
                if (client.status === 200) {
                    const features = this.getFormat().readFeatures(client.responseText, {
                        featureProjection: projection
                    });
                    this.addFeatures(features);
                }
            };
            
            client.send(query);
        },
        strategy: ol.loadingstrategy.bbox
    });
}

// Create vector layers from overlay configurations
function createVectorLayers(overlays, overpassApi) {
    return overlays.map(overlay => {
        return new ol.layer.Vector({
            title: overlay.title,
            group: overlay.group || '',
            iconSrc: overlay.iconSrc,
            iconStyle: overlay.iconStyle,
            visible: false,
            source: createVectorSource(overlay, overpassApi),
            style: overlay.style
        });
    });
}

// Create a layer group for a specific category of overlays
function createLayerGroup(title, layers) {
    return new ol.layer.Group({
        title: title,
        type: 'overlay',
        layers: layers
    });
}

// Initialize all overlay groups
export function initializeOverlays(config) {
    // Create food overlay group
    const foodLayers = createVectorLayers(foodOverlays, config.overpassApi());
    const foodGroup = createLayerGroup(getTranslation('food'), foodLayers);
    
    // Add the food group to the map's layers
    config.layers.push(foodGroup);
    
    // Dispatch event to notify that overlays are ready
    window.dispatchEvent(new CustomEvent('overlaysUpdated', {
        detail: {
            food: foodLayers
        }
    }));
    
    return config;
} 