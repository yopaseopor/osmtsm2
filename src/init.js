import { setLanguage, getCurrentLanguage } from './i18n/index.js';
import config from './config.js';
import { overlayConfig } from './config_overlay.js';
import './overlay_integration.js';

// Initialize configuration
window.config = config;

// Initialize overlays
window.config.overlays = overlayConfig.overlays;

// Restore map state if available
function restoreMapState() {
    try {
        const savedState = sessionStorage.getItem('mapState');
        if (savedState) {
            const { center, zoom, rotation, timestamp } = JSON.parse(savedState);
            
            // Only restore if the state is less than 1 hour old
            if (Date.now() - timestamp < 3600000) { // 1 hour in milliseconds
                // Wait for the map to be initialized
                const checkMap = setInterval(() => {
                    if (window.map && window.ol) {
                        clearInterval(checkMap);
                        const view = window.map.getView();
                        view.setCenter(window.ol.proj.fromLonLat(center));
                        view.setZoom(zoom);
                        view.setRotation(rotation || 0);
                        
                        // Restore visible layers if available
                        const visibleLayers = JSON.parse(sessionStorage.getItem('visibleLayers') || '[]');
                        if (visibleLayers.length > 0 && window.config && window.config.layers) {
                            window.config.layers.forEach(layer => {
                                const layerTitle = layer.get('title');
                                if (layerTitle) {
                                    layer.setVisible(visibleLayers.includes(layerTitle));
                                }
                            });
                        }
                        
                        // Restore expanded groups after a short delay to allow the UI to update
                        setTimeout(() => {
                            const expandedGroups = JSON.parse(sessionStorage.getItem('expandedGroups') || '[]');
                            if (expandedGroups.length > 0) {
                                document.querySelectorAll('.osmcat-menu h3').forEach(h3 => {
                                    const content = h3.nextElementSibling;
                                    if (content && content.classList.contains('osmcat-content')) {
                                        const groupTitle = h3.textContent.trim();
                                        if (expandedGroups.includes(groupTitle)) {
                                            content.style.display = '';
                                        } else {
                                            content.style.display = 'none';
                                        }
                                    }
                                });
                            }
                        }, 500);
                    }
                }, 100);
            }
            
            // Clear the saved state after restoring
            sessionStorage.removeItem('mapState');
            sessionStorage.removeItem('visibleLayers');
            sessionStorage.removeItem('expandedGroups');
        }
    } catch (e) {
        console.warn('Could not restore map state:', e);
    }
}

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
    
    // Restore map state after a short delay to ensure everything is loaded
    setTimeout(restoreMapState, 500);
}); 