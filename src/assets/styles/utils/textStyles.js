/**
 * Gets the appropriate font stack based on style properties
 * @param {Object} style - Text style properties (e.g., { fontWeight: 'bold', fontStyle: 'italic' })
 * @param {Object} config - Configuration with fontStacks (e.g., { fontStacks: { regular: ['Arial'], bold: ['Arial Bold'] } })
 * @returns {string} Font stack string
 */
export function getFontStack(style, config) {
    // Fallback to a default config if not provided or missing fontStacks
    const effectiveConfig = config || {};
    const fontStacks = effectiveConfig.fontStacks || {
        regular: ['Arial'],
        bold: ['Arial Bold'],
        italic: ['Arial Italic'],
        bolditalic: ['Arial Bold Italic']
    };

    const weight = style.fontWeight === 'bold' ? 'bold' : 'regular';
    const styleType = style.fontStyle === 'italic' ? 'italic' : 'normal';
    
    let fontKey = weight;
    if (styleType === 'italic') {
        fontKey = weight === 'bold' ? 'bolditalic' : 'italic';
    }
    
    const stack = fontStacks[fontKey] || fontStacks.regular;
    return stack.map(font => `"${font}"`).concat('Arial, sans-serif').join(', ');
}

/**
 * Creates an OpenLayers text style with proper font handling
 * @param {Object} options - Text style options
 * @param {Object} config - Style configuration (for font stacks)
 * @returns {ol/style/Text} OpenLayers text style
 */
export function createTextStyle(options, config) {
    const {
        text,
        font = {},
        color = '#000000',
        haloColor = '#ffffff',
        haloWidth = 1,
        offsetX = 0,
        offsetY = 0,
        maxAngle = 0.785, // 45 degrees in radians
        placement = 'point',
        maxResolution,
        padding = [0, 0, 0, 0],
        textAlign = 'center',
        textBaseline = 'middle',
        rotation = 0,
        overflow = true,
        backgroundFill = null,
        backgroundStroke = null
    } = options;
    
    const fontStack = getFontStack(font, config);
    const fontSize = font.size || 12;
    const fontStyle = font.style || 'normal';
    const fontWeight = font.weight || 'normal';
    
    return new ol.style.Text({
        text: text || '',
        font: `${fontStyle} ${fontWeight} ${fontSize}px ${fontStack}`,
        fill: new ol.style.Fill({ color }),
        stroke: new ol.style.Stroke({
            color: haloColor,
            width: haloWidth
        }),
        offsetX,
        offsetY,
        maxAngle,
        placement,
        maxResolution,
        padding,
        textAlign,
        textBaseline,
        rotation,
        overflow,
        backgroundFill: backgroundFill ? new ol.style.Fill(backgroundFill) : undefined,
        backgroundStroke: backgroundStroke ? new ol.style.Stroke(backgroundStroke) : undefined
    });
}