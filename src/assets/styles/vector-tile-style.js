/**
 * Vector Tile Style Configuration
 * Inspired by OpenStreetMap Americana style patterns
 */
window.vectorTileStyle = function(feature, resolution) {
    // Debug logging (uncomment if needed)
    // console.log('Styling feature:', feature);
    
    // Common colors
    const colors = {
        water: 'rgba(170, 210, 255, 0.9)',
        residential: 'rgba(240, 238, 235, 0.7)',
        park: 'rgba(210, 250, 210, 0.7)',
        forest: 'rgba(190, 220, 190, 0.8)',
        building: 'rgba(220, 217, 210, 0.9)',
        buildingOutline: 'rgba(180, 177, 170, 0.8)',
        highway: {
            motorway: { color: '#4a4a4a', width: 2 },
            trunk: { color: '#4a4a4a', width: 1.8 },
            primary: { color: '#5a5a5a', width: 1.5 },
            secondary: { color: '#6a6a6a', width: 1.25 },
            tertiary: { color: '#7a7a7a', width: 1 },
            residential: { color: '#8a8a8a', width: 0.8 },
            service: { color: '#9a9a9a', width: 0.6 }
        },
        landuse: {
            residential: 'rgba(240, 238, 235, 0.7)',
            commercial: 'rgba(240, 235, 240, 0.5)',
            industrial: 'rgba(230, 230, 220, 0.6)',
            retail: 'rgba(245, 235, 235, 0.6)',
            park: 'rgba(210, 250, 210, 0.7)',
            forest: 'rgba(190, 220, 190, 0.8)',
            grass: 'rgba(200, 250, 200, 0.6)',
            cemetery: 'rgba(200, 230, 200, 0.7)'
        },
        boundary: {
            national: '#000000',
            administrative: '#777777',
            protected_area: '#2d5f2d'
        }
    };

    try {
        // Get feature properties
        const layer = feature.get('layer') || 'unknown';
        const cls = feature.get('class') || '';
        const type = feature.getGeometry().getType();
        const brunnel = feature.get('brunnel');
        const isBridge = brunnel === 'bridge';
        const isTunnel = brunnel === 'tunnel';
        
        // Debug logging (uncomment if needed)
        // console.log(`Layer: ${layer}, Class: ${cls}, Type: ${type}`);

        // Water
        if (layer === 'water') {
            return [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: colors.water
                })
            })];
        }
        
        // Landuse
        if (layer === 'landuse') {
            const fillColor = colors.landuse[cls] || colors.landuse.residential;
            return [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: fillColor
                })
            })];
        }

        // Buildings
        if (layer === 'building') {
            return [new ol.style.Style({
                fill: new ol.style.Fill({
                    color: colors.building
                }),
                stroke: new ol.style.Stroke({
                    color: colors.buildingOutline,
                    width: 0.5
                })
            })];
        }

        // Transportation (roads, paths, etc.)
        if (layer === 'transportation') {
            const roadType = cls || 'tertiary';
            const roadStyle = colors.highway[roadType] || colors.highway.tertiary;
            
            // Skip rendering tunnels for now
            if (isTunnel) {
                return [];
            }
            
            // For bridges, make the line slightly wider and lighter
            if (isBridge) {
                roadStyle.width += 0.2;
                roadStyle.color = adjustColor(roadStyle.color, 20);
            }
            
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: roadStyle.color,
                    width: roadStyle.width,
                    lineCap: 'round',
                    lineJoin: 'round'
                })
            })];
        }
        
        // Boundaries
        if (layer === 'boundary') {
            const boundaryStyle = {
                stroke: new ol.style.Stroke({
                    color: colors.boundary.administrative,
                    width: 1,
                    lineDash: [4, 2]
                })
            };
            
            if (cls === 'national') {
                boundaryStyle.stroke.color = colors.boundary.national;
                boundaryStyle.stroke.width = 1.5;
                boundaryStyle.stroke.lineDash = [6, 3];
            } else if (cls === 'protected_area') {
                boundaryStyle.stroke.color = colors.boundary.protected_area;
                boundaryStyle.stroke.width = 1;
                boundaryStyle.stroke.lineDash = [3, 3];
            }
            
            return [new ol.style.Style(boundaryStyle)];
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
    
    // Default style for any unhandled features
    return [new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(200, 200, 200, 0.3)'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(100, 100, 100, 0.5)',
            width: 0.5
        })
    })];
};

/**
 * Helper function to lighten or darken a color
 * @param {string} color - Hex color code
 * @param {number} percent - Positive to lighten, negative to darken
 * @returns {string} Adjusted color
 */
function adjustColor(color, percent) {
    // Convert hex to RGB
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;

    // Ensure values are within bounds
    const clamp = (value) => Math.min(255, Math.max(0, value));
    
    // Convert back to hex
    return '#' + (
        0x1000000 +
        (clamp(R) << 16) +
        (clamp(G) << 8) +
        clamp(B)
    ).toString(16).slice(1);
}
