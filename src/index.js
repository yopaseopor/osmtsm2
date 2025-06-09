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
                    $item.focus();
                }, 10);
            }
        });
    };


    // Render all layers initially
    $(document).ready(function() {
        window.renderLayerList(window.layers);
    });
    // --- End Layer Searcher Integration ---

    // --- Overlay Searcher Integration ---
    // 1. Initialize window.allOverlays
    // window.allOverlays is initialized in overlays/index.js and overlays are imported as arrays, not functions.
    // Do not re-initialize overlays here. Use window.allOverlays as the source of truth.
    if (!window.allOverlays) {
        console.error('window.allOverlays is not defined. Make sure overlays/index.js is loaded before index.js.');
        window.allOverlays = {};
    }
    window.overlays = [];
    function updateWindowOverlays() {
        // Only flatten overlays for the overlay searcher
        window.overlays = Object.entries(window.allOverlays).reduce((acc, [groupName, overlays]) => {
            if (Array.isArray(overlays)) {
                return acc.concat(overlays.map(overlay => ({
                    // Use already translated values
                    title: overlay.title || '',
                    group: overlay.group || '',
                    id: overlay.id || '',
                    ...overlay
                })));
            }
            return acc;
        }, []);
    }

    // Update overlays when they change
    window.addEventListener('overlaysUpdated', function() {
        // Overlays are updated by overlays/index.js
        updateTranslatedOverlayGroup();
        if (window.updateTranslations) window.updateTranslations();
        updateWindowOverlays(); // Refresh overlays for searcher
        if (window.renderOverlayList && window.overlays) window.renderOverlayList(window.overlays);
    });

    // Initial update
    updateWindowOverlays();

    // 2. Define window.renderOverlayList
    window.renderOverlayList = function(filtered, query) {
        var $list = $('#overlay-list');
        $list.empty();
        // (Removed: clear overlay button is now a map control, not injected here)

        var $list = $('#overlay-list');
        $list.empty();
        if (!query || !filtered || !filtered.length) {
            if (query && (!filtered || !filtered.length)) {
                $list.append('<div style="padding:8px;color:#888;">No overlays found.</div>');
            }
            return;
        }
        var activeOverlay = null;
        
        // Group overlays by normalized group name to avoid duplicates
        var groupMap = {};
        
        // Process all overlays and organize them by group
        filtered.forEach(function(overlay) {
            if (!overlay.group) return;
            
            // Normalize group name (lowercase for comparison)
            var normalizedGroup = overlay.group.toLowerCase();
            
            // Initialize group if not exists
            if (!groupMap[normalizedGroup]) {
                groupMap[normalizedGroup] = {
                    displayName: overlay.group, // Keep original case for display
                    overlays: []
                };
            }
            
            // Add overlay to group if not already present
            if (!groupMap[normalizedGroup].overlays.some(o => o.title === overlay.title)) {
                groupMap[normalizedGroup].overlays.push(overlay);
            }
        });
        
        // Group overlays by first letter only, show max 10 per letter
        var letterMap = {};
        
        // Convert grouped overlays to flat list for display, prioritizing translated groups
        Object.values(groupMap).forEach(function(group) {
            group.overlays.forEach(function(overlay) {
                var titleOrGroup = (overlay.title || group.displayName || '').trim();
                var firstLetter = titleOrGroup.charAt(0) ? titleOrGroup.charAt(0).toUpperCase() : '_';
                if (!letterMap[firstLetter]) letterMap[firstLetter] = [];
                if (letterMap[firstLetter].length < 10) {
                    // Use the normalized group display name for consistency
                    var displayOverlay = {...overlay, group: group.displayName};
                    letterMap[firstLetter].push(displayOverlay);
                }
            });
        });
        
        // Render overlays (max 10 per letter)
        Object.keys(letterMap).sort().forEach(function(letter) {
            letterMap[letter].forEach(function(overlay) {
                var isActive = activeOverlay && ((overlay.id && activeOverlay.get('id') === overlay.id) || (activeOverlay.get('title') === overlay.title && activeOverlay.get('group') === overlay.group));
                var $item = $('<div>').addClass('overlay-list-item').css({
                    'display': 'flex',
                    'align-items': 'center',
                    'padding': '5px',
                    'cursor': 'pointer'
                });
                
                // Add icon if available
                if (overlay.iconSrc) {
                    $item.append($('<img>')
                        .attr('src', overlay.iconSrc)
                        .attr('alt', '')
                        .css({
                            'max-width': '30px',
                            'max-height': '30px',
                            'width': 'auto',
                            'height': 'auto',
                            'margin-right': '10px',
                            'vertical-align': 'middle'
                        })
                    );
                }
                
                // Add text
                $item.append($('<span>').text((overlay.group ? overlay.group + ': ' : '') + overlay.title));
                
                if (isActive) $item.addClass('active').attr('tabindex', 0);
                $item.on('click', function() {
                    window.activateOverlay(overlay);
                });
                $list.append($item);
                if (isActive) {
                    setTimeout(function(){
                        $item[0].scrollIntoView({block:'nearest'});
                        $item.focus();
                    }, 10);
                }
            });
        });
    };



    // Toggle the chosen overlay independently
    window.activateOverlay = function(overlay) {
        // Toggle visibility of the selected overlay (by id or by group/title)
        $.each(config.layers, function(indexLayer, layerGroup) {
            if (layerGroup.get && layerGroup.get('type') === 'overlay') {
                $.each(layerGroup.getLayers().getArray(), function(idx, olayer) {
                    if ((overlay.id && olayer.get('id') === overlay.id) ||
                        (olayer.get('title') === overlay.title && olayer.get('group') === overlay.group)) {
                        olayer.setVisible(!olayer.getVisible());
                    }
                });
            }
        });
        // Update the overlay list UI with all overlays
        if (window.renderOverlayList) {
            window.renderOverlayList(window.overlays, '');
        }
    };

    // Render all overlays initially
    $(document).ready(function() {
        window.renderOverlayList(window.overlays);
    });
    // --- End Overlay Searcher Integration ---


	$('#map').empty(); // Remove Javascript required message
	var baseLayerIndex = 0;
	
	//Object to manage the spinner layer
	var loading = {
		init: function () {
			this.count = 0;
			this.spinner = $('<div>').addClass('ol-control osmcat-loading').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
			$('#map').append(this.spinner);
		},
		show: function () {
			this.spinner.show();
			++this.count;
		},
		hide: function () {
			--this.count;
			if (this.count < 1) {
				this.spinner.hide();
				this.count = 0;
			}
		}
	};
	loading.init();

	var overlaysTemp = {};
	$.each(config.overlays, function (index, overlay) {
		var layerGroup = overlay['group'],
				vectorProperties = overlay,
				vector;

		if (overlay['geojson'] !== undefined) {
      var vectorSource = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: overlay['geojson']
      })
    } else {
			var vectorSource = new ol.source.Vector({ 
			format: new ol.format.OSMXML2(),
			loader: function (extent, resolution, projection) {
				loading.show();
				var me = this;
				var epsg4326Extent = ol.proj.transformExtent(extent, projection, 'EPSG:4326');
				var query = '[maxsize:536870912];' + overlay['query']; // Memory limit 512 MiB
				//var query = layerQuery;
				query = query.replace(/{{bbox}}/g, epsg4326Extent[1] + ',' + epsg4326Extent[0] + ',' + epsg4326Extent[3] + ',' + epsg4326Extent[2]);

				var client = new XMLHttpRequest();
				client.open('POST', config.overpassApi());
				client.onloadend = function () {
					loading.hide();
				};
				client.onerror = function () {
					console.error('[' + client.status + '] Error loading data.');
					me.removeLoadedExtent(extent);
					vector.setVisible(false);
				};
				client.onload = function () {
					if (client.status === 200) {
						var xmlDoc = $.parseXML(client.responseText),
								xml = $(xmlDoc),
								remark = xml.find('remark'),
								nodosLength = xml.find('node').length;

						if (remark.length !== 0) {
							console.error('Error:', remark.text());
							$('<div>').html(remark.text()).dialog({
								modal: true,
								title: 'Error',
								close: function () {
									$(this).dialog('destroy');
								}
							});
							client.onerror.call(this);
						} else {
							console.log('Nodes Found:', nodosLength);
							if (nodosLength === 0) {
								$('<div>').html(config.i18n.noNodesFound).dialog({
									modal: true,
									//title: 'Error',
									close: function () {
										$(this).dialog('destroy');
									}
								});
							}
							var features = new ol.format.OSMXML2().readFeatures(xmlDoc, {
								featureProjection: map.getView().getProjection()
							});
							me.addFeatures(features);
						}
					} else {
						client.onerror.call(this);
					}
				};
				client.send(query);
			},
			strategy: ol.loadingstrategy.bbox
		});
	}
		vectorProperties['source'] = vectorSource;
		vectorProperties['visible'] = false;

		vector = new ol.layer.Vector(vectorProperties);

		if (overlaysTemp[layerGroup] !== undefined) {
			overlaysTemp[layerGroup].push(vector);
		} else {
			overlaysTemp[layerGroup] = [vector];
		}
	});

	$.each(overlaysTemp, function (index, value) {
		var layerGroup = new ol.layer.Group({
			title: index,
			type: 'overlay',
			layers: value
		});
		config.layers.push(layerGroup);
	});

	var round = function (value, decimals) {
	  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
	};
	//Permalink
	var vars = {},
		getUrlParam = function(param, defaultValue) {
			var r = vars[param];
			if (typeof r === 'undefined') {
				r = defaultValue;
			}
			return r;
		};

	if (window.location.hash !== '') {
		window.location.hash.replace(/[#?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
			vars[key] = value;
		});
		
		

		// map = zoom, center (lon, lat), [rotation]
		var mapParam = getUrlParam('map', ''), parts;
		if (mapParam !== '') {
			parts = mapParam.split('/');
			config.initialConfig.zoom = parseFloat(parts[0]);
			config.initialConfig.lat = parseFloat(parts[1]);
			config.initialConfig.lon = parseFloat(parts[2]);
			if (typeof parts[3] !== 'undefined') {
				config.initialConfig.rotation = parseFloat(parts[3]);
			}
		}

		// base = index
		var baseParam = parseInt(getUrlParam('base', 0), 10);
		$.each(config.layers, function(indexLayer, layer) {
			if (layer.get('type') === 'overlay') {
				// overlays
				var overlayParam = getUrlParam(layer.get('title'), '');
				$.each(layer.getLayers().getArray(), function (overlayIndex, overlayValue) {
					overlayValue.setVisible(!!parseInt(overlayParam.charAt(overlayIndex)));
				});
			} else {
				// overlays
				if (indexLayer === baseParam) {
					layer.setVisible(true);
				} else {
					layer.setVisible(false);
				}
			}
		});

	}

	var view = new ol.View({
		center: ol.proj.fromLonLat([config.initialConfig.lon, config.initialConfig.lat]), // Transform coordinate from EPSG:3857 to EPSG:4326
		rotation: config.initialConfig.rotation,
		zoom: config.initialConfig.zoom
	});

	// Create map with all layers
