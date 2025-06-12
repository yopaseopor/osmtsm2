import { colors } from '../utils/colors.js';
import { createTextStyle } from '../utils/textStyles.js';
import { getFeatureLabel } from '../utils/labelVisibility.js';

/**
 * Styles for boundary features.
 * @param {ol/Feature} feature - The feature to style.
 * @param {number} resolution - Current map resolution.
 * @param {Object} config - Global style configuration.
 * @returns {Array<ol/style/Style>} Array of OpenLayers styles.
 */
export function styleBoundary(feature, resolution, config) {
    const name = feature.get('name');
    const adminLevel = parseInt(feature.get('admin_level') || '0', 10);
    const boundaryType = feature.get('boundary') || '';
    const styles = [];
    
    // Define boundary style based on type and admin level
    let boundaryStyle = {
        stroke: new ol.style.Stroke({
            color: colors.boundary.administrative,
            width: 0.8,
            lineDash: [4, 2]
        }),
        zIndex: 1
    };
    
    // National boundaries
    if (adminLevel <= 2) {
        boundaryStyle.stroke.color = colors.boundary.national;
        boundaryStyle.stroke.width = 1.5;
        boundaryStyle.stroke.lineDash = [6, 3];
        boundaryStyle.zIndex = 3;
    } 
    // State/regional boundaries
    else if (adminLevel <= 4) {
        boundaryStyle.stroke.color = '#666666';
        boundaryStyle.stroke.width = 1;
        boundaryStyle.stroke.lineDash = [5, 3];
        boundaryStyle.zIndex = 2;
    }
    // Protected areas
    else if (boundaryType === 'protected_area') {
        boundaryStyle.stroke.color = colors.boundary.protected_area;
        boundaryStyle.stroke.width = 1;
        boundaryStyle.stroke.lineDash = [3, 3];
        boundaryStyle.zIndex = 1;
    }
    
    // Only show boundaries at appropriate zoom levels
    const showBoundary = resolution < (adminLevel <= 2 ? 100 : adminLevel <= 4 ? 50 : 10);
    if (showBoundary) {
        styles.push(new ol.style.Style(boundaryStyle));
        
        // Add label for named boundaries (countries, states, etc.)
        if (name && (adminLevel <= 4 || boundaryType === 'protected_area')) {
            const isNational = adminLevel <= 2;
            const textColor = boundaryType === 'protected_area' ? colors.boundary.protected_area : '#666666';
            
            styles.push(new ol.style.Style({
                text: createTextStyle({
                    text: name,
                    font: {
                        size: isNational ? 11 : 10,
                        weight: isNational ? 'bold' : 'normal'
                    },
                    color: textColor,
                    haloColor: 'rgba(255, 255, 255, 0.7)',
                    haloWidth: isNational ? 3 : 2,
                    placement: 'line',
                    maxAngle: 0.7,
                    maxResolution: isNational ? 20 : 10,
                    textBaseline: 'middle',
                    textAlign: 'center'
                }, config)
            }));
        }
    }
    
    return styles;
}