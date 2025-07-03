import { setLanguage, getCurrentLanguage, languages, updateLanguageInURL } from '../i18n/index.js';

export class LanguageSelector {
    constructor(container) {
        this.container = container;
        this.selectedLanguage = getCurrentLanguage();
        this.render();
        this.setupEventListeners();
    }

    render() {
        const currentLang = this.selectedLanguage;
        const div = document.createElement('div');
        div.className = 'language-selector';
        
        // Create select element
        const select = document.createElement('select');
        select.id = 'language-select';
        select.className = 'language-select';
        
        // Add language options
        Object.entries(languages).forEach(([code, lang]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = lang.name;
            if (code === currentLang) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        // Create reload icon button
        const applyButton = document.createElement('button');
        applyButton.id = 'language-apply';
        applyButton.className = 'language-apply';
        applyButton.title = 'Apply language and reload page';
        applyButton.innerHTML = '&#x21bb;'; // Unicode reload symbol
        applyButton.setAttribute('aria-label', 'Apply language and reload page');

        // Create a wrapper for the select and button
        const selectContainer = document.createElement('div');
        selectContainer.className = 'language-select-container';
        
        // Add button first, then select
        selectContainer.appendChild(applyButton);
        selectContainer.appendChild(select);
        
        // Add elements to the container
        div.appendChild(selectContainer);
        this.container.innerHTML = '';
        this.container.appendChild(div);
    }

    // Save the current state of overlays and layers
    saveCurrentState() {
        const state = {
            language: getCurrentLanguage(),
            overlays: {},
            layers: {},
            view: {},
            overlayGroups: {}
        };

        // Helper function to get all layers from the map
        const getAllLayers = () => {
            const layers = [];
            if (window.config && window.config.layers) {
                // Handle both ol.Collection and array
                const layerArray = window.config.layers.getArray ? 
                    window.config.layers.getArray() : 
                    (Array.isArray(window.config.layers) ? window.config.layers : []);
                
                layerArray.forEach(layer => {
                    layers.push(layer);
                    // If it's a group, add its sublayers
                    if (layer.getLayers) {
                        const sublayers = layer.getLayers().getArray ? 
                            layer.getLayers().getArray() : [];
                        layers.push(...sublayers);
                    }
                });
            }
            return layers;
        };

        // Save overlay states from all possible sources
        const allLayers = getAllLayers();
        allLayers.forEach(layer => {
            const type = layer.get('type');
            const title = layer.get('title');
            
            // Handle base layers
            if (type === 'base') {
                state.layers[title] = layer.getVisible();
                console.log(`Saving base layer ${title} visibility: ${layer.getVisible()}`);
            } 
            // Handle overlay layers and groups
            else if (type === 'overlay' || layer.overlay) {
                const overlayId = layer.overlay?.id || title;
                const isVisible = layer.getVisible();
                state.overlays[overlayId] = isVisible;
                console.log(`Saving overlay ${overlayId} visibility: ${isVisible}`);
                
                // If it's a group, save its state too
                if (layer.getLayers) {
                    const sublayers = layer.getLayers().getArray ? 
                        layer.getLayers().getArray() : [];
                    sublayers.forEach(sublayer => {
                        if (sublayer.overlay?.id) {
                            state.overlays[sublayer.overlay.id] = sublayer.getVisible();
                        }
                    });
                }
            }
        });

        // Also save from window.overlays as a fallback
        if (window.overlays && Array.isArray(window.overlays)) {
            window.overlays.forEach(overlay => {
                if (overlay && overlay.id !== undefined) {
                    const isVisible = overlay._olLayer ? overlay._olLayer.getVisible() : false;
                    state.overlays[overlay.id] = isVisible;
                    console.log(`Saving window.overlay ${overlay.id} visibility: ${isVisible}`);
                }
            });
        }

        // Save current map view
        if (window.map) {
            const view = window.map.getView();
            state.view = {
                center: view.getCenter(),
                zoom: view.getZoom()
            };
            console.log('Saving map view:', state.view);
        }

        localStorage.setItem('mapState', JSON.stringify(state));
        console.log('Saved state to localStorage:', state);
        return state;
    }

    // Helper function to find a layer by its title or ID
    findLayer(layers, titleOrId, type = null) {
        for (const layer of layers) {
            if (type && layer.get('type') !== type) continue;
            
            if (layer.get('title') === titleOrId || 
                (layer.overlay && layer.overlay.id === titleOrId) ||
                layer.get('id') === titleOrId) {
                return layer;
            }
            
            // Check sublayers if it's a group
            if (layer.getLayers) {
                const sublayers = layer.getLayers().getArray ? 
                    layer.getLayers().getArray() : [];
                const found = this.findLayer(sublayers, titleOrId, type);
                if (found) return found;
            }
        }
        return null;
    }

    // Restore the saved state
    restoreState() {
        const savedState = localStorage.getItem('mapState');
        if (!savedState) return;
        
        try {
            const state = JSON.parse(savedState);
            console.log('Restoring state:', state);
            
            // Only restore if the language hasn't changed
            if (state.language === getCurrentLanguage()) {
                let retryCount = 0;
                const maxRetries = 10; // Increased max retries
                const retryDelay = 300; // ms

                const restoreView = () => {
                    let allOverlaysRestored = true;
                    const restoredOverlays = new Set();

                    // Get all layers from the map
                    const getAllLayers = () => {
                        const layers = [];
                        if (window.config && window.config.layers) {
                            const layerArray = window.config.layers.getArray ? 
                                window.config.layers.getArray() : 
                                (Array.isArray(window.config.layers) ? window.config.layers : []);
                            
                            const processLayer = (layer) => {
                                layers.push(layer);
                                if (layer.getLayers) {
                                    const sublayers = layer.getLayers().getArray ? 
                                        layer.getLayers().getArray() : [];
                                    sublayers.forEach(processLayer);
                                }
                            };
                            
                            layerArray.forEach(processLayer);
                        }
                        return layers;
                    };

                    const allLayers = getAllLayers();

                    // Restore overlay states from state.overlays
                    if (state.overlays) {
                        Object.entries(state.overlays).forEach(([id, isVisible]) => {
                            // Try to find the layer by ID or title
                            let layer = this.findLayer(allLayers, id);
                            
                            // If not found, try to find in window.overlays
                            if (!layer && window.overlays) {
                                const overlay = window.overlays.find(o => o.id === id);
                                if (overlay?._olLayer) {
                                    overlay._olLayer.setVisible(isVisible);
                                    restoredOverlays.add(id);
                                    console.log(`Restored window.overlay ${id} visibility to ${isVisible}`);
                                    return;
                                }
                            }

                            if (layer) {
                                layer.setVisible(isVisible);
                                restoredOverlays.add(id);
                                console.log(`Restored overlay ${id} visibility to ${isVisible}`);
                                
                                // If this is a group, also set its sublayers
                                if (layer.getLayers) {
                                    const sublayers = layer.getLayers().getArray ? 
                                        layer.getLayers().getArray() : [];
                                    sublayers.forEach(sublayer => {
                                        if (sublayer.overlay?.id) {
                                            sublayer.setVisible(isVisible);
                                        }
                                    });
                                }
                            } else {
                                console.log(`Overlay ${id} not found, will retry...`);
                                allOverlaysRestored = false;
                            }
                        });
                    }

                    // Restore base layers
                    if (state.layers) {
                        Object.entries(state.layers).forEach(([title, isVisible]) => {
                            const layer = this.findLayer(allLayers, title, 'base');
                            if (layer) {
                                layer.setVisible(isVisible);
                                console.log(`Restored base layer ${title} visibility to ${isVisible}`);
                            }
                        });
                    }

                    // Restore overlay groups
                    if (state.overlayGroups) {
                        Object.entries(state.overlayGroups).forEach(([title, isVisible]) => {
                            const layer = this.findLayer(allLayers, title);
                            if (layer && layer.get('type') === 'overlay') {
                                layer.setVisible(isVisible);
                                console.log(`Restored overlay group ${title} visibility to ${isVisible}`);
                            }
                        });
                    }

                    // Restore map view
                    if (window.map && state.view && state.view.center && state.view.zoom !== undefined) {
                        const view = window.map.getView();
                        view.setCenter(state.view.center);
                        view.setZoom(state.view.zoom);
                        console.log('Restored map view:', state.view);
                    }

                    // Check if we need to retry for any missing overlays
                    const missingOverlays = state.overlays ? 
                        Object.keys(state.overlays).filter(id => !restoredOverlays.has(id)) : [];
                    
                    if (missingOverlays.length > 0 && retryCount < maxRetries) {
                        retryCount++;
                        console.log(`Retrying overlay restoration (attempt ${retryCount}/${maxRetries}) for:`, 
                            missingOverlays);
                        setTimeout(restoreView, retryDelay * retryCount);
                    } else if (missingOverlays.length > 0) {
                        console.warn('Max retries reached, some overlays may not have been restored:', 
                            missingOverlays);
                    }
                };

                // Set up overlay loaded listener
                const overlayListener = () => {
                    console.log('Overlays fully loaded, restoring state...');
                    restoreView();
                    window.removeEventListener('overlaysFullyLoaded', overlayListener);
                };

                // Set up config loaded listener in case config isn't ready yet
                const configListener = () => {
                    console.log('Config loaded, setting up overlay listener...');
                    window.addEventListener('overlaysFullyLoaded', overlayListener);
                    window.removeEventListener('configLoaded', configListener);
                };

                // Start the restoration process
                if (window.config) {
                    // If config is already loaded, set up the overlay listener
                    console.log('Config ready, waiting for overlays...');
                    window.addEventListener('overlaysFullyLoaded', overlayListener);
                } else {
                    // If config isn't loaded yet, wait for it first
                    console.log('Waiting for config to be ready...');
                    window.addEventListener('configLoaded', configListener);
                }

                // Try to restore immediately in case everything is already loaded
                restoreView();
                
                // Set a timeout to clean up the listeners
                const cleanup = () => {
                    window.removeEventListener('overlaysFullyLoaded', overlayListener);
                    window.removeEventListener('configLoaded', configListener);
                };
                
                setTimeout(cleanup, 10000); // Clean up after 10 seconds
            }
        } catch (e) {
            console.error('Error restoring state:', e);
        } finally {
            // Clean up after a delay to ensure state is restored
            setTimeout(() => {
                localStorage.removeItem('mapState');
            }, 10000); // Keep state longer to ensure it's restored
        }
    }

    setupEventListeners() {
        const select = this.container.querySelector('#language-select');
        const applyButton = this.container.querySelector('#language-apply');
        
        if (!select || !applyButton) {
            console.error('Could not find language selector elements');
            return;
        }
        
        // Update selected language when changed
        select.addEventListener('change', (e) => {
            this.selectedLanguage = e.target.value;
        });
        
        // Handle apply button click
        if (applyButton) {
            applyButton.addEventListener('click', () => {
                const newLang = this.selectedLanguage;
                if (newLang !== getCurrentLanguage()) {
                    try {
                        // Save current state before changing language
                        this.saveCurrentState();
                        
                        // Show loading state
                        this.container.classList.add('language-applying');
                        applyButton.disabled = true;
                        
                        // Small delay to show the loading animation
                        setTimeout(() => {
                            // Update URL with new language
                            updateLanguageInURL(newLang);
                            
                            // Force a full page reload to ensure everything is reinitialized
                            window.location.reload();
                        }, 300);
                    } catch (error) {
                        console.error('Error saving state before language change:', error);
                        // Still proceed with the language change even if state saving fails
                        updateLanguageInURL(newLang);
                        window.location.reload();
                    }
                }
            });
            
            // Handle Enter key on select
            select.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    applyButton.click();
                }
            });
        } else {
            console.error('Could not find language apply button');
        }
        
        // Restore state when the component is mounted
        this.restoreState();
        
        // Update selector when URL changes
        window.addEventListener('popstate', () => {
            const currentLang = getCurrentLanguage();
            if (select && select.value !== currentLang) {
                select.value = currentLang;
                this.selectedLanguage = currentLang;
            }
        });

        // Restore state when the component is mounted
        this.restoreState();
    }
} 