const map = new ol.Map({
    layers: config.layers,
    target: 'map',
    view: view
});

// Store map in window for debugging
window.map = map;

// Function to apply Shortbread style to the vector tile layer
function applyVectorTileStyle() {
    console.log('Starting applyVectorTileStyle function');
    
    // Check if olms is available
    if (typeof olms === 'undefined') {
        console.error('olms (ol-mapbox-style) library is not loaded. Make sure it is included before this script.');
        return;
    }
    
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
        
        // Simple style for testing
        const simpleStyle = new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(200, 200, 200, 0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: '#3399CC',
                width: 1.25
            })
        });
        
        // Apply the simple style immediately
        vectorLayer.setStyle(simpleStyle);
        console.log('Applied simple style to vector layer');
        
        // Available Shortbread styles
        const shortbreadStyles = {
            'light': 'https://shortbread-tiles.org/styles/shortbread/light/style.json',
            'dark': 'https://shortbread-tiles.org/styles/shortbread/dark/style.json'
        };

        // Default to light style
        const selectedStyle = 'light';
        const styleUrl = shortbreadStyles[selectedStyle];
        
        // Only apply style if the layer is visible
        const checkAndApplyStyle = () => {
            if (vectorLayer.getVisible()) {
                console.log(`Applying Shortbread ${selectedStyle} style from: ${styleUrl}`);
                
                // First, fetch the style JSON directly using a CORS proxy
                const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
                fetch(proxyUrl + styleUrl, { 
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                })
                .then(response => {
                    console.log('Style fetch response status:', response.status);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                    .then(styleJson => {
                        console.log('Successfully fetched style JSON');
                        
                        // Create a deep copy of the style to avoid modifying the original
                        const style = JSON.parse(JSON.stringify(styleJson));
                        
                        // Modify the sprite and glyphs URLs to use CORS proxy
                        if (style.sprite) {
                            style.sprite = `https://cors-anywhere.herokuapp.com/${style.sprite}`.replace('//', '/');
                            console.log('Updated sprite URL:', style.sprite);
                        }
                        
                        if (style.glyphs) {
                            style.glyphs = `https://cors-anywhere.herokuapp.com/${style.glyphs}`.replace('//', '/');
                            console.log('Updated glyphs URL:', style.glyphs);
                        }
                        
                        // Define the transformRequest function
                        const transformRequest = (url, resourceType) => {
                            console.log(`Transform request for ${resourceType || 'resource'} URL:`, url);
                            
                            // Skip processing for data URLs
                            if (url.startsWith('data:')) {
                                console.log('Skipping data URL');
                                return { url };
                            }
                            
                            // Handle MapTiler tiles and resources
                            if (url.includes('api.maptiler.com')) {
                                const separator = url.includes('?') ? '&' : '?';
                                const newUrl = `${url}${separator}key=zPfUiHM0YgsZAlrKRPNg`;
                                console.log('Transformed MapTiler URL:', newUrl);
                                
                                // For sprites and fonts, we need to use the CORS proxy
                                if (resourceType === 'SpriteImage' || resourceType === 'Glyphs') {
                                    const proxyUrl = `https://cors-anywhere.herokuapp.com/${newUrl}`.replace('//', '/');
                                    console.log(`Proxying ${resourceType} URL:`, proxyUrl);
                                    return { 
                                        url: proxyUrl,
                                        headers: {
                                            'X-Requested-With': 'XMLHttpRequest'
                                        }
                                    };
                                }
                                
                                return { url: newUrl };
                            }
                            
                            // Handle other HTTP/HTTPS URLs with CORS proxy
                            if (url.startsWith('http')) {
                                // Don't proxy URLs that are already using the proxy
                                if (url.includes('cors-anywhere.herokuapp.com')) {
                                    console.log('URL already uses CORS proxy, using as-is');
                                    return { url };
                                }
                                
                                const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`.replace('//', '/');
                                console.log(`Proxying ${resourceType || 'resource'} URL:`, proxyUrl);
                                return { 
                                    url: proxyUrl,
                                    headers: {
                                        'X-Requested-With': 'XMLHttpRequest',
                                        'Accept': resourceType === 'Glyphs' ? 'application/octet-stream' : '*/*'
                                    }
                                };
                            }
                            
                            console.log('Returning URL as-is');
                            return { url };
                        };
                        
                        console.log('Applying style with olms.applyStyle...');
                        
                        // Make sure the layer is visible before applying the style
                        if (!vectorLayer.getVisible()) {
                            console.log('Making vector layer visible before applying style');
                            vectorLayer.setVisible(true);
                        }
                        
                        // Apply the style with transformRequest
                        return new Promise((resolve, reject) => {
                            try {
                                console.log('Starting olms.applyStyle with style:', styleJson);
                                
                                olms.applyStyle(
                                    vectorLayer, 
                                    styleJson, 
                                    'openmaptiles', 
                                    {
                                        transformRequest: transformRequest,
                                        getFonts: (fontStack) => {
                                            console.log('Getting fonts for:', fontStack);
                                            return ['Noto Sans Regular', 'Arial Unicode MS Regular', 'Open Sans Regular'];
                                        }
                                    }
                                ).then(() => {
                                    console.log('Successfully applied Shortbread style');
                                    
                                    // Force a refresh of the layer
                                    vectorLayer.changed();
                                    if (map) {
                                        console.log('Triggering map render after style application');
                                        map.renderSync();
                                    }
                                    
                                    // Update the style URL in the layer's metadata
                                    const metadata = vectorLayer.get('metadata') || {};
                                    metadata['style-url'] = styleUrl;
                                    vectorLayer.set('metadata', metadata);
                                    
                                    resolve();
                                }).catch(error => {
                                    console.error('Error in olms.applyStyle:', error);
                                    reject(error);
                                });
                                
                            } catch (error) {
                                console.error('Error setting up olms.applyStyle:', error);
                                reject(error);
                            }
                        }).then(() => {
                            console.log('Style application completed successfully');
                            
                            // Add style selector to the layer control (only once)
                            if (!window.styleSelectorAdded) {
                                addStyleSelector(shortbreadStyles, selectedStyle, (newStyle) => {
                                    if (newStyle !== selectedStyle) {
                                        console.log(`Changing to ${newStyle} style...`);
                                        const newStyleUrl = shortbreadStyles[newStyle];
                                        
                                        // Update the selected style
                                        selectedStyle = newStyle;
                                        
                                        // Update the style URL in the layer's metadata
                                        const metadata = vectorLayer.get('metadata') || {};
                                        metadata['style-url'] = newStyleUrl;
                                        vectorLayer.set('metadata', metadata);
                                        
                                        // Re-apply the style with the new URL
                                        applyVectorTileStyle();
                                    }
                                });
                                window.styleSelectorAdded = true;
                            }
                                
                                fetch(`https://cors-anywhere.herokuapp.com/${newStyleUrl}`, {
                                    headers: {
                                        'X-Requested-With': 'XMLHttpRequest'
                                    }
                                })
                                .then(response => response.json())
                                .then(styleJson => {
                                    console.log(`Fetched ${newStyle} style`);
                                    
                                    // Create a deep copy of the style
                                    const style = JSON.parse(JSON.stringify(styleJson));
                                    
                                    // Update URLs with CORS proxy
                                    if (style.sprite) {
                                        style.sprite = `https://cors-anywhere.herokuapp.com/${style.sprite}`.replace('//', '/');
                                    }
                                    if (style.glyphs) {
                                        style.glyphs = `https://cors-anywhere.herokuapp.com/${style.glyphs}`.replace('//', '/');
                                    }
                                    
                                    // Re-apply the style
                                    return olms.applyStyle(
                                        vectorLayer,
                                        style,
                                        'https://api.maptiler.com/tiles/v3-openmaptiles/{z}/{x}/{y}.pbf?key=zPfUiHM0YgsZAlrKRPNg',
                                        {
                                            transformRequest: (url) => {
                                                if (url.includes('api.maptiler.com') && !url.includes('key=')) {
                                                    return { 
                                                        url: `${url}${url.includes('?') ? '&' : '?'}key=zPfUiHM0YgsZAlrKRPNg`
                                                    };
                                                }
                                                if (url.startsWith('http')) {
                                                    return { 
                                                        url: `https://cors-anywhere.herokuapp.com/${url}`.replace('//', '/')
                                                    };
                                                }
                                                return { url };
                                            },
                                            getFonts: () => ['Noto Sans Regular', 'Arial Unicode MS Regular', 'Open Sans Regular']
                                        }
                                    );
                                })
                                .then(() => {
                                    console.log(`Successfully changed to ${newStyle} style`);
                                    vectorLayer.changed();
                                    map.renderSync();
                                })
                                .catch(error => {
                                    console.error(`Error changing to ${newStyle} style:`, error);
                                    applyFallbackStyle(vectorLayer);
                                });
                            }
                        });
                    })
                    .catch(error => {
                        console.error('Error applying Shortbread style:', error);
        
                        // Log additional debugging information
                        if (error.response) {
                            console.error('Error response:', {
                                status: error.response.status,
                                statusText: error.response.statusText,
                                url: error.response.url,
                                headers: error.response.headers
                            });
            
                            // Try to get the response text for more details
                            error.response.text().then(text => {
                                console.error('Error response body:', text);
                            }).catch(e => {
                                console.error('Could not read error response body:', e);
                            });
                        } else if (error.request) {
                            console.error('No response received for request:', error.request);
                        } else {
                            console.error('Error details:', error.message);
                        }
        
                        // Try to apply a basic style as fallback
                        if (vectorLayer) {
                            console.log('Applying fallback style due to error');
                            applyFallbackStyle(vectorLayer);
                        } else {
                            console.error('Vector layer not available for fallback style');
                        }
                    });
            }
        };

        // Simple fallback style
        const applyFallbackStyle = (layer) => {
            console.log('Applying fallback style');
            try {
                const style = new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: 'rgba(200, 200, 200, 0.5)'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#3399CC',
                        width: 1.25
                    }),
                    text: new ol.style.Text({
                        font: '12px Arial',
                        fill: new ol.style.Fill({
                            color: '#000000'
                        }),
                        stroke: new ol.style.Stroke({
                            color: '#FFFFFF',
                            width: 2
                        })
                    })
                });
                
                // Create a style function that applies the same style to all features
                const styleFunction = function(feature, resolution) {
                    console.log('Applying style to feature in fallback');
                    return style;
                };
                
                layer.setStyle(styleFunction);
                console.log('Successfully applied fallback style');
                
                // Force a re-render
                layer.changed();
                if (map) {
                    map.renderSync();
                }
            } catch (fallbackError) {
                console.error('Failed to apply fallback style:', fallbackError);
                
                // Last resort - try setting a minimal style directly
                try {
                    layer.setStyle(new ol.style.Style({
                        fill: new ol.style.Fill({
                            color: 'rgba(150, 150, 150, 0.5)'
                        })
                    }));
                    console.log('Applied minimal fallback style');
                } catch (e) {
                    console.error('Completely failed to apply any style:', e);
                }
            }
        };

        // Apply style when the layer becomes visible
        vectorLayer.on('change:visible', () => {
            if (vectorLayer.getVisible()) {
                checkAndApplyStyle();
            }
        });

        // Initial style application
        checkAndApplyStyle();
    } catch (error) {
        console.error('Error initializing Shortbread style:', error);
    }
}

