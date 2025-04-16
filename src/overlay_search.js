// Overlay Searcher: interactive with predictive dropdown
// Assumes overlays are available globally as window.overlays

(function() {
    // Inject overlay-search-icon CSS if not present
    if (!document.getElementById('overlay-search-icon-style')) {
        var style = document.createElement('style');
        style.id = 'overlay-search-icon-style';
        style.innerHTML = `
        .overlay-search-icon {
            width: 24px;
            height: 24px;
            object-fit: contain;
            margin-right: 8px;
            vertical-align: middle;
            display: inline-block;
        }
        `;
        document.head.appendChild(style);
    }
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
        var limited = results;
        if (!lastQuery || results.length > 10) {
            limited = results.slice(0, 10);
        }
        limited.forEach(function(overlay) {
            var opt = document.createElement('div');
            opt.className = 'overlay-search-option';
            // Add icon if present
            if (overlay.iconSrc) {
                var icon = document.createElement('img');
                icon.src = overlay.iconSrc;
                icon.alt = '';
                icon.className = 'overlay-search-icon';
                opt.appendChild(icon);
            }
            // Add title text
            var span = document.createElement('span');
            span.textContent = overlay.title;
            opt.appendChild(span);
            opt.tabIndex = 0;
            opt.addEventListener('mousedown', function(e) {
                e.preventDefault();
                searchInput.value = overlay.title;
                dropdown.style.display = 'none';
                // Toggle overlay visibility independently
                $.each(config.layers, function(indexLayer, layerGroup) {
                    if (layerGroup.get && layerGroup.get('type') === 'overlay') {
                        $.each(layerGroup.getLayers().getArray(), function(idx, olayer) {
                            if ((overlay.id && olayer.get('id') === overlay.id) ||
                                (olayer.get('title') === overlay.title && olayer.get('group') === overlay.group)) {
                                if (olayer.getVisible && olayer.getVisible()) {
                                    // If already visible, hide it
                                    olayer.setVisible(false);
                                } else {
                                    // If hidden, show it
                                    olayer.setVisible(true);
                                }
                            }
                        });
                    }
                });
                // Optionally update overlay list UI
                if (window.renderOverlayList) window.renderOverlayList([], '');
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
