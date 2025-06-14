import { setLanguage, getCurrentLanguage } from './i18n/index.js';
import config from './config.js';
import { overlayConfig } from './config_overlay.js';
import './overlay_integration.js';

// Initialize configuration
window.config = config;

// Initialize overlays
window.config.overlays = overlayConfig.overlays;

// Dispatch config loaded event after everything is initialized
window.dispatchEvent(new CustomEvent('configLoaded', {
    detail: window.config
}));

// Notify overlay searcher that overlays are ready
window.dispatchEvent(new CustomEvent('overlaySearchUpdate', {
    detail: {
        overlays: window.config.overlays
    }
}));

// Load and apply the colorful.json style
async function applyColorfulStyle() {
    try {
        console.log('Loading colorful.json style...');
        const response = await fetch('src/colorful.json');
        if (!response.ok) {
            throw new Error(`Failed to load style: ${response.status} ${response.statusText}`);
        }
        const style = await response.json();
        
        console.log('Style loaded, finding Vector Tile 13 layer...');
        const vectorTileLayer = window.config.layers.find(layer => layer.get('title') === 'Vector Tile 13');
        if (!vectorTileLayer) {
            throw new Error('Vector Tile 13 layer not found');
        }
        
        console.log('Applying style to Vector Tile 13 layer...');
        
        // Apply the style using olms
        await olms.applyStyle(
            vectorTileLayer,
            style,
            'versatiles-shortbread'  // This must match the source name in the style file
        );
        
        console.log('Style applied successfully');
        
        // Force a redraw of the layer
        if (vectorTileLayer.getSource()) {
            vectorTileLayer.getSource().changed();
        }
        
        // Log when the layer's visibility changes
        vectorTileLayer.on('change:visible', function() {
            console.log(`Vector Tile 13 layer visibility changed to: ${vectorTileLayer.getVisible()}`);
        });
        
    } catch (error) {
        console.error('Error applying colorful style:', error);
    }
}

// Initialize map when document is ready
$(document).ready(function() {
    console.log('Document ready, initializing map...');
    
    // Wait for the window to load and then apply the style
    $(window).on('load', function() {
        console.log('Window loaded, waiting for OpenLayers to be ready...');
        
        const maxAttempts = 20;
        let attempts = 0;
        
        const checkOL = setInterval(function() {
            attempts++;
            console.log(`Checking for OpenLayers (attempt ${attempts}/${maxAttempts})`);
            
            if (window.ol && window.olms && window.config) {
                clearInterval(checkOL);
                console.log('OpenLayers and olms are ready, applying style...');
                applyColorfulStyle();
            } else if (attempts >= maxAttempts) {
                clearInterval(checkOL);
                console.error('OpenLayers or olms not available after maximum attempts');
                console.log('Available globals:', {
                    ol: !!window.ol,
                    olms: !!window.olms,
                    config: !!window.config
                });
            }
        }, 500);
    });
});