// Add style selector to the layer control
function addStyleSelector(styles, currentStyle, onChange) {
    console.log('Adding style selector with styles:', Object.keys(styles));
    
    // Check if selector already exists
    const existingContainer = document.getElementById('style-selector-container');
    if (existingContainer) {
        console.log('Style selector already exists, updating...');
        existingContainer.remove();
    }
    
    // Create container
    const container = document.createElement('div');
    container.id = 'style-selector-container';
    container.style.margin = '10px 0';
    container.style.padding = '8px';
    container.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    container.style.borderRadius = '4px';
    container.style.boxShadow = '0 1px 5px rgba(0,0,0,0.2)';
    
    // Create label
    const label = document.createElement('label');
    label.htmlFor = 'style-selector';
    label.textContent = 'Map Style: ';
    label.style.display = 'block';
    label.style.marginBottom = '5px';
    label.style.fontWeight = 'bold';
    label.style.fontSize = '14px';
    label.style.color = '#333';
    
    // Create select element
    const select = document.createElement('select');
    select.id = 'style-selector';
    select.style.width = '100%';
    select.style.padding = '6px 8px';
    select.style.borderRadius = '4px';
    select.style.border = '1px solid #ddd';
    select.style.backgroundColor = '#fff';
    select.style.fontSize = '13px';
    select.style.cursor = 'pointer';
    select.style.boxSizing = 'border-box';
    
    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select a style...';
    defaultOption.disabled = true;
    defaultOption.selected = !currentStyle;
    select.appendChild(defaultOption);
    
    // Add style options
    Object.entries(styles).forEach(([key, value]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = key.charAt(0).toUpperCase() + key.slice(1).replace(/-/g, ' ');
        option.selected = key === currentStyle;
        select.appendChild(option);
    });
    
    // Handle style change
    select.addEventListener('change', (e) => {
        const newStyle = e.target.value;
        if (newStyle) {
            console.log('Style changed to:', newStyle);
            onChange(newStyle);
        }
    });
    
    // Add elements to container
    container.appendChild(label);
    container.appendChild(select);
    
    // Add to the layer control
    const layerControl = document.querySelector('.layers-control');
    if (layerControl) {
        // Try to insert after the layer list
        const layerList = layerControl.querySelector('.layers-list');
        if (layerList && layerList.nextSibling) {
            layerControl.insertBefore(container, layerList.nextSibling);
        } else {
            // Fallback to appending to the end
            layerControl.appendChild(container);
        }
        console.log('Added style selector to layer control');
    } else {
        console.error('Could not find layer control to add style selector');
    }
    
    return container;
}

