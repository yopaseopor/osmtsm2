export const colors = {
    // POI colors
    poi: {
        amenity: '#3498db',
        shop: '#9b59b6',
        tourism: '#e74c3c',
        office: '#2ecc71',
        building: '#e67e22',
        default: '#7f8c8d'
    },
    // Base colors
    water: 'rgba(170, 210, 255, 0.9)',
    waterIntermittent: 'rgba(170, 210, 255, 0.6)',
    residential: 'rgba(240, 238, 235, 0.7)',
    park: 'rgba(210, 250, 210, 0.7)',
    forest: 'rgba(190, 220, 190, 0.8)',
    building: 'rgba(220, 217, 210, 0.9)',
    buildingOutline: 'rgba(180, 177, 170, 0.8)',
    
    // Road colors and widths
    highway: {
        motorway: { color: '#0000ff', width: 3.0, textColor: '#0000ff' },  // blue
        trunk: { color: '#8b0000', width: 2.8, textColor: '#8b0000' },      // dark red
        primary: { color: '#ff0000', width: 2.5, textColor: '#ff0000' },    // red
        secondary: { color: '#006400', width: 2.0, textColor: '#006400' },  // dark green
        tertiary: { color: '#ffa500', width: 1.8, textColor: '#ff8c00' },   // orange
        unclassified: { color: '#ff00ff', width: 1.5, textColor: '#ff00ff' }, // magenta
        residential: { color: '#666666', width: 1.2, textColor: '#666666' },
        service: { color: '#999999', width: 0.8, textColor: '#999999' },
        path: { color: '#aaaaaa', width: 0.6, textColor: '#666666' },
        pedestrian: { color: '#cccccc', width: 0.8, textColor: '#666666' }
    },
    
    // Text styles (base colors for text, halo)
    text: {
        fill: '#000000',
        stroke: '#ffffff',
        strokeWidth: 2,
        font: '12px Arial, sans-serif',
        offsetY: 0,
        padding: [2, 4],
        maxAngle: 30,
        overflow: true
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