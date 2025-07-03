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
            view: {}
        };

        // Save overlay states
        if (window.overlays) {
            window.overlays.forEach(overlay => {
                if (overlay._olLayer) {
                    state.overlays[overlay.id] = overlay._olLayer.getVisible();
                }
            });
        }

        // Save base layer state
        if (window.config && window.config.layers) {
            window.config.layers.forEach(layer => {
                if (layer.get('type') === 'base') {
                    state.layers[layer.get('title')] = layer.getVisible();
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
        }

        localStorage.setItem('mapState', JSON.stringify(state));
        return state;
    }

    // Restore the saved state
    restoreState() {
        const savedState = localStorage.getItem('mapState');
        if (!savedState) return;
        
        try {
            const state = JSON.parse(savedState);
            
            // Only restore if the language hasn't changed
            if (state.language === getCurrentLanguage()) {
                let retryCount = 0;
                const maxRetries = 5;
                const retryDelay = 300; // ms

                const restoreView = () => {
                    let allOverlaysRestored = true;

                    // Restore overlay states
                    if (window.overlays && state.overlays) {
                        window.overlays.forEach(overlay => {
                            if (overlay._olLayer && state.overlays[overlay.id] !== undefined) {
                                overlay._olLayer.setVisible(state.overlays[overlay.id]);
                                console.log(`Restored overlay ${overlay.id} visibility to ${state.overlays[overlay.id]}`);
                            } else if (state.overlays[overlay.id] !== undefined) {
                                // If we have state for this overlay but couldn't set it, mark for retry
                                allOverlaysRestored = false;
                                console.log(`Overlay ${overlay.id} not ready, will retry...`);
                            }
                        });
                    }

                    // Restore base layer visibility
                    if (window.config && window.config.layers && state.layers) {
                        window.config.layers.forEach(layer => {
                            const title = layer.get('title');
                            if (layer.get('type') === 'base' && state.layers[title] !== undefined) {
                                layer.setVisible(state.layers[title]);
                            }
                        });
                    }

                    // Restore map view
                    if (window.map && state.view && state.view.center && state.view.zoom !== undefined) {
                        const view = window.map.getView();
                        view.setCenter(state.view.center);
                        view.setZoom(state.view.zoom);
                    }

                    // If not all overlays were restored and we haven't exceeded max retries, try again
                    if (!allOverlaysRestored && retryCount < maxRetries) {
                        retryCount++;
                        console.log(`Retrying overlay restoration (attempt ${retryCount}/${maxRetries})...`);
                        setTimeout(restoreView, retryDelay * retryCount);
                    } else if (!allOverlaysRestored) {
                        console.warn('Max retries reached, some overlays may not have been restored');
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