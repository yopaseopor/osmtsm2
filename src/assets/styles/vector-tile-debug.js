/**
 * Vector Tile Debug Panel
 * Provides a simple UI to monitor and control vector tile debugging
 */
class VectorTileDebugPanel {
    constructor() {
        this.isVisible = false;
        this.panel = null;
        this.logContainer = null;
        this.logs = [];
        this.maxLogs = 100;
        
        this.init();
    }
    
    init() {
        // Create panel element
        this.panel = document.createElement('div');
        this.panel.className = 'vector-tile-debug-panel';
        this.panel.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 10px;
            max-width: 400px;
            max-height: 300px;
            overflow: auto;
            font-family: monospace;
            font-size: 12px;
            z-index: 1000;
            display: none;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;
        
        // Create header
        const header = document.createElement('div');
        header.style.cssText = 'display: flex; justify-content: space-between; margin-bottom: 8px; align-items: center;';
        
        const title = document.createElement('h3');
        title.textContent = 'Vector Tile Debug';
        title.style.margin = '0 10px 0 0';
        
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Hide';
        toggleBtn.onclick = () => this.toggle();
        
        const clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear';
        clearBtn.onclick = () => this.clearLogs();
        clearBtn.style.marginRight = '5px';
        
        // Create button container
        const btnContainer = document.createElement('div');
        btnContainer.appendChild(clearBtn);
        btnContainer.appendChild(toggleBtn);
        
        header.appendChild(title);
        header.appendChild(btnContainer);
        
        // Create log container
        this.logContainer = document.createElement('div');
        this.logContainer.style.cssText = 'font-family: monospace; white-space: pre;';
        
        // Assemble panel
        this.panel.appendChild(header);
        this.panel.appendChild(this.logContainer);
        
        // Add to document
        document.body.appendChild(this.panel);
        
        // Add styles
        this.addStyles();
        
        // Show by default in debug mode
        if (window.debugVectorTiles) {
            this.show();
        }
    }
    
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .vector-tile-debug-panel button {
                padding: 3px 8px;
                margin-left: 5px;
                font-size: 12px;
                cursor: pointer;
            }
            .vector-tile-debug-panel h3 {
                font-size: 14px;
                margin: 0;
            }
            .log-entry {
                margin: 2px 0;
                padding: 2px 0;
                border-bottom: 1px solid #eee;
            }
            .log-entry.warn {
                color: #e67e22;
            }
            .log-entry.error {
                color: #e74c3c;
            }
        `;
        document.head.appendChild(style);
    }
    
    log(message, type = 'log') {
        if (!this.isVisible) return;
        
        const now = new Date();
        const timeStr = now.toLocaleTimeString();
        const logEntry = document.createElement('div');
        logEntry.className = `log-entry ${type}`;
        logEntry.textContent = `[${timeStr}] ${message}`;
        
        this.logContainer.appendChild(logEntry);
        this.logs.push({ time: now, message, type });
        
        // Limit number of logs
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
            if (this.logContainer.firstChild) {
                this.logContainer.removeChild(this.logContainer.firstChild);
            }
        }
        
        // Auto-scroll to bottom
        this.logContainer.scrollTop = this.logContainer.scrollHeight;
    }
    
    clearLogs() {
        this.logs = [];
        this.logContainer.innerHTML = '';
    }
    
    toggle() {
        this.isVisible = !this.isVisible;
        this.panel.style.display = this.isVisible ? 'block' : 'none';
        const toggleBtn = this.panel.querySelector('button');
        if (toggleBtn) {
            toggleBtn.textContent = this.isVisible ? 'Hide' : 'Show';
        }
    }
    
    show() {
        this.isVisible = true;
        this.panel.style.display = 'block';
        const toggleBtn = this.panel.querySelector('button');
        if (toggleBtn) {
            toggleBtn.textContent = 'Hide';
        }
    }
    
    hide() {
        this.isVisible = false;
        this.panel.style.display = 'none';
        const toggleBtn = this.panel.querySelector('button');
        if (toggleBtn) {
            toggleBtn.textContent = 'Show';
        }
    }
}

// Initialize debug panel when DOM is ready
function initDebugPanel() {
    try {
        window.vectorTileDebugPanel = new VectorTileDebugPanel();
        
        // Override debugLog to also log to the debug panel
        const originalDebugLog = window.debugLog || (() => {});
        window.debugLog = (...args) => {
            originalDebugLog(...args);
            if (window.vectorTileDebugPanel) {
                window.vectorTileDebugPanel.log(args.join(' '));
            }
        };
        
        // Add debug toggle to window for easy access
        window.toggleVectorTileDebug = () => window.vectorTileDebugPanel.toggle();
        
        console.log('Vector Tile Debug Panel initialized. Use toggleVectorTileDebug() to show/hide.');
    } catch (error) {
        console.error('Failed to initialize Vector Tile Debug Panel:', error);
    }
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDebugPanel);
} else {
    initDebugPanel();
}
