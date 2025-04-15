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
        if (!results.length || !searchInput.value.trim()) {
            dropdown.style.display = 'none';
            return;
        }
        results.slice(0, 10).forEach((overlay, idx) => {
            const opt = document.createElement('div');
            opt.className = 'overlay-search-option';
            opt.textContent = overlay.group + ': ' + overlay.title;
            opt.tabIndex = 0;
            opt.addEventListener('mousedown', function(e) {
                e.preventDefault();
                searchInput.value = overlay.title;
                dropdown.style.display = 'none';
                if (window.activateOverlay) {
                    window.activateOverlay(overlay);
                } else {
                    filterAndRender([overlay]);
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

    // Hide dropdown on blur
    searchInput.addEventListener('blur', function() {
        setTimeout(()=>{ dropdown.style.display = 'none'; }, 150);
    });
})();
