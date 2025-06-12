import { colors } from '../utils/colors.js';
import { createTextStyle } from '../utils/textStyles.js';
import { getFeatureLabel } from '../utils/labelVisibility.js';
import { adjustColor } from '../utils/helpers.js';

/**
 * Styles for landuse features.
 * @param {ol/Feature} feature - The feature to style.
 * @param {number} resolution - Current map resolution.
 * @param {Object} config - Global style configuration.
 * @returns {Array<ol/style/Style>} Array of OpenLayers styles.
 */
export function styleLanduse(feature, resolution, config) {
    const cls = feature.get('class') || '';
    const fillColor = colors.landuse[cls] || colors.landuse.residential;
    const styles = [];
    
    // Only show landuse at appropriate zoom levels
    const showLanduse = resolution < (cls === 'park' || cls === 'forest' ? 100 : 50);
    if (!showLanduse) {
        return [];
    }
    
    // Base fill with z-index based on landuse type
    const zIndex = cls === 'park' || cls === 'forest' ? 1 : 0;
    styles.push(new ol.style.Style({
        fill: new ol.style.Fill({
            color: fillColor
        }),
        zIndex
    }));
    
    // Add stroke for certain landuse types
    if (cls === 'park' || cls === 'forest' || cls === 'cemetery') {
        styles[0].setStroke(new ol.style.Stroke({
            color: adjustColor(fillColor, -10),
            width: 0.5
        }));
    }
    
    // Get label for any landuse with name, ref, or address
    const label = getFeatureLabel(feature, '{name}', resolution);
    if (label) {
        const fontSize = cls === 'park' || cls === 'forest' || cls === 'cemetery' ? 10 : 9;
        const textColor = cls === 'cemetery' ? '#666666' : 
                         cls === 'park' || cls === 'forest' ? '#2d5f2d' : '#333333';
        const showLabel = resolution < 20; // Only show labels when zoomed in
        
        if (showLabel) {
            styles.push(new ol.style.Style({
                text: createTextStyle({
                    text: label,
                    font: {
                        size: fontSize,
                        weight: 'normal',
                        style: cls === 'park' || cls === 'forest' ? 'italic' : 'normal'
                    },
                    color: textColor,
                    haloColor: 'rgba(255, 255, 255, 0.7)',
                    haloWidth: 2,
                    textBaseline: 'middle',
                    textAlign: 'center',
                    placement: 'point',
                    maxAngle: 0.7,
                    maxResolution: 10,
                    padding: [2, 4, 2, 4],
                    backgroundFill: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    },
                    backgroundStroke: {
                        color: 'rgba(200, 200, 200, 0.7)',
                        width: 0.5
                    }
                }, config)
            }));
        }
    }
    
    return styles;
}