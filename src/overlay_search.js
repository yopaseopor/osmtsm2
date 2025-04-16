// Overlay Searcher: interactive with predictive dropdown
// Assumes overlays are available globally as window.overlays

(function() {
    // Create predictive dropdown
    const searchInput = document.getElementById('overlay-search');
    const dropdown = document.createElement('div');
    dropdown.id = 'overlay-search-dropdown';
    dropdown.className = 'overlay-search-dropdown';
    searchInput.parentNode.appendChild(dropdown);

    let lastResults = [];
    let lastQuery = '';

    function renderDropdown(results) {
        dropdown.innerHTML = '';
        var hasActiveOverlay = false;
        var activeOverlay = null;
        // Check if any overlay is currently active
        $.each(config.layers, function(indexLayer, layerGroup) {
            if (layerGroup.get && layerGroup.get('type') === 'overlay') {
                $.each(layerGroup.getLayers().getArray(), function(idx, olayer) {
                    if (olayer.getVisible && olayer.getVisible()) {
                        hasActiveOverlay = true;
                        activeOverlay = olayer;
                    }
                });
            }
        });
        // Always add a 'Clear Active Overlay' button
        var clearBtn = document.createElement('div');
        clearBtn.textContent = '✖ Clear Active Overlay';
        clearBtn.style.cursor = 'pointer';
        clearBtn.style.padding = '6px 10px';
        clearBtn.style.background = '#ffeaea';
        clearBtn.style.color = '#b00';
        clearBtn.style.fontWeight = 'bold';
        clearBtn.id = 'clear-active-overlay-btn';
        clearBtn.tabIndex = 0;
        clearBtn.addEventListener('mousedown', function(e) {
            e.preventDefault();
            // Hide all overlays
            $.each(config.layers, function(indexLayer, layerGroup) {
                if (layerGroup.get && layerGroup.get('type') === 'overlay') {
                    $.each(layerGroup.getLayers().getArray(), function(idx, olayer) {
                        if (olayer.setVisible) olayer.setVisible(false);
                    });
                }
            });
            if (window.renderOverlayList) window.renderOverlayList([], '');
            dropdown.style.display = 'none';
            searchInput.value = '';
        });
        dropdown.appendChild(clearBtn);
        if (!searchInput.value || !results.length) {
            dropdown.style.display = 'none';
            return;
        }
        // Limit results to 10 overlays
        results.slice(0, 10).forEach((overlay, idx) => {
            const opt = document.createElement('div');
            opt.className = 'overlay-search-option';
            opt.textContent = overlay.group + ': ' + overlay.title;
            opt.tabIndex = 0;
            opt.addEventListener('mousedown', function(e) {
                e.preventDefault();
                searchInput.value = overlay.title;
                dropdown.style.display = 'none';
                // Check if overlay is already active
                var isActive = false;
                $.each(config.layers, function(indexLayer, layerGroup) {
                    if (layerGroup.get && layerGroup.get('type') === 'overlay') {
                        $.each(layerGroup.getLayers().getArray(), function(idx, olayer) {
                            if ((overlay.id && olayer.get('id') === overlay.id) ||
                                (olayer.get('title') === overlay.title && olayer.get('group') === overlay.group)) {
                                if (olayer.getVisible && olayer.getVisible()) {
                                    isActive = true;
                                    // Deactivate if already active
                                    olayer.setVisible(false);
                                    // Clear overlay search results from the UI
                                    if (window.renderOverlayList) window.renderOverlayList([], '');
                                }
                            }
                        });
                    }
                });
                if (!isActive) {
                    if (window.activateOverlay) {
                        // Prefer _olLayerGroup for direct activation if available
                        if (overlay._olLayerGroup) {
                            window.activateOverlay({
                                id: overlay.id,
                                title: overlay.title,
                                group: overlay.group,
                                _olLayerGroup: overlay._olLayerGroup
                            });
                        } else {
                            window.activateOverlay(overlay);
                        }
                    } else {
                        filterAndRender([overlay]);
                    }
                }
            });
            dropdown.appendChild(opt);
        });
        dropdown.style.display = 'block';
    }

    function filterAndRender(filtered, query) {
        if (window.renderOverlayList) {
            window.renderOverlayList(filtered, query);
        }
    }

    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        if (!query) {
            dropdown.style.display = 'none';
            filterAndRender([], '');
            return;
        }
        const filtered = window.overlays.filter(overlay =>
            (overlay.title && overlay.title.toLowerCase().includes(query)) ||
            (overlay.group && overlay.group.toLowerCase().includes(query))
        );
        lastResults = filtered;
        lastQuery = query;
        renderDropdown(filtered);
        filterAndRender(filtered, query);
    });

    // Keyboard navigation for dropdown
    searchInput.addEventListener('keydown', function(e) {
        if (!['ArrowDown','ArrowUp','Enter','Escape'].includes(e.key)) return;
        const opts = dropdown.querySelectorAll('.overlay-search-option');
        if (!opts.length) return;
        let idx = Array.from(opts).findIndex(opt => document.activeElement === opt);
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            opts[Math.min(idx+1, opts.length-1)].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            opts[Math.max(idx-1, 0)].focus();
        } else if (e.key === 'Enter' && idx >= 0) {
            opts[idx].dispatchEvent(new MouseEvent('mousedown'));
        } else if (e.key === 'Escape') {
            dropdown.style.display = 'none';
        }
    });

    // Hide dropdown on blur, but keep it open if the clear button is being clicked
    searchInput.addEventListener('blur', function() {
        setTimeout(function() {
            // Check if the active element is the clear button
            var clearBtn = document.getElementById('clear-active-overlay-btn');
            if (clearBtn && document.activeElement === clearBtn) {
                // Do not hide dropdown
                return;
            }
            dropdown.style.display = 'none';
        }, 100);
    });
})();
