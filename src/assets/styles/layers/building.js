import { colors } from '../utils/colors.js';
import { createTextStyle } from '../utils/textStyles.js';
import { getFeatureLabel } from '../utils/labelVisibility.js';
import { adjustColor } from '../utils/helpers.js';

/**
 * Styles for building features.
 * @param {ol/Feature} feature - The feature to style.
 * @param {number} resolution - Current map resolution.
 * @param {Object} config - Global style configuration.
 * @returns {Array<ol/style/Style>} Array of OpenLayers styles.
 */
export function styleBuilding(feature, resolution, config) {
    const height = parseFloat(feature.get('height') || '0');
    const levels = parseInt(feature.get('building:levels') || '1', 10);
    
    // Calculate building color based on height/levels/type
    let buildingColor = colors.building;
    if (height > 20 || levels > 5) {
        buildingColor = adjustColor(colors.building, -15); // Darker for taller buildings
    }
    
    const styles = [new ol.style.Style({
        fill: new ol.style.Fill({
            color: buildingColor
        }),
        stroke: new ol.style.Stroke({
            color: colors.buildingOutline,
            width: 0.5
        }),
        zIndex: 10 // Ensure buildings are above other features
    })];
    
    // Get label for building (name, ref, or address)
    const label = getFeatureLabel(feature, undefined, resolution);
    if (label) {
        // Only show labels for significant buildings or when zoomed in
        const showLabel = resolution < 10; // Adjust this value based on your needs
        if (showLabel) {
            styles.push(new ol.style.Style({
                text: createTextStyle({
                    text: label,
                    font: {
                        size: 9,
                        weight: 'normal'
                    },
                    color: '#333333',
                    haloColor: 'rgba(255, 255, 255, 0.7)',
                    haloWidth: 2,
                    offsetY: 0,
                    placement: 'point',
                    textAlign: 'center',
                    textBaseline: 'bottom',
                    padding: [2, 5, 2, 5],
                    backgroundFill: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    },
                    backgroundStroke: {
                        color: 'rgba(200, 200, 200, 0.7)',
                        width: 1
                    }
                }, config),
                zIndex: 20 // Ensure labels are above buildings
            }));
        }
    }
    
    return styles;
}