# OSM Traffic Signs Map

Based on ideas of `https://osm-catalan.github.io/osmcatmap/` and `https://github.com/Ripollx/osmcatmap2` .
Developed with [OpenLayers](https://openlayers.org/) library  and with API from [Overpass Turbo](https://wiki.openstreetmap.org/wiki/Overpass_turbo) available on [Overpass Turbo website](https://overpass-turbo.eu/).

## Features:

-Map based on [Bicycle tags map](https://wiki.openstreetmap.org/wiki/Bicycle_tags_map)

-With modifications of [Ramiro Balado](https://github.com/Qjammer)

-New Openlayers version done by [Ripollx](https://github.com/Ripollx)

-Possibility of show outside JSONs by [Hugoren Martinako ](https://github.com/Crashillo)

-Complex queries possibility done by [Ismael Luceno](https://github.com/ismaell)

-Additional ideas by [yopaseopor](https://github.com/yopaseopor)

## Tags

OSM traffic signs Map shows you all the tags refered to traffic signs.


## Using

You can modify the page editing these files:
* index.html contains the structure of the page.
* index.js contains the orchestrator to use OpenLayers (only modify if you want to add new functionalities).
* config.js contains definition of layers, languages and characteristics you want to show.

## Demo

You can see it [here](https://yopaseopor.github.io/osmtrafficsignsmap)

# OSM Traffic Signs Map - Search Implementation

## Nominatim Search Feature

The search functionality in this project has been implemented using various sources and best practices:

### Core Components

1. **OpenStreetMap Nominatim API**
   - Source: [Nominatim API Documentation](https://nominatim.org/release-docs/latest/api/Search/)
   - Used for geocoding search queries
   - Features:
     - Free and open-source
     - Address details support
     - Limit results configuration

2. **OpenLayers Control Structure**
   - Source: [OpenLayers Custom Controls](https://openlayers.org/en/latest/examples/custom-controls.html)
   - Implementation based on the project's existing control pattern
   - Matches the style of other map controls

3. **UI Components**
   - Search Button Style: Based on project's existing `.osmcat-geobutton` implementation
   - Results List: Inspired by OpenLayers examples and jQuery UI Autocomplete
   - Source: [jQuery UI Autocomplete](https://jqueryui.com/autocomplete/)

### Visual Design

1. **Button and Input Styling**
   - Based on project's existing controls in `index.css`
   - Matches the semi-transparent style used throughout the interface
   - Uses Font Awesome icons for consistency with other controls

2. **Results List Design**
   - Inspired by OpenStreetMap's own search results display
   - Source: [OpenStreetMap Website](https://www.openstreetmap.org/)
   - Features:
     - Semi-transparent background
     - Hover effects matching project's color scheme
     - Smooth animations

3. **Location Marker**
   - Uses Font Awesome map marker icon
   - Animation inspired by Google Maps' location marker
   - Temporary display with fade-out (5 seconds)

### Technical Implementation

1. **AJAX Implementation**
   - Based on jQuery's AJAX pattern
   - Source: [jQuery AJAX Documentation](https://api.jquery.com/jquery.ajax/)
   - Features:
     - Error handling
     - Loading state indication
     - JSON response parsing

2. **Event Handling**
   - Click outside detection: Standard jQuery pattern
   - Keyboard events: Based on OpenLayers examples
   - Source: [OpenLayers Event Handling](https://openlayers.org/en/latest/examples/custom-controls.html)

3. **Map Integration**
   - View animation: OpenLayers view.animate()
   - Overlay management: OpenLayers overlay system
   - Source: [OpenLayers View Animation](https://openlayers.org/en/latest/examples/animation.html)

## License

This implementation is part of the OSM Traffic Signs Map project and follows its licensing terms. All external sources and inspirations are properly credited above.
