// Layer Searcher: interactive with predictive dropdown
// Assumes layers are available globally as window.layers (array of {title, id, group, ...})
(function() {
    const searchInput = document.getElementById('layer-search');
    const dropdown = document.getElementById('layer-search-dropdown');

    let lastResults = [];
    let lastQuery = '';

    function renderDropdown(results) {
        dropdown.innerHTML = '';
        // Check for active base layer
        var hasActiveLayer = false;
        var activeLayer = null;
        $.each(window.layers, function(indexLayer, layerObj) {
            if (layerObj._olLayerGroup && layerObj._olLayerGroup.getVisible && layerObj._olLayerGroup.getVisible()) {
                hasActiveLayer = true;
                activeLayer = layerObj;
            } else if (layerObj.getVisible && layerObj.getVisible()) {
                hasActiveLayer = true;
                activeLayer = layerObj;
            }
        });
        // Add a 'Clear Active Layer' button if a layer is active
        if (hasActiveLayer) {
            var clearBtn = document.createElement('div');
            clearBtn.textContent = config.i18n.getTranslation('clearActiveLayer');
            clearBtn.style.cursor = 'pointer';
            clearBtn.style.padding = '6px 10px';
            clearBtn.style.background = '#ffeaea';
            clearBtn.style.color = '#b00';
            clearBtn.style.fontWeight = 'bold';
            clearBtn.id = 'clear-active-layer-btn';
            clearBtn.tabIndex = 0;
            clearBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                if (activeLayer && activeLayer._olLayerGroup && activeLayer._olLayerGroup.setVisible) {
                    activeLayer._olLayerGroup.setVisible(false);
                } else if (activeLayer && activeLayer.setVisible) {
                    activeLayer.setVisible(false);
                }
                if (window.renderLayerList) window.renderLayerList([], '');
                dropdown.style.display = 'none';
                searchInput.value = '';
            });
            dropdown.appendChild(clearBtn);
        }
        if (!results.length || !searchInput.value.trim()) {
            dropdown.style.display = 'none';
            return;
        }
        // Limit results to 10
        results.slice(0, 10).forEach((layer, idx) => {
            const opt = document.createElement('div');
            opt.className = 'layer-search-option';
            
            // Add icon if available
            if (layer.iconSrc) {
                const iconImg = document.createElement('img');
                iconImg.src = layer.iconSrc;
                iconImg.alt = '';
                iconImg.className = 'layer-search-option-icon';
                iconImg.style.maxWidth = '30px';
                iconImg.style.maxHeight = '30px';
                iconImg.style.width = 'auto';
                iconImg.style.height = 'auto';
                iconImg.style.marginRight = '10px';
                iconImg.style.verticalAlign = 'middle';
                opt.appendChild(iconImg);
            }
            
            // Add layer title
            const textSpan = document.createElement('span');
            textSpan.textContent = (layer.group ? layer.group + ': ' : '') + layer.title;
            opt.appendChild(textSpan);
            opt.tabIndex = 0;

            // Opacity slider
            const slider = document.createElement('input');
            slider.type = 'range';
            slider.min = 0;
            slider.max = 100;
            slider.value = (layer._olLayerGroup && layer._olLayerGroup.getOpacity) ? Math.round(layer._olLayerGroup.getOpacity() * 100) : (layer.getOpacity ? Math.round(layer.getOpacity() * 100) : 100);
            slider.style.marginLeft = '10px';
            slider.style.verticalAlign = 'middle';
            slider.title = config.i18n.getTranslation('opacity');
            slider.addEventListener('input', function(e) {
                var val = parseInt(e.target.value, 10) / 100;
                if (layer._olLayerGroup && layer._olLayerGroup.setOpacity) {
                    layer._olLayerGroup.setOpacity(val);
                } else if (layer.setOpacity) {
                    layer.setOpacity(val);
                }
            });
            opt.appendChild(slider);

            // Layer orderer buttons
            const upBtn = document.createElement('button');
            upBtn.textContent = '↑';
            upBtn.title = config.i18n.getTranslation('moveLayerUp');
            upBtn.style.marginLeft = '10px';
            upBtn.style.cursor = 'pointer';
            upBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const idx = window.layers.indexOf(layer);
                if (idx > 0) {
                    // Swap in array
                    [window.layers[idx-1], window.layers[idx]] = [window.layers[idx], window.layers[idx-1]];
                    // Also swap in config.layers if present
                    if (window.config && Array.isArray(window.config.layers)) {
                        [window.config.layers[idx-1], window.config.layers[idx]] = [window.config.layers[idx], window.config.layers[idx-1]];
                    }
                    if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                    renderDropdown(window.layers.filter(l => l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))));
                }
            });
            opt.appendChild(upBtn);

            const downBtn = document.createElement('button');
            downBtn.textContent = '↓';
            downBtn.title = config.i18n.getTranslation('moveLayerDown');
            downBtn.style.marginLeft = '5px';
            downBtn.style.cursor = 'pointer';
            downBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const idx = window.layers.indexOf(layer);
                if (idx < window.layers.length - 1) {
                    // Swap in array
                    [window.layers[idx], window.layers[idx+1]] = [window.layers[idx+1], window.layers[idx]];
                    // Also swap in config.layers if present
                    if (window.config && Array.isArray(window.config.layers)) {
                        [window.config.layers[idx], window.config.layers[idx+1]] = [window.config.layers[idx+1], window.config.layers[idx]];
                    }
                    if (window.renderLayerList) window.renderLayerList(window.layers, searchInput.value);
                    renderDropdown(window.layers.filter(l => l.title.toLowerCase().includes(searchInput.value.toLowerCase()) || (l.group && l.group.toLowerCase().includes(searchInput.value.toLowerCase()))));
                }
            });
            opt.appendChild(downBtn);

            opt.addEventListener('mousedown', function(e) {
                // Prevent slider or orderer from triggering layer activation
                if (e.target === slider || e.target === upBtn || e.target === downBtn) return;
                e.preventDefault();
                searchInput.value = layer.title;
                dropdown.style.display = 'none';
                // Toggle layer visibility
                if (layer._olLayerGroup && layer._olLayerGroup.setVisible) {
                    layer._olLayerGroup.setVisible(!layer._olLayerGroup.getVisible());
                } else if (layer.setVisible) {
                    layer.setVisible(!layer.getVisible());
                }
                if (window.renderLayerList) window.renderLayerList([], '');
            });
            dropdown.appendChild(opt);
        });
        dropdown.style.display = 'block';
    }

    function filterAndRender(filtered, query) {
        if (window.renderLayerList) {
            window.renderLayerList(filtered, query);
        }
        renderDropdown(filtered);
        lastResults = filtered;
        lastQuery = query;
    }

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        if (query === lastQuery) return;
        const filtered = window.layers.filter(l => 
            l.title.toLowerCase().includes(query) || 
            (l.group && l.group.toLowerCase().includes(query))
        );
        filterAndRender(filtered, query);
    });

    // Handle keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const options = dropdown.querySelectorAll('.layer-search-option, #clear-active-layer-btn');
            if (!options.length) return;

            let currentIndex = Array.from(options).findIndex(opt => opt === document.activeElement);
            if (currentIndex === -1) {
                currentIndex = e.key === 'ArrowDown' ? 0 : options.length - 1;
            } else {
                currentIndex += e.key === 'ArrowDown' ? 1 : -1;
                if (currentIndex < 0) currentIndex = options.length - 1;
                if (currentIndex >= options.length) currentIndex = 0;
            }
            options[currentIndex].focus();
        } else if (e.key === 'Enter') {
            const focused = document.activeElement;
            if (focused && (focused.classList.contains('layer-search-option') || focused.id === 'clear-active-layer-btn')) {
                focused.click();
            }
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
})();
