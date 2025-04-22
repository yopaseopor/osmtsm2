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
            // Add letter header
            const header = document.createElement('div');
            header.className = 'overlay-search-letter-header';
            header.textContent = letter;
            header.style.fontWeight = 'bold';
            header.style.padding = '5px';
            header.style.background = '#f0f0f0';
            dropdown.appendChild(header);

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
                opt.title = config.i18n.getTranslation('toggleOverlay');
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
        renderDropdown(filtered);
        lastResults = filtered;
        lastQuery = query;
    }

    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        if (query === lastQuery) return;
        const filtered = window.overlays.filter(o => 
            o.title.toLowerCase().includes(query) || 
            (o.group && o.group.toLowerCase().includes(query))
        );
        filterAndRender(filtered, query);
    });

    // Handle keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const options = dropdown.querySelectorAll('.overlay-search-option');
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
            if (focused && focused.classList.contains('overlay-search-option')) {
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
