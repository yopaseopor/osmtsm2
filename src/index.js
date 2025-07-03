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
        
        // Rebuild the layers control to update group titles
        $('.osmcat-menu').remove();
        $('#menu').prepend(layersControlBuild());
    });
    
    // Store the current UI state
    function getUIState() {
        const state = {
            // Store visible layers
            visibleLayers: window.config.layers
                .filter(layer => layer.getVisible())
                .map(layer => layer.get('title')),
            // Store expanded overlay groups
            expandedGroups: []
        };
        
        // Store which overlay groups are expanded
        $('.osmcat-menu h3').each(function() {
            const $h3 = $(this);
            const $content = $h3.next('.osmcat-content');
            if ($content.is(':visible')) {
                state.expandedGroups.push($h3.text().trim());
            }
        });
        
        return state;
    }
    
    // Restore the UI state
    function restoreUIState(state) {
        if (!state) return;
        
        // Batch layer visibility updates
        if (state.visibleLayers) {
            // First, collect all layer updates
            const updates = [];
            const layerTitles = new Map();
            
            // Create a map of layer titles to their translations
            window.config.layers.forEach(layer => {
                const layerTitle = layer.get('title');
                if (layerTitle) {
                    layerTitles.set(layerTitle, layer);
                    // Also store the translated version for matching
                    const translatedTitle = window.getTranslation ? window.getTranslation(layerTitle) : layerTitle;
                    if (translatedTitle !== layerTitle) {
                        layerTitles.set(translatedTitle, layer);
                    }
                }
            });
            
            // Process each visible layer from the state
            state.visibleLayers.forEach(visibleTitle => {
                const layer = layerTitles.get(visibleTitle);
                if (layer) {
                    updates.push({ layer, visible: true });
                } else {
                    // Try to find by translated title
                    const translatedTitle = window.getTranslation ? window.getTranslation(visibleTitle) : visibleTitle;
                    const translatedLayer = layerTitles.get(translatedTitle);
                    if (translatedLayer) {
                        updates.push({ layer: translatedLayer, visible: true });
                    }
                }
            });
            
            // Apply all visibility updates in a single batch
            updates.forEach(({ layer, visible }) => {
                layer.setVisible(visible);
            });
        }
        
        // Restore expanded groups
        if (state.expandedGroups && state.expandedGroups.length > 0) {
            // Create a set of expanded group titles for faster lookup
            const expandedGroups = new Set(state.expandedGroups);
            
            // Process each group header
            $('.osmcat-menu h3').each(function() {
                const $h3 = $(this);
                const groupTitle = $h3.text().trim();
                const $content = $h3.next('.osmcat-content');
                
                // Check if this group should be expanded
                const shouldExpand = state.expandedGroups.some(expandedTitle => 
                    groupTitle === expandedTitle || 
                    groupTitle === (window.getTranslation ? window.getTranslation(expandedTitle) : expandedTitle) ||
                    (window.getTranslation ? window.getTranslation(groupTitle) : groupTitle) === expandedTitle
                );
                
                // Use direct DOM manipulation for better performance
                $content.toggle(shouldExpand);
                $h3.toggleClass('expanded', shouldExpand);
            });
        }
    }
    
    // Listen for language changes
    window.addEventListener('languageChanged', function() {
        // Save current scroll position
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
        // Save current UI state
        const uiState = getUIState();
        
        // Temporarily hide the menu to prevent jumping
        const $menu = $('.osmcat-menu');
        const menuHeight = $menu.outerHeight();
        const $menuPlaceholder = $('<div>').css('height', menuHeight + 'px').css('visibility', 'hidden');
        $menu.after($menuPlaceholder);
        
        // Re-initialize overlays with the new language
        if (window.getAllOverlays) {
            // Update the overlays with the new language
            window.allOverlays = window.getAllOverlays();
            
            // Recreate all overlay layers
            if (window.integrateOverlays) {
                window.integrateOverlays();
            }
            
            // Update the UI in a way that minimizes jumping
            requestAnimationFrame(() => {
                // Remove the old menu
                $menu.remove();
                
                // Create the new menu off-screen
                const $newMenu = $(layersControlBuild()).css({
                    position: 'absolute',
                    left: '-9999px',
                    top: '0',
                    visibility: 'hidden'
                });
                
                // Insert the new menu
                $menuPlaceholder.after($newMenu);
                
                // Update the overlay list if the function exists
                if (window.renderOverlayList && window.overlays) {
                    window.renderOverlayList(window.overlays);
                }
                
                // Restore the UI state
                restoreUIState(uiState);
                
                // Get the new height after all updates
                const newHeight = $newMenu.outerHeight();
                
                // Update the placeholder height to match the new menu
                $menuPlaceholder.css('height', newHeight + 'px');
                
                // Show the new menu and remove the placeholder
                requestAnimationFrame(() => {
                    $newMenu.css({
                        position: '',
                        left: '',
                        top: '',
                        visibility: ''
                    });
                    
                    $menuPlaceholder.remove();
                    
                    // Restore scroll position
                    window.scrollTo(0, scrollPosition);
                });
            });
        }
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
                
                // Add text - only show the title in the selected language
                $item.append($('<span>').text(overlay.title));
                
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

	const map = new ol.Map({
		layers: config.layers,
		target: 'map',
		view: view
	});

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
				// Get the translated title, fallback to original title if translation not available
				const originalTitle = layer.get('originalTitle') || layer.get('title');
				const title = window.getTranslation ? window.getTranslation(originalTitle) : originalTitle;
				
				// Ensure the layer's title is up to date
				if (layer.get('title') !== title) {
					layer.set('title', title);
				}
				
				var layerButton = $('<h3>').html(title),
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
					overlay.on('change:visible', function() {
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
			if (typeof selectedFeature.setStyle === 'function') {
                selectedFeature.setStyle(undefined);
            }
			selectedFeature = null;
			$('#map').css('cursor', 'grab');
		}
		map.forEachFeatureAtPixel(evt.pixel, function (feature) {
			selectedFeature = feature;
			// Get the original style
			let originalStyle = feature.getStyle ? feature.getStyle() : null;
			// If the style is a plain object (from JSON), convert it
			if (originalStyle && !(originalStyle instanceof ol.style.Style)) {
				// If it's an array, convert each element
				if (Array.isArray(originalStyle)) {
					originalStyle = originalStyle.map(s => (s instanceof ol.style.Style) ? s : new ol.style.Style(s));
				} else {
					originalStyle = new ol.style.Style(originalStyle);
				}
			}
			if (feature && typeof feature.setStyle === 'function') {
				feature.setStyle(originalStyle);
			}
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