// Function to initialize the map with Shortbread style
function initializeMapWithShortbread() {
    console.log('Initializing map with Shortbread style...');
    
    // Find the Shortbread Style layer
    const vectorLayer = config.layers.find(layer => 
        layer.get('title') === 'Shortbread Style'
    );

    if (!vectorLayer) {
        console.error('Shortbread Style layer not found during initialization');
        return;
    }
    
    // Show the layer if it's not visible
    if (!vectorLayer.getVisible()) {
        vectorLayer.setVisible(true);
    }
    
    // Apply the style
    applyVectorTileStyle();
    
    // Set up a listener for layer visibility changes
    vectorLayer.on('change:visible', function() {
        if (vectorLayer.getVisible()) {
            console.log('Shortbread layer became visible, applying style...');
            applyVectorTileStyle();
        }
    });
    
    // Set up a one-time postrender event to ensure style is applied after initial render
    map.once('postrender', function() {
        console.log('Map initial render complete, ensuring Shortbread style is applied...');
        setTimeout(() => {
            if (vectorLayer.getVisible()) {
                applyVectorTileStyle();
            }
        }, 500);
    });
}

// Initialize the map with Shortbread style after a short delay to ensure everything is loaded
setTimeout(() => {
    initializeMapWithShortbread();
}, 1000);

	// Initialize Nominatim search
	initNominatimSearch(map);

	// Initialize PanoraMax viewer
	initPanoraMaxViewer(map);

	// Initialize Mapillary viewer
	initMapillaryViewer(map);

    // Ensure window.initRouter is set after router.js loads
    if (typeof window.initRouter !== 'function' && typeof initRouter === 'function') {
        window.initRouter = initRouter;
    }

    // Always show and activate the .osmcat-router button (no random button)
    $(".osmcat-routerbutton").remove(); // Remove any previous router controls
    // Ensure the router menu is always shown and active
    if (typeof window.initRouter === 'function') {
        window.initRouter(map);
    } else {
        alert('Router module is not loaded.');
    }
    $('.osmcat-menu').addClass('router-active');
    $('.osmcat-router').addClass('active');


	var layersControlBuild = function () {
		var visibleLayer,
			previousLayer,
			layerIndex = 0,
			overlayIndex = 0,
			container = $('<div>').addClass('osmcat-menu'),
			layerDiv = $('<div>').addClass('osmcat-layer'),
			overlaySelect = $('<select>').addClass('osmcat-select').on('change', function () {
				var overlaySelected = $(this).find('option:selected');

				container.find('.osmcat-overlay').hide();
				container.find('.' + overlaySelected.val()).show();
			}),
			overlayDiv = $('<div>').hide().addClass('osmcat-layer').append($('<div>').append(overlaySelect)),
			label = $('<div>').html('<b>&equiv; ' + config.i18n.layersLabel + '</b>').on('click', function () {
				content.toggle();
			}),
			content = $('<div>').addClass('osmcat-content');

		config.layers.forEach(layer => {
			if (layer.get('type') === 'overlay') {
				var title = layer.get('title'),
					layerButton = $('<h3>').html(title),
					overlayDivContent = $('<div>').addClass('osmcat-content osmcat-overlay overlay' + overlayIndex);

				overlaySelect.append($('<option>').val('overlay' + overlayIndex).text(title));

				layer.getLayers().forEach(overlay => {
					var overlaySrc = overlay.get('iconSrc'),
						overlayIconStyle = overlay.get('iconStyle') || '',
						title = (overlaySrc ? '<img src="' + overlaySrc + '" height="16" style="' + overlayIconStyle + '"/> ' : '') + overlay.get('title'),
						overlayButton = $('<div>').html(title).on('click', function () {
							var visible = overlay.getVisible();
							overlay.setVisible(!visible);
							updatePermalink();
						}),
						checkbox = $('<input type="checkbox">').css({marginRight:'6px'});
					checkbox.prop('checked', overlay.getVisible());
					checkbox.on('change', function() {
						overlay.setVisible(this.checked);
						updatePermalink();
					});
					overlayButton.prepend(checkbox);
					overlay.on('change:visible', function () {
						checkbox.prop('checked', overlay.getVisible());
						if (overlay.getVisible()) {
							overlayButton.addClass('active');
						} else {
							overlayButton.removeClass('active');
						}
					});
					overlayDivContent.append(overlayButton);
				});
				overlayDiv.append(overlayDivContent);
				overlayDiv.show();
				overlayIndex++;
			} else {
				var layerSrc = layer.get('iconSrc'),
					title = (layerSrc ? '<img src="' + layerSrc + '" height="16"/> ' : '') + layer.get('title'),
					layerButton = $('<div>').html(title).on('click', function () {
						var visible = layer.getVisible();

						if (visible) { //Show the previous layer
							if (previousLayer) {
								baseLayerIndex = previousLayer.get('layerIndex');
								layer.setVisible(!visible);
								previousLayer.setVisible(visible);
								visibleLayer = previousLayer;
								previousLayer = layer;
							}
						} else { //Active the selected layer and hide the current layer
							baseLayerIndex = layer.get('layerIndex');
							layer.setVisible(!visible);
							visibleLayer.setVisible(visible);
							previousLayer = visibleLayer;
							visibleLayer = layer;
						}
						updatePermalink();
					});

					layer.set('layerIndex', layerIndex);

					// Add checkbox for enabling/disabling layer
					var checkbox = $('<input type="checkbox">').css({marginRight:'6px'});
					checkbox.prop('checked', layer.getVisible());
					checkbox.on('change', function() {
						layer.setVisible(this.checked);
					});
					layerButton.prepend(checkbox);

					content.append(layerButton);
					layer.on('change:visible', function () {
						checkbox.prop('checked', layer.getVisible());
						if (layer.getVisible()) {
							layerButton.addClass('active');
						} else {
							layerButton.removeClass('active');
						}
					});
				layerIndex++;
			}
		});
		layerDiv.append(label, content);
		container.append(layerDiv, overlayDiv);
		overlaySelect.trigger('change');

		return container;
	};

    $('#menu').append(layersControlBuild());
    // Optionally, re-render layers after layersControl if needed
    if (window.renderLayerList && window.layers) window.renderLayerList(window.layers);
    // Optionally, re-render overlays after overlaysControl if needed
    if (window.renderOverlayList && window.overlays) window.renderOverlayList(window.overlays);

	map.addControl(new ol.control.MousePosition({
		coordinateFormat: function (coordinate) {
			return ol.coordinate.format(coordinate, '[{y}, {x}]', 5);
		},
		projection: 'EPSG:4326'
	}));
	map.addControl(new ol.control.ScaleLine({units: config.initialConfig.units}));
	map.addControl(new ol.control.ZoomSlider());
	



	// Geolocation Control
	// In some browsers, this feature is available only in secure contexts (HTTPS)
	var geolocationControlBuild = function () {
		var container = $('<div>').addClass('ol-control ol-unselectable osmcat-geobutton').html($('<button type="button"><i class="fa fa-bullseye"></i></button>').on('click', function () {
			if (navigator.geolocation) {
				if (location.protocol !== 'https') {
					console.warn('In some browsers, this feature is available only in secure context (HTTPS)');
				}
				navigator.geolocation.getCurrentPosition(function (position) {
					var latitude = position.coords.latitude;
					var longitude = position.coords.longitude;

					view.animate({
						zoom: config.initialConfig.zoomGeolocation,
						center: ol.proj.fromLonLat([longitude, latitude])
					});
				}, function (error) {
					console.error(error.message, error);
					alert(error.message);
				});
			} else {
				console.error('Geolocation is not supported by your browser');
			}
		}));
		return container[0];
	};

	// Clear Overlay Control
	var clearOverlayControlBuild = function () {
		var container = $('<div>').addClass('ol-control ol-unselectable osmcat-clearoverlaybutton').html(
			$('<button type="button" class="clear-active-overlay-btn" title="Clear Active Overlay"><i class="fa fa-times"></i></button>').on('click', function () {
				// Hide all overlays
				$.each(config.layers, function(indexLayer, layerGroup) {
					if (layerGroup.get && layerGroup.get('type') === 'overlay') {
						$.each(layerGroup.getLayers().getArray(), function(idx, olayer) {
							if (olayer.setVisible) olayer.setVisible(false);
						});
					}
				});
				if (window.renderOverlayList) window.renderOverlayList([], '');
				$('#overlay-search').val('');
			})
		);
		return container[0];
	};

	map.addControl(new ol.control.Control({
        element: geolocationControlBuild()
    }));
    // Add Clear Overlay control just after Rotate control (if present)
    // Try to find the rotate control element and insert after it
    setTimeout(function() {
        var rotateControl = $('.ol-rotate');
        var clearOverlayControl = $(clearOverlayControlBuild());
        if (rotateControl.length) {
            rotateControl.after(clearOverlayControl);
        } else {
            // fallback: add to map as usual
            $('#map').append(clearOverlayControl);
        }
    }, 0);

	
	
	// Como crear un control
	//@@ poner un número extra a la var | var infoControlBuild2 = function () {
	//@@ revisar osmcat-infobutton2 	var container = $('<div>').addClass('ol-control ol-unselectable osmcat-infobutton2').html($('<button type="button"><i class="fa fa-search-plus"></i></button>').on('click', function () {
	//		window.location.href = 'https://mapcomplete.osm.be/index.html?userlayout=https://raw.githubusercontent.com/yopaseopor/mcquests/master/limits.json';
	//	}));
	//	return container[0];
	//};
	//map.addControl(new ol.control.Control({
	//	element: infoControlBuild2()
	//}));

	// Info Control
	var infoControlBuild = function () {
		var container = $('<div>').addClass('ol-control ol-unselectable osmcat-infobutton').html($('<button type="button"><i class="fa fa-info-circle"></i></button>').on('click', function () {
			window.location.href = 'https://github.com/yopaseopor/osmpoismap';
		}));
		return container[0];
	};
	map.addControl(new ol.control.Control({
		element: infoControlBuild()
	}));
	
	// Copy permalink button
	var permalinkControlBuild = function () {
		var container = $('<div>').addClass('ol-control ol-unselectable osmcat-sharebutton').html($('<button type="button"><i class="fa fa-share-alt-square"></i></button>').on('click', function () {
			var dummyInput = $('<input>').val(window.location.href),
				successful = false;

			$('body').append(dummyInput);
			dummyInput.focus();
			dummyInput.select();
			successful = document.execCommand('copy');
			dummyInput.remove();
			if (successful) {
				var modalDialogTimeout,
					modalDialog = $('<div>').html(config.i18n.copyDialog).dialog({
					modal: true,
					resizable: false,
					close: function () {
						clearTimeout(modalDialogTimeout);
						$(this).dialog('destroy');
					}
				});
				modalDialogTimeout = setTimeout(function(){
					modalDialog.dialog('destroy');
				}, 3000);
			}
		}));
		return container[0];
	};
	map.addControl(new ol.control.Control({
		element: permalinkControlBuild()
	}));


	// Rotate left button
	var rotateleftControlBuild = function () {
		var container = $('<div>').addClass('ol-control ol-unselectable osmcat-rotateleft').html($('<button type="button"><i class="fa fa-undo"></i></button>').on('click', function () {
			var currentRotation = view.getRotation();
			if (currentRotation > -6.1) { //360º = 2 Pi r =aprox 6.2
				view.setRotation(round(currentRotation - 0.1, 2));
			} else {
				view.setRotation(0);
			}
		}));
		return container[0];
	};
	map.addControl(new ol.control.Control({
		element: rotateleftControlBuild()
	}));

	// Rotate right button
	var rotaterightControlBuild = function () {
		var container = $('<div>').addClass('ol-control ol-unselectable osmcat-rotateright').html($('<button type="button"><i class="fa fa-repeat"></i></button>').on('click', function () {
			var currentRotation = view.getRotation();
			if (currentRotation < 6.1) { //360º = 2 Pi r =aprox 6.2
				view.setRotation(round(currentRotation + 0.1, 2));
			} else {
				view.setRotation(0);
			}
		}));
		return container[0];
	};
	map.addControl(new ol.control.Control({
		element: rotaterightControlBuild()
	}));

	$('#map').css('cursor', 'grab');
	map.on('movestart', function (evt) {
		$('#map').css('cursor', 'grabbing');
	});

	var shouldUpdate = true;
	// restore the view state when navigating through the history, see
	// https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	window.addEventListener('popstate', function(event) {
		if (event.state === null) {
			return;
		}
		map.getView().setCenter(ol.proj.fromLonLat(event.state.center));
		map.getView().setZoom(event.state.zoom);
		map.getView().setRotation(event.state.rotation);

		$.each(config.layers, function(indexLayer, layer) {
			if (layer.get('type') === 'overlay') {
				// overlays
				var overlayParam = event.state.overlay[layer.get('title')];
				if (typeof overlayParam === 'undefined') {
					overlayParam = '';
				}
				$.each(layer.getLayers().getArray(), function (overlayIndex, overlayValue) {
					overlayValue.setVisible(!!parseInt(overlayParam.charAt(overlayIndex)));
				});
			} else {
				// overlays
				if (indexLayer === event.state.baseLayer) {
					layer.setVisible(true);
				} else {
					layer.setVisible(false);
				}
			}
		});

		shouldUpdate = false;
	});

	var updatePermalink = function() {
		if (!shouldUpdate) {
			// do not update the URL when the view was changed in the 'popstate' handler
			shouldUpdate = true;
			return;
		}

		var zoom = round(view.getZoom(), 3),
			center = ol.proj.toLonLat(view.getCenter()),
			rotation = round(view.getRotation(), 2),
			overlayState = {};

		var hash = '#map=' + zoom + '/' + round(center[1], 5) + '/' + round(center[0], 5) + '/' + rotation;
		if (baseLayerIndex !== 0) {
			hash += '&base=' + baseLayerIndex;
		}

		$.each(config.layers, function(indexLayer, layer) {
			var hashOverlay = '', addHash = false;
			if (layer.get('type') === 'overlay') {
				// overlays
				$.each(layer.getLayers().getArray(), function (overlayIndex, overlayValue) {
					if (overlayValue.getVisible()) {
						hashOverlay += '1';
						addHash = true;
					} else {
						hashOverlay += '0';
					}
				});
				if (addHash) {
					hash += '&' + layer.get('title') + '=' + hashOverlay;
				}
				overlayState[layer.get('title')] = hashOverlay;
			}
		});

		var state = {
			zoom: zoom,
			center: center,
			rotation: rotation,
			baseLayer: baseLayerIndex,
			overlay: overlayState
		};

		window.history.pushState(state, 'map', hash);
	};

	map.on('moveend', function (evt) {
		$('#map').css('cursor', 'grab');
		updatePermalink();
	});

	var selectedFeature = null;
	map.on('pointermove', function (evt) {
		if (selectedFeature !== null) {
			selectedFeature.setStyle(undefined);
			selectedFeature = null;
			$('#map').css('cursor', 'grab');
		}
		map.forEachFeatureAtPixel(evt.pixel, function (feature) {
			selectedFeature = feature;
			$('#map').css('cursor', 'pointer');
			return true;
		});
	});

	map.on('singleclick', function (evt) {
		var coordinate = evt.coordinate,
				coordinateLL = ol.proj.toLonLat(coordinate),
				coordinateText = ol.coordinate.format(coordinateLL, '[{y}, {x}]', 5);
		console.log('pinMap', coordinateText);
		var pinMap = new ol.Overlay({
			element: $('<div>').addClass('osmcat-map-pin').attr('title', coordinateText).html('<i class="fa fa-map-pin"></i>')[0],
			position: coordinate
			//positioning: 'bottom-center' //BUG center no funciona correctament en la v6.1.1 -> FIX setPositioning
		});
		map.addOverlay(pinMap);
		pinMap.setPositioning('bottom-center'); //FIX bug al centrar l'element

		var popupContingut = config.onClickEvent.call(this, evt, view, coordinateLL);

		var nodeInfo = $('<div>');
		var numFeatures = 0;
		map.forEachFeatureAtPixel(evt.pixel, function (feature) {
			numFeatures++;
			nodeInfo.append(config.forFeatureAtPixel.call(this, evt, feature));
		});

		var popupContingutExtra = config.onClickEventExtra.call(this, evt, view, coordinateLL, numFeatures);

		$('<div>').html([popupContingut, nodeInfo, popupContingutExtra]).dialog({
			title: coordinateText,
			position: {my: 'left top', at: 'left bottom', of: $(pinMap.getElement())},
			close: function () {
				$(this).dialog('destroy');
				map.removeOverlay(pinMap);
			},
			focus: function () {
				$(pinMap.getElement()).animate({color: '#F00', paddingBottom: 5}, 200).animate({color: '#000', paddingBottom: 0}, 200).animate({color: '#F00', paddingBottom: 5}, 200).animate({color: '#000', paddingBottom: 0}, 200).animate({color: '#F00', paddingBottom: 5}, 200).animate({color: '#000', paddingBottom: 0}, 200);
			}
		});

	});
});

function linearColorInterpolation(colorFrom, colorTo, weight) {
	var p = weight < 0 ? 0 : (weight > 1 ? 1 : weight),
		w = p * 2 - 1,
		w1 = (w/1+1) / 2,
		w2 = 1 - w1,
		rgb = [Math.round(colorTo[0] * w1 + colorFrom[0] * w2), Math.round(colorTo[1] * w1 + colorFrom[1] * w2), Math.round(colorTo[2] * w1 + colorFrom[2] * w2)];
	return rgb;
}
