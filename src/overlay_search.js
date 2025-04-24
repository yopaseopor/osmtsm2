// Overlay Searcher: interactive with predictive dropdown
// Assumes overlays are available globally as window.allOverlays

(function() {
    // Create predictive dropdown
    const searchInput = document.getElementById('overlay-search');
    const dropdown = document.createElement('div');
    dropdown.id = 'overlay-search-dropdown';
    dropdown.className = 'overlay-search-dropdown';
    searchInput.parentNode.appendChild(dropdown);

    let lastResults = [];
    let lastQuery = '';

    // Helper function to get all overlays from the new structure
    function getAllOverlays() {
        if (!window.allOverlays) return [];
        // Flatten all overlay arrays from window.allOverlays
        return Object.values(window.allOverlays)
            .filter(Array.isArray)
            .flat();
    }

    // Helper function to find an overlay in layers
    function findOverlayLayer(overlay) {
        let found = null;
        $.each(config.layers, function(indexLayer, layerGroup) {
            if (layerGroup.get && layerGroup.get('type') === 'overlay') {
                $.each(layerGroup.getLayers().getArray(), function(idx, olayer) {
                    if ((overlay.id && olayer.get('id') === overlay.id) ||
                        (olayer.get('title') === overlay.title && olayer.get('group') === overlay.group)) {
                        found = olayer;
                        return false; // break inner loop
                    }
                });
                if (found) return false; // break outer loop
            }
        });
        return found;
    }

    // Helper function to toggle overlay visibility
    function toggleOverlay(overlay) {
        const layer = findOverlayLayer(overlay);
        if (layer) {
            const isVisible = layer.getVisible();
            layer.setVisible(!isVisible);
            
            // Dispatch custom event for overlay toggle
            const event = new CustomEvent('overlayToggled', {
                detail: {
                    overlay: overlay,
                    visible: !isVisible
                }
            });
            window.dispatchEvent(event);
            
            return true;
        }
        return false;
    }

    function renderDropdown(results) {
        dropdown.innerHTML = '';

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
            letterMap[letter].forEach(function(overlay) {
                const opt = document.createElement('div');
                opt.className = 'overlay-search-option';
                
                // Add icon if available
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

                // Check if overlay is currently visible
                const layer = findOverlayLayer(overlay);
                if (layer && layer.getVisible()) {
                    opt.classList.add('active');
                }

                opt.tabIndex = 0;
                opt.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    searchInput.value = overlay.title;
                    dropdown.style.display = 'none';
                    
                    // Toggle overlay
                    toggleOverlay(overlay);
                    
                    // Update overlay list UI
                    if (window.renderOverlayList) {
                        window.renderOverlayList([], '');
                    }
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

        const allOverlays = getAllOverlays();
        const filtered = allOverlays.filter(overlay =>
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
            if (idx === -1) {
                opts[0].focus();
            } else {
                opts[Math.min(idx+1, opts.length-1)].focus();
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (idx === -1) {
                opts[opts.length-1].focus();
            } else {
                opts[Math.max(idx-1, 0)].focus();
            }
        } else if (e.key === 'Enter') {
            if (idx >= 0) {
                opts[idx].dispatchEvent(new MouseEvent('mousedown'));
            }
        } else if (e.key === 'Escape') {
            dropdown.style.display = 'none';
            searchInput.blur();
        }
    });

    // Hide dropdown on blur
    searchInput.addEventListener('blur', function() {
        setTimeout(function() {
            if (!document.activeElement || !dropdown.contains(document.activeElement)) {
                dropdown.style.display = 'none';
            }
        }, 100);
    });

    // Listen for overlay updates
    window.addEventListener('overlaysUpdated', function() {
        if (lastQuery) {
            const allOverlays = getAllOverlays();
            const filtered = allOverlays.filter(overlay =>
                (overlay.title && overlay.title.toLowerCase().includes(lastQuery)) ||
                (overlay.group && overlay.group.toLowerCase().includes(lastQuery))
            );
            lastResults = filtered;
            renderDropdown(filtered);
            filterAndRender(filtered, lastQuery);
        }
    });
})();
