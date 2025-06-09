/* global config, ol */
$(function () {
    // --- Layer Searcher Integration ---
    // Remove early addition of 'Translated' overlay group here. It will be added after all overlays are loaded.

    // 1. Flatten base layers into window.layers
    window.layers = [];
    if (config && Array.isArray(config.layers)) {
        window.layers = config.layers.filter(function(layerGroup) {
            return layerGroup.get && layerGroup.get('type') !== 'overlay';
        }).map(function(layerGroup) {
            return {
                title: layerGroup.get('title') || '',
                group: layerGroup.get('group') || '',
                id: layerGroup.get('id') || '',
                _olLayerGroup: layerGroup
            };
        });
    }

    // 2. Define window.renderLayerList
    window.renderLayerList = function(filtered, query) {
        var $list = $('#layer-list');
        if (!$list.length) {
            $list = $('<div id="layer-list"></div>');
            $('#menu').find('#layer-search-container').after($list);
        }
        $list.empty();
        if (!query || !filtered || !filtered.length) {
            // Only show message if there is a query
            if (query && (!filtered || !filtered.length)) {
                $list.append('<div style="padding:8px;color:#888;">No layers found.</div>');
            }
            return;
        }
        var activeLayer = null;
        $.each(config.layers, function(indexLayer, layerGroup) {
            if (layerGroup.get && layerGroup.get('type') !== 'overlay' && layerGroup.getVisible && layerGroup.getVisible()) {
                activeLayer = layerGroup;
            }
        });
        filtered.forEach(function(layer, idx) {
            var isActive = activeLayer && ((layer.id && activeLayer.get('id') === layer.id) || (activeLayer.get('title') === layer.title && activeLayer.get('group') === layer.group));
            var $item = $('<div>').addClass('layer-list-item').text((layer.group ? layer.group + ': ' : '') + layer.title);
            if (isActive) $item.addClass('active').attr('tabindex', 0);
            $item.css({cursor:'pointer'}).on('click', function() {
                window.activateLayer(layer);
            });
            $list.append($item);
            if (isActive) {
                setTimeout(function(){
                    $item[0].scrollIntoView({block:'nearest'});
                }, 0);
            }
        });
    };

    // Render all layers initially
    $(document).ready(function() {
        window.renderLayerList(window.layers);
    });

    // Function to update window.overlays with translated overlay groups
    function updateWindowOverlays() {
        if (!window.overlays || !Array.isArray(window.overlays)) return;
        
        // Update the translated overlay group
        window.overlays = window.overlays.map(overlay => {
            if (overlay.group === 'Translated') {
                return {
                    ...overlay,
                    group: i18n.t('overlays.translated')
                };
            }
            return overlay;
        });
    }

    // Update overlays when they change
    window.addEventListener('overlaysUpdated', function() {
        // Overlays are updated by overlays/index.js
        updateTranslatedOverlayGroup();
        if (window.renderOverlayList) {
            window.renderOverlayList(window.overlays);
        }
    });

    // Function to apply Shortbread style to the vector tile layer
    function applyVectorTileStyle() {
        console.log('Starting applyVectorTileStyle function');
        
        // Check if olms is available
        if (typeof olms === 'undefined') {
            console.error('olms (ol-mapbox-style) library is not loaded. Make sure it is included before this script.');
            return Promise.reject('olms not loaded');
        }
        
        return new Promise((resolve, reject) => {
            try {
                // Find the Shortbread Style layer
                const vectorLayer = config.layers.find(layer => 
                    layer.get('title') === 'Shortbread Style'
                );

                if (!vectorLayer) {
                    console.error('Shortbread Style layer not found');
                    return reject('Layer not found');
                }
                
                // Make the layer visible
                vectorLayer.setVisible(true);
                
                // Define the style URL
                const styleUrl = 'https://shortbread-tiles.org/styles/shortbread/light/style.json';
                
                console.log('Fetching style from:', styleUrl);
                
                // Fetch the style JSON
                fetch(`https://cors-anywhere.herokuapp.com/${styleUrl}`, {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(styleJson => {
                    console.log('Successfully fetched style JSON');
                    
                    // Apply the style using olms.applyStyle
                    olms.applyStyle(
                        vectorLayer,
                        styleJson,
                        'openmaptiles',
                        {
                            transformRequest: (url, resourceType) => {
                                console.log(`Processing ${resourceType} URL:`, url);
                                
                                // Skip processing for data URLs
                                if (url.startsWith('data:')) {
                                    return { url };
                                }
                                
                                // Handle MapTiler URLs
                                if (url.includes('api.maptiler.com')) {
                                    const separator = url.includes('?') ? '&' : '?';
                                    const newUrl = `${url}${separator}key=zPfUiHM0YgsZAlrKRPNg`;
                                    return { url: newUrl };
                                }
                                
                                // Use CORS proxy for other HTTP/HTTPS URLs
                                if (url.startsWith('http')) {
                                    const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`.replace('//', '/');
                                    return { 
                                        url: proxyUrl,
                                        headers: {
                                            'X-Requested-With': 'XMLHttpRequest'
                                        }
                                    };
                                }
                                
                                return { url };
                            }
                        }
                    )
                    .then(() => {
                        console.log('Successfully applied Shortbread style');
                        vectorLayer.changed();
                        if (map) {
                            map.renderSync();
                        }
                        resolve();
                    })
                    .catch(error => {
                        console.error('Error applying style with olms:', error);
                        reject(error);
                    });
                })
                .catch(error => {
                    console.error('Error fetching style JSON:', error);
                    reject(error);
                });
                
            } catch (error) {
                console.error('Error in applyVectorTileStyle:', error);
                reject(error);
            }
        });
    }

    // Simple fallback style
    function applyFallbackStyle(layer) {
        try {
            console.log('Applying fallback style to layer');
            
            // Create a simple style
            const style = new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(200, 200, 200, 0.5)'
                }),
                stroke: new ol.style.Stroke({
                    color: '#3399CC',
                    width: 1.25
                })
            });
            
            // Apply the style
            layer.setStyle(style);
            
            // Force a re-render
            layer.changed();
            if (map) {
                map.renderSync();
            }
            
            console.log('Fallback style applied successfully');
            
        } catch (error) {
            console.error('Error applying fallback style:', error);
        }
    }

    // Add style selector to the layer control
    function addStyleSelector(styles, currentStyle, onChange) {
        try {
            // Check if the selector already exists
            if (document.getElementById('style-selector-container')) {
                console.log('Style selector already exists');
                return;
            }

            console.log('Adding style selector with styles:', styles);
            
            // Create container
            const container = document.createElement('div');
            container.id = 'style-selector-container';
            container.style.margin = '10px';
            container.style.padding = '5px';
            
            // Create label
            const label = document.createElement('label');
            label.htmlFor = 'style-selector';
            label.textContent = 'Map Style: ';
            label.style.marginRight = '5px';
            label.style.color = '#fff'; // White text for dark theme
            
            // Create select element
            const select = document.createElement('select');
            select.id = 'style-selector';
            select.style.padding = '3px';
            select.style.borderRadius = '3px';
            select.style.border = '1px solid #666';
            select.style.backgroundColor = '#333';
            select.style.color = '#fff';
            
            // Add options
            Object.entries(styles).forEach(([id, url]) => {
                const option = document.createElement('option');
                option.value = id;
                option.textContent = id.charAt(0).toUpperCase() + id.slice(1); // Capitalize first letter
                option.selected = id === currentStyle;
                select.appendChild(option);
            });
            
            // Add change event listener
            select.addEventListener('change', (e) => {
                const selectedId = e.target.value;
                console.log('Selected style changed to:', selectedId);
                if (onChange && typeof onChange === 'function') {
                    onChange(selectedId);
                }
            });
            
            // Append elements
            container.appendChild(label);
            container.appendChild(select);
            
            // Add to the layers control
            const layersControl = document.querySelector('.layers-control');
            if (layersControl) {
                layersControl.insertBefore(container, layersControl.firstChild);
                console.log('Style selector added to layers control');
            } else {
                console.warn('Layers control not found, cannot add style selector');
            }
            
        } catch (error) {
            console.error('Error adding style selector:', error);
        }
    }

    // Function to initialize the map with Shortbread style
    function initializeMapWithShortbread() {
        console.log('Initializing map with Shortbread style');
        
        try {
            // Find the Shortbread Style layer
            const vectorLayer = config.layers.find(layer => 
                layer.get('title') === 'Shortbread Style'
            );

            if (!vectorLayer) {
                console.error('Shortbread Style layer not found');
                return;
            }
            
            console.log('Found vector layer:', vectorLayer);
            
            // Make sure the layer is visible
            vectorLayer.setVisible(true);
            
            // Define available styles
            const shortbreadStyles = {
                'light': 'https://shortbread-tiles.org/styles/shortbread/light/style.json',
                'dark': 'https://shortbread-tiles.org/styles/shortbread/dark/style.json'
            };
            
            // Add style selector
            addStyleSelector(shortbreadStyles, 'light', (styleId) => {
                console.log('Style changed to:', styleId);
                // Re-apply the style with the new selection
                applyVectorTileStyle(styleId)
                    .catch(error => {
                        console.error('Error applying style:', error);
                        applyFallbackStyle(vectorLayer);
                    });
            });
            
            // Apply the style
            applyVectorTileStyle()
                .then(() => {
                    console.log('Shortbread style applied successfully');
                })
                .catch(error => {
                    console.error('Error applying Shortbread style:', error);
                    console.log('Applying fallback style instead');
                    applyFallbackStyle(vectorLayer);
                });
                
        } catch (error) {
            console.error('Error initializing map with Shortbread style:', error);
        }
    }

    // Initialize the map with Shortbread style after a short delay to ensure everything is loaded
    setTimeout(() => {
        initializeMapWithShortbread();
    }, 1000);

    // Add other map initialization code here...
    // (Keep all the existing map initialization code below)
});
