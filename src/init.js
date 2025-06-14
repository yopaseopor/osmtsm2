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
    
    // After map is initialized, apply the colorful style to Vector Tile 13
    setTimeout(function() {
        const vectorTileLayer = window.config.layers.find(layer => layer.get('title') === 'Vector Tile 13');
        if (vectorTileLayer) {
            fetch('src/colorful.json')
                .then(response => response.json())
                .then(style => {
                    // Apply the style using ol-mapbox-style
                    olms.applyStyle(vectorTileLayer, style, 'openmaptiles')
                        .then(() => {
                            console.log('Colorful style applied successfully to Vector Tile 13');
                            // Force a refresh of the layer
                            if (vectorTileLayer.getSource()) {
                                vectorTileLayer.getSource().changed();
                            }
                        })
                        .catch(error => {
                            console.error('Error applying colorful style:', error);
                        });
                })
                .catch(error => {
                    console.error('Error loading colorful.json:', error);
                });
        }
    }, 1000); // Give some time for the map to initialize
});