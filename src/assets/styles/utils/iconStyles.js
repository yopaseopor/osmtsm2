/**
 * Gets an icon style with sprite support
 * @param {string} iconName - Name of the icon in the sprite
 * @param {Object} config - Style configuration (must contain spriteBaseUrl and apiKey if needed)
 * @param {Object} options - Additional options for the icon
 * @returns {ol/style/Icon|null} OpenLayers Icon style or null if sprite URL is missing
 */
export function getIconStyle(iconName, config, options = {}) {
    const {
        size = 1,
        opacity = 1,
        rotation = 0,
        color,
        // haloColor, // Not directly supported by ol.style.Icon for the icon itself
        // haloWidth = 0 // Not directly supported by ol.style.Icon for the icon itself
    } = options;
    
    const spriteUrl = config && config.spriteBaseUrl 
        ? `${config.spriteBaseUrl}?key=${config.apiKey || ''}`
        : null;
    
    if (!spriteUrl) {
        console.warn('Sprite base URL not configured for icons.');
        return null;
    }
    
    // In a real implementation, you would need to have the sprite metadata
    // (e.g., from a JSON file) to get the correct position and size of the
    // icon within the sprite sheet. This simplified version assumes the
    // `src` can directly point to an individual icon or a generic sprite.
    // For Mapbox GL sprites, the `src` would typically be the sprite image URL,
    // and `imgSize`, `imgAnchor`, `imgOffset` would be derived from metadata.
    
    // For now, we'll assume `spriteUrl` is a template that needs the iconName.
    // If it's a single sprite sheet, this would need to be adjusted.
    const iconSrc = spriteUrl.includes('{icon}') ? spriteUrl.replace('{icon}', iconName) : spriteUrl;

    return new ol.style.Icon({
        src: iconSrc,
        scale: size,
        opacity,
        rotation,
        color // This applies a color filter to the image
    });
}