// OSRM Router Integration
class OSRMRouter {
    constructor(map) {
        this.map = map;
        this.routeLayer = new ol.layer.Vector({
            source: new ol.source.Vector(),
            style: new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#ff0000',
                    width: 3
                })
            })
        });
        this.map.addLayer(this.routeLayer);
    }

    calculateRoute(start, end) {
        const url = `https://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=full&geometries=geojson`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.code === 'Ok') {
                    const route = data.routes[0];
                    const coordinates = route.geometry.coordinates;
                    
                    const routeFeature = new ol.Feature({
                        geometry: new ol.geom.LineString(coordinates)
                    });
                    
                    this.routeLayer.getSource().clear();
                    this.routeLayer.getSource().addFeature(routeFeature);
                    
                    // Fit view to route
                    const extent = routeFeature.getGeometry().getExtent();
                    this.map.getView().fit(extent, {
                        padding: [50, 50, 50, 50],
                        maxZoom: 15
                    });
                }
            })
            .catch(error => console.error('Error calculating route:', error));
    }
} 