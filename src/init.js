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
    console.log('Document ready, initializing map...');
    
    // Debug function to log feature properties
    function logFeatureProperties(layerTitle) {
        const layer = window.config.layers.find(l => l.get('title') === layerTitle);
        if (layer) {
            layer.getSource().on('tileloadend', function(event) {
                const features = event.tile.getFeatures();
                console.log(`Loaded ${features.length} features in ${layerTitle}`);
                if (features.length > 0) {
                    console.log('Sample feature properties:', features[0].getProperties());
                }
            });
        }
    }
    
    // Log when the Vector Tile 13 layer is loaded
    $(window).on('load', function() {
        console.log('Window loaded, checking for Vector Tile 13 layer...');
        
        const maxAttempts = 10;
        let attempts = 0;
        
        const checkLayer = setInterval(function() {
            attempts++;
            console.log(`Checking for Vector Tile 13 layer (attempt ${attempts}/${maxAttempts})`);
            
            if (window.config && window.config.layers) {
                const vectorTileLayer = window.config.layers.find(layer => layer.get('title') === 'Vector Tile 13');
                if (vectorTileLayer) {
                    clearInterval(checkLayer);
                    console.log('Found Vector Tile 13 layer, setting up debug logging...');
                    logFeatureProperties('Vector Tile 13');
                    
                    // Log when the layer's visibility changes
                    vectorTileLayer.on('change:visible', function() {
                        console.log(`Vector Tile 13 layer visibility changed to: ${vectorTileLayer.getVisible()}`);
                    });
                }
            }
            
            if (attempts >= maxAttempts) {
                clearInterval(checkLayer);
                console.error('Vector Tile 13 layer not found after maximum attempts');
            }
        }, 500);
    });
});