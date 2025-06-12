import { colors } from '../utils/colors.js';
import { createTextStyle } from '../utils/textStyles.js';
import { getFeatureLabel } from '../utils/labelVisibility.js';
import { adjustColor } from '../utils/helpers.js';

/**
 * Styles for transportation features (roads, paths, etc.).
 * @param {ol/Feature} feature - The feature to style.
 * @param {number} resolution - Current map resolution.
 * @param {Object} config - Global style configuration.
 * @returns {Array<ol/style/Style>} Array of OpenLayers styles.
 */
export function styleTransportation(feature, resolution, config) {
    const cls = feature.get('class') || '';
    const brunnel = feature.get('brunnel');
    const isBridge = brunnel === 'bridge';
    const isTunnel = brunnel === 'tunnel';
    
    // Skip rendering tunnels for now
    if (isTunnel) {
        return [];
    }
    
    const roadType = cls || 'tertiary';
    const roadStyle = colors.highway[roadType] || colors.highway.tertiary;
    
    const styles = [];
    
    // Main road casing (wider, slightly transparent)
    if (['motorway', 'trunk', 'primary', 'secondary'].includes(roadType)) {
        styles.push(new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.3)',
                width: roadStyle.width * 1.5,
                lineCap: 'round',
                lineJoin: 'round'
            }),
            zIndex: 1
        }));
    }
    
    // Main road fill
    styles.push(new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: roadStyle.color,
            width: roadStyle.width,
            lineCap: 'round',
            lineJoin: 'round'
        }),
        zIndex: 2
    }));
    
    // For bridges, make the line slightly wider and lighter
    if (isBridge) {
        styles[styles.length - 1].getStroke().setWidth(roadStyle.width * 1.1);
        styles[styles.length - 1].getStroke().setColor(adjustColor(roadStyle.color, 15));
    }
    
    // Add road labels for named or numbered roads
    const label = getFeatureLabel(feature, '{name} {ref}', resolution);
    if (label) {
        const isMajorRoad = ['motorway', 'trunk', 'primary', 'secondary'].includes(roadType);
        const fontSize = isMajorRoad ? 10 : 9;
        const textColor = isMajorRoad ? '#ffffff' : roadStyle.textColor || '#000000';
        const haloColor = isMajorRoad ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)';
        
        // Only show labels at appropriate zoom levels
        const showLabel = resolution < (isMajorRoad ? 20 : 10);
        
        if (showLabel) {
            styles.push(new ol.style.Style({
                text: createTextStyle({
                    text: label,
                    font: {
                        size: fontSize,
                        weight: isMajorRoad ? 'bold' : 'normal'
                    },
                    color: textColor,
                    haloColor: haloColor,
                    haloWidth: isMajorRoad ? 3 : 2,
                    placement: 'line',
                    maxAngle: 0.5, // ~28.6 degrees in radians
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
                }, config)
            }));
        }
    }
    
    return styles;
}