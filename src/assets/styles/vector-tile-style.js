import { colors } from './utils/colors.js';
import { adjustColor } from './utils/helpers.js';
import { getFeatureLabel } from './utils/labelVisibility.js';
import { createTextStyle } from './utils/textStyles.js';
import { getIconStyle } from './utils/iconStyles.js';

import { styleWater } from './layers/water.js';
import { styleLanduse } from './layers/landuse.js';
import { styleBuilding } from './layers/building.js';
import { styleTransportation } from './layers/transportation.js';
import { styleBoundary } from './layers/boundary.js';
import { stylePOI } from './layers/poi.js';

/**
 * Vector Tile Style Configuration
 * Implements a style function following Mapbox GL Style Specification patterns
 */
window.vectorTileStyle = function(feature, resolution, config = {}) {
    const layer = feature.get('layer') || 'unknown';
    const cls = feature.get('class') || '';
    
    try {
        switch (layer) {
            case 'water':
                return styleWater(feature, resolution, config);
            case 'landuse':
                return styleLanduse(feature, resolution, config);
            case 'building':
                return styleBuilding(feature, resolution, config);
            case 'transportation':
                return styleTransportation(feature, resolution, config);
            case 'boundary':
                return styleBoundary(feature, resolution, config);
            case 'poi': // Mapbox GL often has a 'poi' layer for points of interest
                return stylePOI(feature, resolution, config);
            case 'transportation_name': // Labels for roads
                const name = getFeatureLabel(feature, '{name} {ref}', resolution);
                if (name) {
                    const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(cls);
                    const fontSize = isMajorRoad ? 10 : 9;
                    const textColor = isMajorRoad ? '#ffffff' : colors.highway[cls]?.textColor || '#000000';
                    const haloColor = isMajorRoad ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)';
                    
                    return [new ol.style.Style({
                        text: createTextStyle({
                            text: name,
                            font: {
                                size: fontSize,
                                weight: isMajorRoad ? 'bold' : 'normal'
                            },
                            color: textColor,
                            haloColor: haloColor,
                            haloWidth: isMajorRoad ? 3 : 2,
                            placement: 'line',
                            maxAngle: 0.5,
                            maxResolution: isMajorRoad ? 10 : 5,
                            textBaseline: 'alphabetic',
                            textAlign: 'center',
                            padding: isMajorRoad ? [2, 4, 2, 4] : [1, 2, 1, 2],
                            backgroundFill: isMajorRoad ? {
                                color: 'rgba(0, 0, 0, 0.3)'
                            } : null,
                            backgroundStroke: isMajorRoad ? {
                                color: 'rgba(0, 0, 0, 0.2)',
                                width: 1
                            } : null
                        }, config),
                        zIndex: 50 // Ensure road labels are above most features
                    })];
                }
                return [];
            default:
                // Check if it's a generic POI (not explicitly in 'poi' layer)
                const isGenericPOI = feature.get('amenity') || feature.get('shop') || feature.get('tourism') || feature.get('office');
                if (isGenericPOI) {
                    return stylePOI(feature, resolution, config);
                }

                // Default style for any unhandled features
                const label = getFeatureLabel(feature, undefined, resolution);
                const defaultStyles = [new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(200, 200, 200, 0.3)'
                    }),
                    stroke: new ol.style.Stroke({
                        color: 'rgba(100, 100, 100, 0.5)',
                        width: 0.5
                    })
                })];

                if (label) {
                    defaultStyles.push(new ol.style.Style({
                        text: createTextStyle({
                            text: label,
                            font: {
                                size: 9,
                                weight: 'normal'
                            },
                            color: '#333',
                            haloColor: 'rgba(255, 255, 255, 0.7)',
                            haloWidth: 2,
                            offsetY: 10,
                            textBaseline: 'middle',
                            textAlign: 'center',
                            maxResolution: 10
                        }, config)
                    }));
                }
                return defaultStyles;
        }
    } catch (error) {
        console.error('Error styling feature:', error, feature);
        // Fallback style for debugging
        return [new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 0, 0, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#ff0000',
                width: 1
            })
        })];
    }
};