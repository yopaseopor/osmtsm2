import { colors } from '../utils/colors.js';
import { createTextStyle } from '../utils/textStyles.js';
import { getFeatureLabel } from '../utils/labelVisibility.js';
import { getIconStyle } from '../utils/iconStyles.js';

/**
 * Styles for Point of Interest (POI) features.
 * @param {ol/Feature} feature - The feature to style.
 * @param {number} resolution - Current map resolution.
 * @param {Object} config - Global style configuration.
 * @returns {Array<ol/style/Style>} Array of OpenLayers styles.
 */
export function stylePOI(feature, resolution, config) {
    const poiColor = colors.poi[
        feature.get('amenity') ? 'amenity' : 
        feature.get('shop') ? 'shop' :
        feature.get('tourism') ? 'tourism' :
        feature.get('office') ? 'office' :
        feature.get('building') ? 'building' : 'default'
    ];
    
    const styles = [];
    
    // Get icon name based on POI type
    let iconName = 'marker'; // Default icon
    if (feature.get('amenity') === 'cafe') iconName = 'cafe';
    else if (feature.get('amenity') === 'restaurant') iconName = 'restaurant';
    else if (feature.get('shop')) iconName = 'shop';
    else if (feature.get('tourism') === 'hotel') iconName = 'lodging';
    else if (feature.get('office')) iconName = 'commercial';
    // Add more icon mappings as needed
    
    // Add icon style if available
    const iconStyle = getIconStyle(iconName, config, {
        size: 1,
        color: poiColor,
        opacity: 0.9
    });
    
    if (iconStyle) {
        // Add the icon style
        styles.push(new ol.style.Style({
            image: iconStyle,
            zIndex: 90 // Ensure icons are above most features
        }));
        
        // Add label for POI if it should be shown at this zoom level
        const label = getFeatureLabel(feature, undefined, resolution);
        if (label) {
            styles.push(new ol.style.Style({
                text: createTextStyle({
                    text: label,
                    font: {
                        size: 10,
                        weight: 'normal'
                    },
                    color: '#000',
                    haloColor: '#fff',
                    haloWidth: 2,
                    offsetY: 12,
                    textBaseline: 'top',
                    textAlign: 'center',
                    maxResolution: 5 // Only show at higher zoom levels
                }, config),
                zIndex: 100 // Ensure POI labels are on top
            }));
        }
    }
    
    return styles;
}