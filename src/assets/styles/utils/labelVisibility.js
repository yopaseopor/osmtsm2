/**
 * Determines if a label should be shown based on zoom level and feature properties
 * @param {ol/Feature} feature - The feature to check
 * @param {number} resolution - Current map resolution
 * @returns {boolean} Whether to show the label
 */
export function shouldShowLabel(feature, resolution) {
    // Get current zoom level (approximate conversion from resolution)
    const zoom = Math.round(Math.log2(156543.03390625 / resolution));
    
    // If zoom is less than 13, show all labels
    if (zoom < 13) return true;
    
    // For zoom 13 and above, filter out some labels based on feature properties
    const layer = feature.get('layer');
    const name = feature.get('name');
    
    // Skip features without names
    if (!name) return false;
    
    // Always show important POIs at all zoom levels
    const importantPOIs = [
        'place', 'tourism', 'shop', 'amenity', 'leisure', 'aeroway',
        'aerialway', 'military', 'natural', 'waterway', 'landuse',
        'railway', 'highway', 'public_transport', 'building', 'office'
    ];
    
    // Check if this is an important POI
    const isImportantPOI = importantPOIs.some(prop => feature.get(prop));
    if (isImportantPOI) {
        return true;
    }
    
    // For other features, show only a percentage of labels based on zoom level
    // Create a consistent hash of the name for deterministic filtering
    const nameHash = name.split('').reduce((hash, char) => {
        return ((hash << 5) - hash) + char.charCodeAt(0);
    }, 0);
    
    // More aggressive label reduction at higher zoom levels
    const zoomLevel = Math.min(22, Math.max(13, zoom)); // Cap at zoom 22
    const zoomFactor = Math.pow(0.7, zoomLevel - 13); // Exponential reduction
    
    // Start with 15% of labels at z13, decreasing more aggressively
    const threshold = 0.15 * zoomFactor;
    
    // Use the hash to determine if this label should be shown
    const normalizedHash = (Math.abs(nameHash) % 1000) / 1000;
    
    return normalizedHash < threshold;
}

/**
 * Gets the best label text for a feature according to Mapbox GL Style Specification
 * @param {ol/Feature} feature - The feature to get label for
 * @param {string} [textField] - Field specification (e.g., '{name} {ref}')
 * @param {number} [resolution] - Current map resolution
 * @returns {string|null} The formatted label or null if none found
 */
export function getFeatureLabel(feature, textField, resolution) {
    // Check if we should show this label based on zoom level
    if (resolution !== undefined && !shouldShowLabel(feature, resolution)) {
        return null;
    }
    if (!textField) {
        // Default to name, then ref, then other common fields
        return (
            feature.get('name') ||
            feature.get('ref') ||
            feature.get('name_en') ||
            feature.get('name:en') ||
            feature.get('int_name') ||
            feature.get('loc_name') ||
            feature.get('alt_name') ||
            feature.get('addr:housename') ||
            feature.get('addr:housenumber') ||
            null
        );
    }

    // Handle field formatting like {name} {ref}
    return textField.replace(/\{([^}]+)\}/g, (match, p1) => {
        // Handle nested properties like {name:latin}
        const field = p1.split(':')[0];
        return feature.get(field) || '';
    }).trim() || null;
}