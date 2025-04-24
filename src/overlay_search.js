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

        if (!searchInput.value || !results.length) {
            dropdown.style.display = 'none';
            return;
        }
        // Group overlays by first letter, limit to 10 per letter
        let letterMap = {};
        results.forEach(function(overlay) {
            var titleOrGroup = (overlay.title || overlay.group || '').trim();
            var firstLetter = titleOrGroup.charAt(0) ? titleOrGroup.charAt(0).toUpperCase() : '_';
            if (!letterMap[firstLetter]) letterMap[firstLetter] = [];
            if (letterMap[firstLetter].length < 10) {
                letterMap[firstLetter].push(overlay);
            }
        });
        Object.keys(letterMap).sort().forEach(function(letter) {
            letterMap[letter].forEach(function(overlay, idx) {
            const opt = document.createElement('div');
            opt.className = 'overlay-search-option';
            // Add icon if available (use iconSrc from config)
            if (overlay.iconSrc) {
                const iconImg = document.createElement('img');
                iconImg.src = overlay.iconSrc;
                iconImg.alt = '';
                iconImg.className = 'overlay-search-option-icon';
                iconImg.style.maxWidth = '30px';
                iconImg.style.maxHeight = '30px';
                iconImg.style.width = 'auto';
                iconImg.style.height = 'auto';
                iconImg.style.marginRight = '10px';
                iconImg.style.verticalAlign = 'middle';
                opt.appendChild(iconImg);
            }
            // Add the text (group/category: title)
            const textSpan = document.createElement('span');
            textSpan.textContent = overlay.group + ': ' + overlay.title;
            opt.appendChild(textSpan);
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

$(function() {
    var $search = $('#overlay-search');
    var $dropdown = $('#overlay-search-dropdown');

    function renderOverlayList(overlays, query) {
        var $list = $('#overlay-list');
        $list.empty();

        if (!overlays || !overlays.length) {
            if (query) {
                $list.append('<div style="padding:8px;color:#888;">No overlays found.</div>');
            }
            return;
        }

        // Group overlays by category
        var categoryMap = {};
        overlays.forEach(function(overlay) {
            var category = overlay.category || 'Other';
            if (!categoryMap[category]) {
                categoryMap[category] = [];
            }
            categoryMap[category].push(overlay);
        });

        // Render overlays by category
        Object.keys(categoryMap).sort().forEach(function(category) {
            // Create category header
            var $category = $('<div>')
                .addClass('overlay-category')
                .append($('<h3>').text(getTranslation(category) || category));
            
            // Create category content
            var $content = $('<div>').addClass('overlay-category-content');
            
            // Add overlays to category
            categoryMap[category].forEach(function(overlay) {
                var $item = $('<div>')
                    .addClass('overlay-item')
                    .append(
                        $('<input>')
                            .attr('type', 'checkbox')
                            .attr('id', 'overlay-' + overlay.title)
                            .prop('checked', isOverlayVisible(overlay))
                            .on('change', function() {
                                toggleOverlay(overlay);
                            })
                    )
                    .append(
                        $('<label>')
                            .attr('for', 'overlay-' + overlay.title)
                            .text(overlay.title)
                    );
                
                if (overlay.iconSrc) {
                    $item.prepend(
                        $('<img>')
                            .addClass('overlay-icon')
                            .attr('src', overlay.iconSrc)
                            .attr('alt', overlay.title)
                    );
                }
                
                $content.append($item);
            });
            
            $category.append($content);
            $list.append($category);
        });
    }

    function isOverlayVisible(overlay) {
        var found = false;
        $.each(window.config.layers, function(_, layerGroup) {
            if (layerGroup.getLayers) {
                layerGroup.getLayers().forEach(function(layer) {
                    if (layer.get('title') === overlay.title && 
                        layer.get('group') === overlay.group) {
                        found = layer.getVisible();
                        return false; // break
                    }
                });
            }
        });
        return found;
    }

    function toggleOverlay(overlay) {
        $.each(window.config.layers, function(_, layerGroup) {
            if (layerGroup.getLayers) {
                layerGroup.getLayers().forEach(function(layer) {
                    if (layer.get('title') === overlay.title && 
                        layer.get('group') === overlay.group) {
                        layer.setVisible(!layer.getVisible());
                        return false; // break
                    }
                });
            }
        });
    }

    function filterOverlays(query) {
        if (!query) {
            return window.overlays || [];
        }
        
        query = query.toLowerCase();
        return (window.overlays || []).filter(function(overlay) {
            var title = (overlay.title || '').toLowerCase();
            var group = (overlay.group || '').toLowerCase();
            var category = (overlay.category || '').toLowerCase();
            return title.includes(query) || 
                   group.includes(query) || 
                   category.includes(query);
        });
    }

    // Initialize overlay list
    if (window.overlays) {
        renderOverlayList(window.overlays);
    }

    // Handle search input
    $search.on('input', function() {
        var query = $(this).val();
        var filtered = filterOverlays(query);
        renderOverlayList(filtered, query);
    });

    // Listen for overlay updates
    window.addEventListener('overlaysReady', function(event) {
        renderOverlayList(event.detail.overlays);
    });
});
