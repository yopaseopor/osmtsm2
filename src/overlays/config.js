import { foodOverlays } from './groups/food.js';
import { getTranslation } from '../i18n/index.js';

// Convert food overlays into OpenLayers vector layers
export function createFoodLayers() {
    return foodOverlays.map(overlay => {
        return new ol.layer.Vector({
            title: overlay.title,
            group: overlay.group || getTranslation('food'),
            iconSrc: overlay.iconSrc,
            iconStyle: overlay.iconStyle,
            visible: false,
            source: new ol.source.Vector({
                format: new ol.format.OSMXML(),
                loader: function(extent, resolution, projection) {
                    const epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
                    let query = '[maxsize:536870912];' + overlay.query;
                    query = query.replace(/{{bbox}}/g, epsg4326Extent[1] + ',' + epsg4326Extent[0] + ',' + epsg4326Extent[3] + ',' + epsg4326Extent[2]);

                    const client = new XMLHttpRequest();
                    client.open('POST', 'https://overpass.kumi.systems/api/interpreter');
                    
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
            }),
            style: overlay.style
        });
    });
}

// Create a layer group for all food overlays
export function createFoodLayerGroup() {
    return new ol.layer.Group({
        title: getTranslation('food'),
        type: 'overlay',
        layers: createFoodLayers()
    });
} 