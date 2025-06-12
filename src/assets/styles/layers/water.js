import { colors } from '../utils/colors.js';
import { createTextStyle } from '../utils/textStyles.js';
import { getFeatureLabel } from '../utils/labelVisibility.js';

/**
 * Styles for water features.
 * @param {ol/Feature} feature - The feature to style.
 * @param {number} resolution - Current map resolution.
 * @param {Object} config - Global style configuration.
 * @returns {Array<ol/style/Style>} Array of OpenLayers styles.
 */
export function styleWater(feature, resolution, config) {
    const isIntermittent = feature.get('intermittent') === 1 || feature.get('intermittent') === '1';
    const waterColor = isIntermittent ? colors.waterIntermittent : colors.water;
    
    const styles = [new ol.style.Style({
        fill: new ol.style.Fill({
            color: waterColor
        })
    })];
    
    // Add stroke for intermittent water
    if (isIntermittent) {
        styles[0].setStroke(new ol.style.Stroke({
            color: colors.water,
            width: 1,
            lineDash: [4, 4]
        }));
    }
    
    // Add water label if name exists
    const name = getFeatureLabel(feature, '{name}', resolution);
    if (name) {
        styles.push(new ol.style.Style({
            text: createTextStyle({
                text: name,
                font: {
                    style: 'italic',
                    size: 11,
                    weight: 'normal'
                },
                color: 'rgba(0, 0, 128, 0.8)',
                haloColor: 'rgba(255, 255, 255, 0.7)',
                haloWidth: 2,
                offsetY: -10,
                textBaseline: 'bottom',
                textAlign: 'center'
            }, config)
        }));
    }
    
    return styles;
}