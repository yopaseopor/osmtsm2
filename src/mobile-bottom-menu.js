// Mobile Bottom Sheet Menu (slide up/down) for map UI
// Usage: requires .mobile-bottom-menu, .slide-handle, .menu-content, .mobile-menu-overlay in HTML
(function() {
    function isMobile() {
        return window.matchMedia && window.matchMedia('(max-width: 599px)').matches;
    }
    var menu = null, overlay = null, startY = null, startHeight = null, dragging = false;
    function setupMenu() {
        menu = document.querySelector('.mobile-bottom-menu');
        overlay = document.querySelector('.mobile-menu-overlay');
        if (!menu || !overlay) return;
        var handle = menu.querySelector('.slide-handle');
        if (!handle) return;
        // Toggle open on handle tap
        handle.addEventListener('click', function(e) {
            if (!dragging) {
                var isOpen = menu.classList.contains('open');
                menu.classList.toggle('open', !isOpen);
                overlay.style.display = !isOpen ? 'block' : 'none';
                document.body.classList.toggle('menu-open', !isOpen);
            }
        });
        // Drag to open/close
        handle.addEventListener('touchstart', startDrag, {passive: false});
        handle.addEventListener('mousedown', startDrag);
        document.addEventListener('touchmove', onDrag, {passive: false});
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('touchend', endDrag);
        document.addEventListener('mouseup', endDrag);
        // Overlay click closes menu
        overlay.addEventListener('click', function() {
            menu.classList.remove('open');
            overlay.style.display = 'none';
            document.body.classList.remove('menu-open');
        });
    }
    function startDrag(e) {
        if (!isMobile()) return;
        dragging = true;
        startY = e.touches ? e.touches[0].clientY : e.clientY;
        startHeight = menu.offsetHeight;
        document.body.style.userSelect = 'none';
    }
    function onDrag(e) {
        if (!dragging) return;
        var clientY = e.touches ? e.touches[0].clientY : e.clientY;
        var delta = startY - clientY;
        var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var minH = vh * 0.13;
        var maxH = vh * 0.9;
        var newHeight = Math.min(Math.max(startHeight + delta, minH), maxH);
        menu.style.height = newHeight + 'px';
        if (overlay) overlay.style.display = 'block';
        document.body.classList.add('menu-open');
        e.preventDefault();
    }
    function endDrag() {
        if (!dragging) return;
        dragging = false;
        document.body.style.userSelect = '';
        var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var snapCollapsed = vh * 0.13;
        var snapExpanded = vh * 0.9;
        var currentHeight = menu.offsetHeight;
        // Snap logic: if closer to expanded, expand; else collapse
        var isOpen = Math.abs(currentHeight - snapExpanded) < Math.abs(currentHeight - snapCollapsed);
        menu.classList.toggle('open', isOpen);
        menu.style.height = '';
        if (overlay) overlay.style.display = isOpen ? 'block' : 'none';
        document.body.classList.toggle('menu-open', isOpen);
    }
    document.addEventListener('DOMContentLoaded', function() {
        if (isMobile()) setupMenu();
    });
})();
