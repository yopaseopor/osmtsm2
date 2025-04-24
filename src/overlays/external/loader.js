// Function to load external overlay files
export async function loadExternalOverlays() {
    try {
        // Fetch the configuration
        const response = await fetch('src/overlays/external/config.json');
        const config = await response.json();
        
        // Load each file specified in the configuration
        const overlayModules = await Promise.all(
            config.externalOverlayFiles.map(async (filename) => {
                try {
                    // Skip if file doesn't exist
                    const checkResponse = await fetch(`src/overlays/external/${filename}`);
                    if (!checkResponse.ok) {
                        console.log(`Skipping ${filename} - file not found`);
                        return [];
                    }
                    
                    // Import the module
                    const module = await import(`./${filename}`);
                    
                    // Look for any export that ends with 'Overlays'
                    const overlayExport = Object.entries(module).find(([key]) => key.endsWith('Overlays'));
                    
                    if (overlayExport) {
                        return overlayExport[1];
                    }
                    
                    return [];
                } catch (error) {
                    console.warn(`Error loading ${filename}:`, error);
                    return [];
                }
            })
        );
        
        // Flatten the array of overlay arrays
        return overlayModules.flat();
    } catch (error) {
        console.error('Error loading external overlays:', error);
        return [];
    }
} 