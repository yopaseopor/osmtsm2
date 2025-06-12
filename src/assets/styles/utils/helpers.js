/**
 * Ensures a color component value is within the 0-255 range.
 * @param {number} value - The color component value.
 * @returns {number} The clamped value.
 */
export function clamp(value) {
    return Math.min(255, Math.max(0, value));
}

/**
 * Helper function to lighten or darken a color
 * @param {string} color - Hex color code (e.g., '#RRGGBB')
 * @param {number} percent - Positive to lighten, negative to darken
 * @returns {string} Adjusted color in hex format
 */
export function adjustColor(color, percent) {
    // Convert hex to RGB
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;

    // Convert back to hex
    return '#' + (
        0x1000000 +
        (clamp(R) << 16) +
        (clamp(G) << 8) +
        clamp(B)
    ).toString(16).slice(1);
}