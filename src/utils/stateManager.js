/**
 * State Manager for preserving application state across page reloads
 */

// Save the current state to localStorage
function saveState() {
    if (!window.config || !window.config.layers) return;
    
    const state = {
        // Save visible layers
        visibleLayers: window.config.layers
            .filter(layer => layer.getVisible() && layer.get('type') === 'overlay')
            .map(layer => layer.get('title')),
            
        // Save expanded overlay groups
        expandedGroups: Array.from(document.querySelectorAll('.osmcat-menu h3'))
            .filter(h3 => h3.nextElementSibling?.style.display !== 'none')
            .map(h3 => h3.textContent.trim())
    };
    
    // Save to localStorage with a timestamp
    const stateWithTimestamp = {
        ...state,
        _timestamp: Date.now()
    };
    
    localStorage.setItem('appState', JSON.stringify(stateWithTimestamp));
}

// Restore state from localStorage
function restoreState() {
    const savedState = localStorage.getItem('appState');
    if (!savedState) return null;
    
    try {
        const state = JSON.parse(savedState);
        
        // Clear old state after restoring (to prevent restoring on next page load)
        localStorage.removeItem('appState');
        
        // Check if the state is not too old (5 minutes)
        if (state._timestamp && (Date.now() - state._timestamp) > 5 * 60 * 1000) {
            return null;
        }
        
        return state;
    } catch (e) {
        console.error('Error restoring state:', e);
        return null;
    }
}

// Save state before page unload
window.addEventListener('beforeunload', saveState);

// Export functions
export { saveState, restoreState };
