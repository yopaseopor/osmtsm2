import { getTranslation } from '../../i18n/index.js';

export function foodOverlays() {
    return [
        {
            group: getTranslation('food'),
            title: getTranslation('mcdonalds'),
            query: '[out:json][timeout:25];(nwr["amenity"="fast_food"]["brand"="McDonald\'s"]({{bbox}}););out body;>;out skel qt;',
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png',
            iconStyle: 'background-color:rgba(255,255,255,0.4)',
            style: function (feature) {
                var key_regex = /^name$/;
                var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
                var name = feature.get(name_key) || '';
                var fill = new ol.style.Fill({
                    color: 'rgba(255,0,0,0.4)'
                });
                var stroke = new ol.style.Stroke({
                    color: 'rgba(255,0,0,1)',
                    width: 1
                });
                var style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/220px-McDonald%27s_Golden_Arches.svg.png',
                        scale: 0.10
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX: 7,
                        offsetY: -12,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
                    }),
                    fill: fill,
                    stroke: stroke
                });
                return style;
            }
        },
        {
            group: getTranslation('food'),
            title: getTranslation('starbucks'),
            query: '[out:json][timeout:25];(nwr["amenity"="cafe"]["brand"="Starbucks"]({{bbox}}););out body;>;out skel qt;',
            iconSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/1200px-Starbucks_Coffee_Logo.svg.png',
            iconStyle: 'background-color:rgba(255,255,255,0.4)',
            style: function (feature) {
                var key_regex = /^name$/;
                var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
                var name = feature.get(name_key) || '';
                var fill = new ol.style.Fill({
                    color: 'rgba(0,112,74,0.4)'
                });
                var stroke = new ol.style.Stroke({
                    color: 'rgba(0,112,74,1)',
                    width: 1
                });
                var style = new ol.style.Style({
                    image: new ol.style.Icon({
                        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/1200px-Starbucks_Coffee_Logo.svg.png',
                        scale: 0.10
                    }),
                    text: new ol.style.Text({
                        text: name,
                        offsetX: 7,
                        offsetY: -12,
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
                    }),
                    fill: fill,
                    stroke: stroke
                });
                return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "% Arabica",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"% Arabica\"][\"brand:wikidata\"=\"Q107639197\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"% Arabica\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "49th Parallel Coffee Roasters",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"49th Parallel Coffee Roasters\"][\"brand:wikidata\"=\"Q104844785\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"49th Parallel Coffee Roasters\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "5 to go",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"5 to go\"][\"brand:wikidata\"=\"Q115684369\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"5 to go\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/5_to_go.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/5_to_go.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "50\u5d50",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"50\u5d50\"][\"brand:en\"=\"50 Lan\"][\"brand:wikidata\"=\"Q106926258\"][\"brand:zh\"=\"50\u5d50\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"50\u5d50\"][\"name:en\"=\"50 Lan\"][\"name:zh\"=\"50\u5d50\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "7 Leaves Cafe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"7 Leaves Cafe\"][\"brand:wikidata\"=\"Q118480682\"][\"cuisine\"=\"coffee_shop;vietnamese\"][\"name\"=\"7 Leaves Cafe\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/7_Leaves_Cafe_logo.webp",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/7_Leaves_Cafe_logo.webp",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "85\u00b0C",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"85C\"][\"amenity\"=\"cafe\"][\"brand\"=\"85\u00b0C\"][\"brand:wikidata\"=\"Q4644852\"][\"cuisine\"=\"coffee_shop;chinese\"][\"name\"=\"85\u00b0C\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/85C_Bakery_Cafe_Guangfu_North_Road_Store_20141218.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/85C_Bakery_Cafe_Guangfu_North_Road_Store_20141218.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "85\u5ea6C",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"85\u5ea6C\"][\"brand:en\"=\"85\u00b0C Bakery Cafe\"][\"brand:wikidata\"=\"Q4644852\"][\"brand:zh\"=\"85\u5ea6C\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"85\u5ea6C\"][\"name:en\"=\"85\u00b0C Bakery Cafe\"][\"name:zh\"=\"85\u5ea6C\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/85C_Bakery_Cafe_Guangfu_North_Road_Store_20141218.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/85C_Bakery_Cafe_Guangfu_North_Road_Store_20141218.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "85\u5ea6C 85\u00b0C Bakery Cafe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"85\u5ea6C 85\u00b0C Bakery Cafe\"][\"brand:en\"=\"85\u00b0C Bakery Cafe\"][\"brand:wikidata\"=\"Q4644852\"][\"brand:zh\"=\"85\u5ea6C\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"85\u5ea6C 85\u00b0C Bakery Cafe\"][\"name:en\"=\"85\u00b0C Bakery Cafe\"][\"name:zh\"=\"85\u5ea6C\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/85C_Bakery_Cafe_Guangfu_North_Road_Store_20141218.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/85C_Bakery_Cafe_Guangfu_North_Road_Store_20141218.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "a\u00efda",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"a\u00efda\"][\"brand:wikidata\"=\"Q794636\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"a\u00efda\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Aida.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Aida.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "AMT Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"AMT Coffee\"][\"brand:wikidata\"=\"Q80229\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"AMT Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Anne&Max",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Anne&Max\"][\"brand:wikidata\"=\"Q123420280\"][\"breakfast\"=\"yes\"][\"cuisine\"=\"coffee_shop;sandwich\"][\"name\"=\"Anne&Max\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Arcaffe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Arcaffe\"][\"brand:en\"=\"Arcaffe\"][\"brand:he\"=\"\u05d0\u05e8\u05e7\u05e4\u05d4\"][\"brand:wikidata\"=\"Q2897147\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Arcaffe\"][\"name:en\"=\"Arcaffe\"][\"name:he\"=\"\u05d0\u05e8\u05e7\u05e4\u05d4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Aroma Espresso Bar",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Aroma Espresso Bar\"][\"brand:wikidata\"=\"Q2909872\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Aroma Espresso Bar\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Aroma_espreso_bar_logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aroma_espreso_bar_logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Aroma Joe's",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Aroma Joe's\"][\"brand:wikidata\"=\"Q96475501\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Aroma Joe's\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Aroma_Joe's_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aroma_Joe's_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Aroma Kava",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Aroma Kava\"][\"brand:wikidata\"=\"Q102175745\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Aroma Kava\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Asda Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Asda\"][\"brand:wikidata\"=\"Q297410\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Asda Caf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/ASDA_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/ASDA_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Attendant",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Attendant\"][\"brand:wikidata\"=\"Q113990151\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Attendant\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Bagels & Beans",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Bagels & Beans\"][\"brand:wikidata\"=\"Q13433690\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Bagels & Beans\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/WLM-leiden-20100905-eia_141.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/WLM-leiden-20100905-eia_141.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Baggins Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Baggins Coffee\"][\"brand:wikidata\"=\"Q100272631\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Baggins Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Bakers + Baristas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Bakers + Baristas\"][\"brand:wikidata\"=\"Q85199581\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Bakers + Baristas\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Bambu",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Bambu\"][\"brand:wikidata\"=\"Q83437245\"][\"cuisine\"=\"vietnamese;bubble_tea\"][\"name\"=\"Bambu\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bambu_Logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bambu_Logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Barista",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Barista\"][\"brand:wikidata\"=\"Q644735\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Barista\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Barista_Lavazza_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Barista_Lavazza_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Baristi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Baristi\"][\"brand:wikidata\"=\"Q99959844\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Baristi\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "BECK'S COFFEE SHOP",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"\u30d9\u30c3\u30af\u30b9\u30fb\u30b3\u30fc\u30d2\u30fc\u30b7\u30e7\u30c3\u30d7\"][\"amenity\"=\"cafe\"][\"brand\"=\"BECK'S COFFEE SHOP\"][\"brand:en\"=\"BECK'S COFFEE SHOP\"][\"brand:ja\"=\"\u30d9\u30c3\u30af\u30b9\u30b3\u30fc\u30d2\u30fc\u30b7\u30e7\u30c3\u30d7\"][\"brand:wikidata\"=\"Q11191008\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"BECK'S COFFEE SHOP\"][\"name:en\"=\"BECK'S COFFEE SHOP\"][\"name:ja\"=\"\u30d9\u30c3\u30af\u30b9\u30b3\u30fc\u30d2\u30fc\u30b7\u30e7\u30c3\u30d7\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "BenGong's Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"BenGong's Tea\"][\"brand:wikidata\"=\"Q124799096\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"BenGong's Tea\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Better Buzz Coffee",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"Better Buzz Coffee Roasters\"][\"amenity\"=\"cafe\"][\"brand\"=\"Better Buzz Coffee\"][\"brand:wikidata\"=\"Q113138187\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Better Buzz Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Big Orange",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Big Orange\"][\"brand:wikidata\"=\"Q125537935\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Big Orange\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Biggby Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Biggby Coffee\"][\"brand:wikidata\"=\"Q4906876\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Biggby Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Biggby_Coffee_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Biggby_Coffee_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Black Canyon",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Black Canyon\"][\"brand:wikidata\"=\"Q125870828\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Black Canyon\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Black Rock Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Black Rock Coffee\"][\"brand:wikidata\"=\"Q64225934\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Black Rock Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Black Sheep Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Black Sheep Coffee\"][\"brand:wikidata\"=\"Q109745011\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Black Sheep Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Blank Street Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Blank Street Coffee\"][\"brand:wikidata\"=\"Q114792509\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Blank Street Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Blenz Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Blenz Coffee\"][\"brand:wikidata\"=\"Q4926090\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Blenz Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Blenz_Coffee_in_Bonifacio_Global_City.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blenz_Coffee_in_Bonifacio_Global_City.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "BloomsYard",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"bar\"=\"yes\"][\"brand\"=\"BloomsYard\"][\"brand:wikidata\"=\"Q132773729\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"BloomsYard\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Blue Bottle Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Blue Bottle Coffee\"][\"brand:en\"=\"Blue Bottle Coffee\"][\"brand:ja\"=\"\u30d6\u30eb\u30fc\u30dc\u30c8\u30eb\u30b3\u30fc\u30d2\u30fc\"][\"brand:wikidata\"=\"Q4928917\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Blue Bottle Coffee\"][\"name:en\"=\"Blue Bottle Coffee\"][\"name:ja\"=\"\u30d6\u30eb\u30fc\u30dc\u30c8\u30eb\u30b3\u30fc\u30d2\u30fc\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Bottle_Mint_Plaza_(14764565700).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Blue_Bottle_Mint_Plaza_(14764565700).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Bo's Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Bo's Coffee\"][\"brand:wikidata\"=\"Q30591352\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Bo's Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Bob & Berts",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Bob & Berts\"][\"brand:wikidata\"=\"Q113494662\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Bob & Berts\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Boba Guys",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Boba Guys\"][\"brand:wikidata\"=\"Q125537779\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Boba Guys\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Bombay Cutting Chai",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Bombay Cutting Chai\"][\"brand:wikidata\"=\"Q132113367\"][\"cuisine\"=\"tea;coffee_shop\"][\"diet:vegetarian\"=\"yes\"][\"name\"=\"Bombay Cutting Chai\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Bonafide",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Bonafide\"][\"brand:wikidata\"=\"Q62122746\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Bonafide\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Boost Juice",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Boost Juice\"][\"brand:wikidata\"=\"Q4943789\"][\"cuisine\"=\"juice\"][\"name\"=\"Boost Juice\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Bootlegger Coffee Company",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Bootlegger Coffee Company\"][\"brand:wikidata\"=\"Q116646503\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Bootlegger Coffee Company\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Boston Tea Party",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Boston Tea Party\"][\"brand:wikidata\"=\"Q23461358\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Boston Tea Party\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Cafe_in_Bristol_(2300).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cafe_in_Bristol_(2300).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Braganza Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Braganza Tea\"][\"brand:wikidata\"=\"Q108410740\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Braganza Tea\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Bridgehead",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Bridgehead\"][\"brand:wikidata\"=\"Q4966509\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Bridgehead\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bridgehead_Bank_and_Albert_St,_Ottawa.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bridgehead_Bank_and_Albert_St,_Ottawa.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Bubble Waffle Cafe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Bubble Waffle Cafe\"][\"brand:wikidata\"=\"Q114914529\"][\"cuisine\"=\"waffle\"][\"name\"=\"Bubble Waffle Cafe\"][\"name:en\"=\"Bubble Waffle Cafe\"][\"name:zh-Hant\"=\"\u96de\u86cb\u4ed4\u9910\u5ef3\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Buenas Migas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Buenas Migas\"][\"brand:wikidata\"=\"Q115258266\"][\"cuisine\"=\"coffee_shop\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caf\u00e9 Amazon",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caf\u00e9 Amazon\"][\"brand:wikidata\"=\"Q43247503\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caf\u00e9 Amazon\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caf\u00e9 Cappuccino",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caf\u00e9 Cappuccino\"][\"brand:wikidata\"=\"Q117317760\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caf\u00e9 Cappuccino\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Cafe Coffee Day",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Cafe Coffee Day\"][\"brand:wikidata\"=\"Q5017235\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Cafe Coffee Day\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/CCD_2.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/CCD_2.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caf\u00e9 D\u00e9p\u00f4t",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caf\u00e9 D\u00e9p\u00f4t\"][\"brand:wikidata\"=\"Q64924449\"][\"cuisine\"=\"coffee_shop;cake;bagel;bistro\"][\"name\"=\"Caf\u00e9 D\u00e9p\u00f4t\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caf\u00e9 du Centre",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caf\u00e9 du Centre\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caf\u00e9 du Centre\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caf\u00e9 du Monde",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caf\u00e9 du Monde\"][\"brand:wikidata\"=\"Q2933012\"][\"cuisine\"=\"coffee_shop;french\"][\"name\"=\"Caf\u00e9 du Monde\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caf\u00e9_du_Monde_Wordmark.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caf\u00e9_du_Monde_Wordmark.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Cafe Extrablatt",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Cafe Extrablatt\"][\"brand:wikidata\"=\"Q1025505\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Cafe Extrablatt\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Cafe Frei",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Cafe Frei\"][\"brand:wikidata\"=\"Q105210995\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Cafe Frei\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caf\u00e9 Joyeux",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caf\u00e9 Joyeux\"][\"brand:wikidata\"=\"Q97392256\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caf\u00e9 Joyeux\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caf\u00e9 Mart\u00ednez",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caf\u00e9 Mart\u00ednez\"][\"brand:wikidata\"=\"Q16540032\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caf\u00e9 Mart\u00ednez\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Cafe_Martinez_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cafe_Martinez_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caf\u00e9 OMA",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caf\u00e9 OMA\"][\"brand:wikidata\"=\"Q108929487\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caf\u00e9 OMA\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caf\u00e9 Punta del Cielo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caf\u00e9 Punta del Cielo\"][\"brand:wikidata\"=\"Q5739148\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caf\u00e9 Punta del Cielo\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Taza_de_Caf\u00e9.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Taza_de_Caf\u00e9.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caff\u00e8 Nero",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caff\u00e8 Nero\"][\"brand:wikidata\"=\"Q675808\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caff\u00e8 Nero\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caff\u00e8_Nero_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caff\u00e8_Nero_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caff\u00e8 Pascucci",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caff\u00e8 Pascucci\"][\"brand:wikidata\"=\"Q5017191\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caff\u00e8 Pascucci\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Pascucci_Logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pascucci_Logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caff\u00e8 Spettacolo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caff\u00e8 Spettacolo\"][\"brand:wikidata\"=\"Q111728781\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caff\u00e8 Spettacolo\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caffebene\u5496\u5561\u4f34",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caffebene\"][\"brand:en\"=\"Caff\u00e9 Bene\"][\"brand:ko\"=\"\uce74\ud398\ubca0\ub124\"][\"brand:wikidata\"=\"Q5017149\"][\"brand:zh\"=\"Caffebene\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caffebene\u5496\u5561\u4f34\"][\"name:en\"=\"Caff\u00e9 Bene\"][\"name:ko\"=\"\uce74\ud398\ubca0\ub124\"][\"name:zh\"=\"Caffebene\u5496\u5561\u4f34\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caffe_Bene.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caffe_Bene.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caffeine",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caffeine\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caffeine\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Cali Press",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Cali Press\"][\"brand:wikidata\"=\"Q110910956\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Cali Press\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Campus Suite",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Campus Suite\"][\"brand:wikidata\"=\"Q111205702\"][\"cuisine\"=\"coffee_shop;sandwich\"][\"name\"=\"Campus Suite\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Cappuccino",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Cappuccino\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Cappuccino\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Caribou Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caribou Coffee\"][\"brand:wikidata\"=\"Q5039494\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Caribou Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Casa do P\u00e3o de Queijo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Casa do P\u00e3o de Queijo\"][\"brand:wikidata\"=\"Q9698946\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Casa do P\u00e3o de Queijo\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Chaayos",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Chaayos\"][\"brand:wikidata\"=\"Q117235235\"][\"cuisine\"=\"tea\"][\"name\"=\"Chaayos\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Chagee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Chagee\"][\"brand:wikidata\"=\"Q125052867\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Chagee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/GD_\u5ee3\u6771_Guangdong_\u6771\u839e_Dongguan_\u898f\u5283\u4e8c\u8def_Guihua_2nd_Road_\u4e2d\u5929\u4e2d\u592e\u5ee3\u5834_ZhongTian_Central_Square_Chagee_Beverage_shop_night_December_2024_R12S_01.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/GD_\u5ee3\u6771_Guangdong_\u6771\u839e_Dongguan_\u898f\u5283\u4e8c\u8def_Guihua_2nd_Road_\u4e2d\u5929\u4e2d\u592e\u5ee3\u5834_ZhongTian_Central_Square_Chagee_Beverage_shop_night_December_2024_R12S_01.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Chai Point",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Chai Point\"][\"brand:wikidata\"=\"Q28173415\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Chai Point\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Chaiiwala",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Chaiiwala\"][\"brand:wikidata\"=\"Q124478909\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Chaiiwala\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Change Please",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Change Please\"][\"brand:wikidata\"=\"Q111964713\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Change Please\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Chao Doi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Chao Doi\"][\"brand:wikidata\"=\"Q118608511\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Chao Doi\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Chatime",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Chatime\"][\"brand:wikidata\"=\"Q16829306\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Chatime\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "ChaTraMue",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"ChaTraMue\"][\"brand:wikidata\"=\"Q119154445\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"ChaTraMue\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Chicha San Chen",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Chicha San Chen\"][\"brand:en\"=\"Chicha San Chen\"][\"brand:wikidata\"=\"Q133042869\"][\"brand:zh\"=\"\u5403\u8336\u4e09\u5343\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Chicha San Chen\"][\"name:en\"=\"Chicha San Chen\"][\"name:zh\"=\"\u5403\u8336\u4e09\u5343\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Chocolate Company",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Chocolate Company\"][\"brand:wikidata\"=\"Q108926938\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Chocolate Company\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Cibo Espresso",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Cibo Espresso\"][\"brand:wikidata\"=\"Q5119230\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Cibo Espresso\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Clean Eatz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Clean Eatz\"][\"brand:wikidata\"=\"Q124412638\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Clean Eatz\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "CoCo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"CoCo\"][\"brand:wikidata\"=\"Q65084369\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"CoCo Fresh Tea & Juice\"][\"short_name\"=\"CoCo\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "CoCo\u90fd\u53ef",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"CoCo\u90fd\u53ef\"][\"brand:en\"=\"CoCo Fresh Tea & Juice\"][\"brand:wikidata\"=\"Q65084369\"][\"brand:zh\"=\"CoCo\u90fd\u53ef\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"CoCo\u90fd\u53ef\"][\"name:en\"=\"CoCo Fresh Tea & Juice\"][\"name:zh\"=\"CoCo\u90fd\u53ef\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "CofeFest",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"CofeFest\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"CofeFest\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee Berry",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee Berry\"][\"brand:wikidata\"=\"Q115323784\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee Berry\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee Company",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee Company\"][\"brand:wikidata\"=\"Q108927063\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee Company\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee Culture (Canada)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee Culture\"][\"brand:wikidata\"=\"Q130545230\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee Culture\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee Culture (New Zealand)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee Culture\"][\"brand:wikidata\"=\"Q100272682\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee Culture\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee Fellows",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee Fellows\"][\"brand:wikidata\"=\"Q23461429\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee Fellows\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Coffee_Fellows,_M\u00fcnchen.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Coffee_Fellows,_M\u00fcnchen.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee House (Suomi)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee House\"][\"brand:wikidata\"=\"Q11855430\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee House\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Coffee_House_Logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Coffee_House_Logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee Island",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee Island\"][\"brand:wikidata\"=\"Q60867333\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee Island\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee Lab",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee Lab\"][\"brand:wikidata\"=\"Q109568497\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee Lab\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee Like",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee Like\"][\"brand:wikidata\"=\"Q55662627\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee Like\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee Republic",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee Republic\"][\"brand:wikidata\"=\"Q5140923\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee Republic\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Coffee_Republic_shop.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Coffee_Republic_shop.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee Time",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee Time\"][\"brand:wikidata\"=\"Q5140932\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee Time\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffee#1",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffee#1\"][\"brand:wikidata\"=\"Q22032058\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffee#1\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "coffeedream",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"coffeedream\"][\"brand:wikidata\"=\"Q133001964\"][\"cuisine\"=\"coffee_shop;cake;tea\"][\"name\"=\"coffeedream\"][\"name:en\"=\"coffeedream\"][\"name:sr\"=\"\u043a\u043e\u0444\u0438\u0434\u0440\u0438\u043c\"][\"name:sr-Latn\"=\"kofidrim\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Coffeeshop Company",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Coffeeshop Company\"][\"brand:wikidata\"=\"Q873767\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Coffeeshop Company\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/CSC_Logo-2_20210215.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/CSC_Logo-2_20210215.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Cofix",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Cofix\"][\"brand:en\"=\"Cofix\"][\"brand:he\"=\"\u05e7\u05e4\u05d5\u05d9\u05e7\u05e1\"][\"brand:wikidata\"=\"Q16132717\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Cofix\"][\"name:en\"=\"Cofix\"][\"name:he\"=\"\u05e7\u05d5\u05e4\u05d9\u05e7\u05e1\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Cofix_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cofix_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Cofizz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Cofizz\"][\"brand:en\"=\"Cofizz\"][\"brand:he\"=\"\u05e7\u05d5\u05e4\u05d9\u05d6\"][\"brand:wikidata\"=\"Q64606270\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Cofizz\"][\"name:en\"=\"Cofizz\"][\"name:he\"=\"\u05e7\u05d5\u05e4\u05d9\u05d6\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Colicci",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Colicci\"][\"brand:wikidata\"=\"Q110057606\"][\"cuisine\"=\"coffee_shop\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Columbus Caf\u00e9 & Co",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Columbus Caf\u00e9 & Co\"][\"brand:wikidata\"=\"Q2984582\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Columbus Caf\u00e9 & Co\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "C\u1ed9ng C\u00e0 Ph\u00ea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"C\u1ed9ng C\u00e0 Ph\u00ea\"][\"brand:wikidata\"=\"Q63864181\"][\"cuisine\"=\"coffee_shop;vietnamese\"][\"name\"=\"C\u1ed9ng C\u00e0 Ph\u00ea\"][\"name:vi\"=\"C\u1ed9ng C\u00e0 Ph\u00ea\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/C\u1ed9ng_C\u00e0_Ph\u00ea_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/C\u1ed9ng_C\u00e0_Ph\u00ea_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Corner Bakery",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Corner Bakery\"][\"brand:wikidata\"=\"Q5171598\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Corner Bakery\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Corner_Bakery_Cafe_on_14th,_Washington_DC.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Corner_Bakery_Cafe_on_14th,_Washington_DC.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Costa",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Costa\"][\"brand:wikidata\"=\"Q608845\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Costa\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Costa_Coffee_Logo_white_on_red.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Costa_Coffee_Logo_white_on_red.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Costa Drive Thru",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Costa\"][\"brand:wikidata\"=\"Q608845\"][\"cuisine\"=\"coffee_shop\"][\"drive_through\"=\"yes\"][\"name\"=\"Costa Drive Thru\"][\"takeaway\"=\"only\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Costa_Coffee_Logo_white_on_red.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Costa_Coffee_Logo_white_on_red.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Country Style",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Country Style\"][\"brand:wikidata\"=\"Q5177435\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Country Style\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Dee Dee's Family Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Dee Dee's Family Caf\u00e9\"][\"brand:wikidata\"=\"Q120645741\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Dee Dee's Family Caf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Ding Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Ding Tea\"][\"brand:wikidata\"=\"Q112123475\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Ding Tea\"][\"name:en\"=\"Ding Tea\"][\"name:zh\"=\"\u85a1\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Ding Tea \u85a1\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Ding Tea \u85a1\u8336\"][\"brand:en\"=\"Ding Tea\"][\"brand:ja\"=\"\u85a1\u8336\"][\"brand:wikidata\"=\"Q112123475\"][\"brand:zh\"=\"\u85a1\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Ding Tea \u85a1\u8336\"][\"name:en\"=\"Ding Tea\"][\"name:ja\"=\"\u85a1\u8336\"][\"name:zh\"=\"\u85a1\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "D\u00f4me",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"D\u00f4me\"][\"brand:wikidata\"=\"Q5289995\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"D\u00f4me\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Dome_Caf\u00e9_-_panoramio.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dome_Caf\u00e9_-_panoramio.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Doppio Espresso",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Doppio Espresso\"][\"brand:wikidata\"=\"Q108927102\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Doppio Espresso\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "DriveCafe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"DriveCafe\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"DriveCafe\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "DuckBill Cookies & Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"DuckBill Cookies & Coffee\"][\"brand:wikidata\"=\"Q110015928\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"DuckBill Cookies & Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Dunn Brothers Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Dunn Brothers Coffee\"][\"brand:wikidata\"=\"Q5315537\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Dunn Brothers Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Dunn_Brothers_Coffee_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dunn_Brothers_Coffee_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Dutch Bros. Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Dutch Bros. Coffee\"][\"brand:wikidata\"=\"Q5317253\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Dutch Bros. Coffee\"][\"takeaway\"=\"only\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Dutch_Bros_Coffee_wordmark.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dutch_Bros_Coffee_wordmark.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Einstein Kaffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Einstein Kaffee\"][\"brand:wikidata\"=\"Q107987401\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Einstein Kaffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "EL&N",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"EL&N\"][\"brand:wikidata\"=\"Q131470289\"][\"cuisine\"=\"coffee_shop\"][\"diet:halal\"=\"yes\"][\"name\"=\"EL&N\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Equatorial Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Equatorial Coffee\"][\"brand:wikidata\"=\"Q130074908\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Equatorial Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Espresso House",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Espresso House\"][\"brand:wikidata\"=\"Q10489162\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Espresso House\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Espresso_house.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Espresso_house.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Espressolab",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Espressolab\"][\"brand:wikidata\"=\"Q97599059\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Espressolab\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Euro Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"Euro Cafe\"][\"amenity\"=\"cafe\"][\"brand\"=\"Euro Caf\u00e9\"][\"brand:wikidata\"=\"Q113826845\"][\"cuisine\"=\"coffee_shop;sandwich\"][\"name\"=\"Euro Caf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "FCB Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"FCB Coffee\"][\"brand:wikidata\"=\"Q114677883\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"FCB Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Figaro",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Figaro\"][\"brand:wikidata\"=\"Q17069806\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Figaro\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Flash Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Flash Coffee\"][\"brand:wikidata\"=\"Q118627777\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Flash Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Flying Horse Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Flying Horse Coffee\"][\"brand:wikidata\"=\"Q123578208\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Flying Horse Coffee\"][\"name:en\"=\"Flying Horse Coffee\"][\"name:ja\"=\"\u30d5\u30e9\u30a4\u30f3\u30b0\u30db\u30fc\u30b9\u30b3\u30fc\u30d2\u30fc\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Fore Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Fore Coffee\"][\"brand:wikidata\"=\"Q66424373\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Fore Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Fran's Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Fran's Caf\u00e9\"][\"brand:wikidata\"=\"Q62075645\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Fran's Caf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Fresh Corner",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Fresh Corner\"][\"brand:wikidata\"=\"Q129256375\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Fresh Corner\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Gloria Jean's",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Gloria Jean's\"][\"brand:wikidata\"=\"Q2666365\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Gloria Jean's\"][\"official_name\"=\"Gloria Jean's Coffees\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gloria_Jean's_Coffee.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gloria_Jean's_Coffee.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Go Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Go Coffee\"][\"brand:wikidata\"=\"Q130293405\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Go Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Gong Cha",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Gong Cha\"][\"brand:wikidata\"=\"Q5581670\"][\"brand:zh\"=\"\u8ca2\u8336\"][\"cuisine\"=\"bubble_tea\"][\"int_name\"=\"Gong Cha\"][\"name\"=\"Gong Cha\"][\"name:zh\"=\"\u8ca2\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Gong Cha (Vi\u1ec7t Nam)",
    query: "[out:json][timeout:25];(nwr[\"alt_name:vi\"=\"C\u1ed1ng Tr\u00e0\"][\"amenity\"=\"cafe\"][\"brand\"=\"Gong Cha\"][\"brand:vi\"=\"Gong Cha\"][\"brand:wikidata\"=\"Q5581670\"][\"brand:zh\"=\"\u8ca2\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Gong Cha\"][\"name:vi\"=\"Gong Cha\"][\"name:zh\"=\"\u8ca2\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Gr\u00e3o Espresso",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Gr\u00e3o Espresso\"][\"brand:wikidata\"=\"Q119252512\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Gr\u00e3o Espresso\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Green Caff\u00e8 Nero",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Green Caff\u00e8 Nero\"][\"brand:wikidata\"=\"Q675808\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Green Caff\u00e8 Nero\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caff\u00e8_Nero_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caff\u00e8_Nero_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Grind",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Grind\"][\"brand:wikidata\"=\"Q113687389\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Grind\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Happy Lemon",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Happy Lemon\"][\"brand:wikidata\"=\"Q109968422\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Happy Lemon\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Harris + Hoole",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Harris + Hoole\"][\"brand:wikidata\"=\"Q19903306\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Harris + Hoole\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Harris_&_Hoole_coffee_shop_Southgate.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Harris_&_Hoole_coffee_shop_Southgate.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Haus!",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Haus!\"][\"brand:wikidata\"=\"Q114824757\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Haus!\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Havanna",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Havanna\"][\"brand:wikidata\"=\"Q2900869\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Havanna\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Havanna_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Havanna_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Hermanos Colombian Coffee Roasters",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Hermanos Colombian Coffee Roasters\"][\"brand:wikidata\"=\"Q110408643\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Hermanos Colombian Coffee Roasters\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Heytea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Heytea\"][\"brand:en\"=\"Heytea\"][\"brand:wikidata\"=\"Q60875376\"][\"brand:zh\"=\"\u559c\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Heytea\"][\"name:en\"=\"Heytea\"][\"name:zh\"=\"\u559c\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HEYTEA_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HEYTEA_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Highlands Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Highlands Coffee\"][\"brand:wikidata\"=\"Q5759361\"][\"cuisine\"=\"coffee_shop;vietnamese\"][\"name\"=\"Highlands Coffee\"][\"name:en\"=\"Highlands Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Hu\u1ebf_2024_-_Vincom_Plaza_-_img_03.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hu\u1ebf_2024_-_Vincom_Plaza_-_img_03.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Hollys",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Hollys\"][\"brand:en\"=\"Hollys\"][\"brand:ko\"=\"\ud560\ub9ac\uc2a4\"][\"brand:wikidata\"=\"Q12624386\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Hollys\"][\"name:en\"=\"Hollys\"][\"name:ko\"=\"\ud560\ub9ac\uc2a4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Honey Dew Donuts",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Honey Dew Donuts\"][\"brand:wikidata\"=\"Q5893524\"][\"cuisine\"=\"donut;coffee_shop\"][\"name\"=\"Honey Dew\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Honey_Dew_Donuts.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Honey_Dew_Donuts.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Honeymoon Dessert",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Honeymoon Dessert\"][\"brand:en\"=\"Honeymoon Dessert\"][\"brand:wikidata\"=\"Q11326608\"][\"brand:zh\"=\"\u6ee1\u8bb0\u751c\u54c1\"][\"cuisine\"=\"asian;dessert\"][\"name\"=\"Honeymoon Dessert\"][\"name:en\"=\"Honeymoon Dessert\"][\"name:zh\"=\"\u6ee1\u8bb0\u751c\u54c1\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Hopper Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Hopper Coffee\"][\"brand:wikidata\"=\"Q130711093\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Hopper Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Hudsons Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Hudsons Coffee\"][\"brand:wikidata\"=\"Q5929076\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Hudsons Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Hui Lau Shan",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Hui Lau Shan\"][\"brand:en\"=\"Hui Lau Shan\"][\"brand:wikidata\"=\"Q5934913\"][\"brand:zh\"=\"\u8a31\u7559\u5c71\"][\"cuisine\"=\"asian;dessert\"][\"name\"=\"Hui Lau Shan\"][\"name:en\"=\"Hui Lau Shan\"][\"name:zh\"=\"\u8a31\u7559\u5c71\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_HuiLauShan_YuenLongOldShop.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_HuiLauShan_YuenLongOldShop.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "IKEA Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"IKEA\"][\"brand:wikidata\"=\"Q54078\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"IKEA Caf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ikea_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ikea_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Insomnia",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Insomnia\"][\"brand:wikidata\"=\"Q6038271\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Insomnia\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "It's Boba Time",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"It's Boba Time\"][\"brand:wikidata\"=\"Q119951349\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"It's Boba Time\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "IzyCoffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"IzyCoffee\"][\"brand:wikidata\"=\"Q124358963\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"IzyCoffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Jamaica Blue",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Jamaica Blue\"][\"brand:wikidata\"=\"Q24965819\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Jamaica Blue\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Janji Jiwa",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Janji Jiwa\"][\"brand:wikidata\"=\"Q124030785\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Janji Jiwa\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Janji_Jiwa_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Janji_Jiwa_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Java House",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Java House\"][\"brand:wikidata\"=\"Q6959786\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Java House\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Jazen Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Jazen Tea\"][\"brand:wikidata\"=\"Q114989479\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Jazen Tea\"][\"short_name\"=\"Jazen\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "JJ Bean",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"JJ Bean\"][\"brand:wikidata\"=\"Q111937483\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"JJ Bean\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Joe & The Juice",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Joe & The Juice\"][\"brand:wikidata\"=\"Q26221514\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Joe & The Juice\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Joe_&_The_Juice_in_River_North,_Chicago,_Illinois.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Joe_&_The_Juice_in_River_North,_Chicago,_Illinois.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Juan Valdez Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Juan Valdez Caf\u00e9\"][\"brand:wikidata\"=\"Q6301102\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Juan Valdez Caf\u00e9\"][\"shop\"=\"coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_JVC.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_JVC.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Julius Meinl",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Julius Meinl\"][\"brand:wikidata\"=\"Q670154\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Julius Meinl\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Julius_Meinl_(2004).svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Julius_Meinl_(2004).svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Kahve D\u00fcnyas\u0131",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Kahve D\u00fcnyas\u0131\"][\"brand:wikidata\"=\"Q28008050\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Kahve D\u00fcnyas\u0131\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Kitanda",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Kitanda\"][\"brand:wikidata\"=\"Q124249667\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Kitanda\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Kopi Kenangan",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Kopi Kenangan\"][\"brand:wikidata\"=\"Q97221992\"][\"cuisine\"=\"coffee_shop\"][\"diet:halal\"=\"only\"][\"name\"=\"Kopi Kenangan\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi_Kenangan.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kopi_Kenangan.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Kreation Organic",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Kreation Organic\"][\"brand:wikidata\"=\"Q113363083\"][\"cuisine\"=\"juice\"][\"name\"=\"Kreation Organic\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Kung Fu Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Kung Fu Tea\"][\"brand:wikidata\"=\"Q66023886\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Kung Fu Tea\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Kuzina",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Kuzina\"][\"brand:wikidata\"=\"Q48947300\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Kuzina\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "La Colombe Coffee Roasters",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"La Colombe Coffee Roasters\"][\"brand:wikidata\"=\"Q23461663\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"La Colombe Coffee Roasters\"][\"short_name\"=\"La Colombe\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Lavazza",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Lavazza\"][\"brand:wikidata\"=\"Q543750\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Lavazza\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Lavazza_-_logo_(Italy,_1995).svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lavazza_-_logo_(Italy,_1995).svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Le Pain Quotidien",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Le Pain Quotidien\"][\"brand:wikidata\"=\"Q2046903\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Le Pain Quotidien\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Le_Pain_Quotidien.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Le_Pain_Quotidien.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Luckin Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Luckin Coffee\"][\"brand:wikidata\"=\"Q56811344\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Luckin Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Luckin_Coffee_at_Lucky_Time_Food_Court,_Dongzhimen_(20220216160956).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Luckin_Coffee_at_Lucky_Time_Food_Court,_Dongzhimen_(20220216160956).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "M Stand",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"M Stand\"][\"brand:wikidata\"=\"Q116056845\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"M Stand\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "M&S Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Marks & Spencer\"][\"brand:short\"=\"M&S\"][\"brand:wikidata\"=\"Q714491\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"M&S Caf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/M&S_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/M&S_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Machi machi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"machi machi\"][\"brand:en\"=\"machi machi\"][\"brand:wikidata\"=\"Q114828290\"][\"brand:zh\"=\"\u9ea5\u5409\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Machi machi\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Mado",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Mado\"][\"brand:wikidata\"=\"Q17116336\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Mado\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mado_logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mado_logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Mais1 Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Mais1 Caf\u00e9\"][\"brand:wikidata\"=\"Q120041488\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Mais1 Caf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Mango Mango Dessert",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Mango Mango Dessert\"][\"brand:wikidata\"=\"Q117811257\"][\"cuisine\"=\"asian;dessert\"][\"name\"=\"Mango Mango Dessert\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Manner Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Manner Coffee\"][\"brand:wikidata\"=\"Q111338344\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Manner Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Manner_Coffee_at_Jiubai_Century_Food_Shopping_Mall-20220828.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Manner_Coffee_at_Jiubai_Century_Food_Shopping_Mall-20220828.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Manolo Bakes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Manolo Bakes\"][\"brand:wikidata\"=\"Q131742432\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Manolo Bakes\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Matcha Cafe Maiko",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Matcha Cafe Maiko\"][\"brand:wikidata\"=\"Q113528897\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Matcha Cafe Maiko\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Matto Espresso",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Matto Espresso\"][\"brand:wikidata\"=\"Q122209496\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Matto Espresso\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Max Brenner",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Max Brenner\"][\"brand:wikidata\"=\"Q955687\"][\"cuisine\"=\"chocolate\"][\"name\"=\"Max Brenner\"][\"name:en\"=\"Max Brenner\"][\"name:he\"=\"\u05de\u05e7\u05e1 \u05d1\u05e8\u05e0\u05e8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Max_Brenner_noc\u0105.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Max_Brenner_noc\u0105.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Maxx Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Maxx Coffee\"][\"brand:wikidata\"=\"Q124651563\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Maxx Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "McCaf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"McCaf\u00e9\"][\"brand:wikidata\"=\"Q3114287\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"McCaf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/McCaf\u00e9_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/McCaf\u00e9_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Meama Collect",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u10db\u10d4\u10d0\u10db\u10d0\"][\"brand:en\"=\"Meama\"][\"brand:ka\"=\"\u10db\u10d4\u10d0\u10db\u10d0\"][\"brand:ru\"=\"\u041c\u0435\u0430\u043c\u0430\"][\"brand:wikidata\"=\"Q99850395\"][\"coffee:brand\"=\"Meama\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u10db\u10d4\u10d0\u10db\u10d0 \u10e5\u10dd\u10da\u10d4\u10e5\u10d7\u10d8\"][\"name:en\"=\"Meama Collect\"][\"name:ka\"=\"\u10db\u10d4\u10d0\u10db\u10d0 \u10e5\u10dd\u10da\u10d4\u10e5\u10d7\u10d8\"][\"name:ru\"=\"\u041c\u0435\u0430\u043c\u0430 \u041a\u043e\u043b\u043b\u0435\u043a\u0442\"][\"takeaway\"=\"only\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Michel's Patisserie",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Michel's Patisserie\"][\"brand:wikidata\"=\"Q6836235\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Michel's Patisserie\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Mikel",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Mikel\"][\"brand:wikidata\"=\"Q16952021\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Mikel\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Mikucha",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Mikucha\"][\"brand:wikidata\"=\"Q118640408\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Mikucha\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Mixue",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Mixue\"][\"brand:en\"=\"MIXUEBINGCHENG\"][\"brand:wikidata\"=\"Q107406476\"][\"brand:zh\"=\"\u871c\u96ea\u51b0\u57ce\"][\"cuisine\"=\"ice_cream;bubble_tea\"][\"name\"=\"Mixue\"][\"name:en\"=\"Mixue\"][\"name:zh\"=\"\u871c\u96ea\u51b0\u57ce\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mixue_icecream_and_tea_in_fujian_fuding.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mixue_icecream_and_tea_in_fujian_fuding.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Momen'Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Momen'Tea\"][\"brand:wikidata\"=\"Q124257369\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Momen'Tea\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Mooboo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Mooboo\"][\"brand:wikidata\"=\"Q130244003\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Mooboo\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Morrisons Cafe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Morrisons\"][\"brand:wikidata\"=\"Q922344\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Morrisons Cafe\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Wm_Morrison_Supermarkets_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Wm_Morrison_Supermarkets_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "M\u00f6venpick Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"M\u00f6venpick Caf\u00e9\"][\"brand:wikidata\"=\"Q126369437\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"M\u00f6venpick Caf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Mr. Brown \u4f2f\u6717\u5496\u5561\u9928",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Mr. Brown \u4f2f\u6717\u5496\u5561\u9928\"][\"brand:en\"=\"Mr. Brown Caf\u00e9\"][\"brand:wikidata\"=\"Q21016949\"][\"brand:zh\"=\"\u4f2f\u6717\u5496\u5561\u9928\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Mr. Brown \u4f2f\u6717\u5496\u5561\u9928\"][\"name:en\"=\"Mr. Brown Caf\u00e9\"][\"name:zh\"=\"\u4f2f\u6717\u5496\u5561\u9928\"][\"operator\"=\"\u91d1\u8eca\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"operator:en\"=\"King Car Industrial Co., Ltd.\"][\"operator:wikidata\"=\"Q11647937\"][\"operator:zh\"=\"\u91d1\u8eca\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Mr. Wish",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Mr. Wish\"][\"brand:wikidata\"=\"Q123859714\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Mr. Wish\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Muffin Break",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Muffin Break\"][\"brand:wikidata\"=\"Q16964876\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Muffin Break\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Mugg & Bean",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Mugg & Bean\"][\"brand:wikidata\"=\"Q6932113\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Mugg & Bean\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mugg&Bean_logo.gif",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mugg&Bean_logo.gif",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Muzz Buzz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Muzz Buzz\"][\"brand:wikidata\"=\"Q6944483\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Muzz Buzz\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Muzz_Buzz_Aeon_Laketown_Mori_20150909.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Muzz_Buzz_Aeon_Laketown_Mori_20150909.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Nero Express (Caff\u00e8 Nero)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Caff\u00e8 Nero\"][\"brand:wikidata\"=\"Q675808\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Nero Express\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caff\u00e8_Nero_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caff\u00e8_Nero_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Notes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Notes\"][\"brand:wikidata\"=\"Q111656694\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Notes\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "N\u00fc Health Food",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"N\u00fc Health Food\"][\"brand:wikidata\"=\"Q130400175\"][\"cuisine\"=\"health_food\"][\"name\"=\"N\u00fc Health Food\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "NUTTEA",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"NUTTEA\"][\"brand:en\"=\"NUTTEA\"][\"brand:wikidata\"=\"Q111313216\"][\"cuisine\"=\"tea\"][\"name:en\"=\"NUTTEA\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "O'Briens Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"O'Briens\"][\"brand:wikidata\"=\"Q7071686\"][\"cuisine\"=\"sandwich\"][\"name\"=\"O'Briens\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "OldTown White Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"OldTown White Coffee\"][\"brand:wikidata\"=\"Q7085308\"][\"cuisine\"=\"coffee_shop;malaysian\"][\"name\"=\"OldTown White Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/OldTown_White_Coffee_Outlet.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/OldTown_White_Coffee_Outlet.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "OneZo Tapioca",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"OneZo Tapioca\"][\"brand:en\"=\"OneZo Tapioca\"][\"brand:wikidata\"=\"Q111537052\"][\"brand:zh\"=\"\u4e38\u4f5c\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"OneZo Tapioca\"][\"name:en\"=\"OneZo Tapioca\"][\"name:zh\"=\"\u4e38\u4f5c\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u00d6zs\u00fct",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u00d6zs\u00fct\"][\"brand:wikidata\"=\"Q20472928\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u00d6zs\u00fct\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Pasteler\u00eda Artesanal Manolo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Pasteler\u00eda Artesanal Manolo\"][\"brand:en\"=\"Manolo Artisanal Pastry\"][\"brand:es\"=\"Pasteler\u00eda Artesanal Manolo\"][\"brand:wikidata\"=\"Q131742395\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Pasteler\u00eda Artesanal Manolo\"][\"name:en\"=\"Manolo Artisanal Pastry\"][\"name:es\"=\"Pasteler\u00eda Artesanal Manolo\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Patisserie Valerie",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Patisserie Valerie\"][\"brand:wikidata\"=\"Q22101966\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Patisserie Valerie\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Pausa",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Pausa\"][\"brand:wikidata\"=\"Q121360236\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Pausa\"][\"operator\"=\"Dunelm\"][\"operator:wikidata\"=\"Q5315020\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Peet's Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Peet's Coffee\"][\"brand:wikidata\"=\"Q1094101\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Peet's Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Peet's_Coffee_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Peet's_Coffee_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Pellini",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Pellini\"][\"brand:wikidata\"=\"Q119560268\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Pellini\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Perky Blenders",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Perky Blenders\"][\"brand:wikidata\"=\"Q123003976\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Perky Blenders\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Petit Pret",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Petit Pret\"][\"brand:wikidata\"=\"Q111448708\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Petit Pret\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Philz Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Philz Coffee\"][\"brand:wikidata\"=\"Q18156812\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Philz Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Philz_Coffee_-_24th-Folsom_-_SF,_CA.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Philz_Coffee_-_24th-Folsom_-_SF,_CA.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Pie Face",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Pie Face\"][\"brand:wikidata\"=\"Q18166370\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Pie Face\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Closed_Pie_Face_store_in_Newtown_November_2014.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Closed_Pie_Face_store_in_Newtown_November_2014.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "PJ's Coffee of New Orleans",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"PJ's Coffee of New Orleans\"][\"brand:wikidata\"=\"Q7119454\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"PJ's Coffee of New Orleans\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Plato Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Plato Coffee\"][\"brand:wikidata\"=\"Q130216194\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Plato Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Point Coffee",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"Indomaret Point\"][\"amenity\"=\"cafe\"][\"brand\"=\"Point Coffee\"][\"brand:wikidata\"=\"Q124651558\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Point Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Prime",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Prime\"][\"brand:wikidata\"=\"Q62122839\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Prime\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "PRONTO",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"PRONTO\"][\"brand:en\"=\"PRONTO\"][\"brand:ja\"=\"\u30d7\u30ed\u30f3\u30c8\"][\"brand:wikidata\"=\"Q11336224\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"PRONTO\"][\"name:en\"=\"PRONTO\"][\"name:ja\"=\"\u30d7\u30ed\u30f3\u30c8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/PRONTO_OBP_shop.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/PRONTO_OBP_shop.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Pumpkin",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Pumpkin\"][\"brand:wikidata\"=\"Q27825961\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Pumpkin\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Pumpkin_-_no_Cinderella,_no_ball_(6596299303).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pumpkin_-_no_Cinderella,_no_ball_(6596299303).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Quickly",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Quickly\"][\"brand:en\"=\"Quickly\"][\"brand:wikidata\"=\"Q3771463\"][\"brand:zh\"=\"\u5feb\u53ef\u7acb\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Quickly\"][\"name:en\"=\"Quickly\"][\"name:zh\"=\"\u5feb\u53ef\u7acb\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Pearl_Milktea.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pearl_Milktea.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Real Fruit Bubble Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Real Fruit Bubble Tea\"][\"brand:wikidata\"=\"Q66072331\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Real Fruit Bubble Tea\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Redemption Roasters",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Redemption Roasters\"][\"brand:wikidata\"=\"Q111657079\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Redemption Roasters\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Rei do Mate",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Rei do Mate\"][\"brand:wikidata\"=\"Q7309875\"][\"cuisine\"=\"tea\"][\"name\"=\"Rei do Mate\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Robert Harris",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Robert Harris\"][\"brand:wikidata\"=\"Q121652432\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Robert Harris\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Rosslyn",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Rosslyn\"][\"brand:wikidata\"=\"Q132950967\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Rosslyn\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Royaltea \u7687\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Royaltea\"][\"brand:en\"=\"Royaltea\"][\"brand:wikidata\"=\"Q112778483\"][\"brand:zh\"=\"\u7687\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Royaltea\"][\"name:en\"=\"Royaltea\"][\"name:zh\"=\"\u7687\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Rustpunt.nu",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Rustpunt.nu\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Rustpunt.nu\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "S&P",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"S&P\"][\"brand:wikidata\"=\"Q125872113\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"S&P\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Saint Espresso",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Saint Espresso\"][\"brand:wikidata\"=\"Q111430035\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Saint Espresso\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Scooter's Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Scooter's Coffee\"][\"brand:wikidata\"=\"Q117280308\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Scooter's Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Scooter's_Coffee_in_Plano,_Texas_01.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Scooter's_Coffee_in_Plano,_Texas_01.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Seattle Coffee Company",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Seattle Coffee Company\"][\"brand:wikidata\"=\"Q116646221\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Seattle Coffee Company\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Seattle's Best Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Seattle's Best Coffee\"][\"brand:wikidata\"=\"Q766329\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Seattle's Best Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Seattle's_Best_Coffee_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Seattle's_Best_Coffee_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Second Cup",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Second Cup\"][\"brand:wikidata\"=\"Q862180\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Second Cup\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Second-cup-logo-1.webp",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Second-cup-logo-1.webp",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Segafredo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Segafredo\"][\"brand:wikidata\"=\"Q21282762\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Segafredo\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Shakespeare Coffee & Bistro",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Shakespeare Coffee & Bistro\"][\"brand:wikidata\"=\"Q119561507\"][\"cuisine\"=\"bistro;coffee_shop\"][\"diet:vegetarian\"=\"yes\"][\"name\"=\"Shakespeare\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Sharetea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Sharetea\"][\"brand:wikidata\"=\"Q64827032\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Sharetea\"][\"name:en\"=\"Sharetea\"][\"name:zh\"=\"\u6b47\u8173\u4ead\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Sharetea \u0634\u064a\u0631\u062a\u064a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Sharetea\"][\"brand:wikidata\"=\"Q64827032\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Sharetea \u0634\u064a\u0631\u062a\u064a\"][\"name:ar\"=\"\u0634\u064a\u0631\u062a\u064a\"][\"name:en\"=\"Sharetea\"][\"name:zh\"=\"\u6b47\u8173\u4ead\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Sharetea \u6b47\u8173\u4ead",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Sharetea\"][\"brand:wikidata\"=\"Q64827032\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Sharetea \u6b47\u8173\u4ead\"][\"name:en\"=\"Sharetea\"][\"name:zh\"=\"\u6b47\u8173\u4ead\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Shuyi Tealicious",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Shuyi Tealicious\"][\"brand:en\"=\"Shuyi Tealicious\"][\"brand:wikidata\"=\"Q107729359\"][\"brand:zh-Hans\"=\"\u4e66\u4ea6\u70e7\u4ed9\u8349\"][\"brand:zh-Hant\"=\"\u66f8\u4ea6\u71d2\u4ed9\u8349\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Shuyi Tealicious\"][\"name:en\"=\"Shuyi Tealicious\"][\"name:zh-Hans\"=\"\u4e66\u4ea6\u70e7\u4ed9\u8349\"][\"name:zh-Hant\"=\"\u66f8\u4ea6\u71d2\u4ed9\u8349\"][\"operator\"=\"Shuyi Tealicious Canada\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Shuyi_Tealicious_at_Jingcheng_Neighbor_Center-20220619.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shuyi_Tealicious_at_Jingcheng_Neighbor_Center-20220619.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Skuratov Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Skuratov Coffee\"][\"brand:en\"=\"Skuratov Coffee\"][\"brand:wikidata\"=\"Q98642885\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Skuratov Coffee\"][\"name:en\"=\"Skuratov Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Speedy Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Speedway\"][\"brand:wikidata\"=\"Q7575683\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Speedy Caf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Speedway_LLC_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Speedway_LLC_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Stan's Donuts & Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Stan's Donuts & Coffee\"][\"brand:wikidata\"=\"Q120985884\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Stan's Donuts & Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Starbaks",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0421\u0442\u0430\u0440\u0431\u0430\u043a\u0441\"][\"brand:en\"=\"Starbucks\"][\"brand:sr\"=\"\u0421\u0442\u0430\u0440\u0431\u0430\u043a\u0441\"][\"brand:sr-Latn\"=\"Starbaks\"][\"brand:wikidata\"=\"Q37158\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0421\u0442\u0430\u0440\u0431\u0430\u043a\u0441\"][\"name:en\"=\"Starbucks\"][\"name:sr\"=\"\u0421\u0442\u0430\u0440\u0431\u0430\u043a\u0441\"][\"name:sr-Latn\"=\"Starbaks\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Starbucks",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Starbucks\"][\"brand:wikidata\"=\"Q37158\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Starbucks\"][\"official_name\"=\"Starbucks Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Starbucks Reserve",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Starbucks Reserve\"][\"brand:wikidata\"=\"Q71150001\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Starbucks Reserve\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_Reserve_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_Reserve_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Stars Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Stars Coffee\"][\"brand:wikidata\"=\"Q117236699\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Stars Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Stop Cafe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Stop Cafe\"][\"brand:wikidata\"=\"Q130868061\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Stop Cafe\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Store Street Espresso",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Store Street Espresso\"][\"brand:wikidata\"=\"Q114008554\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Store Street Espresso\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Streamer Coffee Company",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Streamer Coffee Company\"][\"brand:wikidata\"=\"Q110397553\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Streamer Coffee Company\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Stumptown Coffee Roasters",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Stumptown Coffee Roasters\"][\"brand:wikidata\"=\"Q2695932\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Stumptown Coffee Roasters\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/StumptownCoffeeDivision.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/StumptownCoffeeDivision.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Sulbing (\uc124\ube59)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Sulbing\"][\"brand:en\"=\"Sulbing\"][\"brand:ko\"=\"\uc124\ube59\"][\"brand:wikidata\"=\"Q18156373\"][\"cuisine\"=\"dessert\"][\"name\"=\"Sulbing\"][\"name:en\"=\"Sulbing\"][\"name:ko\"=\"\uc124\ube59\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\uc124\ube59_\ub85c\uace0_(2014).png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\uc124\ube59_\ub85c\uace0_(2014).png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Surf Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Surf Coffee\"][\"brand:wikidata\"=\"Q110278756\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Surf Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Sweethoney Dessert",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Sweethoney Dessert\"][\"brand:en\"=\"Sweethoney Dessert\"][\"brand:wikidata\"=\"Q122329263\"][\"brand:zh\"=\"\u674f\u8bb0\u751c\u54c1\"][\"cuisine\"=\"asian;dessert\"][\"name\"=\"Sweethoney Dessert\"][\"name:en\"=\"Sweethoney Dessert\"][\"name:zh\"=\"\u674f\u8bb0\u751c\u54c1\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "T4 Tea House",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"T4 Tea House\"][\"amenity\"=\"cafe\"][\"brand\"=\"T4\"][\"brand:wikidata\"=\"Q112123535\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"T4 Tea For U\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Tapioca Express",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Tapioca Express\"][\"brand:wikidata\"=\"Q23462008\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Tapioca Express\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Tastea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Tastea\"][\"brand:wikidata\"=\"Q122328236\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Tastea\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Tatte Bakery & Cafe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Tatte Bakery & Cafe\"][\"brand:wikidata\"=\"Q116671479\"][\"cuisine\"=\"bakery;coffee_shop\"][\"name\"=\"Tatte Bakery & Cafe\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Tatte_Bakery,_Beacon_Hill.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tatte_Bakery,_Beacon_Hill.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Tealive",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Tealive\"][\"brand:wikidata\"=\"Q95722097\"][\"cuisine\"=\"tea;coffee_shop\"][\"name\"=\"Tealive\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Tealife_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tealife_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Teapresso Bar",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Teapresso Bar\"][\"cuisine\"=\"tea;coffee_shop\"][\"name\"=\"Teapresso Bar\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Teeamo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Teeamo\"][\"brand:wikidata\"=\"Q111923135\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Teeamo\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Tesco Caf\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Tesco\"][\"brand:wikidata\"=\"Q487494\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Tesco Caf\u00e9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Tesco_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tesco_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Alley",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Alley\"][\"brand:en\"=\"The Alley\"][\"brand:wikidata\"=\"Q126456355\"][\"brand:zh\"=\"\u9e7f\u89d2\u5df7\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"The Alley\"][\"name:en\"=\"The Alley\"][\"name:zh\"=\"\u9e7f\u89d2\u5df7\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Barn",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Barn\"][\"brand:wikidata\"=\"Q110545264\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"The Barn\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Bean",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Bean\"][\"brand:wikidata\"=\"Q122209700\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"The Bean\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Coffee\"][\"brand:wikidata\"=\"Q112042753\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"The Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo-TheCoffee.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo-TheCoffee.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Coffee Bean & Tea Leaf",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Coffee Bean & Tea Leaf\"][\"brand:wikidata\"=\"Q1141384\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"The Coffee Bean & Tea Leaf\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/TCB&TL_wordmark.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/TCB&TL_wordmark.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Coffee Club",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Coffee Club\"][\"brand:wikidata\"=\"Q7726599\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"The Coffee Club\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mascot_NSW_2020,_Australia_-_panoramio_(99).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mascot_NSW_2020,_Australia_-_panoramio_(99).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Coffee House (Vi\u1ec7t Nam)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Coffee House\"][\"brand:wikidata\"=\"Q60775742\"][\"cuisine\"=\"coffee_shop;vietnamese\"][\"name\"=\"The Coffee House\"][\"name:en\"=\"The Coffee House\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Coffee_House_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Coffee_House_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Gentlemen Baristas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Gentlemen Baristas\"][\"brand:wikidata\"=\"Q111658743\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"The Gentlemen Baristas\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Grumpy Baker",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Grumpy Baker\"][\"brand:wikidata\"=\"Q117772090\"][\"cuisine\"=\"bakery\"][\"name\"=\"The Grumpy Baker\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Human Bean",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Human Bean\"][\"brand:wikidata\"=\"Q7740821\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"The Human Bean\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Human_Bean_on_Oak_Street_at_10th_-_Hillsboro,_Oregon.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Human_Bean_on_Oak_Street_at_10th_-_Hillsboro,_Oregon.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "The Italian Coffee Company",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"The Italian Coffee Company\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"The Italian Coffee Company\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Thelins konditori",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Thelins konditori\"][\"brand:wikidata\"=\"Q124048792\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Thelins konditori\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Think Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Think Coffee\"][\"brand:wikidata\"=\"Q122209740\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Think Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Third Wave Coffee Roasters",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Third Wave Coffee Roasters\"][\"brand:wikidata\"=\"Q7785004\"][\"cuisine\"=\"coffee_shop\"][\"delivery\"=\"yes\"][\"name\"=\"Third Wave Coffee Roasters\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Tierra Mia Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Tierra Mia Coffee\"][\"brand:wikidata\"=\"Q16966488\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Tierra Mia Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Tiger Sugar",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Tiger Sugar\"][\"brand:wikidata\"=\"Q76099070\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Tiger Sugar\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/20200805_153454_things_places_in_south_korea_IMG_9327.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/20200805_153454_things_places_in_south_korea_IMG_9327.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Tim Hortons",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Tim Hortons\"][\"brand:wikidata\"=\"Q175106\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Tim Hortons\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Tim_Hortons_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tim_Hortons_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Timothy's",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Timothy's\"][\"brand:wikidata\"=\"Q7807011\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Timothy's\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/CenterpointMallTimothys.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/CenterpointMallTimothys.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Toast Box",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Toast Box\"][\"brand:wikidata\"=\"Q100285490\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Toast Box\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Toby's Estate",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Toby's Estate\"][\"brand:wikidata\"=\"Q117006060\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Toby's Estate\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Tom N Toms",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Tom N Toms\"][\"brand:en\"=\"Tom N Toms\"][\"brand:ko\"=\"\ud0d0\uc564\ud0d0\uc2a4\"][\"brand:wikidata\"=\"Q18142418\"][\"cuisine\"=\"coffee_shop;pretzel;smoothie;tea;bread\"][\"name\"=\"Tom N Toms\"][\"name:en\"=\"Tom N Toms\"][\"name:ko\"=\"\ud0d0\uc564\ud0d0\uc2a4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HSY-_Koreatown,_Toms_and_Toms_Cafe.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HSY-_Koreatown,_Toms_and_Toms_Cafe.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "TOMORO Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"TOMORO Coffee\"][\"brand:wikidata\"=\"Q126326801\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"TOMORO Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Torrador",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Torrador\"][\"brand:wikidata\"=\"Q116645762\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Torrador\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Tostao'",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Tostao'\"][\"brand:wikidata\"=\"Q60632476\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Tostao'\"][\"official_name\"=\"TOSTAO' Caf\u00e9 & Pan\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "TP Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"TP Tea\"][\"brand:wikidata\"=\"Q108166023\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"TP Tea\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Traveler's Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Traveler's Coffee\"][\"brand:wikidata\"=\"Q4051716\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Traveler's Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Trung Nguy\u00ean Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Trung Nguy\u00ean\"][\"brand:wikidata\"=\"Q3541154\"][\"cuisine\"=\"coffee_shop;vietnamese\"][\"name\"=\"Trung Nguy\u00ean Coffee\"][\"name:en\"=\"Trung Nguy\u00ean Coffee\"][\"name:vi\"=\"C\u00e0 ph\u00ea Trung Nguy\u00ean\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Trung_Nguyen_DAD_Airport.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Trung_Nguyen_DAD_Airport.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Urban Baristas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Urban Baristas\"][\"brand:wikidata\"=\"Q111262189\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Urban Baristas\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Varka",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Varka\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Varka\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Vida e Caff\u00e8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Vida e Caff\u00e8\"][\"brand:wikidata\"=\"Q7927650\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Vida e Caff\u00e8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Vida'e_Caffe'_Cape_Town_airport.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vida'e_Caffe'_Cape_Town_airport.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Viva cafe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Viva cafe\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Viva cafe\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Vivari",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Vivari\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Vivari\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Wagas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Wagas\"][\"brand:en\"=\"Wagas\"][\"brand:wikidata\"=\"Q104668297\"][\"brand:zh\"=\"\u6c83\u6b4c\u65af\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Wagas\"][\"name:en\"=\"Wagas\"][\"name:zh\"=\"\u6c83\u6b4c\u65af\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Wagas_restaurant_at_Lize_Sky_Mall_(20221007154008).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Wagas_restaurant_at_Lize_Sky_Mall_(20221007154008).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "WatchHouse",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"WatchHouse\"][\"brand:wikidata\"=\"Q121339538\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"WatchHouse\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Waves Coffee House",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Waves Coffee House\"][\"brand:wikidata\"=\"Q114096538\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Waves Coffee House\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Wayne's Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Wayne's Coffee\"][\"brand:wikidata\"=\"Q2637272\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Wayne's Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Waynes_coffee.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Waynes_coffee.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Wild & The Moon",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Wild & The Moon\"][\"brand:wikidata\"=\"Q123098436\"][\"cuisine\"=\"coffee_shop;juice;smoothie\"][\"diet:gluten_free\"=\"yes\"][\"diet:vegan\"=\"only\"][\"name\"=\"Wild & The Moon\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Wild Bean Cafe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Wild Bean Cafe\"][\"brand:wikidata\"=\"Q61804826\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Wild Bean Cafe\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/'Wild_Bean_Cafe'_(9261448875).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/'Wild_Bean_Cafe'_(9261448875).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "WonderWaffel",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"WonderWaffel\"][\"brand:wikidata\"=\"Q105051786\"][\"cuisine\"=\"waffle\"][\"name\"=\"WonderWaffel\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/WonderWaffel_Logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/WonderWaffel_Logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Xing Fu Tang",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Xing Fu Tang\"][\"brand:en\"=\"Xing Fu Tang\"][\"brand:wikidata\"=\"Q95720330\"][\"brand:zh\"=\"\u5e78\u798f\u5802\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Xing Fu Tang\"][\"name:en\"=\"Xing Fu Tang\"][\"name:zh\"=\"\u5e78\u798f\u5802\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Ya Kun Kaya Toast",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Ya Kun Kaya Toast\"][\"brand:wikidata\"=\"Q8046237\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Ya Kun Kaya Toast\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Yi Fang Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Yi Fang Tea\"][\"brand:en\"=\"Yi Fang Tea\"][\"brand:wikidata\"=\"Q66196395\"][\"brand:zh\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"Yi Fang Tea\"][\"name:en\"=\"Yi Fang Tea\"][\"name:zh\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Yifang_Taiwan_Fruit_Tea_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Yifang_Taiwan_Fruit_Tea_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Your Coffee Hub",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Your Coffee Hub\"][\"brand:wikidata\"=\"Q118143941\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Your Coffee Hub\"][\"short_name\"=\"YCH\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "Zarraffa's Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Zarraffa's Coffee\"][\"brand:wikidata\"=\"Q8066878\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Zarraffa's Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Cffee.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cffee.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "ZUS Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"ZUS Coffee\"][\"brand:wikidata\"=\"Q110811473\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"ZUS Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0411\u0438\u0441\u0442\u0440\u043e \u0418\u041a\u0415\u0410 (\u0420\u043e\u0441\u0441\u0438\u0438)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"IKEA\"][\"brand:en\"=\"IKEA\"][\"brand:ru\"=\"\u0418\u041a\u0415\u0410\"][\"brand:wikidata\"=\"Q54078\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0411\u0438\u0441\u0442\u0440\u043e \u0418\u041a\u0415\u0410\"][\"name:en\"=\"IKEA Caf\u00e9\"][\"name:ru\"=\"\u0411\u0438\u0441\u0442\u0440\u043e \u0418\u041a\u0415\u0410\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ikea_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ikea_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u0438\u0435 \u043f\u0435\u043a\u0430\u0440\u043d\u0438",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u0438\u0435 \u043f\u0435\u043a\u0430\u0440\u043d\u0438\"][\"brand:en\"=\"British bakery\"][\"brand:ru\"=\"\u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u0438\u0435 \u043f\u0435\u043a\u0430\u0440\u043d\u0438\"][\"brand:wikidata\"=\"Q110236478\"][\"cuisine\"=\"cake;breakfast;coffee_shop;tea\"][\"name\"=\"\u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u0438\u0435 \u043f\u0435\u043a\u0430\u0440\u043d\u0438\"][\"name:en\"=\"British bakery\"][\"name:ru\"=\"\u0411\u0440\u0438\u0442\u0430\u043d\u0441\u043a\u0438\u0435 \u043f\u0435\u043a\u0430\u0440\u043d\u0438\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0411\u0440\u044b\u043d\u0437\u0430",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0411\u0440\u044b\u043d\u0437\u0430\"][\"brand:wikidata\"=\"Q110278626\"][\"cuisine\"=\"empanada;russian\"][\"name\"=\"\u0411\u0440\u044b\u043d\u0437\u0430\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0412\u0438\u043b\u043a\u0430-\u043b\u043e\u0436\u043a\u0430",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0412\u0438\u043b\u043a\u0430-\u043b\u043e\u0436\u043a\u0430\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0412\u0438\u043b\u043a\u0430-\u043b\u043e\u0436\u043a\u0430\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0414\u0430\u0431\u043b\u0431\u0438",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0414\u0430\u0431\u043b\u0431\u0438\"][\"brand:en\"=\"Double B\"][\"brand:ru\"=\"\u0414\u0430\u0431\u043b\u0431\u0438\"][\"brand:wikidata\"=\"Q62501686\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0414\u0430\u0431\u043b\u0431\u0438\"][\"name:en\"=\"Double B\"][\"name:ru\"=\"\u0414\u0430\u0431\u043b\u0431\u0438\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041a\u0430\u0444\u0435\u0442\u0435\u0440\u0438\u0458\u0430",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041a\u0430\u0444\u0435\u0442\u0435\u0440\u0438\u0458\u0430\"][\"brand:en\"=\"Kafeteria\"][\"brand:sr\"=\"\u041a\u0430\u0444\u0435\u0442\u0435\u0440\u0438\u0458\u0430\"][\"brand:sr-Latn\"=\"Kafeterija\"][\"brand:wikidata\"=\"Q131823194\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u041a\u0430\u0444\u0435\u0442\u0435\u0440\u0438\u0458\u0430\"][\"name:en\"=\"Kafeteria\"][\"name:sr\"=\"\u041a\u0430\u0444\u0435\u0442\u0435\u0440\u0438\u0458\u0430\"][\"name:sr-Latn\"=\"Kafeterija\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041a\u043e\u043d\u0434\u0438\u0442\u0435\u0440\u0441\u043a\u0430\u044f \u0422\u0435\u0440\u0435\u043c\u043e\u043a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041a\u043e\u043d\u0434\u0438\u0442\u0435\u0440\u0441\u043a\u0430\u044f \u0422\u0435\u0440\u0435\u043c\u043e\u043a\"][\"brand:wikidata\"=\"Q109996560\"][\"cuisine\"=\"coffee_shop;pie;tea\"][\"name\"=\"\u041a\u043e\u043d\u0434\u0438\u0442\u0435\u0440\u0441\u043a\u0430\u044f \u0422\u0435\u0440\u0435\u043c\u043e\u043a\"][\"name:en\"=\"Teremok Cafe\"][\"name:ru\"=\"\u041a\u043e\u043d\u0434\u0438\u0442\u0435\u0440\u0441\u043a\u0430\u044f \u0422\u0435\u0440\u0435\u043c\u043e\u043a\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041a\u043e\u0444\u0435 \u043c\u0443\u0437",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041a\u043e\u0444\u0435 \u043c\u0443\u0437\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u041a\u043e\u0444\u0435 \u043c\u0443\u0437\"][\"name:en\"=\"Coffee Moose\"][\"name:ru\"=\"\u041a\u043e\u0444\u0435 \u043c\u0443\u0437\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041a\u043e\u0444\u0435 \u0421\u0430\u0443\u043d\u0434",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041a\u043e\u0444\u0435 \u0421\u0430\u0443\u043d\u0434\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u041a\u043e\u0444\u0435 \u0421\u0430\u0443\u043d\u0434\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041a\u043e\u0444\u0435 \u0425\u0430\u0443\u0437",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041a\u043e\u0444\u0435 \u0425\u0430\u0443\u0437\"][\"brand:wikidata\"=\"Q4236456\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u041a\u043e\u0444\u0435 \u0425\u0430\u0443\u0437\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\u041a\u043e\u0444\u0435-\u0445\u0430\u0443\u0437_\u043d\u0430_\u0443\u043b._\u0411\u043e\u0433\u0434\u0430\u043d\u0430_\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u043a\u043e\u0433\u043e,_\u041a\u0438\u0435\u0432,_\u0423\u043a\u0440\u0430\u0438\u043d\u0430.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\u041a\u043e\u0444\u0435-\u0445\u0430\u0443\u0437_\u043d\u0430_\u0443\u043b._\u0411\u043e\u0433\u0434\u0430\u043d\u0430_\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u043a\u043e\u0433\u043e,_\u041a\u0438\u0435\u0432,_\u0423\u043a\u0440\u0430\u0438\u043d\u0430.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041a\u0443\u043b\u0438\u043d\u0430\u0440\u043d\u0430\u044f \u043b\u0430\u0432\u043a\u0430 \u0431\u0440\u0430\u0442\u044c\u0435\u0432 \u041a\u0430\u0440\u0430\u0432\u0430\u0435\u0432\u044b\u0445",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041a\u0443\u043b\u0438\u043d\u0430\u0440\u043d\u0430\u044f \u043b\u0430\u0432\u043a\u0430 \u0431\u0440\u0430\u0442\u044c\u0435\u0432 \u041a\u0430\u0440\u0430\u0432\u0430\u0435\u0432\u044b\u0445\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u041a\u0443\u043b\u0438\u043d\u0430\u0440\u043d\u0430\u044f \u043b\u0430\u0432\u043a\u0430 \u0431\u0440\u0430\u0442\u044c\u0435\u0432 \u041a\u0430\u0440\u0430\u0432\u0430\u0435\u0432\u044b\u0445\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041b\u0435\u043f\u0438\u043c \u0438 \u0432\u0430\u0440\u0438\u043c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041b\u0435\u043f\u0438\u043c \u0438 \u0432\u0430\u0440\u0438\u043c\"][\"cuisine\"=\"russian\"][\"name\"=\"\u041b\u0435\u043f\u0438\u043c \u0438 \u0432\u0430\u0440\u0438\u043c\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041b\u044c\u0432\u0456\u0432\u0441\u044c\u043a\u0430 \u041c\u0430\u0439\u0441\u0442\u0435\u0440\u043d\u044f \u0428\u043e\u043a\u043e\u043b\u0430\u0434\u0443",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041b\u044c\u0432\u0456\u0432\u0441\u044c\u043a\u0430 \u041c\u0430\u0439\u0441\u0442\u0435\u0440\u043d\u044f \u0428\u043e\u043a\u043e\u043b\u0430\u0434\u0443\"][\"brand:en\"=\"Lviv Handmade Chocolate\"][\"brand:uk\"=\"\u041b\u044c\u0432\u0456\u0432\u0441\u044c\u043a\u0430 \u041c\u0430\u0439\u0441\u0442\u0435\u0440\u043d\u044f \u0428\u043e\u043a\u043e\u043b\u0430\u0434\u0443\"][\"brand:wikidata\"=\"Q122241258\"][\"cuisine\"=\"chocolate\"][\"name\"=\"\u041b\u044c\u0432\u0456\u0432\u0441\u044c\u043a\u0430 \u041c\u0430\u0439\u0441\u0442\u0435\u0440\u043d\u044f \u0428\u043e\u043a\u043e\u043b\u0430\u0434\u0443\"][\"name:en\"=\"Lviv Handmade Chocolate\"][\"name:uk\"=\"\u041b\u044c\u0432\u0456\u0432\u0441\u044c\u043a\u0430 \u041c\u0430\u0439\u0441\u0442\u0435\u0440\u043d\u044f \u0428\u043e\u043a\u043e\u043b\u0430\u0434\u0443\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041b\u044e\u0434\u0438 \u043b\u044e\u0431\u044f\u0442",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041b\u044e\u0434\u0438 \u043b\u044e\u0431\u044f\u0442\"][\"brand:wikidata\"=\"Q110254113\"][\"cuisine\"=\"bread;coffee_shop;cake;pie\"][\"name\"=\"\u041b\u044e\u0434\u0438 \u043b\u044e\u0431\u044f\u0442\"][\"shop\"=\"bakery\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_ludilove_2021.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_ludilove_2021.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041c\u0438\u0434\u0438\u0439\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041c\u0438\u0434\u0438\u0439\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\"][\"cuisine\"=\"seafood\"][\"name\"=\"\u041c\u0438\u0434\u0438\u0439\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041c\u0438\u0440\u0430\u0436",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041c\u0438\u0440\u0430\u0436\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u041c\u0438\u0440\u0430\u0436\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u041f\u0438\u0440\u043e\u0433\u043e\u0432\u044b\u0439 \u0434\u0432\u043e\u0440\u0438\u043a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u041f\u0438\u0440\u043e\u0433\u043e\u0432\u044b\u0439 \u0434\u0432\u043e\u0440\u0438\u043a\"][\"brand:wikidata\"=\"Q110240743\"][\"cuisine\"=\"pie;coffee_shop;russian\"][\"name\"=\"\u041f\u0438\u0440\u043e\u0433\u043e\u0432\u044b\u0439 \u0434\u0432\u043e\u0440\u0438\u043a\"][\"shop\"=\"bakery\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0421\u0438\u0446\u0438\u043b\u0438\u044f",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0421\u0438\u0446\u0438\u043b\u0438\u044f\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0421\u0438\u0446\u0438\u043b\u0438\u044f\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0424\u0430\u0440\u0444\u043e\u0440",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0424\u0430\u0440\u0444\u043e\u0440\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0424\u0430\u0440\u0444\u043e\u0440\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0424\u0440\u0430\u043d\u0441.\u0443\u0430",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0424\u0440\u0430\u043d\u0441.\u0443\u0430\"][\"brand:wikidata\"=\"Q122361953\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0424\u0440\u0430\u043d\u0441.\u0443\u0430\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0425\u043b\u0435\u0431 \u041d\u0430\u0441\u0443\u0449\u043d\u044b\u0439",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0425\u043b\u0435\u0431 \u041d\u0430\u0441\u0443\u0449\u043d\u044b\u0439\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0425\u043b\u0435\u0431 \u041d\u0430\u0441\u0443\u0449\u043d\u044b\u0439\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0426\u0435\u044585",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0426\u0435\u044585\"][\"brand:wikidata\"=\"Q109682756\"][\"cuisine\"=\"coffee_shop;pie\"][\"name\"=\"\u0426\u0435\u044585\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0438\u0446\u0430",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0438\u0446\u0430\"][\"brand:en\"=\"Chocolate\"][\"brand:ru\"=\"\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0438\u0446\u0430\"][\"brand:wikidata\"=\"Q30891188\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0438\u0446\u0430\"][\"name:en\"=\"Shokoladnitsa\"][\"name:ru\"=\"\u0428\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0438\u0446\u0430\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0428\u0442\u043e\u043b\u043b\u0435",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0428\u0442\u043e\u043b\u043b\u0435\"][\"brand:en\"=\"Stolle\"][\"brand:ru\"=\"\u0428\u0442\u043e\u043b\u043b\u0435\"][\"brand:wikidata\"=\"Q62502236\"][\"cuisine\"=\"pie\"][\"name\"=\"\u0428\u0442\u043e\u043b\u043b\u0435\"][\"name:en\"=\"Stolle\"][\"name:ru\"=\"\u0428\u0442\u043e\u043b\u043b\u0435\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u042d\u0434\u0435\u043c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u042d\u0434\u0435\u043c\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u042d\u0434\u0435\u043c\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u10d3\u10d8 \u10e0\u10dd\u10db\u10d0",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u10d3\u10d8 \u10e0\u10dd\u10db\u10d0\"][\"brand:en\"=\"Di Roma\"][\"brand:ka\"=\"\u10d3\u10d8 \u10e0\u10dd\u10db\u10d0\"][\"brand:ru\"=\"\u0414\u0438 \u0420\u043e\u043c\u0430\"][\"brand:wikidata\"=\"Q131469959\"][\"cuisine\"=\"pizza;italian\"][\"delivery\"=\"yes\"][\"name\"=\"\u10d3\u10d8 \u10e0\u10dd\u10db\u10d0\"][\"name:en\"=\"Di Roma\"][\"name:ka\"=\"\u10d3\u10d8 \u10e0\u10dd\u10db\u10d0\"][\"name:ru\"=\"\u0414\u0438 \u0420\u043e\u043c\u0430\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u05d0\u05e8\u05d5\u05de\u05d4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u05d0\u05e8\u05d5\u05de\u05d4\"][\"brand:en\"=\"Aroma Espresso Bar\"][\"brand:he\"=\"\u05d0\u05e8\u05d5\u05de\u05d4\"][\"brand:wikidata\"=\"Q2909872\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u05d0\u05e8\u05d5\u05de\u05d4\"][\"name:en\"=\"Aroma Espresso Bar\"][\"name:he\"=\"\u05d0\u05e8\u05d5\u05de\u05d4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Aroma_espreso_bar_logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aroma_espreso_bar_logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u05dc\u05e0\u05d3\u05d5\u05d5\u05e8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u05e7\u05e4\u05d4 \u05dc\u05e0\u05d3\u05d5\u05d5\u05e8\"][\"brand:en\"=\"Landwer Coffee\"][\"brand:he\"=\"\u05e7\u05e4\u05d4 \u05dc\u05e0\u05d3\u05d5\u05d5\u05e8\"][\"brand:wikidata\"=\"Q6485288\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u05dc\u05e0\u05d3\u05d5\u05d5\u05e8\"][\"name:en\"=\"Landwer\"][\"name:he\"=\"\u05dc\u05e0\u05d3\u05d5\u05d5\u05e8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u05e1\u05d9 \u05e7\u05e4\u05d4",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"\u05e1\u05d9 \u05d0\u05e1\u05e4\u05e8\u05e1\u05d5\"][\"alt_name:en\"=\"Si Espresso\"][\"alt_name:he\"=\"\u05e1\u05d9 \u05d0\u05e1\u05e4\u05e8\u05e1\u05d5\"][\"amenity\"=\"cafe\"][\"brand\"=\"\u05e1\u05d9 \u05e7\u05e4\u05d4\"][\"brand:en\"=\"Si Cafe\"][\"brand:he\"=\"\u05e1\u05d9 \u05e7\u05e4\u05d4\"][\"brand:wikidata\"=\"Q64606227\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u05e1\u05d9 \u05e7\u05e4\u05d4\"][\"name:en\"=\"Si Cafe\"][\"name:he\"=\"\u05e1\u05d9 \u05e7\u05e4\u05d4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u05e7\u05e4\u05d4 \u05d2'\u05d5",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"\u05e7\u05e4\u05d4 Joe\"][\"amenity\"=\"cafe\"][\"brand\"=\"\u05e7\u05e4\u05d4 \u05d2'\u05d5\"][\"brand:en\"=\"Cafe Joe\"][\"brand:he\"=\"\u05e7\u05e4\u05d4 \u05d2'\u05d5\"][\"brand:wikidata\"=\"Q6774425\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u05e7\u05e4\u05d4 \u05d2'\u05d5\"][\"name:en\"=\"Cafe Joe\"][\"name:he\"=\"\u05e7\u05e4\u05d4 \u05d2'\u05d5\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u05e7\u05e4\u05d4 \u05d2\u05e8\u05d2",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u05e7\u05e4\u05d4 \u05d2\u05e8\u05d2\"][\"brand:en\"=\"Greg Cafe\"][\"brand:he\"=\"\u05e7\u05e4\u05d4 \u05d2\u05e8\u05d2\"][\"brand:wikidata\"=\"Q43295499\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u05e7\u05e4\u05d4 \u05d2\u05e8\u05d2\"][\"name:en\"=\"Greg Cafe\"][\"name:he\"=\"\u05e7\u05e4\u05d4 \u05d2\u05e8\u05d2\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\u05e7\u05e0\u05d9\u05d5\u05df_\u05dc\u05d1_\u05d4\u05de\u05e4\u05e8\u05e5_\u05e7\u05d5\u05de\u05d4_\u05e9\u05e0\u05d9\u05d9\u05d4_\u05de\u05e1\u05e2\u05d3\u05ea_\u05d2\u05e8\u05d2.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\u05e7\u05e0\u05d9\u05d5\u05df_\u05dc\u05d1_\u05d4\u05de\u05e4\u05e8\u05e5_\u05e7\u05d5\u05de\u05d4_\u05e9\u05e0\u05d9\u05d9\u05d4_\u05de\u05e1\u05e2\u05d3\u05ea_\u05d2\u05e8\u05d2.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u05e7\u05e4\u05d4 \u05e0\u05de\u05e8\u05d5\u05d3",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u05e7\u05e4\u05d4 \u05e0\u05de\u05e8\u05d5\u05d3\"][\"brand:en\"=\"Cafe Nimrod\"][\"brand:he\"=\"\u05e7\u05e4\u05d4 \u05e0\u05de\u05e8\u05d5\u05d3\"][\"brand:wikidata\"=\"Q64606192\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u05e7\u05e4\u05d4 \u05e0\u05de\u05e8\u05d5\u05d3\"][\"name:en\"=\"Cafe Nimrod\"][\"name:he\"=\"\u05e7\u05e4\u05d4 \u05e0\u05de\u05e8\u05d5\u05d3\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u05e7\u05e4\u05d4 \u05e7\u05e4\u05d4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u05e7\u05e4\u05d4 \u05e7\u05e4\u05d4\"][\"brand:en\"=\"Cafe Cafe\"][\"brand:he\"=\"\u05e7\u05e4\u05d4 \u05e7\u05e4\u05d4\"][\"brand:wikidata\"=\"Q5017233\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u05e7\u05e4\u05d4 \u05e7\u05e4\u05d4\"][\"name:en\"=\"Cafe Cafe\"][\"name:he\"=\"\u05e7\u05e4\u05d4 \u05e7\u05e4\u05d4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/The_7_Breakfasts_-_Caf\u00e9_Caf\u00e9.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_7_Breakfasts_-_Caf\u00e9_Caf\u00e9.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u05e8\u05d5\u05dc\u05d3\u05d9\u05df",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u05e8\u05d5\u05dc\u05d3\u05d9\u05df\"][\"brand:en\"=\"Roladin\"][\"brand:he\"=\"\u05e8\u05d5\u05dc\u05d3\u05d9\u05df\"][\"brand:wikidata\"=\"Q18390972\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u05e8\u05d5\u05dc\u05d3\u05d9\u05df\"][\"name:en\"=\"Roladin\"][\"name:he\"=\"\u05e8\u05d5\u05dc\u05d3\u05d9\u05df\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0628\u0627\u0631\u0646\u0632",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0628\u0627\u0631\u0646\u0632\"][\"brand:ar\"=\"\u0628\u0627\u0631\u0646\u0632\"][\"brand:en\"=\"Barn's\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0628\u0627\u0631\u0646\u0632\"][\"name:ar\"=\"\u0628\u0627\u0631\u0646\u0632\"][\"name:en\"=\"Barn's\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u062a\u064a\u0645 \u0647\u0648\u0631\u062a\u0648\u0646\u0632",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u062a\u064a\u0645 \u0647\u0648\u0631\u062a\u0648\u0646\u0632\"][\"brand:ar\"=\"\u062a\u064a\u0645 \u0647\u0648\u0631\u062a\u0648\u0646\u0632\"][\"brand:en\"=\"Tim Hortons\"][\"brand:wikidata\"=\"Q175106\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u062a\u064a\u0645 \u0647\u0648\u0631\u062a\u0648\u0646\u0632\"][\"name:ar\"=\"\u062a\u064a\u0645 \u0647\u0648\u0631\u062a\u0648\u0646\u0632\"][\"name:en\"=\"Tim Hortons\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Tim_Hortons_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tim_Hortons_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u062c\u0627\u0641\u0627 \u062a\u0627\u064a\u0645",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u062c\u0627\u0641\u0627 \u062a\u0627\u064a\u0645\"][\"brand:ar\"=\"\u062c\u0627\u0641\u0627 \u062a\u0627\u064a\u0645\"][\"brand:en\"=\"Java Time\"][\"brand:wikidata\"=\"Q12204153\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u062c\u0627\u0641\u0627 \u062a\u0627\u064a\u0645\"][\"name:ar\"=\"\u062c\u0627\u0641\u0627 \u062a\u0627\u064a\u0645\"][\"name:en\"=\"Java Time\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ar-javatime-logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ar-javatime-logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u062f.\u0643\u064a\u0641",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u062f.\u0643\u064a\u0641\"][\"brand:ar\"=\"\u062f.\u0643\u064a\u0641\"][\"brand:en\"=\"dr-cafe\"][\"brand:wikidata\"=\"Q105714225\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u062f.\u0643\u064a\u0641\"][\"name:ar\"=\"\u062f.\u0643\u064a\u0641\"][\"name:en\"=\"dr-cafe\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0633\u062a\u0627\u0631\u0628\u0643\u0633",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0633\u062a\u0627\u0631\u0628\u0643\u0633\"][\"brand:ar\"=\"\u0633\u062a\u0627\u0631\u0628\u0643\u0633\"][\"brand:en\"=\"Starbucks\"][\"brand:wikidata\"=\"Q37158\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0633\u062a\u0627\u0631\u0628\u0643\u0633\"][\"name:ar\"=\"\u0633\u062a\u0627\u0631\u0628\u0643\u0633\"][\"name:en\"=\"Starbucks\"][\"official_name\"=\"\u0633\u062a\u0627\u0631\u0628\u0643\u0633 \u0643\u0627\u0641\u064a\u0629\"][\"official_name:ar\"=\"\u0633\u062a\u0627\u0631\u0628\u0643\u0633 \u0643\u0627\u0641\u064a\u0629\"][\"official_name:en\"=\"Starbucks Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0643\u0627\u0631\u064a\u0628\u0648 \u0643\u0648\u0641\u064a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0643\u0627\u0631\u064a\u0628\u0648 \u0643\u0648\u0641\u064a\"][\"brand:ar\"=\"\u0643\u0627\u0631\u064a\u0628\u0648 \u0643\u0648\u0641\u064a\"][\"brand:en\"=\"Caribou Coffee\"][\"brand:wikidata\"=\"Q5039494\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0643\u0627\u0631\u064a\u0628\u0648 \u0643\u0648\u0641\u064a\"][\"name:ar\"=\"\u0643\u0627\u0631\u064a\u0628\u0648 \u0643\u0648\u0641\u064a\"][\"name:en\"=\"Caribou Coffee\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0647\u0627\u0641 \u0645\u0644\u064a\u0648\u0646",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0647\u0627\u0641 \u0645\u0644\u064a\u0648\u0646\"][\"brand:ar\"=\"\u0647\u0627\u0641 \u0645\u0644\u064a\u0648\u0646\"][\"brand:en\"=\"Half Million\"][\"brand:wikidata\"=\"Q108537438\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0647\u0627\u0641 \u0645\u0644\u064a\u0648\u0646\"][\"name:ar\"=\"\u0647\u0627\u0641 \u0645\u0644\u064a\u0648\u0646\"][\"name:en\"=\"Half Million\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Half_Million_colored_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Half_Million_colored_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u0e04\u0e32\u0e40\u0e1f\u0e48 \u0e2d\u0e40\u0e21\u0e0b\u0e2d\u0e19",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u0e04\u0e32\u0e40\u0e1f\u0e48 \u0e2d\u0e40\u0e21\u0e0b\u0e2d\u0e19\"][\"brand:en\"=\"Caf\u00e9 Amazon\"][\"brand:th\"=\"\u0e04\u0e32\u0e40\u0e1f\u0e48 \u0e2d\u0e40\u0e21\u0e0b\u0e2d\u0e19\"][\"brand:wikidata\"=\"Q43247503\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u0e04\u0e32\u0e40\u0e1f\u0e48 \u0e2d\u0e40\u0e21\u0e0b\u0e2d\u0e19\"][\"name:en\"=\"Caf\u00e9 Amazon\"][\"name:th\"=\"\u0e04\u0e32\u0e40\u0e1f\u0e48 \u0e2d\u0e40\u0e21\u0e0b\u0e2d\u0e19\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\uacf5\ucc28",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\uacf5\ucc28\"][\"brand:en\"=\"Gong Cha\"][\"brand:ko\"=\"\uacf5\ucc28\"][\"brand:wikidata\"=\"Q5581670\"][\"brand:zh\"=\"\u8ca2\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\uacf5\ucc28\"][\"name:en\"=\"Gong Cha\"][\"name:ko\"=\"\uacf5\ucc28\"][\"name:zh\"=\"\u8ca2\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ub2ec.\ucf64",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ub2ec.\ucf64\"][\"brand:en\"=\"Dal.komm Coffee\"][\"brand:ko\"=\"\ub2ec.\ucf64\"][\"brand:wikidata\"=\"Q120997961\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ub2ec.\ucf64\"][\"name:en\"=\"Dal.komm Coffee\"][\"name:ko\"=\"\ub2ec.\ucf64\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ub354\ubca4\ud2f0",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ub354\ubca4\ud2f0\"][\"brand:en\"=\"The Venti\"][\"brand:ko\"=\"\ub354\ubca4\ud2f0\"][\"brand:wikidata\"=\"Q120998398\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ub354\ubca4\ud2f0\"][\"name:en\"=\"The Venti\"][\"name:ko\"=\"\ub354\ubca4\ud2f0\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ub9e4\uba38\ub4dc\ucee4\ud53c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ub9e4\uba38\ub4dc\ucee4\ud53c\"][\"brand:en\"=\"Mammoth Coffee\"][\"brand:ko\"=\"\ub9e4\uba38\ub4dc\ucee4\ud53c\"][\"brand:wikidata\"=\"Q120998386\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ub9e4\uba38\ub4dc\ucee4\ud53c\"][\"name:en\"=\"Mammoth Coffee\"][\"name:ko\"=\"\ub9e4\uba38\ub4dc\ucee4\ud53c\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mammoth_Coffee_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mammoth_Coffee_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\uba54\uac00MGC\ucee4\ud53c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\uba54\uac00MGC\ucee4\ud53c\"][\"brand:en\"=\"Mega Coffee\"][\"brand:ko\"=\"\uba54\uac00MGC\ucee4\ud53c\"][\"brand:wikidata\"=\"Q120998343\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\uba54\uac00MGC\ucee4\ud53c\"][\"name:en\"=\"Mega Coffee\"][\"name:ko\"=\"\uba54\uac00MGC\ucee4\ud53c\"][\"short_name\"=\"MGC\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mega_MGC_Coffee_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mega_MGC_Coffee_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ubc14\ub098\ud504\ub808\uc18c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ubc14\ub098\ud504\ub808\uc18c\"][\"brand:en\"=\"Banapresso\"][\"brand:ko\"=\"\ubc14\ub098\ud504\ub808\uc18c\"][\"brand:wikidata\"=\"Q120998331\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ubc14\ub098\ud504\ub808\uc18c\"][\"name:en\"=\"Banapresso\"][\"name:ko\"=\"\ubc14\ub098\ud504\ub808\uc18c\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ube7d\ub2e4\ubc29",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ube7d\ub2e4\ubc29\"][\"brand:en\"=\"Paik's Coffee\"][\"brand:ko\"=\"\ube7d\ub2e4\ubc29\"][\"brand:wikidata\"=\"Q55730575\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ube7d\ub2e4\ubc29\"][\"name:en\"=\"Paik's Coffee\"][\"name:ko\"=\"\ube7d\ub2e4\ubc29\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\uc2a4\ud0c0\ubc85\uc2a4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\uc2a4\ud0c0\ubc85\uc2a4\"][\"brand:en\"=\"Starbucks\"][\"brand:ko\"=\"\uc2a4\ud0c0\ubc85\uc2a4\"][\"brand:wikidata\"=\"Q37158\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\uc2a4\ud0c0\ubc85\uc2a4\"][\"name:en\"=\"Starbucks\"][\"name:ko\"=\"\uc2a4\ud0c0\ubc85\uc2a4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\uc5d4\uc81c\ub9ac\ub108\uc2a4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\uc5d4\uc81c\ub9ac\ub108\uc2a4\"][\"brand:en\"=\"Angel-in-us Coffee\"][\"brand:ko\"=\"\uc5d4\uc81c\ub9ac\ub108\uc2a4\"][\"brand:wikidata\"=\"Q12606781\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\uc5d4\uc81c\ub9ac\ub108\uc2a4\"][\"name:en\"=\"Angel-in-us Coffee\"][\"name:ko\"=\"\uc5d4\uc81c\ub9ac\ub108\uc2a4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\uc694\uac70\ud504\ub808\uc18c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\uc694\uac70\ud504\ub808\uc18c\"][\"brand:en\"=\"Yogerpresso\"][\"brand:ko\"=\"\uc694\uac70\ud504\ub808\uc18c\"][\"brand:wikidata\"=\"Q28699804\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\uc694\uac70\ud504\ub808\uc18c\"][\"name:en\"=\"Yogerpresso\"][\"name:ko\"=\"\uc694\uac70\ud504\ub808\uc18c\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\uc774\ub514\uc57c\ucee4\ud53c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\uc774\ub514\uc57c\ucee4\ud53c\"][\"brand:en\"=\"Ediya Coffee\"][\"brand:ko\"=\"\uc774\ub514\uc57c\ucee4\ud53c\"][\"brand:wikidata\"=\"Q12611298\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\uc774\ub514\uc57c\ucee4\ud53c\"][\"name:en\"=\"Ediya Coffee\"][\"name:ko\"=\"\uc774\ub514\uc57c\ucee4\ud53c\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ediya_Coffee_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ediya_Coffee_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\uce74\ud398\ub4dc\ub86d\ud0d1",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\uce74\ud398\ub4dc\ub86d\ud0d1\"][\"brand:en\"=\"Cafe Droptop\"][\"brand:ko\"=\"\uce74\ud398\ub4dc\ub86d\ud0d1\"][\"brand:wikidata\"=\"Q28699799\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\uce74\ud398\ub4dc\ub86d\ud0d1\"][\"name:en\"=\"Cafe Droptop\"][\"name:ko\"=\"\uce74\ud398\ub4dc\ub86d\ud0d1\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\uce74\ud398\ubca0\ub124",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\uce74\ud398\ubca0\ub124\"][\"brand:en\"=\"Caff\u00e9 Bene\"][\"brand:ko\"=\"\uce74\ud398\ubca0\ub124\"][\"brand:wikidata\"=\"Q5017149\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\uce74\ud398\ubca0\ub124\"][\"name:en\"=\"Caff\u00e9 Bene\"][\"name:ko\"=\"\uce74\ud398\ubca0\ub124\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caffe_Bene.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caffe_Bene.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ucee4\ud53c\ubca0\uc774",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ucee4\ud53c\ubca0\uc774\"][\"brand:en\"=\"Coffeebay\"][\"brand:ko\"=\"\ucee4\ud53c\ubca0\uc774\"][\"brand:wikidata\"=\"Q61092211\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ucee4\ud53c\ubca0\uc774\"][\"name:en\"=\"Coffeebay\"][\"name:ko\"=\"\ucee4\ud53c\ubca0\uc774\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ucee4\ud53c\uc2a4\ubbf8\uc2a4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ucee4\ud53c\uc2a4\ubbf8\uc2a4\"][\"brand:en\"=\"Coffeesmith\"][\"brand:ko\"=\"\ucee4\ud53c\uc2a4\ubbf8\uc2a4\"][\"brand:wikidata\"=\"Q120998545\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ucee4\ud53c\uc2a4\ubbf8\uc2a4\"][\"name:en\"=\"Coffeesmith\"][\"name:ko\"=\"\ucee4\ud53c\uc2a4\ubbf8\uc2a4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ucee4\ud53c\uc5d0\ubc18\ud558\ub2e4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ucee4\ud53c\uc5d0\ubc18\ud558\ub2e4\"][\"brand:en\"=\"Vanada Coffee\"][\"brand:ko\"=\"\ucee4\ud53c\uc5d0\ubc18\ud558\ub2e4\"][\"brand:wikidata\"=\"Q109458170\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ucee4\ud53c\uc5d0\ubc18\ud558\ub2e4\"][\"name:en\"=\"Vanada Coffee\"][\"name:ko\"=\"\ucee4\ud53c\uc5d0\ubc18\ud558\ub2e4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ucef4\ud3ec\uc988\ucee4\ud53c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ucef4\ud3ec\uc988\ucee4\ud53c\"][\"brand:en\"=\"Compose Coffee\"][\"brand:ko\"=\"\ucef4\ud3ec\uc988\ucee4\ud53c\"][\"brand:wikidata\"=\"Q120997937\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ucef4\ud3ec\uc988\ucee4\ud53c\"][\"name:en\"=\"Compose Coffee\"][\"name:ko\"=\"\ucef4\ud3ec\uc988\ucee4\ud53c\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Compose_Coffee_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Compose_Coffee_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ud150\ud37c\uc13c\ud2b8\ucee4\ud53c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ud150\ud37c\uc13c\ud2b8\ucee4\ud53c\"][\"brand:en\"=\"Tenpercent Coffee\"][\"brand:ko\"=\"\ud150\ud37c\uc13c\ud2b8\ucee4\ud53c\"][\"brand:wikidata\"=\"Q124309804\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ud150\ud37c\uc13c\ud2b8\ucee4\ud53c\"][\"name:en\"=\"Tenpercent Coffee\"][\"name:ko\"=\"\ud150\ud37c\uc13c\ud2b8\ucee4\ud53c\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ud22c\uc378\ud50c\ub808\uc774\uc2a4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ud22c\uc378\ud50c\ub808\uc774\uc2a4\"][\"brand:en\"=\"A Twosome Place\"][\"brand:ko\"=\"\ud22c\uc378\ud50c\ub808\uc774\uc2a4\"][\"brand:wikidata\"=\"Q12621301\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ud22c\uc378\ud50c\ub808\uc774\uc2a4\"][\"name:en\"=\"A Twosome Place\"][\"name:ko\"=\"\ud22c\uc378\ud50c\ub808\uc774\uc2a4\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Twosome_Place_square_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Twosome_Place_square_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ud3f4 \ubc14\uc14b",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ud3f4 \ubc14\uc14b\"][\"brand:en\"=\"Paul Bassett\"][\"brand:ko\"=\"\ud3f4 \ubc14\uc14b\"][\"brand:wikidata\"=\"Q30674569\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\ud3f4 \ubc14\uc14b\"][\"name:en\"=\"Paul Bassett\"][\"name:ko\"=\"\ud3f4 \ubc14\uc14b\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\ud5c8\uc720\uc0b0",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\ud5c8\uc720\uc0b0\"][\"brand:en\"=\"Hui Lau Shan\"][\"brand:ko\"=\"\ud5c8\uc720\uc0b0\"][\"brand:wikidata\"=\"Q5934913\"][\"brand:zh\"=\"\u8a31\u7559\u5c71\"][\"cuisine\"=\"asian;dessert\"][\"name\"=\"\ud5c8\uc720\uc0b0\"][\"name:en\"=\"Hui Lau Shan\"][\"name:ko\"=\"\ud5c8\uc720\uc0b0\"][\"name:zh\"=\"\u8a31\u7559\u5c71\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_HuiLauShan_YuenLongOldShop.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_HuiLauShan_YuenLongOldShop.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u30a8\u30af\u30bb\u30eb\u30b7\u30aa\u30fc\u30eb \u30ab\u30d5\u30a7",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u30a8\u30af\u30bb\u30eb\u30b7\u30aa\u30fc\u30eb \u30ab\u30d5\u30a7\"][\"brand:en\"=\"EXCELSIOR CAFF\u00c9\"][\"brand:ja\"=\"\u30a8\u30af\u30bb\u30eb\u30b7\u30aa\u30fc\u30eb \u30ab\u30d5\u30a7\"][\"brand:wikidata\"=\"Q11289828\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u30a8\u30af\u30bb\u30eb\u30b7\u30aa\u30fc\u30eb \u30ab\u30d5\u30a7\"][\"name:en\"=\"EXCELSIOR CAFE\"][\"name:ja\"=\"\u30a8\u30af\u30bb\u30eb\u30b7\u30aa\u30fc\u30eb \u30ab\u30d5\u30a7\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Excelsior_Caff\u00e9_Akihabara_Daibiru_shop_open_air_seat_(2015-06-16_02.09.18_by_Franklin_Heijnen).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Excelsior_Caff\u00e9_Akihabara_Daibiru_shop_open_air_seat_(2015-06-16_02.09.18_by_Franklin_Heijnen).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u30ab\u30d5\u30a7\u30fb\u30c9\u30fb\u30af\u30ea\u30a8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u30ab\u30d5\u30a7\u30fb\u30c9\u30fb\u30af\u30ea\u30a8\"][\"brand:en\"=\"CAF\u00c9 de CRI\u00c9\"][\"brand:ja\"=\"\u30ab\u30d5\u30a7\u30fb\u30c9\u30fb\u30af\u30ea\u30a8\"][\"brand:wikidata\"=\"Q131692144\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u30ab\u30d5\u30a7\u30fb\u30c9\u30fb\u30af\u30ea\u30a8\"][\"name:en\"=\"CAFE de CRIE\"][\"name:ja\"=\"\u30ab\u30d5\u30a7\u30fb\u30c9\u30fb\u30af\u30ea\u30a8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u30ab\u30d5\u30a7\u30fb\u30d9\u30ed\u30fc\u30c1\u30a7",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u30ab\u30d5\u30a7\u30fb\u30d9\u30ed\u30fc\u30c1\u30a7\"][\"brand:en\"=\"CAFF\u00c8 VELOCE\"][\"brand:ja\"=\"\u30ab\u30d5\u30a7\u30fb\u30d9\u30ed\u30fc\u30c1\u30a7\"][\"brand:wikidata\"=\"Q11294597\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u30ab\u30d5\u30a7\u30fb\u30d9\u30ed\u30fc\u30c1\u30a7\"][\"name:en\"=\"CAFE VELOCE\"][\"name:ja\"=\"\u30ab\u30d5\u30a7\u30fb\u30d9\u30ed\u30fc\u30c1\u30a7\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\u30ab\u30d5\u30a7\u30fb\u30d9\u30ed\u30fc\u30c1\u30a7\u5916\u89b3.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\u30ab\u30d5\u30a7\u30fb\u30d9\u30ed\u30fc\u30c1\u30a7\u5916\u89b3.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u30b3\u30e1\u30c0\u73c8\u7432\u5e97",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u30b3\u30e1\u30c0\u73c8\u7432\u5e97\"][\"brand:en\"=\"KOMEDA'S Coffee\"][\"brand:ja\"=\"\u30b3\u30e1\u30c0\u73c8\u7432\u5e97\"][\"brand:wikidata\"=\"Q11302679\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u30b3\u30e1\u30c0\u73c8\u7432\u5e97\"][\"name:en\"=\"Komeda's Coffee\"][\"name:ja\"=\"\u30b3\u30e1\u30c0\u73c8\u7432\u5e97\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/CodazziAmericanCoffee2.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/CodazziAmericanCoffee2.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u30b5\u30f3\u30de\u30eb\u30af\u30ab\u30d5\u30a7",
    query: "[out:json][timeout:25];(nwr[\"alt_name:en\"=\"Saint Marc Caf\u00e9\"][\"amenity\"=\"cafe\"][\"brand\"=\"\u30b5\u30f3\u30de\u30eb\u30af\u30ab\u30d5\u30a7\"][\"brand:en\"=\"ST.MARC CAF\u00c9\"][\"brand:ja\"=\"\u30b5\u30f3\u30de\u30eb\u30af\u30ab\u30d5\u30a7\"][\"brand:wikidata\"=\"Q11305988\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u30b5\u30f3\u30de\u30eb\u30af\u30ab\u30d5\u30a7\"][\"name:en\"=\"Saint Marc Cafe\"][\"name:ja\"=\"\u30b5\u30f3\u30de\u30eb\u30af\u30ab\u30d5\u30a7\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Marc_Cafe_Hirakata.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Saint_Marc_Cafe_Hirakata.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9\"][\"brand:en\"=\"Starbucks\"][\"brand:ja\"=\"\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9\"][\"brand:wikidata\"=\"Q37158\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9\"][\"name:en\"=\"Starbucks\"][\"name:ja\"=\"\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9\"][\"official_name\"=\"\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9\u30b3\u30fc\u30d2\u30fc\"][\"official_name:en\"=\"Starbucks Coffee\"][\"official_name:ja\"=\"\u30b9\u30bf\u30fc\u30d0\u30c3\u30af\u30b9\u30b3\u30fc\u30d2\u30fc\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u30bf\u30ea\u30fc\u30ba\u30b3\u30fc\u30d2\u30fc",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u30bf\u30ea\u30fc\u30ba\u30b3\u30fc\u30d2\u30fc\"][\"brand:en\"=\"Tully's Coffee\"][\"brand:ja\"=\"\u30bf\u30ea\u30fc\u30ba\u30b3\u30fc\u30d2\u30fc\"][\"brand:wikidata\"=\"Q3541983\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u30bf\u30ea\u30fc\u30ba\u30b3\u30fc\u30d2\u30fc\"][\"name:en\"=\"Tully's Coffee\"][\"name:ja\"=\"\u30bf\u30ea\u30fc\u30ba\u30b3\u30fc\u30d2\u30fc\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u30c9\u30c8\u30fc\u30eb\u30b3\u30fc\u30d2\u30fc\u30b7\u30e7\u30c3\u30d7",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u30c9\u30c8\u30fc\u30eb\"][\"brand:en\"=\"DOUTOR\"][\"brand:ja\"=\"\u30c9\u30c8\u30fc\u30eb\"][\"brand:wikidata\"=\"Q11322732\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u30c9\u30c8\u30fc\u30eb\u30b3\u30fc\u30d2\u30fc\u30b7\u30e7\u30c3\u30d7\"][\"name:en\"=\"Doutor Coffee Shop\"][\"name:ja\"=\"\u30c9\u30c8\u30fc\u30eb\u30b3\u30fc\u30d2\u30fc\u30b7\u30e7\u30c3\u30d7\"][\"short_name\"=\"DCS\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Doutor_Coffee_Shop_Kita-Shinsaibashi,_Osaka_in_201509.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Doutor_Coffee_Shop_Kita-Shinsaibashi,_Osaka_in_201509.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u3080\u3055\u3057\u306e\u68ee\u73c8\u7432",
    query: "[out:json][timeout:25];(nwr[\"alt_name:en\"=\"Musashino Mori Coffee\"][\"amenity\"=\"cafe\"][\"brand\"=\"\u3080\u3055\u3057\u306e\u68ee\u73c8\u7432\"][\"brand:en\"=\"MUSASHI NO MORI COFFEE\"][\"brand:ja\"=\"\u3080\u3055\u3057\u306e\u68ee\u73c8\u7432\"][\"brand:wikidata\"=\"Q116758676\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u3080\u3055\u3057\u306e\u68ee\u73c8\u7432\"][\"name:en\"=\"Musashi No Mori Coffee\"][\"name:ja\"=\"\u3080\u3055\u3057\u306e\u68ee\u73c8\u7432\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/MUSASHINOMORI_COFFEE_Nara_Naka-Tomigaoka_store.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/MUSASHINOMORI_COFFEE_Nara_Naka-Tomigaoka_store.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u30eb\u30ce\u30a2\u30fc\u30eb",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u30eb\u30ce\u30a2\u30fc\u30eb\"][\"brand:en\"=\"Renoir\"][\"brand:ja\"=\"\u30eb\u30ce\u30a2\u30fc\u30eb\"][\"brand:wikidata\"=\"Q11649991\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u30eb\u30ce\u30a2\u30fc\u30eb\"][\"name:en\"=\"Renoir\"][\"name:ja\"=\"\u30eb\u30ce\u30a2\u30fc\u30eb\"][\"official_name\"=\"\u55ab\u8336\u5ba4\u30eb\u30ce\u30a2\u30fc\u30eb\"][\"official_name:en\"=\"Ginza Renoir\"][\"official_name:ja\"=\"\u55ab\u8336\u5ba4\u30eb\u30ce\u30a2\u30fc\u30eb\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e00\u6c90\u65e5",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e00\u6c90\u65e5\"][\"brand:en\"=\"A nice Holiday\"][\"brand:wikidata\"=\"Q127692987\"][\"brand:zh\"=\"\u4e00\u6c90\u65e5\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u4e00\u6c90\u65e5\"][\"name:en\"=\"A nice Holiday\"][\"name:zh\"=\"\u4e00\u6c90\u65e5\"][\"takeaway\"=\"only\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e00\u70b9\u70b9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e00\u70b9\u70b9\"][\"brand:en\"=\"alittle-tea\"][\"brand:wikidata\"=\"Q106926258\"][\"brand:zh\"=\"\u4e00\u70b9\u70b9\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u4e00\u70b9\u70b9\"][\"name:en\"=\"alittle-tea\"][\"name:zh\"=\"\u4e00\u70b9\u70b9\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e00\u82b3\u6c34\u679c\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"brand:en\"=\"Yi Fang Tea\"][\"brand:wikidata\"=\"Q66196395\"][\"brand:zh\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"name:en\"=\"Yi Fang Tea\"][\"name:zh\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Yifang_Taiwan_Fruit_Tea_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Yifang_Taiwan_Fruit_Tea_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e00\u82b3\u6c34\u679c\u8336 Yi Fang Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e00\u82b3\u6c34\u679c\u8336 Yi Fang Tea\"][\"brand:en\"=\"Yi Fang Tea\"][\"brand:wikidata\"=\"Q66196395\"][\"brand:zh\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u4e00\u82b3\u6c34\u679c\u8336 Yi Fang Tea\"][\"name:en\"=\"Yi Fang Tea\"][\"name:zh\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Yifang_Taiwan_Fruit_Tea_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Yifang_Taiwan_Fruit_Tea_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e00\u82b3\u6c34\u679c\u8336(\u53f0\u7063)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"brand:en\"=\"Yi Fang Tea\"][\"brand:wikidata\"=\"Q66196395\"][\"brand:zh\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"name:en\"=\"Yi Fang Tea\"][\"name:zh\"=\"\u4e00\u82b3\u6c34\u679c\u8336\"][\"operator\"=\"\u58a8\u529b\u570b\u969b\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Yifang_Taiwan_Fruit_Tea_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Yifang_Taiwan_Fruit_Tea_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e09\u5206\u6625\u8272",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e09\u5206\u6625\u8272\"][\"brand:en\"=\"Trinitea3\"][\"brand:wikidata\"=\"Q111812481\"][\"brand:zh\"=\"\u4e09\u5206\u6625\u8272\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u4e09\u5206\u6625\u8272\"][\"name:en\"=\"Trinitea3\"][\"name:zh\"=\"\u4e09\u5206\u6625\u8272\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e0a\u5cf6\u73c8\u7432\u5e97",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e0a\u5cf6\u73c8\u7432\u5e97\"][\"brand:en\"=\"Ueshima Coffee House\"][\"brand:ja\"=\"\u4e0a\u5cf6\u73c8\u7432\u5e97\"][\"brand:wikidata\"=\"Q96152143\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u4e0a\u5cf6\u73c8\u7432\u5e97\"][\"name:en\"=\"Ueshima Coffee House\"][\"name:ja\"=\"\u4e0a\u5cf6\u73c8\u7432\u5e97\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/UCC_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/UCC_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e38\u4f5c\u98df\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e38\u4f5c\u98df\u8336\"][\"brand:en\"=\"OneZo Tapioca\"][\"brand:wikidata\"=\"Q111537052\"][\"brand:zh\"=\"\u4e38\u4f5c\u98df\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u4e38\u4f5c\u98df\u8336\"][\"name:en\"=\"OneZo Tapioca\"][\"name:zh\"=\"\u4e38\u4f5c\u98df\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e66\u4ea6\u70e7\u4ed9\u8349",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e66\u4ea6\u70e7\u4ed9\u8349\"][\"brand:en\"=\"Shuyi Tealicious\"][\"brand:wikidata\"=\"Q107729359\"][\"brand:zh\"=\"\u4e66\u4ea6\u70e7\u4ed9\u8349\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u4e66\u4ea6\u70e7\u4ed9\u8349\"][\"name:en\"=\"Shuyi Tealicious\"][\"name:zh\"=\"\u4e66\u4ea6\u70e7\u4ed9\u8349\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Shuyi_Tealicious_at_Jingcheng_Neighbor_Center-20220619.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Shuyi_Tealicious_at_Jingcheng_Neighbor_Center-20220619.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e94\u6850\u865f",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e94\u6850\u865f\"][\"brand:en\"=\"WooTea\"][\"brand:wikidata\"=\"Q126455337\"][\"brand:zh\"=\"\u4e94\u6850\u865f\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u4e94\u6850\u865f\"][\"name:en\"=\"WooTea\"][\"name:zh\"=\"\u4e94\u6850\u865f\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u4e9a\u9a6c\u900a\u5496\u5561",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u4e9a\u9a6c\u900a\u5496\u5561\"][\"brand:wikidata\"=\"Q43247503\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u4e9a\u9a6c\u900a\u5496\u5561\"][\"name:en\"=\"Caf\u00e9 Amazon\"][\"name:zh\"=\"\u4e9a\u9a6c\u900a\u5496\u5561\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5148\u559d\u9053",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5148\u559d\u9053\"][\"brand:en\"=\"Tao-Tao Tea\"][\"brand:wikidata\"=\"Q126456282\"][\"brand:zh\"=\"\u5148\u559d\u9053\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5148\u559d\u9053\"][\"name:en\"=\"Tao-Tao Tea\"][\"name:zh\"=\"\u5148\u559d\u9053\"][\"operator\"=\"\u53e4\u5178\u73ab\u7470\u5712\"][\"operator:wikidata\"=\"Q10913070\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u516b\u66dc\u548c\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u516b\u66dc\u548c\u8336\"][\"brand:en\"=\"Hachiyo Tea\"][\"brand:ja\"=\"\u30cf\u30c1\u30e8\u30a6\u30ef\u30c1\u30e4\"][\"brand:wikidata\"=\"Q130360667\"][\"brand:zh\"=\"\u516b\u66dc\u548c\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u516b\u66dc\u548c\u8336\"][\"name:en\"=\"Hachiyo Tea\"][\"name:ja\"=\"\u30cf\u30c1\u30e8\u30a6\u30ef\u30c1\u30e4\"][\"name:zh\"=\"\u516b\u66dc\u548c\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5170\u82b3\u56ed",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5170\u82b3\u56ed\"][\"brand:en\"=\"LAN FONG YUEN\"][\"brand:wikidata\"=\"Q109968333\"][\"brand:zh\"=\"\u5170\u82b3\u56ed\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5170\u82b3\u56ed\"][\"name:en\"=\"LAN FONG YUEN\"][\"name:zh\"=\"\u5170\u82b3\u56ed\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u518d\u7761\u4e94\u5206\u9418",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u518d\u7761\u4e94\u5206\u9418\"][\"brand:en\"=\"Nap Tea\"][\"brand:wikidata\"=\"Q108166651\"][\"brand:zh\"=\"\u518d\u7761\u4e94\u5206\u9418\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u518d\u7761\u4e94\u5206\u9418\"][\"name:en\"=\"Nap Tea\"][\"name:zh\"=\"\u518d\u7761\u4e94\u5206\u9418\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u51b0\u994c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u51b0\u994c\"][\"brand:en\"=\"Tea-Workstation\"][\"brand:wikidata\"=\"Q127692990\"][\"brand:zh\"=\"\u51b0\u994c\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u51b0\u994c\u8336\u98f2\u5c08\u8ce3\u5e97\"][\"name:en\"=\"Tea-Workstation\"][\"name:zh\"=\"\u51b0\u994c\u8336\u98f2\u5c08\u8ce3\u5e97\"][\"takeaway\"=\"only\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u53e4\u8317",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u53e4\u8317\"][\"brand:en\"=\"Goodme\"][\"brand:wikidata\"=\"Q101500324\"][\"brand:zh\"=\"\u53e4\u8317\"][\"cuisine\"=\"ice_cream;bubble_tea\"][\"name\"=\"\u53e4\u8317\"][\"name:en\"=\"Goodme\"][\"name:zh\"=\"\u53e4\u8317\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/SZ_\u6df1\u5733_Shenzhen_\u5149\u660e\u65b0\u5340_Guangming_\u677e\u767d\u8def_Songbai_Road_\u99ac\u7530\u8def_Matian_Road_\u5b8f\u767c\u5609\u57df\u8588\u5546\u5834_HongFa_Garden_JiaYu_Hui_Mall_shop_\u53e4\u8317_Good_Me_Beverage_October_2024_R12S_(cropped).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/SZ_\u6df1\u5733_Shenzhen_\u5149\u660e\u65b0\u5340_Guangming_\u677e\u767d\u8def_Songbai_Road_\u99ac\u7530\u8def_Matian_Road_\u5b8f\u767c\u5609\u57df\u8588\u5546\u5834_HongFa_Garden_JiaYu_Hui_Mall_shop_\u53e4\u8317_Good_Me_Beverage_October_2024_R12S_(cropped).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u53ef\u4e0d\u53ef\u719f\u6210\u7d05\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u53ef\u4e0d\u53ef\u719f\u6210\u7d05\u8336\"][\"brand:en\"=\"Kebuke\"][\"brand:wikidata\"=\"Q45572389\"][\"brand:zh\"=\"\u53ef\u4e0d\u53ef\u719f\u6210\u7d05\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u53ef\u4e0d\u53ef\u719f\u6210\u7d05\u8336\"][\"name:en\"=\"Kebuke\"][\"name:zh\"=\"\u53ef\u4e0d\u53ef\u719f\u6210\u7d05\u8336\"][\"short_name\"=\"\u53ef\u4e0d\u53ef\"][\"takeaway\"=\"only\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5403\u8336\u4e09\u5343",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5403\u8336\u4e09\u5343\"][\"brand:en\"=\"Chicha San Chen\"][\"brand:wikidata\"=\"Q133042869\"][\"brand:zh\"=\"\u5403\u8336\u4e09\u5343\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5403\u8336\u4e09\u5343\"][\"name:en\"=\"Chicha San Chen\"][\"name:zh\"=\"\u5403\u8336\u4e09\u5343\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5403\u8336\u4e09\u5343 Chicha San Chen",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5403\u8336\u4e09\u5343 Chicha San Chen\"][\"brand:en\"=\"Chicha San Chen\"][\"brand:wikidata\"=\"Q133042869\"][\"brand:zh\"=\"\u5403\u8336\u4e09\u5343\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5403\u8336\u4e09\u5343 Chicha San Chen\"][\"name:en\"=\"Chicha San Chen\"][\"name:zh\"=\"\u5403\u8336\u4e09\u5343\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5496\u4e16\u5bb6",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"Costa\u5496\u5561\"][\"brand:en\"=\"Costa\"][\"brand:wikidata\"=\"Q608845\"][\"brand:zh\"=\"Costa\u5496\u5561\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"Costa\u5496\u5561\"][\"name:en\"=\"Costa\"][\"name:zh\"=\"Costa\u5496\u5561\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Costa_Coffee_Logo_white_on_red.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Costa_Coffee_Logo_white_on_red.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u559c\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u559c\u8336\"][\"brand:en\"=\"Heytea\"][\"brand:wikidata\"=\"Q60875376\"][\"brand:zh\"=\"\u559c\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u559c\u8336\"][\"name:en\"=\"Heytea\"][\"name:zh\"=\"\u559c\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HEYTEA_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HEYTEA_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u559c\u8336 Heytea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u559c\u8336 Heytea\"][\"brand:en\"=\"Heytea\"][\"brand:wikidata\"=\"Q60875376\"][\"brand:zh\"=\"\u559c\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u559c\u8336 Heytea\"][\"name:en\"=\"Heytea\"][\"name:zh\"=\"\u559c\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HEYTEA_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HEYTEA_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5805\u679c\u5976\u8336 NUTTEA",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5805\u679c\u5976\u8336 NUTTEA\"][\"brand:en\"=\"NUTTEA\"][\"brand:wikidata\"=\"Q111313216\"][\"brand:zh\"=\"\u5805\u679c\u5976\u8336\"][\"brand:zh-Hans\"=\"\u575a\u679c\u5976\u8336\"][\"brand:zh-Hant\"=\"\u5805\u679c\u5976\u8336\"][\"cuisine\"=\"tea\"][\"name\"=\"\u5805\u679c\u5976\u8336 NUTTEA\"][\"name:en\"=\"NUTTEA\"][\"name:zh\"=\"\u5805\u679c\u5976\u8336\"][\"name:zh-Hans\"=\"\u575a\u679c\u5976\u8336\"][\"name:zh-Hant\"=\"\u5805\u679c\u5976\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u591a\u90a3\u4e4b\u5496\u5561",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u591a\u90a3\u4e4b\u5496\u5561\"][\"brand:en\"=\"Donutes Coffee\"][\"brand:wikidata\"=\"Q132010304\"][\"brand:zh\"=\"\u591a\u90a3\u4e4b\u5496\u5561\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u591a\u90a3\u4e4b\u5496\u5561\"][\"name:en\"=\"Donutes Coffee\"][\"name:zh\"=\"\u591a\u90a3\u4e4b\u5496\u5561\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5927\u76ca\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5927\u76ca\u8336\"][\"brand:en\"=\"TAETEA\"][\"brand:wikidata\"=\"Q114865249\"][\"brand:zh\"=\"\u5927\u76ca\u8336\"][\"cuisine\"=\"tea\"][\"name\"=\"\u5927\u76ca\u8336\"][\"name:en\"=\"TAETEA\"][\"name:zh\"=\"\u5927\u76ca\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5927\u82d1\u5b50",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5927\u82d1\u5b50\"][\"brand:en\"=\"DaYung's\"][\"brand:wikidata\"=\"Q67934123\"][\"brand:zh\"=\"\u5927\u82d1\u5b50\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5927\u82d1\u5b50\"][\"name:en\"=\"DaYung's\"][\"name:zh\"=\"\u5927\u82d1\u5b50\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5927\u8317\u672c\u4f4d\u88fd\u8336\u5802",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5927\u8317\u672c\u4f4d\u88fd\u8336\u5802\"][\"brand:en\"=\"Daming\"][\"brand:wikidata\"=\"Q131300307\"][\"brand:zh\"=\"\u5927\u8317\u672c\u4f4d\u88fd\u8336\u5802\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5927\u8317\u672c\u4f4d\u88fd\u8336\u5802\"][\"name:en\"=\"Daming\"][\"name:zh\"=\"\u5927\u8317\u672c\u4f4d\u88fd\u8336\u5802\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5929\u4ec1\u8317\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5929\u4ec1\u8317\u8336\"][\"brand:en\"=\"TenRen's Tea\"][\"brand:wikidata\"=\"Q10939065\"][\"brand:zh\"=\"\u5929\u4ec1\u8317\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5929\u4ec1\u8317\u8336\"][\"name:en\"=\"TenRen's Tea\"][\"name:zh\"=\"\u5929\u4ec1\u8317\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5929\u4ec1\u8317\u8336 TenRen's Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5929\u4ec1\u8317\u8336 TenRen's Tea\"][\"brand:en\"=\"TenRen's Tea\"][\"brand:wikidata\"=\"Q10939065\"][\"brand:zh\"=\"\u5929\u4ec1\u8317\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5929\u4ec1\u8317\u8336 TenRen's Tea\"][\"name:en\"=\"TenRen's Tea\"][\"name:zh\"=\"\u5929\u4ec1\u8317\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u592a\u5e73\u6d0b\u5496\u5561",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u592a\u5e73\u6d0b\u5496\u5561\"][\"brand:en\"=\"Pacific Coffee\"][\"brand:wikidata\"=\"Q7122398\"][\"brand:zh\"=\"\u592a\u5e73\u6d0b\u5496\u5561\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u592a\u5e73\u6d0b\u5496\u5561\"][\"name:en\"=\"Pacific Coffee\"][\"name:zh\"=\"\u592a\u5e73\u6d0b\u5496\u5561\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_SW_\u4e0a\u74b0_Sheung_Wan_\u8377\u674e\u6d3b\u9053_Hollywood_Road_shops_Pacific_Coffee_Company_Feb_2017_IX1_02.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_SW_\u4e0a\u74b0_Sheung_Wan_\u8377\u674e\u6d3b\u9053_Hollywood_Road_shops_Pacific_Coffee_Company_Feb_2017_IX1_02.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u592a\u5e73\u6d0b\u5496\u5561 Pacific Coffee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u592a\u5e73\u6d0b\u5496\u5561 Pacific Coffee\"][\"brand:en\"=\"Pacific Coffee\"][\"brand:wikidata\"=\"Q7122398\"][\"brand:zh\"=\"\u592a\u5e73\u6d0b\u5496\u5561\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u592a\u5e73\u6d0b\u5496\u5561 Pacific Coffee\"][\"name:en\"=\"Pacific Coffee\"][\"name:zh\"=\"\u592a\u5e73\u6d0b\u5496\u5561\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_SW_\u4e0a\u74b0_Sheung_Wan_\u8377\u674e\u6d3b\u9053_Hollywood_Road_shops_Pacific_Coffee_Company_Feb_2017_IX1_02.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_SW_\u4e0a\u74b0_Sheung_Wan_\u8377\u674e\u6d3b\u9053_Hollywood_Road_shops_Pacific_Coffee_Company_Feb_2017_IX1_02.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5948\u96ea\u7684\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5948\u96ea\u7684\u8336\"][\"brand:en\"=\"Nayuki\"][\"brand:wikidata\"=\"Q107351710\"][\"brand:zh\"=\"\u5948\u96ea\u7684\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5948\u96ea\u7684\u8336\"][\"name:en\"=\"Nayuki\"][\"name:zh\"=\"\u5948\u96ea\u7684\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Naixue.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Naixue.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5ba2\u7f8e\u591a\u5496\u5561",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5ba2\u7f8e\u591a\u5496\u5561\"][\"brand:en\"=\"Komeda Coffee Shop\"][\"brand:ja\"=\"\u30b3\u30e1\u30c0\u73c8\u7432\u5e97\"][\"brand:wikidata\"=\"Q11302679\"][\"brand:zh\"=\"\u5ba2\u7f8e\u591a\u5496\u5561\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u5ba2\u7f8e\u591a\u5496\u5561\"][\"name:en\"=\"Komeda Coffee Shop\"][\"name:ja\"=\"\u30b3\u30e1\u30c0\u73c8\u7432\u5e97\"][\"name:zh\"=\"\u5ba2\u7f8e\u591a\u5496\u5561\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/CodazziAmericanCoffee2.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/CodazziAmericanCoffee2.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5e78\u798f\u5802",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5e78\u798f\u5802\"][\"brand:en\"=\"Xing Fu Tang\"][\"brand:wikidata\"=\"Q95720330\"][\"brand:zh\"=\"\u5e78\u798f\u5802\"][\"cuisine\"=\"bubble_tea\"][\"int_name\"=\"Xing Fu Tang\"][\"name\"=\"\u5e78\u798f\u5802\"][\"name:en\"=\"Xing Fu Tang\"][\"name:zh\"=\"\u5e78\u798f\u5802\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5e78\u798f\u5802 Xing Fu Tang",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5e78\u798f\u5802 Xing Fu Tang\"][\"brand:en\"=\"Xing Fu Tang\"][\"brand:wikidata\"=\"Q95720330\"][\"brand:zh\"=\"\u5e78\u798f\u5802\"][\"cuisine\"=\"bubble_tea\"][\"int_name\"=\"Xing Fu Tang\"][\"name\"=\"\u5e78\u798f\u5802 Xing Fu Tang\"][\"name:en\"=\"Xing Fu Tang\"][\"name:zh\"=\"\u5e78\u798f\u5802\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5e78\u8fd0\u5496",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5e78\u8fd0\u5496\"][\"brand:en\"=\"Lucky Cup\"][\"brand:zh\"=\"\u5e78\u8fd0\u5496\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u5e78\u8fd0\u5496\"][\"name:en\"=\"Lucky Cup\"][\"name:zh\"=\"\u5e78\u8fd0\u5496\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5e93\u8fea\u5496\u5561",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5e93\u8fea\u5496\u5561\"][\"brand:en\"=\"Cotti Coffee\"][\"brand:wikidata\"=\"Q123370986\"][\"brand:zh\"=\"\u5e93\u8fea\u5496\u5561\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u5e93\u8fea\u5496\u5561\"][\"name:en\"=\"Cotti Coffee\"][\"name:zh\"=\"\u5e93\u8fea\u5496\u5561\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5feb\u4e50\u67e0\u6aac",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5feb\u4e50\u67e0\u6aac\"][\"brand:en\"=\"Happy Lemon\"][\"brand:wikidata\"=\"Q109968422\"][\"brand:zh\"=\"\u5feb\u4e50\u67e0\u6aac\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5feb\u4e50\u67e0\u6aac\"][\"name:en\"=\"Happy Lemon\"][\"name:zh\"=\"\u5feb\u4e50\u67e0\u6aac\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u5feb\u53ef\u7acb",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u5feb\u53ef\u7acb\"][\"brand:en\"=\"Quickly\"][\"brand:wikidata\"=\"Q3771463\"][\"brand:zh\"=\"\u5feb\u53ef\u7acb\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u5feb\u53ef\u7acb\"][\"name:en\"=\"Quickly\"][\"name:zh\"=\"\u5feb\u53ef\u7acb\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Pearl_Milktea.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pearl_Milktea.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u65e5\u51fa\u8336\u592a (\u4e2d\u56fd\u5927\u9646)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u65e5\u51fa\u8336\u592a\"][\"brand:en\"=\"Chatime\"][\"brand:wikidata\"=\"Q16829306\"][\"brand:zh\"=\"\u65e5\u51fa\u8336\u592a\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u65e5\u51fa\u8336\u592a\"][\"name:en\"=\"Chatime\"][\"name:zh\"=\"\u65e5\u51fa\u8336\u592a\"][\"operator\"=\"\u65e5\u592a\u9910\u996e\u7ba1\u7406\uff08\u4e0a\u6d77\uff09\u6709\u9650\u516c\u53f8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u65e5\u51fa\u8336\u592a (\u81fa\u7063)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u65e5\u51fa\u8336\u592a\"][\"brand:en\"=\"Chatime\"][\"brand:wikidata\"=\"Q16829306\"][\"brand:zh\"=\"\u65e5\u51fa\u8336\u592a\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u65e5\u51fa\u8336\u592a\"][\"name:en\"=\"Chatime\"][\"name:zh\"=\"\u65e5\u51fa\u8336\u592a\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u661f\u4e43\u73c8\u7432\u5e97",
    query: "[out:json][timeout:25];(nwr[\"alt_name:zh\"=\"\u661f\u4e43\u5496\u5561\u5e97\"][\"amenity\"=\"cafe\"][\"brand\"=\"\u661f\u4e43\u73c8\u7432\u5e97\"][\"brand:en\"=\"Hoshino Coffee\"][\"brand:ja\"=\"\u661f\u4e43\u73c8\u7432\u5e97\"][\"brand:wikidata\"=\"Q88396880\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u661f\u4e43\u73c8\u7432\u5e97\"][\"name:en\"=\"Hoshino Coffee\"][\"name:ja\"=\"\u661f\u4e43\u73c8\u7432\u5e97\"][\"name:zh\"=\"\u661f\u4e43\u73c8\u7432\u5e97\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u661f\u5df4\u514b",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u661f\u5df4\u514b\"][\"brand:en\"=\"Starbucks\"][\"brand:wikidata\"=\"Q37158\"][\"brand:zh\"=\"\u661f\u5df4\u514b\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u661f\u5df4\u514b\"][\"name:en\"=\"Starbucks\"][\"name:zh\"=\"\u661f\u5df4\u514b\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u661f\u5df4\u514b Starbucks",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u661f\u5df4\u514b Starbucks\"][\"brand:en\"=\"Starbucks\"][\"brand:wikidata\"=\"Q37158\"][\"brand:zh\"=\"\u661f\u5df4\u514b\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u661f\u5df4\u514b Starbucks\"][\"name:en\"=\"Starbucks\"][\"name:zh\"=\"\u661f\u5df4\u514b\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u661f\u5df4\u514b(\u53f0\u7063)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u661f\u5df4\u514b\"][\"brand:en\"=\"Starbucks\"][\"brand:wikidata\"=\"Q37158\"][\"brand:zh\"=\"\u661f\u5df4\u514b\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u661f\u5df4\u514b\"][\"name:en\"=\"Starbucks\"][\"name:zh\"=\"\u661f\u5df4\u514b\"][\"operator\"=\"\u60a0\u65c5\u751f\u6d3b\u4e8b\u696d\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Starbucks_coffee_wordmark.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u6625\u6c34\u5802\u4eba\u6587\u8336\u9928",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u6625\u6c34\u5802\u4eba\u6587\u8336\u9928\"][\"brand:en\"=\"Chun Shui Tang\"][\"brand:ja\"=\"\u6625\u6c34\u5802\"][\"brand:wikidata\"=\"Q11088820\"][\"brand:zh\"=\"\u6625\u6c34\u5802\u4eba\u6587\u8336\u9928\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u6625\u6c34\u5802\u4eba\u6587\u8336\u9928\"][\"name:en\"=\"Chun Shui Tang\"][\"name:ja\"=\"\u6625\u6c34\u5802\"][\"name:zh\"=\"\u6625\u6c34\u5802\u4eba\u6587\u8336\u9928\"][\"operator\"=\"\u6625\u6c34\u5802\u4eba\u6587\u8336\u9928\"][\"operator:wikidata\"=\"Q11088820\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/First_restaurant_of_Chunshuitang.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/First_restaurant_of_Chunshuitang.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u672c\u5bab\u7684\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u672c\u5bab\u7684\u8336\"][\"brand:en\"=\"BenGong's Tea\"][\"brand:wikidata\"=\"Q124799096\"][\"brand:zh\"=\"\u672c\u5bab\u7684\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u672c\u5bab\u7684\u8336\"][\"name:en\"=\"BenGong's Tea\"][\"name:zh\"=\"\u672c\u5bab\u7684\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u6caa\u4e0a\u963f\u59e8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u6caa\u4e0a\u963f\u59e8\"][\"brand:en\"=\"AUNTEA JENNY\"][\"brand:wikidata\"=\"Q108165945\"][\"brand:zh\"=\"\u6caa\u4e0a\u963f\u59e8\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u6caa\u4e0a\u963f\u59e8\"][\"name:en\"=\"AUNTEA JENNY\"][\"name:zh\"=\"\u6caa\u4e0a\u963f\u59e8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u6e05\u5fc3\u798f\u5168",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u6e05\u5fc3\u798f\u5168\"][\"brand:en\"=\"Ching Shin\"][\"brand:wikidata\"=\"Q10391229\"][\"brand:zh\"=\"\u6e05\u5fc3\u798f\u5168\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u6e05\u5fc3\u798f\u5168\"][\"name:en\"=\"Ching Shin\"][\"name:zh\"=\"\u6e05\u5fc3\u798f\u5168\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ching-Shin_Fu-Chuan_Bai_3rd_Store_20200406.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ching-Shin_Fu-Chuan_Bai_3rd_Store_20200406.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u73c8\u7432\u9928",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u73c8\u7432\u9928\"][\"brand:en\"=\"Kohikan\"][\"brand:ja\"=\"\u73c8\u7432\u9928\"][\"brand:wikidata\"=\"Q11573290\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u73c8\u7432\u9928\"][\"name:en\"=\"Kohikan\"][\"name:ja\"=\"\u73c8\u7432\u9928\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/KOHIKAN_Ibaraki-minami.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/KOHIKAN_Ibaraki-minami.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u73cd\u716e\u4e39",
    query: "[out:json][timeout:25];(nwr[\"alt_name:ja\"=\"\u30c8\u30a5\u30eb\u30fc\u30c0\u30f3\"][\"amenity\"=\"cafe\"][\"brand\"=\"\u73cd\u716e\u4e39\"][\"brand:en\"=\"Truedan\"][\"brand:ja\"=\"\u73cd\u716e\u4e39\"][\"brand:wikidata\"=\"Q108168889\"][\"brand:zh\"=\"\u73cd\u716e\u4e39\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u73cd\u716e\u4e39\"][\"name:en\"=\"Truedan\"][\"name:ja\"=\"\u73cd\u716e\u4e39\"][\"name:zh\"=\"\u73cd\u716e\u4e39\"][\"takeaway\"=\"only\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u73cd\u716e\u4e39 Truedan",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u73cd\u716e\u4e39 Truedan\"][\"brand:en\"=\"Truedan\"][\"brand:ja\"=\"\u73cd\u716e\u4e39\"][\"brand:wikidata\"=\"Q108168889\"][\"brand:zh\"=\"\u73cd\u716e\u4e39\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u73cd\u716e\u4e39 Truedan\"][\"name:en\"=\"Truedan\"][\"name:zh\"=\"\u73cd\u716e\u4e39\"][\"takeaway\"=\"only\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u745e\u5e78\u5496\u5561",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u745e\u5e78\u5496\u5561\"][\"brand:en\"=\"Luckin Coffee\"][\"brand:wikidata\"=\"Q56811344\"][\"brand:zh\"=\"\u745e\u5e78\u5496\u5561\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u745e\u5e78\u5496\u5561\"][\"name:en\"=\"Luckin Coffee\"][\"name:zh\"=\"\u745e\u5e78\u5496\u5561\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Luckin_Coffee_at_Lucky_Time_Food_Court,_Dongzhimen_(20220216160956).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Luckin_Coffee_at_Lucky_Time_Food_Court,_Dongzhimen_(20220216160956).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u7532\u6587\u9752",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u7532\u6587\u9752\"][\"brand:en\"=\"Jia Wen Cing\"][\"brand:wikidata\"=\"Q108166285\"][\"brand:zh\"=\"\u7532\u6587\u9752\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u7532\u6587\u9752\"][\"name:en\"=\"Jia Wen Cing\"][\"name:zh\"=\"\u7532\u6587\u9752\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u76ca\u79be\u5802",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u76ca\u79be\u5802\"][\"brand:en\"=\"YH.Tang\"][\"brand:wikidata\"=\"Q110287075\"][\"brand:zh\"=\"\u76ca\u79be\u5802\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u76ca\u79be\u5802\"][\"name:en\"=\"YH.Tang\"][\"name:zh\"=\"\u76ca\u79be\u5802\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8001\u864e\u5802",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8001\u864e\u5802\"][\"brand:en\"=\"Tiger Sugar\"][\"brand:wikidata\"=\"Q76099070\"][\"brand:zh\"=\"\u8001\u864e\u5802\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8001\u864e\u5802\"][\"name:en\"=\"Tiger Sugar\"][\"name:zh\"=\"\u8001\u864e\u5802\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/20200805_153454_things_places_in_south_korea_IMG_9327.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/20200805_153454_things_places_in_south_korea_IMG_9327.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8001\u864e\u5802 Tiger Sugar",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8001\u864e\u5802 Tiger Sugar\"][\"brand:en\"=\"Tiger Sugar\"][\"brand:wikidata\"=\"Q76099070\"][\"brand:zh\"=\"\u8001\u864e\u5802\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8001\u864e\u5802 Tiger Sugar\"][\"name:en\"=\"Tiger Sugar\"][\"name:zh\"=\"\u8001\u864e\u5802\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/20200805_153454_things_places_in_south_korea_IMG_9327.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/20200805_153454_things_places_in_south_korea_IMG_9327.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8336\u661f\u4eba E.Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8336\u661f\u4eba E.Tea\"][\"brand:en\"=\"E.Tea\"][\"brand:wikidata\"=\"Q116188631\"][\"brand:zh\"=\"\u8336\u661f\u4eba\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8336\u661f\u4eba E.Tea\"][\"name:en\"=\"E.Tea\"][\"name:zh\"=\"\u8336\u661f\u4eba\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8336\u6e6f\u6703",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8336\u6e6f\u6703\"][\"brand:en\"=\"TP Tea\"][\"brand:wikidata\"=\"Q108166023\"][\"brand:zh\"=\"\u8336\u6e6f\u6703\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8336\u6e6f\u6703\"][\"name:en\"=\"TP Tea\"][\"name:zh\"=\"\u8336\u6e6f\u6703\"][\"operator\"=\"\u6625\u6c34\u5802\u4eba\u6587\u8336\u9928\"][\"operator:wikidata\"=\"Q11088820\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8336\u6e6f\u6703 TP Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8336\u6e6f\u6703 TP Tea\"][\"brand:en\"=\"TP Tea\"][\"brand:wikidata\"=\"Q108166023\"][\"brand:zh\"=\"\u8336\u6e6f\u6703\"][\"brand:zh-Hans\"=\"\u8336\u6c64\u4f1a\"][\"brand:zh-Hant\"=\"\u8336\u6e6f\u6703\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8336\u6e6f\u6703 TP Tea\"][\"name:en\"=\"TP Tea\"][\"name:zh\"=\"\u8336\u6e6f\u6703\"][\"name:zh-Hans\"=\"\u8336\u6c64\u4f1a\"][\"name:zh-Hant\"=\"\u8336\u6e6f\u6703\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8336\u767e\u9053",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8336\u767e\u9053\"][\"brand:en\"=\"chabaidao\"][\"brand:wikidata\"=\"Q108165952\"][\"brand:zh\"=\"\u8336\u767e\u9053\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8336\u767e\u9053\"][\"name:en\"=\"chabaidao\"][\"name:zh\"=\"\u8336\u767e\u9053\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/20220809_Cha_Bai_Dao_at_Zhengzhou_Shanshan_Outlet_Plaza.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/20220809_Cha_Bai_Dao_at_Zhengzhou_Shanshan_Outlet_Plaza.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8336\u767e\u9053 ChaPanda",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8336\u767e\u9053 ChaPanda\"][\"brand:en\"=\"ChaPanda\"][\"brand:wikidata\"=\"Q108165952\"][\"brand:zh\"=\"\u8336\u767e\u9053\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8336\u767e\u9053 ChaPanda\"][\"name:en\"=\"ChaPanda\"][\"name:zh\"=\"\u8336\u767e\u9053\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/20220809_Cha_Bai_Dao_at_Zhengzhou_Shanshan_Outlet_Plaza.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/20220809_Cha_Bai_Dao_at_Zhengzhou_Shanshan_Outlet_Plaza.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8336\u7684\u9b54\u624b",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8336\u7684\u9b54\u624b\"][\"brand:en\"=\"Tea & Magic Hand\"][\"brand:wikidata\"=\"Q67933727\"][\"brand:zh\"=\"\u8336\u7684\u9b54\u624b\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8336\u7684\u9b54\u624b\"][\"name:en\"=\"Tea & Magic Hand\"][\"name:zh\"=\"\u8336\u7684\u9b54\u624b\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8336\u989c\u60a6\u8272",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8336\u989c\u60a6\u8272\"][\"brand:en\"=\"Sexytea\"][\"brand:wikidata\"=\"Q60992994\"][\"brand:zh\"=\"\u8336\u989c\u60a6\u8272\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8336\u989c\u60a6\u8272\"][\"name:en\"=\"Sexytea\"][\"name:zh\"=\"\u8336\u989c\u60a6\u8272\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Cha_Yan_Yue_Se,_Changsha,_China,_21_May_2021H.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Cha_Yan_Yue_Se,_Changsha,_China,_21_May_2021H.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u85a1\u8336",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u85a1\u8336\"][\"brand:en\"=\"Ding Tea\"][\"brand:wikidata\"=\"Q112123475\"][\"brand:zh\"=\"\u85a1\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u85a1\u8336\"][\"name:en\"=\"Ding Tea\"][\"name:zh\"=\"\u85a1\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u871c\u96ea\u51b0\u57ce",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u871c\u96ea\u51b0\u57ce\"][\"brand:en\"=\"MIXUEBINGCHENG\"][\"brand:wikidata\"=\"Q107406476\"][\"brand:zh\"=\"\u871c\u96ea\u51b0\u57ce\"][\"cuisine\"=\"ice_cream;bubble_tea\"][\"name\"=\"\u871c\u96ea\u51b0\u57ce\"][\"name:en\"=\"MIXUEBINGCHENG\"][\"name:zh\"=\"\u871c\u96ea\u51b0\u57ce\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mixue_icecream_and_tea_in_fujian_fuding.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mixue_icecream_and_tea_in_fujian_fuding.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u871c\u96ea\u51b0\u57ce Mixue Ice Cream & Tea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u871c\u96ea\u51b0\u57ce Mixue Ice Cream & Tea\"][\"brand:en\"=\"Mixue Ice Cream & Tea\"][\"brand:wikidata\"=\"Q107406476\"][\"brand:zh\"=\"\u871c\u96ea\u51b0\u57ce\"][\"cuisine\"=\"ice_cream;bubble_tea\"][\"name\"=\"\u871c\u96ea\u51b0\u57ce Mixue Ice Cream & Tea\"][\"name:en\"=\"Mixue Ice Cream & Tea\"][\"name:zh\"=\"\u871c\u96ea\u51b0\u57ce\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mixue_icecream_and_tea_in_fujian_fuding.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mixue_icecream_and_tea_in_fujian_fuding.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u897f\u96c5\u5716\u6975\u54c1\u5496\u5561",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u897f\u96c5\u5716\u6975\u54c1\u5496\u5561\"][\"brand:en\"=\"Barista Coffee\"][\"brand:wikidata\"=\"Q130525295\"][\"brand:zh\"=\"\u897f\u96c5\u5716\u6975\u54c1\u5496\u5561\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u897f\u96c5\u5716\u6975\u54c1\u5496\u5561\"][\"name:en\"=\"Barista Coffee\"][\"name:zh\"=\"\u897f\u96c5\u5716\u6975\u54c1\u5496\u5561\"][\"operator\"=\"\u99a5\u9918\u5be6\u696d\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"operator:en\"=\"Full Fill Industrial Co., Ltd.\"][\"operator:zh\"=\"\u99a5\u9918\u5be6\u696d\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8a31\u7559\u5c71",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8a31\u7559\u5c71\"][\"brand:en\"=\"Hui Lau Shan\"][\"brand:wikidata\"=\"Q5934913\"][\"brand:zh\"=\"\u8a31\u7559\u5c71\"][\"cuisine\"=\"asian;dessert\"][\"name\"=\"\u8a31\u7559\u5c71\"][\"name:en\"=\"Hui Lau Shan\"][\"name:zh\"=\"\u8a31\u7559\u5c71\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_HuiLauShan_YuenLongOldShop.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_HuiLauShan_YuenLongOldShop.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8a31\u7559\u5c71 Hui Lau Shan",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8a31\u7559\u5c71 Hui Lau Shan\"][\"brand:en\"=\"Hui Lau Shan\"][\"brand:wikidata\"=\"Q5934913\"][\"brand:zh\"=\"\u8a31\u7559\u5c71\"][\"cuisine\"=\"asian;dessert\"][\"name\"=\"\u8a31\u7559\u5c71 Hui Lau Shan\"][\"name:en\"=\"Hui Lau Shan\"][\"name:zh\"=\"\u8a31\u7559\u5c71\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_HuiLauShan_YuenLongOldShop.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HK_HuiLauShan_YuenLongOldShop.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8ca2\u8336 (\u65e5\u672c)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8ca2\u8336\"][\"brand:en\"=\"Gong Cha\"][\"brand:ja\"=\"\u8ca2\u8336\"][\"brand:wikidata\"=\"Q5581670\"][\"brand:zh\"=\"\u8ca2\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8ca2\u8336\"][\"name:en\"=\"Gong Cha\"][\"name:ja\"=\"\u8ca2\u8336\"][\"name:zh\"=\"\u8ca2\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8ca2\u8336 (\u81fa\u7063)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8ca2\u8336\"][\"brand:en\"=\"Gong Cha\"][\"brand:wikidata\"=\"Q5581670\"][\"brand:zh\"=\"\u8ca2\u8336\"][\"brand:zh-Hans\"=\"\u8d21\u8336\"][\"brand:zh-Hant\"=\"\u8ca2\u8336\"][\"cuisine\"=\"bubble_tea\"][\"int_name\"=\"Gong Cha\"][\"name\"=\"\u8ca2\u8336\"][\"name:en\"=\"Gong Cha\"][\"name:zh\"=\"\u8ca2\u8336\"][\"name:zh-Hans\"=\"\u8d21\u8336\"][\"name:zh-Hant\"=\"\u8ca2\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8ca2\u8336 Gong Cha",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8ca2\u8336 Gong Cha\"][\"brand:en\"=\"Gong Cha\"][\"brand:wikidata\"=\"Q5581670\"][\"brand:zh\"=\"\u8ca2\u8336\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8ca2\u8336 Gong Cha\"][\"name:en\"=\"Gong Cha\"][\"name:zh\"=\"\u8ca2\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8d21\u8336 (\u4e2d\u56fd)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8d21\u8336\"][\"brand:en\"=\"Gong Cha\"][\"brand:wikidata\"=\"Q5581670\"][\"brand:zh\"=\"\u8d21\u8336\"][\"brand:zh-Hans\"=\"\u8d21\u8336\"][\"brand:zh-Hant\"=\"\u8ca2\u8336\"][\"cuisine\"=\"bubble_tea\"][\"int_name\"=\"Gong Cha\"][\"name\"=\"\u8d21\u8336\"][\"name:en\"=\"Gong Cha\"][\"name:zh\"=\"\u8d21\u8336\"][\"name:zh-Hans\"=\"\u8d21\u8336\"][\"name:zh-Hant\"=\"\u8ca2\u8336\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gong_Cha_in_QV_Square_2017.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8def\u6613\u838e\u5496\u5561",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8def\u6613\u838e\u5496\u5561\"][\"brand:en\"=\"Louisa Coffee\"][\"brand:wikidata\"=\"Q96390921\"][\"brand:zh\"=\"\u8def\u6613\u838e\u5496\u5561\"][\"cuisine\"=\"coffee_shop\"][\"name\"=\"\u8def\u6613\u838e\u5496\u5561\"][\"name:en\"=\"Louisa Coffee\"][\"name:zh\"=\"\u8def\u6613\u838e\u5496\u5561\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Keelung_Qidu_Store,_Louisa_Coffee_20220428.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Keelung_Qidu_Store,_Louisa_Coffee_20220428.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u8ff7\u5ba2\u590f",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u8ff7\u5ba2\u590f\"][\"brand:en\"=\"Milkshop\"][\"brand:wikidata\"=\"Q67934215\"][\"brand:zh\"=\"\u8ff7\u5ba2\u590f\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u8ff7\u5ba2\u590f\"][\"name:en\"=\"Milkshop\"][\"name:zh\"=\"\u8ff7\u5ba2\u590f\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u9738\u738b\u8336\u59ec",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u9738\u738b\u8336\u59ec\"][\"brand:en\"=\"Chagee\"][\"brand:wikidata\"=\"Q125052867\"][\"brand:zh\"=\"\u9738\u738b\u8336\u59ec\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u9738\u738b\u8336\u59ec\"][\"name:en\"=\"Chagee\"][\"name:zh\"=\"\u9738\u738b\u8336\u59ec\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/GD_\u5ee3\u6771_Guangdong_\u6771\u839e_Dongguan_\u898f\u5283\u4e8c\u8def_Guihua_2nd_Road_\u4e2d\u5929\u4e2d\u592e\u5ee3\u5834_ZhongTian_Central_Square_Chagee_Beverage_shop_night_December_2024_R12S_01.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/GD_\u5ee3\u6771_Guangdong_\u6771\u839e_Dongguan_\u898f\u5283\u4e8c\u8def_Guihua_2nd_Road_\u4e2d\u5929\u4e2d\u592e\u5ee3\u5834_ZhongTian_Central_Square_Chagee_Beverage_shop_night_December_2024_R12S_01.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u9738\u738b\u8336\u59ec Chagee",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u9738\u738b\u8336\u59ec Chagee\"][\"brand:en\"=\"Chagee\"][\"brand:wikidata\"=\"Q125052867\"][\"brand:zh\"=\"\u9738\u738b\u8336\u59ec\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u9738\u738b\u8336\u59ec Chagee\"][\"name:en\"=\"Chagee\"][\"name:zh\"=\"\u9738\u738b\u8336\u59ec\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/GD_\u5ee3\u6771_Guangdong_\u6771\u839e_Dongguan_\u898f\u5283\u4e8c\u8def_Guihua_2nd_Road_\u4e2d\u5929\u4e2d\u592e\u5ee3\u5834_ZhongTian_Central_Square_Chagee_Beverage_shop_night_December_2024_R12S_01.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/GD_\u5ee3\u6771_Guangdong_\u6771\u839e_Dongguan_\u898f\u5283\u4e8c\u8def_Guihua_2nd_Road_\u4e2d\u5929\u4e2d\u592e\u5ee3\u5834_ZhongTian_Central_Square_Chagee_Beverage_shop_night_December_2024_R12S_01.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u9bae\u8336\u9053",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u9bae\u8336\u9053\"][\"brand:wikidata\"=\"Q108166223\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u9bae\u8336\u9053\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u9db4\u8336\u6a13",
    query: "[out:json][timeout:25];(nwr[\"alt_name:en\"=\"Hechalou\"][\"amenity\"=\"cafe\"][\"brand\"=\"\u9db4\u8336\u6a13\"][\"brand:en\"=\"Hechalou Tea\"][\"brand:wikidata\"=\"Q108168889\"][\"brand:zh\"=\"\u9db4\u8336\u6a13\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u9db4\u8336\u6a13\"][\"name:en\"=\"Hechalou Tea\"][\"name:zh\"=\"\u9db4\u8336\u6a13\"][\"takeaway\"=\"only\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u9e7f\u89d2\u5df7",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u9e7f\u89d2\u5df7\"][\"brand:en\"=\"The Alley\"][\"brand:wikidata\"=\"Q126456355\"][\"brand:zh\"=\"\u9e7f\u89d2\u5df7\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u9e7f\u89d2\u5df7\"][\"name:en\"=\"The Alley\"][\"name:zh\"=\"\u9e7f\u89d2\u5df7\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('cafe'),
    title: "\u9ebb\u53e4\u8336\u574a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"cafe\"][\"brand\"=\"\u9ebb\u53e4\u8336\u574a\"][\"brand:en\"=\"Macu\"][\"brand:wikidata\"=\"Q97300375\"][\"brand:zh\"=\"\u9ebb\u53e4\u8336\u574a\"][\"cuisine\"=\"bubble_tea\"][\"name\"=\"\u9ebb\u53e4\u8336\u574a\"][\"name:en\"=\"Macu\"][\"name:zh\"=\"\u9ebb\u53e4\u8336\u574a\"][\"takeaway\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/MACU_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/MACU_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
            }
        }
    ];
}