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
        
        console.log('Found Vector Tile 13 layer, checking for olms...');
        
        // Make sure olms is available
        if (!window.olms) {
            console.error('olms is not available');
            return false;
        }
        
        console.log('Loading style from src/colorful.json...');
        
        // Load the style file first
        fetch('src/colorful.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(style => {
                console.log('Style loaded, applying to layer...');
                
                // Apply the style using olms
                return olms.applyStyle(
                    vectorTileLayer,
                    style,
                    'versatiles-shortbread'  // Match the source name in the style file
                );
            })
            .then(() => {
                console.log('Colorful style applied successfully to Vector Tile 13');
                // Force a refresh of the layer
                if (vectorTileLayer.getSource()) {
                    vectorTileLayer.getSource().changed();
                }
                return true;
            })
            .catch(error => {
                console.error('Error loading or applying style:', error);
                return false;
            });
    }
    
    // Try to apply the style when the window loads
    $(window).on('load', function() {
        console.log('Window loaded, waiting for map initialization...');
        
        // Give some time for the map to initialize
        const maxAttempts = 20; // Increased number of attempts
        let attempts = 0;
        
        const tryApplyStyle = setInterval(function() {
            attempts++;
            console.log(`Style application attempt ${attempts}/${maxAttempts}`);
            
            // Check if OpenLayers and olms are available
            if (window.ol && window.olms && window.config) {
                clearInterval(tryApplyStyle);
                console.log('OpenLayers and olms are ready, applying style...');
                applyColorfulStyle().then(success => {
                    if (!success) {
                        console.error('Failed to apply style, check console for errors');
                    }
                });
            } else if (attempts >= maxAttempts) {
                clearInterval(tryApplyStyle);
                console.error('Failed to apply style: OpenLayers or olms not available after maximum attempts');
                console.log('Available globals:', {
                    ol: !!window.ol,
                    olms: !!window.olms,
                    config: !!window.config
                });
            }
        }, 500);
    });
});