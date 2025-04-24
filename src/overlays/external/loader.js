// Function to load external overlay files
export async function loadExternalOverlays() {
    try {
        console.log('Starting to load external overlays...');
        
        // Fetch the configuration
        const response = await fetch('src/overlays/external/config.json');
        if (!response.ok) {
            throw new Error('Failed to load config.json');
        }
        const config = await response.json();
        console.log('Found overlay files in config:', config.externalOverlayFiles);
        
        // Load each file specified in the configuration
        const overlayModules = await Promise.all(
            config.externalOverlayFiles.map(async (filename) => {
                console.log(`Attempting to load ${filename}...`);
                try {
                    // Import the module directly without checking file existence
                    const module = await import(`./${filename}`);
                    console.log(`Successfully imported ${filename}`, Object.keys(module));
                    
                    // Look for any export that ends with 'Overlays'
                    const overlayExport = Object.entries(module).find(([key]) => key.endsWith('Overlays'));
                    
                    if (overlayExport) {
                        console.log(`Found overlays in ${filename}:`, overlayExport[1].length);
                        return overlayExport[1];
                    } else {
                        console.warn(`No overlay export found in ${filename}`);
                    }
                    
                    return [];
                } catch (error) {
                    console.warn(`Error loading ${filename}:`, error);
                    return [];
                }
            })
        );
        
        // Flatten the array of overlay arrays
        const allExternalOverlays = overlayModules.flat();
        console.log('Total external overlays loaded:', allExternalOverlays.length);
        return allExternalOverlays;
    } catch (error) {
        console.error('Error loading external overlays:', error);
        return [];
    }
} 