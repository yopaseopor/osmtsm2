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

// Initialize map when document is ready
$(document).ready(function() {
    // Map initialization will be handled by index.js
    
    // Function to apply colorful style
    function applyColorfulStyle() {
        console.log('Attempting to apply colorful style...');
        
        // Make sure window.config and window.config.layers are available
        if (!window.config || !window.config.layers) {
            console.error('Config or layers not available yet');
            return false;
        }
        
        // Find the Vector Tile 13 layer
        const vectorTileLayer = window.config.layers.find(layer => layer.get('title') === 'Vector Tile 13');
        
        if (!vectorTileLayer) {
            console.error('Vector Tile 13 layer not found');
            return false;
        }
        
        console.log('Found Vector Tile 13 layer, applying style...');
        
        // Apply the style using olms
        olms.applyStyle(
            vectorTileLayer,
            'src/colorful.json',
            'openmaptiles'
        ).then(() => {
            console.log('Colorful style applied successfully to Vector Tile 13');
            // Force a refresh of the layer
            if (vectorTileLayer.getSource()) {
                vectorTileLayer.getSource().changed();
            }
            return true;
        }).catch(error => {
            console.error('Error applying style with olms:', error);
            return false;
        });
    }
    
    // Try to apply the style when the window loads
    $(window).on('load', function() {
        console.log('Window loaded, waiting for map initialization...');
        
        // Give some time for the map to initialize
        const maxAttempts = 10;
        let attempts = 0;
        
        const tryApplyStyle = setInterval(function() {
            attempts++;
            console.log(`Style application attempt ${attempts}/${maxAttempts}`);
            
            if (window.ol && window.olms && window.config) {
                clearInterval(tryApplyStyle);
                console.log('OpenLayers and olms are ready, applying style...');
                applyColorfulStyle();
            } else if (attempts >= maxAttempts) {
                clearInterval(tryApplyStyle);
                console.error('Failed to apply style: OpenLayers or olms not available after maximum attempts');
            }
        }, 500);
    });
});