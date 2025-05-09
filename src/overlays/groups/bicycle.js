import { getTranslation } from '../../i18n/index.js';

export function bicycleOverlays() {
    return [
        {
    group: getTranslation('bicycle_parking'),
    title: "BikeTower",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_parking\"][\"bicycle_parking\"=\"building\"][\"brand\"=\"BikeTower\"][\"brand:wikidata\"=\"Q130200714\"][\"covered\"=\"yes\"][\"name\"=\"BikeTower\"][\"supervised\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "[TO]BIKE",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"[TO]BIKE\"][\"brand:wikidata\"=\"Q245660\"][\"name\"=\"[TO]BIKE\"][\"operator\"=\"[TO]BIKE\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/To-bike-300x111.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/To-bike-300x111.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Aarhus Kommune",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Aarhus Kommune\"][\"brand:wikidata\"=\"Q240262\"][\"name\"=\"Aarhus Kommune\"][\"operator\"=\"Aarhus Kommune\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q240262\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\u00c5rhus_R\u00e5dhus.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\u00c5rhus_R\u00e5dhus.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "AlbaBici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"AlbaBici\"][\"brand:wikidata\"=\"Q17620480\"][\"network\"=\"AlbaBici\"][\"network:wikidata\"=\"Q17620480\"][\"operator\"=\"Labici\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "AMBici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"AMBici\"][\"brand:wikidata\"=\"Q117066760\"][\"network\"=\"AMBici\"][\"network:wikidata\"=\"Q117066760\"][\"operator\"=\"Transports Metropolitans de Barcelona\"][\"operator:short\"=\"TMB\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q1778212\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/AMBici_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/AMBici_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "ANTIK SmartWay",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"ANTIK SmartWay\"][\"brand:wikidata\"=\"Q108106650\"][\"network\"=\"ANTIK SmartWay\"][\"network:wikidata\"=\"Q108106650\"][\"operator\"=\"Antik Telecom\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q30297477\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Antik_City_Bike_Recovered_From_The_Mlynsk\u00fd_n\u00e1hon_Canal,_Ko\u0161ice,_SK,_October_2019.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Antik_City_Bike_Recovered_From_The_Mlynsk\u00fd_n\u00e1hon_Canal,_Ko\u0161ice,_SK,_October_2019.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Arboria Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Arboria Bike\"][\"network\"=\"Arboria Bike\"][\"operator\"=\"Mesto Trnava\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q26175\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Area Blu",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Area Blu\"][\"name\"=\"Area Blu\"][\"operator\"=\"Area Blu\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u00e0V\u00e9lo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u00e0V\u00e9lo\"][\"brand:wikidata\"=\"Q131564019\"][\"network\"=\"\u00e0V\u00e9lo\"][\"network:wikidata\"=\"Q131564019\"][\"operator\"=\"R\u00e9seau de transport de la Capitale\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q3456768\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_\u00e0V\u00e9lo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_\u00e0V\u00e9lo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BA Ecobici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BA Ecobici\"][\"brand:wikidata\"=\"Q18419538\"][\"network\"=\"BA Ecobici\"][\"network:wikidata\"=\"Q18419538\"][\"operator\"=\"Tembici\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BalticBike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BalticBike\"][\"name\"=\"BalticBike\"][\"operator\"=\"BalticBike\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BatumVelo docking station",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"authentication:app\"=\"yes\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"\u10d1\u10d0\u10d7\u10e3\u10db\u10d5\u10d4\u10da\u10dd\"][\"brand:en\"=\"BatumVelo\"][\"brand:ka\"=\"\u10d1\u10d0\u10d7\u10e3\u10db\u10d5\u10d4\u10da\u10dd\"][\"brand:wikidata\"=\"Q131470229\"][\"fee\"=\"yes\"][\"network\"=\"BatumVelo\"][\"operator\"=\"\u10e8\u10de\u10e1 \u201e\u10d1\u10d0\u10d7\u10e3\u10db\u10d8\u10e1 \u10d0\u10d5\u10e2\u10dd\u10e2\u10e0\u10d0\u10dc\u10e1\u10de\u10dd\u10e0\u10e2\u10d8\u201c\"][\"operator:ka\"=\"\u10e8\u10de\u10e1 \u201e\u10d1\u10d0\u10d7\u10e3\u10db\u10d8\u10e1 \u10d0\u10d5\u10e2\u10dd\u10e2\u10e0\u10d0\u10dc\u10e1\u10de\u10dd\u10e0\u10e2\u10d8\u201c\"][\"operator:type\"=\"government\"][\"payment:cash\"=\"no\"][\"payment:credit_cards\"=\"yes\"][\"payment:debit_cards\"=\"yes\"][\"payment:mastercard\"=\"yes\"][\"payment:visa\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bay Wheels",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Bay Wheels\"][\"brand:wikidata\"=\"Q16971391\"][\"fee\"=\"yes\"][\"name\"=\"Bay Wheels\"][\"network\"=\"Bay Wheels\"][\"network:wikidata\"=\"Q16971391\"][\"operator\"=\"Lyft\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q17077936\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bay_Area_Bike_Share_launch_in_San_Jose_CA.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bay_Area_Bike_Share_launch_in_San_Jose_CA.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "baybike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"baybike\"][\"brand:en\"=\"baybike\"][\"brand:ja\"=\"\u30d9\u30a4\u30d0\u30a4\u30af\"][\"brand:wikidata\"=\"Q91499435\"][\"fee\"=\"yes\"][\"name\"=\"baybike\"][\"name:en\"=\"baybike\"][\"name:ja\"=\"\u30d9\u30a4\u30d0\u30a4\u30af\"][\"official_name\"=\"\u6a2a\u6d5c\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30b5\u30a4\u30af\u30eb\"][\"official_name:en\"=\"Yokohama Bike Share\"][\"official_name:ja\"=\"\u6a2a\u6d5c\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30b5\u30a4\u30af\u30eb\"][\"operator\"=\"baybike\"][\"operator:en\"=\"baybike\"][\"operator:ja\"=\"\u30d9\u30a4\u30d0\u30a4\u30af\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q91499435\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BCycle",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BCycle\"][\"brand:wikidata\"=\"Q4833723\"][\"name\"=\"BCycle\"][\"operator\"=\"BCycle\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q4833723\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/BCycle_Logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/BCycle_Logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Belfast Bikes",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"Just Eat Belfast Bikes\"][\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Belfast Bikes\"][\"brand:wikidata\"=\"Q19843240\"][\"name\"=\"Belfast Bikes\"][\"operator\"=\"Belfast City Council\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q55934837\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bergen Bysykkel",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bergen Bysykkel\"][\"brand:wikidata\"=\"Q109288835\"][\"network\"=\"Bergen Bysykkel\"][\"network:wikidata\"=\"Q109288835\"][\"operator\"=\"Urban Infrastructure Partner AS\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bergen-Bysykkel-Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bergen-Bysykkel-Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Beryl",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Beryl\"][\"brand:wikidata\"=\"Q106575365\"][\"network\"=\"Beryl\"][\"network:wikidata\"=\"Q106575365\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BiCas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BiCas\"][\"network\"=\"BiCas\"][\"operator\"=\"MobiCascais\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bici Cuenca",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bici Cuenca\"][\"network\"=\"Bici Cuenca\"][\"operator\"=\"Bici Cuenca\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bici Las Condes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bici Las Condes\"][\"network\"=\"Bici Las Condes\"][\"operator\"=\"Clear Channel\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "biciAltea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"biciAltea\"][\"network\"=\"biciAltea\"][\"operator\"=\"Labici\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bicicas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bicicas\"][\"brand:wikidata\"=\"Q5728159\"][\"network\"=\"Bicicas\"][\"network:wikidata\"=\"Q5728159\"][\"operator\"=\"Ajuntament Castell\u00f3, Mobilitat\"][\"operator:type\"=\"public\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Castell\u00f3_-_6.jpeg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Castell\u00f3_-_6.jpeg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bicicletar",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bicicletar\"][\"brand:wikidata\"=\"Q20052795\"][\"network\"=\"Bicicletar\"][\"operator\"=\"Prefeitura Municipal de Fortaleza\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q53930902\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bicicoru\u00f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bicicoru\u00f1a\"][\"network\"=\"Bicicoru\u00f1a\"][\"operator\"=\"EMVSA\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BicikeLJ",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BicikeLJ\"][\"brand:wikidata\"=\"Q4903630\"][\"network\"=\"BicikeLJ\"][\"network:wikidata\"=\"Q4903630\"][\"operator\"=\"MOL\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BiciLOG",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BiciLOG\"][\"network\"=\"BiciLOG\"][\"operator\"=\"Impursa S.A.\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BiciMAD",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"BiciMAD\"][\"brand:wikidata\"=\"Q17402113\"][\"network\"=\"BiciMAD\"][\"network:wikidata\"=\"Q17402113\"][\"operator\"=\"Empresa Municipal de Transportes de Madrid\"][\"operator:short\"=\"EMT Madrid\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q1094755\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Bicimad_-_EMT.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Bicimad_-_EMT.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BiciMia",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BiciMia\"][\"brand:wikidata\"=\"Q108120924\"][\"network\"=\"BiciMia\"][\"network:wikidata\"=\"Q108120924\"][\"operator\"=\"Brescia Mobilit\u00e0\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q109628891\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Via_Sostegno_Brescia_stazione_Bicimia_20210808.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Via_Sostegno_Brescia_stazione_Bicimia_20210808.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "bicing",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"bicing\"][\"brand:wikidata\"=\"Q1833385\"][\"network\"=\"bicing\"][\"network:wikidata\"=\"Q1833385\"][\"operator\"=\"Pedalem Barcelona\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q123614695\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bicing_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bicing_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BiciQuito",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BiciQuito\"][\"brand:wikidata\"=\"Q16489709\"][\"network\"=\"BiciQuito\"][\"network:wikidata\"=\"Q16489709\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/BiciQuito.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/BiciQuito.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bicirio",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bicirio\"][\"network\"=\"Bicirio\"][\"operator\"=\"SOMOS movilidad\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bicloo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bicloo\"][\"brand:wikidata\"=\"Q2901638\"][\"network\"=\"Bicloo\"][\"network:wikidata\"=\"Q2901638\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bicloo_ch\u00e2teau.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bicloo_ch\u00e2teau.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bicy",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bicy\"][\"network\"=\"Bicy\"][\"operator\"=\"MO Velenje\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bike Bel\u00e9m",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bike Bel\u00e9m\"][\"network\"=\"Bike Bel\u00e9m\"][\"operator\"=\"Samba Transportes Sustent\u00e1veis\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bike Chattanooga",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bike Chattanooga\"][\"network\"=\"Bike Chattanooga\"][\"operator\"=\"Alta Bike Share\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bike PE",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bike PE\"][\"network\"=\"Bike PE\"][\"operator\"=\"Tembici\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bike PoA",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bike PoA\"][\"network\"=\"Bike PoA\"][\"operator\"=\"Tembici\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bike Salvador",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bike Salvador\"][\"brand:wikidata\"=\"Q20052802\"][\"network\"=\"Bike Salvador\"][\"operator\"=\"Tembici\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bicicleta_do_Bike_Salvador.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bicicleta_do_Bike_Salvador.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bike Sampa",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bike Sampa\"][\"network\"=\"Bike Sampa\"][\"operator\"=\"Bike Sampa\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bike Share Connect",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bike Share Connect\"][\"network\"=\"Bike Share Connect\"][\"operator\"=\"Bruin Bike Share\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bike Share Toronto",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Bike Share Toronto\"][\"brand:wikidata\"=\"Q17018523\"][\"operator\"=\"Toronto Parking Authority\"][\"operator:type\"=\"public\"][\"operator:wikidata\"=\"Q7826466\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bike_Share_Toronto_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bike_Share_Toronto_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bike Vit\u00f3ria",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bike Vit\u00f3ria\"][\"name\"=\"Bike Vit\u00f3ria\"][\"operator\"=\"Serttel\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bike_S",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bike_S\"][\"brand:wikidata\"=\"Q28673057\"][\"network\"=\"Bike_S\"][\"operator\"=\"Nieruchomo\u015bci i Op\u0142aty Lokalne\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Szczeci\u0144ski_Rower_Miejski,_stacja_Plac_Zgody.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Szczeci\u0144ski_Rower_Miejski,_stacja_Plac_Zgody.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "bikeKIA",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"bikeKIA\"][\"network\"=\"bikeKIA\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BikeMi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BikeMi\"][\"brand:wikidata\"=\"Q2902552\"][\"network\"=\"BikeMi\"][\"operator\"=\"Clear Channel\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bike_share.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bike_share.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BikeNHV",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BikeNHV\"][\"network\"=\"BikeNHV\"][\"operator\"=\"Clear Channel\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "bikenow",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"bikenow\"][\"brand:wikidata\"=\"Q107125012\"][\"name\"=\"bikenow\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BiKeR",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BiKeR\"][\"network\"=\"BiKeR\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BikeRio",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BikeRio\"][\"brand:wikidata\"=\"Q28724\"][\"name\"=\"BikeRio\"][\"operator\"=\"Tembici\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/BikeRio_11_2015_Pra\u00e7a_Mau\u00e1_706.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/BikeRio_11_2015_Pra\u00e7a_Mau\u00e1_706.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bikesantiago",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bikesantiago\"][\"brand:wikidata\"=\"Q18170816\"][\"name\"=\"Bikesantiago\"][\"operator\"=\"Bikesantiago\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q18170816\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bikesantiago.cl_(13882549644).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bikesantiago.cl_(13882549644).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Biketown PDX",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Biketown\"][\"brand:wikidata\"=\"Q28035353\"][\"fee\"=\"yes\"][\"name\"=\"Biketown\"][\"network\"=\"Biketown\"][\"network:wikidata\"=\"Q28035353\"][\"operator\"=\"Lyft\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q17077936\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Biketown_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Biketown_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Biketown WHQ",
    query: "[out:json][timeout:25];(nwr[\"access\"=\"private\"][\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Biketown\"][\"brand:wikidata\"=\"Q28035353\"][\"name\"=\"Biketown\"][\"operator\"=\"Nike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q483915\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Biketown_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Biketown_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BikeU",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BikeU\"][\"brand:wikidata\"=\"Q30915392\"][\"name\"=\"BikeU\"][\"network\"=\"BikeU\"][\"network:wikidata\"=\"Q30915392\"][\"operator\"=\"BikeU\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Biki (Honolulu)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Biki\"][\"brand:wikidata\"=\"Q98337927\"][\"name\"=\"Biki\"][\"network\"=\"Biki\"][\"network:wikidata\"=\"Q98337927\"][\"operator\"=\"Biki\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q98337927\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Biki (Valladolid)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Biki\"][\"brand:wikidata\"=\"Q111760142\"][\"name\"=\"Biki\"][\"network\"=\"Biki\"][\"network:wikidata\"=\"Q111760142\"][\"operator\"=\"Auvasa\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q5712430\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Biki_logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Biki_logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bilbaobizi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bilbaobizi\"][\"brand:wikidata\"=\"Q61070767\"][\"network\"=\"Bilbaobizi\"][\"network:wikidata\"=\"Q61070767\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BIT Mobility",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BIT Mobility\"][\"name\"=\"BIT Mobility\"][\"operator\"=\"BIT Mobility\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BiTS",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BiTS\"][\"brand:wikidata\"=\"Q109122647\"][\"network\"=\"BiTS\"][\"operator\"=\"BicinCitt\u00e0\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q108937937\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bixi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Bixi\"][\"brand:wikidata\"=\"Q4919302\"][\"name\"=\"Bixi\"][\"network\"=\"Bixi\"][\"network:wikidata\"=\"Q4919302\"][\"operator\"=\"Bixi\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q4919302\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bixi_Rene-Levesque_Beaudry.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bixi_Rene-Levesque_Beaudry.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BiZi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"BiZi\"][\"brand:wikidata\"=\"Q953933\"][\"network\"=\"BiZi\"][\"network:wikidata\"=\"Q953933\"][\"operator\"=\"UTE Bicicletas Zaragoza\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q130680947\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/BiZi_Zaragoza.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/BiZi_Zaragoza.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "bizkaibizi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"bizkaibizi\"][\"name\"=\"bizkaibizi\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Blue-bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Blue-bike\"][\"brand:wikidata\"=\"Q17332642\"][\"network\"=\"Blue-bike\"][\"network:wikidata\"=\"Q17332642\"][\"operator\"=\"Blue-Mobility\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/BlueBikesGhent01.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/BlueBikesGhent01.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bluebikes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Bluebikes\"][\"brand:wikidata\"=\"Q3142157\"][\"name\"=\"Bluebikes\"][\"network\"=\"Bluebikes\"][\"network:wikidata\"=\"Q3142157\"][\"operator\"=\"Lyft\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q17077936\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bluebikes_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bluebikes_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Boseh",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Boseh\"][\"brand:wikidata\"=\"Q56392276\"][\"name\"=\"Boseh\"][\"network\"=\"Boseh\"][\"network:wikidata\"=\"Q56392276\"][\"operator\"=\"Boseh\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q56392276\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/BOSEH_Bike-sharing_Station_(Ganesa,_2023).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/BOSEH_Bike-sharing_Station_(Ganesa,_2023).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Boulder B-cycle",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Boulder B-cycle\"][\"network\"=\"Boulder B-cycle\"][\"operator\"=\"BCycle\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q4833723\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Breeze Bike Share",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Breeze Bike Share\"][\"network\"=\"Breeze Bike Share\"][\"operator\"=\"CycleHop\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q65121017\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "BROM",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"BROM\"][\"brand:wikidata\"=\"Q119105803\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Brompton Bike Hire",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Brompton Bike Hire\"][\"brand:wikidata\"=\"Q120437445\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bruin Bike Share",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bruin Bike Share\"][\"name\"=\"Bruin Bike Share\"][\"operator\"=\"Bruin Bike Share\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "btnbikeshare",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"btnbikeshare\"][\"network\"=\"btnbikeshare\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bublr Bikes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bublr Bikes\"][\"brand:wikidata\"=\"Q108789295\"][\"network\"=\"Bublr Bikes\"][\"operator\"=\"Bublr Bikes\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q108789295\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bycyklen",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bycyklen\"][\"brand:wikidata\"=\"Q28225772\"][\"network\"=\"Bycyklen\"][\"network:wikidata\"=\"Q28225772\"][\"operator\"=\"Bycyklen\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bydgoski Rower Aglomeracyjny",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Bydgoski Rower Aglomeracyjny\"][\"brand:wikidata\"=\"Q20032305\"][\"network\"=\"Bydgoski Rower Aglomeracyjny\"][\"network:wikidata\"=\"Q20032305\"][\"operator\"=\"BikeU\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bydgoski_Rower_Aglomeracyjny_5_4-2015.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bydgoski_Rower_Aglomeracyjny_5_4-2015.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Bysykkel (Oslo)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Oslo Bysykkel\"][\"brand:wikidata\"=\"Q7107010\"][\"network\"=\"Oslo Bysykkel\"][\"network:wikidata\"=\"Q7107010\"][\"operator\"=\"UIP Oslo Bysykkel AS\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "C.v\u00e9lo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"C.v\u00e9lo\"][\"brand:wikidata\"=\"Q17354096\"][\"network\"=\"C.v\u00e9lo\"][\"network:wikidata\"=\"Q17354096\"][\"operator\"=\"Velogik\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_C.V\u00e9lo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_C.V\u00e9lo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "C'entro in Bici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"C'entro in Bici\"][\"network\"=\"C'entro in Bici\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Call a Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Call a Bike\"][\"brand:wikidata\"=\"Q1060525\"][\"network\"=\"Call a Bike\"][\"network:wikidata\"=\"Q1060525\"][\"operator\"=\"Deutsche Bahn Connect\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q1152100\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Call_a_Bike_Logo_(2022).svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Call_a_Bike_Logo_(2022).svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Capital Bikeshare",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Capital Bikeshare\"][\"brand:wikidata\"=\"Q1034635\"][\"fee\"=\"yes\"][\"name\"=\"Capital Bikeshare\"][\"network\"=\"Capital Bikeshare\"][\"network:wikidata\"=\"Q1034635\"][\"operator\"=\"Lyft\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q17077936\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Capital_Bikeshare_station_outside_Eastern_Market_Metro.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Capital_Bikeshare_station_outside_Eastern_Market_Metro.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "CapMetro Bikeshare",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"CapMetro Bikeshare\"][\"brand:wikidata\"=\"Q133802038\"][\"fee\"=\"yes\"][\"network\"=\"CapMetro Bikeshare\"][\"network:wikidata\"=\"Q133802038\"][\"operator\"=\"CapMetro\"][\"operator:type\"=\"public\"][\"operator:wikidata\"=\"Q587830\"][\"rental\"=\"ebike\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "carvelo2go",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"carvelo2go\"][\"brand:wikidata\"=\"Q110278232\"][\"name\"=\"carvelo2go\"][\"operator\"=\"carvelo2go\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Carvelo2go_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Carvelo2go_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "CDPHP Cycle",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"CDPHP Cycle\"][\"network\"=\"CDPHP Cycle\"][\"operator\"=\"Social Bicycles Inc.\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Chromek",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Chromek\"][\"brand:wikidata\"=\"Q119105688\"][\"network\"=\"Chromek\"][\"network:wikidata\"=\"Q119105688\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "CicloPi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"CicloPi\"][\"network\"=\"CicloPi\"][\"operator\"=\"BicinCitt\u00e0\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q108937937\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Citi Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Citi Bike\"][\"brand:wikidata\"=\"Q2974438\"][\"fee\"=\"yes\"][\"name\"=\"Citi Bike\"][\"network\"=\"Citi Bike\"][\"network:wikidata\"=\"Q2974438\"][\"operator\"=\"Lyft\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q17077936\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Citi_Bike_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Citi_Bike_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Citrix Cycle",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Citrix Cycle\"][\"network\"=\"Citrix Cycle\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "City Bike Finland",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"City Bike Finland\"][\"operator\"=\"City Bike Finland\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "city bike Liverpool",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"city bike Liverpool\"][\"name\"=\"city bike Liverpool\"][\"operator\"=\"city bike Liverpool\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "City Bikes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"City Bikes\"][\"name\"=\"City Bikes\"][\"operator\"=\"City Bikes\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "CityBike Vantaa Oy",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"CityBike Vantaa Oy\"][\"name\"=\"CityBike Vantaa Oy\"][\"operator\"=\"CityBike Vantaa Oy\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Cluj Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Cluj Bike\"][\"name\"=\"Cluj Bike\"][\"operator\"=\"Primaria Municipiul Cluj-Napoca\"][\"operator:type\"=\"government\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Co Bikes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Co Bikes\"][\"brand:wikidata\"=\"Q111818653\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "CoGo Bike Share",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"CoGo Bike Share\"][\"brand:wikidata\"=\"Q91342219\"][\"fee\"=\"yes\"][\"name\"=\"CoGo\"][\"network\"=\"CoGo Bike Share\"][\"network:wikidata\"=\"Q91342219\"][\"operator\"=\"Lyft\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q17077936\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/CoGo_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/CoGo_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Cy'clic",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Cy'clic\"][\"brand:wikidata\"=\"Q3008009\"][\"network\"=\"Cy'clic\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Station_Cyclic_Mus\u00e9e_Beaux_Arts_-_Rouen_(FR76)_-_2021-11-14_-_1.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Station_Cyclic_Mus\u00e9e_Beaux_Arts_-_Rouen_(FR76)_-_2021-11-14_-_1.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Cyclocity (Lietuva)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Cyclocity\"][\"network\"=\"Cyclocity\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Cyclocity (\u65e5\u672c)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Cyclocity\"][\"network\"=\"Cyclocity\"][\"operator\"=\"cyclocity Inc.\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Czeladzki Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Czeladzki Rower Miejski\"][\"brand:wikidata\"=\"Q106315826\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Cz\u0119stochowski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Cz\u0119stochowski Rower Miejski\"][\"brand:wikidata\"=\"Q119488808\"][\"network\"=\"Cz\u0119stochowski Rower Miejski\"][\"network:wikidata\"=\"Q119488808\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Date Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Date Bike\"][\"brand:en\"=\"Date Bike\"][\"brand:ja\"=\"DATE BIKE\"][\"brand:wikidata\"=\"Q22128125\"][\"network\"=\"Date Bike\"][\"operator\"=\"\u30c9\u30b3\u30e2\u30fb\u30d0\u30a4\u30af\u30b7\u30a7\u30a2\"][\"operator:en\"=\"Docomo Bike Share\"][\"operator:ja\"=\"\u30c9\u30b3\u30e2\u30fb\u30d0\u30a4\u30af\u30b7\u30a7\u30a2\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q55533296\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "DBizi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"DBizi\"][\"name\"=\"DBizi\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "DiviaV\u00e9lodi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"DiviaV\u00e9lodi\"][\"brand:wikidata\"=\"Q3555358\"][\"network\"=\"DiviaV\u00e9lodi\"][\"network:wikidata\"=\"Q3555358\"][\"operator\"=\"Cykleo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q109250587\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lodi_Dijon.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lodi_Dijon.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Divvy",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Divvy\"][\"brand:wikidata\"=\"Q16973938\"][\"fee\"=\"yes\"][\"name\"=\"Divvy\"][\"network\"=\"Divvy\"][\"network:wikidata\"=\"Q16973938\"][\"operator\"=\"Lyft\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q17077936\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Divvy_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Divvy_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "DK'V\u00e9lo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"DK'V\u00e9lo\"][\"network\"=\"DK'V\u00e9lo\"][\"operator\"=\"STDE\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Donkey Republic",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Donkey Republic\"][\"brand:wikidata\"=\"Q63753939\"][\"name\"=\"Donkey Republic\"][\"operator\"=\"Donkey Republic\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey_republic_bycykel.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Donkey_republic_bycykel.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Drammen Bysykler",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Drammen Bysykler\"][\"network\"=\"Drammen Bysykler\"][\"operator\"=\"Clear Channel Norge AS\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "dublinbikes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"dublinbikes\"][\"brand:wikidata\"=\"Q5311025\"][\"network\"=\"dublinbikes\"][\"network:wikidata\"=\"Q5311025\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/2018-06-14_01_Dublinbikes_bike_share_at_the_Guinness_Storehouse_01.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/2018-06-14_01_Dublinbikes_bike_share_at_the_Guinness_Storehouse_01.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "E.Motion",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"E.Motion\"][\"network\"=\"E.Motion\"][\"operator\"=\"Provincia Autonoma di Trento\"][\"operator:type\"=\"government\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Easybike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Easybike\"][\"network\"=\"Easybike\"][\"operator\"=\"Easybike\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Ecobici (Ciudad de M\u00e9xico)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Ecobici\"][\"brand:wikidata\"=\"Q5817067\"][\"network\"=\"Ecobici\"][\"operator\"=\"5M2-BKT\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Movilidad_Integrada_(logo)_EcoBici.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Movilidad_Integrada_(logo)_EcoBici.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "ecobike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"ecobike\"][\"name\"=\"ecobike\"][\"operator\"=\"ecobike\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "EnCicla",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"EnCicla\"][\"brand:wikidata\"=\"Q18644128\"][\"operator\"=\"EnCicla\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/EnCicla_-_Estaci\u00f3n_Ruta_N.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/EnCicla_-_Estaci\u00f3n_Ruta_N.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Explore Bike Share",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Explore Bike Share\"][\"brand:wikidata\"=\"Q86706492\"][\"name\"=\"Explore Bike Share\"][\"operator\"=\"Explore Bike Share\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q86706492\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "fLotte",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"fLotte\"][\"brand:wikidata\"=\"Q102333872\"][\"operator\"=\"ADFC\"][\"operator:type\"=\"association\"][\"operator:wikidata\"=\"Q24349\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "F\u00f6li-fillarit",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"F\u00f6li-fillarit\"][\"brand:wikidata\"=\"Q18658772\"][\"network\"=\"F\u00f6li-fillarit\"][\"network:wikidata\"=\"Q18658772\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/F\u00f6li_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/F\u00f6li_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "frelo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"frelo\"][\"brand:wikidata\"=\"Q117300833\"][\"network\"=\"frelo\"][\"network:wikidata\"=\"Q117300833\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Gbici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Gbici\"][\"network\"=\"Gbici\"][\"operator\"=\"Ayuntamiento de Getafe\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q5714843\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Geochang public bike system",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Geochang public bike system\"][\"network\"=\"Geochang public bike system\"][\"operator\"=\"\uac70\ucc3d\uad70\"][\"operator:type\"=\"public\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "GeoVelo Opole",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"GeoVelo Opole\"][\"brand:wikidata\"=\"Q11798700\"][\"network\"=\"GeoVelo Opole\"][\"network:wikidata\"=\"Q11798700\"][\"operator\"=\"GeoVelo\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/GeoVelo_Opole.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/GeoVelo_Opole.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Getxobizi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Getxobizi\"][\"network\"=\"Getxobizi\"][\"operator\"=\"Biziprest\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Gira",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Gira\"][\"brand:wikidata\"=\"Q65049332\"][\"operator\"=\"EMEL\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gira_-_Bicicletas_de_Lisboa_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gira_-_Bicicletas_de_Lisboa_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Girocleta",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Girocleta\"][\"brand:wikidata\"=\"Q20106716\"][\"network\"=\"Girocleta\"][\"operator\"=\"Girocleta\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Estaci\u00f3_Girocleta_9_(Miquel_de_Palol).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Estaci\u00f3_Girocleta_9_(Miquel_de_Palol).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "GoodBike Padova",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"GoodBike Padova\"][\"brand:wikidata\"=\"Q105555683\"][\"network\"=\"GoodBike Padova\"][\"operator\"=\"BicinCitt\u00e0\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q108937937\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Greenbike SLC BikeShare",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Greenbike SLC BikeShare\"][\"network\"=\"Greenbike SLC BikeShare\"][\"operator\"=\"BCycle\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q4833723\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Grid",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Grid\"][\"brand:wikidata\"=\"Q62104168\"][\"network\"=\"Grid\"][\"network:wikidata\"=\"Q62104168\"][\"operator\"=\"CycleHop\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q65121017\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Grodziski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Grodziski Rower Miejski\"][\"brand:wikidata\"=\"Q117112930\"][\"network\"=\"Grodziski Rower Miejski\"][\"network:wikidata\"=\"Q117112930\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Grodziski_Rower_Miejski_Park_Skarbk\u00f3w.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Grodziski_Rower_Miejski_Park_Skarbk\u00f3w.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "GSBikeshare",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"GSBikeshare\"][\"name\"=\"GSBikeshare\"][\"operator\"=\"GSBikeshare\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Gy\u0151rBike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Gy\u0151rBike\"][\"network\"=\"Gy\u0151rBike\"][\"operator\"=\"Cycleme kft.\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Hamilton Bike Share",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Hamilton Bike Share\"][\"brand:wikidata\"=\"Q20710920\"][\"fee\"=\"yes\"][\"network\"=\"Hamilton Bike Share\"][\"operator\"=\"Hamilton Bike Share Inc.\"][\"operator:type\"=\"private_non_profit\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Heartland B-cycle",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Heartland B-cycle\"][\"network\"=\"Heartland B-cycle\"][\"operator\"=\"BCycle\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q4833723\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "HELLO CYCLING",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"HELLO CYCLING\"][\"brand:en\"=\"HELLO CYCLING\"][\"brand:ja\"=\"\u30cf\u30ed\u30fc\u30b5\u30a4\u30af\u30ea\u30f3\u30b0\"][\"brand:wikidata\"=\"Q91231927\"][\"fee\"=\"yes\"][\"name\"=\"HELLO CYCLING\"][\"name:en\"=\"HELLO CYCLING\"][\"name:ja\"=\"\u30cf\u30ed\u30fc\u30b5\u30a4\u30af\u30ea\u30f3\u30b0\"][\"network\"=\"HELLO CYCLING\"][\"network:en\"=\"HELLO CYCLING\"][\"network:ja\"=\"\u30cf\u30ed\u30fc\u30b5\u30a4\u30af\u30ea\u30f3\u30b0\"][\"network:wikidata\"=\"Q91231927\"][\"operator\"=\"OpenStreet\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q43593262\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Hello_Cycling_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hello_Cycling_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "hirebikeLincoln",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"hirebikeLincoln\"][\"network\"=\"hirebikeLincoln\"][\"operator\"=\"hirebikeLincoln\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Houston B-cycle",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Houston B-cycle\"][\"brand:wikidata\"=\"Q16995962\"][\"network\"=\"Houston B-cycle\"][\"network:wikidata\"=\"Q16995962\"][\"operator\"=\"BCycle\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q4833723\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Houston_B-cycle_Logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Houston_B-cycle_Logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "HuiziToluca",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"HuiziToluca\"][\"network\"=\"HuiziToluca\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "I'Velo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"I'Velo\"][\"brand:wikidata\"=\"Q119495434\"][\"network\"=\"I'Velo\"][\"operator\"=\"Asocia\u021bia Green Revolution\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ivelo,_Bucharest_(_DSC6311).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ivelo,_Bucharest_(_DSC6311).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "IDEcycle",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"IDEcycle\"][\"brand:wikidata\"=\"Q3146580\"][\"network\"=\"IDEcycle\"][\"network:wikidata\"=\"Q3146580\"][\"operator\"=\"Cykleo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q109250587\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/IDELIS_-_IDEcycle_station_Funiculaire.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/IDELIS_-_IDEcycle_station_Funiculaire.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Indego",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Indego\"][\"brand:wikidata\"=\"Q19876452\"][\"network\"=\"Indego\"][\"network:wikidata\"=\"Q19876452\"][\"operator\"=\"Bicycle Transit Systems\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q104005517\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Philly_Indego_Bikeshare.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Philly_Indego_Bikeshare.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Indiana Pacers Bikeshare",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Indiana Pacers Bikeshare\"][\"brand:wikidata\"=\"Q109557888\"][\"network\"=\"Indiana Pacers Bikeshare\"][\"network:wikidata\"=\"Q109557888\"][\"operator\"=\"BCycle\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q4833723\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u0130SB\u0130KE",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u0130SB\u0130KE\"][\"brand:wikidata\"=\"Q18391227\"][\"network\"=\"\u0130SB\u0130KE\"][\"operator\"=\"\u0130SB\u0130KE\"][\"operator:type\"=\"public\"][\"operator:wikidata\"=\"Q18391227\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Jesolo Ambient Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Jesolo Ambient Bike\"][\"network\"=\"Jesolo Ambient Bike\"][\"operator\"=\"Jtaca\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Just Eat Cycles",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Just Eat Cycles\"][\"brand:wikidata\"=\"Q6315697\"][\"network\"=\"Transport for Edinburgh\"][\"operator\"=\"Serco\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q499104\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/ML_Logo_Stacked_RGB.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/ML_Logo_Stacked_RGB.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "K Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u91d1\u9580\u516c\u5171\u81ea\u884c\u8eca\"][\"brand:en\"=\"K-Bike\"][\"brand:wikidata\"=\"Q30942379\"][\"brand:zh\"=\"\u91d1\u9580\u516c\u5171\u81ea\u884c\u8eca\"][\"name\"=\"\u91d1\u9580\u516c\u5171\u81ea\u884c\u8eca\"][\"name:en\"=\"K-Bike\"][\"name:zh\"=\"\u91d1\u9580\u516c\u5171\u81ea\u884c\u8eca\"][\"network\"=\"K-Bike\"][\"operator\"=\"\u91d1\u9580\u7e23\u653f\u5e9c\"][\"operator:type\"=\"government\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Kaliski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Kaliski Rower Miejski\"][\"network\"=\"Kaliski Rower Miejski\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "KanizsaBike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"KanizsaBike\"][\"network\"=\"KanizsaBike\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Kielecki Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Kielecki Rower Miejski\"][\"brand:wikidata\"=\"Q119105991\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Kolesce",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Kolesce\"][\"network\"=\"Kolesce\"][\"operator\"=\"NOMAGO\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Ko\u0142obrzeski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Ko\u0142obrzeski Rower Miejski\"][\"brand:wikidata\"=\"Q97373105\"][\"network\"=\"Ko\u0142obrzeski Rower Miejski\"][\"network:wikidata\"=\"Q97373105\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Komunikacja Miejska w Szczecinku",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Komunikacja Miejska w Szczecinku\"][\"brand:wikidata\"=\"Q11742146\"][\"name\"=\"Komunikacja Miejska w Szczecinku\"][\"operator\"=\"Komunikacja Miejska w Szczecinku\"][\"operator:type\"=\"public\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/KM-Szczecinek-logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/KM-Szczecinek-logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Koni\u0144ski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Koni\u0144ski Rower Miejski\"][\"brand:wikidata\"=\"Q117113145\"][\"network\"=\"Koni\u0144ski Rower Miejski\"][\"network:wikidata\"=\"Q117113145\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "konrad",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"konrad\"][\"brand:wikidata\"=\"Q117301660\"][\"network\"=\"konrad\"][\"network:wikidata\"=\"Q117301660\"][\"operator\"=\"Stadtwerke Konstanz\"][\"operator:type\"=\"public\"][\"operator:wikidata\"=\"Q1266985\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Koszali\u0144ski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Koszali\u0144ski Rower Miejski\"][\"brand:wikidata\"=\"Q97373092\"][\"network\"=\"Koszali\u0144ski Rower Miejski\"][\"network:wikidata\"=\"Q97373092\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Krotower",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Krotower\"][\"brand:wikidata\"=\"Q119106146\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "KRsKOLESOM",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"KRsKOLESOM\"][\"network\"=\"KRsKOLESOM\"][\"operator\"=\"MO Kranj\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "KVV.nextbike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"KVV.nextbike\"][\"brand:wikidata\"=\"Q117301825\"][\"network\"=\"KVV.nextbike\"][\"network:wikidata\"=\"Q117301825\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "LaBiGi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"LaBiGi\"][\"operator\"=\"ATB Bergamo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3631456\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Le v\u00e9lo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Le v\u00e9lo\"][\"name\"=\"Le v\u00e9lo\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Le V\u00e9lo par TBM",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Le V\u00e9lo par TBM\"][\"name\"=\"Le V\u00e9lo par TBM\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Legnicki Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Legnicki Rower Miejski\"][\"network\"=\"Legnicki Rower Miejski\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Lib\u00e9lo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Lib\u00e9lo\"][\"brand:wikidata\"=\"Q3237967\"][\"network\"=\"Lib\u00e9lo\"][\"network:wikidata\"=\"Q3237967\"][\"operator\"=\"Transdev\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q442637\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Libelo_Valence_(002).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Libelo_Valence_(002).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "LinBike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"LinBike\"][\"network\"=\"LinBike\"][\"operator\"=\"Dukaten\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u0141\u00f3dzki Rower Publiczny",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u0141\u00f3dzki Rower Publiczny\"][\"brand:wikidata\"=\"Q23955689\"][\"network\"=\"\u0141\u00f3dzki Rower Publiczny\"][\"network:wikidata\"=\"Q23955689\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\u0141\u00f3dzki_Rower_Publiczny,_control_panel_01.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\u0141\u00f3dzki_Rower_Publiczny,_control_panel_01.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u0141oKeR",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u0141oKeR\"][\"network\"=\"\u0141oKeR\"][\"operator\"=\"BikeU\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Lubelski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Lubelski Rower Miejski\"][\"brand:wikidata\"=\"Q24087694\"][\"network\"=\"Lubelski Rower Miejski\"][\"network:wikidata\"=\"Q24087694\"][\"operator\"=\"MPK Lublin\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Lubelski_Rower_Miejski.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lubelski_Rower_Miejski.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Lundahoj",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Lundahoj\"][\"brand:wikidata\"=\"Q22666405\"][\"network\"=\"Lundahoj\"][\"network:wikidata\"=\"Q22666405\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Lyft Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Lyft\"][\"brand:wikidata\"=\"Q17077936\"][\"fee\"=\"yes\"][\"name\"=\"Lyft Bike\"][\"network\"=\"Lyft Bike\"][\"network:wikidata\"=\"Q17077936\"][\"operator\"=\"Lyft\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q17077936\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Lyft_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Lyft_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Melbourne Bike Share",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Melbourne Bike Share\"][\"brand:wikidata\"=\"Q6811723\"][\"network\"=\"Melbourne Bike Share\"][\"network:wikidata\"=\"Q6811723\"][\"operator\"=\"RACV\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Melbournebikeshare_station_Macarthur_St_2010.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Melbournebikeshare_station_Macarthur_St_2010.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Metro Bike Share",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Metro Bike Share\"][\"brand:wikidata\"=\"Q60749521\"][\"network\"=\"Metro Bike Share\"][\"network:wikidata\"=\"Q60749521\"][\"operator\"=\"Bicycle Transit Systems\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q104005517\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/LACMTA_Bike_Share_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/LACMTA_Bike_Share_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "metropolradruhr",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"metropolradruhr\"][\"brand:wikidata\"=\"Q62104274\"][\"network\"=\"metropolradruhr\"][\"network:wikidata\"=\"Q62104274\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Metropolrad-Station.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Metropolrad-Station.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Metrorower",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"dropoff_point\"][\"brand\"=\"Metrorower\"][\"brand:wikidata\"=\"Q123507620\"][\"fee\"=\"yes\"][\"network\"=\"Metrorower\"][\"network:wikidata\"=\"Q123507620\"][\"operator\"=\"Nextbike GZM\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q127573015\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Transport_GZM_black_01.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Transport_GZM_black_01.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "M\u00e9trov\u00e9lo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"M\u00e9trov\u00e9lo\"][\"brand:wikidata\"=\"Q3333896\"][\"network\"=\"M\u00e9trov\u00e9lo\"][\"network:wikidata\"=\"Q3333896\"][\"operator\"=\"Cykleo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q109250587\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mv\u00e9lo+_noir.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mv\u00e9lo+_noir.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "MEVO",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"MEVO\"][\"brand:wikidata\"=\"Q60860236\"][\"network\"=\"MEVO\"][\"network:wikidata\"=\"Q60860236\"][\"operator\"=\"CityBike Global\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mevo_(public_bike_sharing_system).svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mevo_(public_bike_sharing_system).svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Mi Bici Tu Bici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Mi Bici Tu Bici\"][\"brand:wikidata\"=\"Q100272303\"][\"network\"=\"Mi Bici Tu Bici\"][\"network:wikidata\"=\"Q100272303\"][\"operator\"=\"Municipalidad de Rosario\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q52535\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "MiBici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"MiBici\"][\"brand:wikidata\"=\"Q60966987\"][\"name\"=\"MiBici\"][\"operator\"=\"MiBici\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60966987\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Mobi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Mobi\"][\"brand:wikidata\"=\"Q26211470\"][\"network\"=\"Mobi\"][\"network:wikidata\"=\"Q26211470\"][\"operator\"=\"CycleHop\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q65121017\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Vancouver_Mobi_bike_share_near_BC_Place_stadium_in_Downtown_Vancouver.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vancouver_Mobi_bike_share_near_BC_Place_stadium_in_Downtown_Vancouver.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "MOBIbike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"MOBIbike\"][\"brand:wikidata\"=\"Q117301867\"][\"network\"=\"MOBIbike\"][\"network:wikidata\"=\"Q117301867\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "MoGo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"MoGo\"][\"brand:wikidata\"=\"Q121356981\"][\"network\"=\"MoGo\"][\"network:wikidata\"=\"Q121356981\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/MoGoLoGo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/MoGoLoGo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "MOL Bubi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"MOL Bubi\"][\"brand:wikidata\"=\"Q16971969\"][\"network\"=\"MOL Bubi\"][\"network:wikidata\"=\"Q16971969\"][\"operator\"=\"BKK\"][\"operator:type\"=\"public\"][\"operator:wikidata\"=\"Q608917\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/BuBi_bicycles_in_a_docking_station..jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/BuBi_bicycles_in_a_docking_station..jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Monopattini Elettrici BIT Mobility La Spezia",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Monopattini Elettrici BIT Mobility La Spezia\"][\"network\"=\"Monopattini Elettrici BIT Mobility La Spezia\"][\"operator\"=\"BIT Mobility\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Moovo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Moovo\"][\"brand:wikidata\"=\"Q17370530\"][\"network\"=\"Moovo\"][\"network:wikidata\"=\"Q17370530\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "MuyBici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"MuyBici\"][\"network\"=\"MuyBici\"][\"operator\"=\"UTE MuyBici servicio p\u00fablico de transporte con bicicleta de Murcia\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "MvBike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"MvBike\"][\"network\"=\"MvBike\"][\"operator\"=\"T-Systems\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "MVG Rad",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"MVG Rad\"][\"brand:wikidata\"=\"Q67874919\"][\"network\"=\"MVG Rad\"][\"network:wikidata\"=\"Q67874919\"][\"operator\"=\"M\u00fcnchner Verkehrsgesellschaft\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q456402\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/M\u00fcnchen_\u2014_Silberhornstra\u00dfe_(MVG_Rad-Station).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/M\u00fcnchen_\u2014_Silberhornstra\u00dfe_(MVG_Rad-Station).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "MVGmeinRad",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"MVGmeinRad\"][\"brand:wikidata\"=\"Q14541300\"][\"network\"=\"MVGmeinRad\"][\"network:wikidata\"=\"Q14541300\"][\"operator\"=\"Mainzer Verkehrsgesellschaft\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q1885780\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/MVGmeinRad-Logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/MVGmeinRad-Logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "nextbike (\u0423\u043a\u0440\u0430\u0457\u043d\u0430)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"nextbike\"][\"brand:en\"=\"nextbike\"][\"brand:uk\"=\"\u041d\u0435\u043a\u0441\u0442\u0431\u0430\u0439\u043a\"][\"brand:wikidata\"=\"Q2351279\"][\"network\"=\"nextbike\"][\"network:en\"=\"nextbike\"][\"network:uk\"=\"\u041d\u0435\u043a\u0441\u0442\u0431\u0430\u0439\u043a\"][\"network:wikidata\"=\"Q2351279\"][\"operator\"=\"\u0422\u041e\u0412 \u041d\u0435\u043a\u0441\u0442\u0431\u0430\u0439\u043a \u0423\u043a\u0440\u0430\u0457\u043d\u0430\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Nextbike_-_neue_Marke_2024.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nextbike_-_neue_Marke_2024.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "nextbike Berlin",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"nextbike\"][\"brand:wikidata\"=\"Q2351279\"][\"network\"=\"nextbike Berlin\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Nextbike_-_neue_Marke_2024.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nextbike_-_neue_Marke_2024.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "nextbike Cyprus",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"nextbike\"][\"brand:wikidata\"=\"Q2351279\"][\"network\"=\"nextbike Cyprus\"][\"operator\"=\"nextbike Cy Ltd\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Nextbike_-_neue_Marke_2024.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nextbike_-_neue_Marke_2024.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "nextbike Nieder\u00f6sterreich",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"nextbike Nieder\u00f6sterreich\"][\"brand:wikidata\"=\"Q121951638\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Nowodworski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Nowodworski Rower Miejski\"][\"brand:wikidata\"=\"Q119106271\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "OK bike!",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"OK bike!\"][\"network\"=\"OK bike!\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Olbike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Olbike\"][\"brand:wikidata\"=\"Q119106482\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Oleski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Oleski Rower Miejski\"][\"brand:wikidata\"=\"Q117113737\"][\"network\"=\"Oleski Rower Miejski\"][\"network:wikidata\"=\"Q117113737\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Olszty\u0144ski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Olszty\u0144ski Rower Miejski\"][\"network\"=\"Olszty\u0144ski Rower Miejski\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Optymo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Optymo\"][\"network\"=\"Optymo\"][\"operator\"=\"RTTB\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Ostro.bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Ostro.bike\"][\"brand:wikidata\"=\"Q119105036\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Ostrowski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Ostrowski Rower Miejski\"][\"network\"=\"Ostrowski Rower Miejski\"][\"operator\"=\"Miejski Zak\u0142ad Komunikacji\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "OV-fiets",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"OV-fiets\"][\"brand:wikidata\"=\"Q2629982\"][\"name\"=\"OV-fiets\"][\"network\"=\"OV-fiets\"][\"network:wikidata\"=\"Q2629982\"][\"operator\"=\"Nederlandse Spoorwegen\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q23076\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/OV-fiets_Andijk.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/OV-fiets_Andijk.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "OVO Bikes Glasgow",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"OVO Bikes\"][\"brand:wikidata\"=\"Q120450856\"][\"network\"=\"nextbike\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Oxonbikes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Oxonbikes\"][\"network\"=\"Oxonbikes\"][\"operator\"=\"GSBikeshare\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Pace",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Pace\"][\"network\"=\"Pace\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Pbike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Pbike\"][\"network\"=\"Pbike\"][\"operator\"=\"\u9ad8\u96c4\u6377\u904b\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "PeaceHealth Rides",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"PeaceHealth Rides\"][\"brand:wikidata\"=\"Q115393175\"][\"fee\"=\"yes\"][\"name\"=\"PeaceHealth Rides\"][\"network\"=\"PeaceHealth Rides\"][\"network:wikidata\"=\"Q115393175\"][\"operator\"=\"Cascadia Mobility\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q115393310\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/PeaceHealth_bikes_for_rent_on_the_University_of_Oregon_campus_(49980918738).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/PeaceHealth_bikes_for_rent_on_the_University_of_Oregon_campus_(49980918738).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Piaseczy\u0144ski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Piaseczy\u0144ski Rower Miejski\"][\"brand:wikidata\"=\"Q117112983\"][\"network\"=\"Piaseczy\u0144ski Rower Miejski\"][\"network:wikidata\"=\"Q117112983\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "PikeRide",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"PikeRide\"][\"name\"=\"PikeRide\"][\"operator\"=\"PikeRide\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Piotrkowski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Piotrkowski Rower Miejski\"][\"brand:wikidata\"=\"Q117113123\"][\"network\"=\"Piotrkowski Rower Miejski\"][\"network:wikidata\"=\"Q117113123\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "P\u0142ocki Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"P\u0142ocki Rower Miejski\"][\"network\"=\"P\u0142ocki Rower Miejski\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Pobiedziski Rower Gminny",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Pobiedziski Rower Gminny\"][\"brand:wikidata\"=\"Q117113080\"][\"network\"=\"Pobiedziski Rower Gminny\"][\"network:wikidata\"=\"Q117113080\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "POGOH",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"POGOH\"][\"network\"=\"POGOH\"][\"operator\"=\"Bike Share Pittsburgh\"][\"operator:type\"=\"private_non_profit\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "PotsdamRad",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"PotsdamRad\"][\"brand:wikidata\"=\"Q117301951\"][\"network\"=\"PotsdamRad\"][\"network:wikidata\"=\"Q117301951\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Powiatowy System Rowerowy",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Powiatowy System Rowerowy\"][\"brand:wikidata\"=\"Q117114457\"][\"network\"=\"Powiatowy System Rowerowy\"][\"network:wikidata\"=\"Q117114457\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Pozna\u0144ski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Pozna\u0144ski Rower Miejski\"][\"brand:wikidata\"=\"Q11826173\"][\"network\"=\"Pozna\u0144ski Rower Miejski\"][\"network:wikidata\"=\"Q11826173\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Poznanski_Rower_Miejski_9.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Poznanski_Rower_Miejski_9.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "PubliBike (Agglo Fribourg-Freiburg)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"PubliBike\"][\"brand:wikidata\"=\"Q3555363\"][\"network\"=\"Agglo Fribourg-Freiburg\"][\"operator\"=\"PubliBike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3555363\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "PubliBike (Lausanne-Morges)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"PubliBike\"][\"brand:wikidata\"=\"Q3555363\"][\"network\"=\"Lausanne-Morges\"][\"operator\"=\"PubliBike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3555363\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "PubliBike (Lugano-Malcantone)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"PubliBike\"][\"brand:wikidata\"=\"Q3555363\"][\"network\"=\"Lugano-Malcantone\"][\"operator\"=\"PubliBike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3555363\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "PubliBike (R\u00e9gion de Nyon)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"PubliBike\"][\"brand:wikidata\"=\"Q3555363\"][\"network\"=\"R\u00e9gion de Nyon\"][\"operator\"=\"PubliBike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3555363\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "PubliBike (Sierre)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"PubliBike\"][\"brand:wikidata\"=\"Q3555363\"][\"network\"=\"Sierre\"][\"operator\"=\"PubliBike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3555363\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "PubliBike (Sion)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"PubliBike\"][\"brand:wikidata\"=\"Q3555363\"][\"network\"=\"Sion\"][\"operator\"=\"PubliBike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3555363\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "PubliBike (Velo Bern)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"PubliBike\"][\"brand:wikidata\"=\"Q3555363\"][\"network\"=\"Velo Bern\"][\"operator\"=\"PubliBike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3555363\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/PubliBike.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Radomski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Radomski Rower Miejski\"][\"network\"=\"Radomski Rower Miejski\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Rattaringlus",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Rattaringlus\"][\"network\"=\"Rattaringlus\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Red Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Red Bike\"][\"brand:wikidata\"=\"Q18393750\"][\"network\"=\"Red Bike\"][\"network:wikidata\"=\"Q18393750\"][\"operator\"=\"BCycle\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q4833723\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Bike_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Bike_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "RegioRad Stuttgart",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"RegioRad Stuttgart\"][\"brand:wikidata\"=\"Q57274085\"][\"network\"=\"RegioRad Stuttgart\"][\"network:wikidata\"=\"Q57274085\"][\"operator\"=\"Deutsche Bahn Connect\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q1152100\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Regiorad_Stuttgart_Urbach_Bahnhof.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Regiorad_Stuttgart_Urbach_Bahnhof.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Relay Bike Share",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Relay Bike Share\"][\"brand:wikidata\"=\"Q48798195\"][\"network\"=\"Relay Bike Share\"][\"network:wikidata\"=\"Q48798195\"][\"operator\"=\"CycleHop\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q65121017\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Rowerowe \u0141\u00f3dzkie",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Rowerowe \u0141\u00f3dzkie\"][\"network\"=\"Rowerowe \u0141\u00f3dzkie\"][\"operator\"=\"NB Serwis\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "RTC Bike Share",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"RTC Bike Share\"][\"brand:wikidata\"=\"Q104727968\"][\"network\"=\"RTC Bike Share\"][\"network:wikidata\"=\"Q104727968\"][\"operator\"=\"Bicycle Transit Systems\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q104005517\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "RVA Bike Share",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"RVA Bike Share\"][\"network\"=\"RVA Bike Share\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "SalEnBici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"SalEnBici\"][\"brand:wikidata\"=\"Q6117221\"][\"network\"=\"SalEnBici\"][\"operator\"=\"Onroll\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Estaci\u00f3n_Salenbici.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Estaci\u00f3n_Salenbici.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Santander Cycles (Brunel)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Santander Cycles\"][\"brand:wikidata\"=\"Q807961\"][\"network\"=\"nextbike\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/London_Cycles_roundel.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/London_Cycles_roundel.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Santander Cycles (London)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Santander Cycles\"][\"brand:wikidata\"=\"Q807961\"][\"network\"=\"tfl_cycle_hire\"][\"operator\"=\"Serco\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q499104\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/London_Cycles_roundel.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/London_Cycles_roundel.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Santander Cycles (Milton Keynes)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Santander Cycles MK\"][\"brand:wikidata\"=\"Q807961\"][\"network\"=\"Santander Cycles MK\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/London_Cycles_roundel.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/London_Cycles_roundel.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Santander Cycles (Swansea)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Santander Cycles\"][\"brand:wikidata\"=\"Q807961\"][\"network\"=\"nextbike\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/London_Cycles_roundel.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/London_Cycles_roundel.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u015acinawski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u015acinawski Rower Miejski\"][\"brand:wikidata\"=\"Q119106786\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Sevici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Sevici\"][\"brand:wikidata\"=\"Q3459493\"][\"network\"=\"Sevici\"][\"network:wikidata\"=\"Q3459493\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Sevici.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sevici.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Shymkent Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Shymkent Bike\"][\"network\"=\"Shymkent Bike\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "sigo E-Lastenrad Sharing",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"sigo\"][\"brand:wikidata\"=\"Q109659526\"][\"network\"=\"sigo\"][\"network:wikidata\"=\"Q109659526\"][\"operator\"=\"sigo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q109659526\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Sigo_GmbH.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sigo_GmbH.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "SiPedala",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"SiPedala\"][\"network\"=\"SiPedala\"][\"operator\"=\"BicinCitt\u00e0\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q108937937\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Sitycleta",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Sitycleta\"][\"network\"=\"Sitycleta\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Slovnaft Bajk",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Slovnaft Bajk\"][\"brand:wikidata\"=\"Q56823119\"][\"network\"=\"Slovnaft Bajk\"][\"network:wikidata\"=\"Q56823119\"][\"operator\"=\"Slovnaft Mobility Services, s.r.o.\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Slovnaft_Bajk_Trnavsk\u00e9_m\u00fdto_Bratislava.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Slovnaft_Bajk_Trnavsk\u00e9_m\u00fdto_Bratislava.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "SMTC",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"SMTC\"][\"network\"=\"SMTC\"][\"operator\"=\"Velogik\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "SprottenFlotte",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"SprottenFlotte\"][\"brand:wikidata\"=\"Q117301972\"][\"network\"=\"SprottenFlotte\"][\"network:wikidata\"=\"Q117301972\"][\"operator\"=\"Donkey Republic\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q63753939\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "SRM Jask\u00f3\u0142ka",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"SRM Jask\u00f3\u0142ka\"][\"brand:wikidata\"=\"Q119107871\"][\"network\"=\"SRM Jask\u00f3\u0142ka\"][\"network:wikidata\"=\"Q119107871\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "StadtRAD Hamburg",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"StadtRAD Hamburg\"][\"brand:wikidata\"=\"Q2326366\"][\"network\"=\"StadtRAD Hamburg\"][\"network:wikidata\"=\"Q2326366\"][\"operator\"=\"Deutsche Bahn Connect\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q1152100\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Stalowa Wola \u2013 miasto rower\u00f3w",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Stalowa Wola \u2013 miasto rower\u00f3w\"][\"brand:wikidata\"=\"Q119106668\"][\"network\"=\"Stalowa Wola \u2013 miasto rower\u00f3w\"][\"network:wikidata\"=\"Q119106668\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "STAR",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"STAR\"][\"brand:wikidata\"=\"Q510020\"][\"network\"=\"STAR\"][\"network:wikidata\"=\"Q510020\"][\"operator\"=\"Cykleo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q109250587\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_STAR_le_v\u00e9lo_Rennes.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_STAR_le_v\u00e9lo_Rennes.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Stockholm City Bikes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Stockholm City Bikes\"][\"brand:wikidata\"=\"Q7618000\"][\"network\"=\"Stockholm City Bikes\"][\"network:wikidata\"=\"Q7618000\"][\"operator\"=\"City Bikes\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/CityBikesStockholm.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/CityBikesStockholm.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Styr & St\u00e4ll",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Styr & St\u00e4ll\"][\"brand:wikidata\"=\"Q6198848\"][\"network\"=\"Styr & St\u00e4ll\"][\"network:wikidata\"=\"Q6198848\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/00_2141_Bicycle-sharing_systems_-_Sweden.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/00_2141_Bicycle-sharing_systems_-_Sweden.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "S\u00fcdtirol Rad",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"S\u00fcdtirol Rad\"][\"brand:de\"=\"S\u00fcdtirol Rad\"][\"brand:it\"=\"Bici Alto Adige\"][\"network\"=\"S\u00fcdtirol Rad\"][\"network:de\"=\"S\u00fcdtirol Rad\"][\"network:it\"=\"Bici Alto Adige\"][\"operator\"=\"S\u00fcdtirol Rad\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "SUWER",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"SUWER\"][\"brand:wikidata\"=\"Q119104601\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Swapfiets",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Swapfiets\"][\"brand:wikidata\"=\"Q62104374\"][\"name\"=\"Swapfiets\"][\"network\"=\"Swapfiets\"][\"network:wikidata\"=\"Q62104374\"][\"operator\"=\"Swapfiets\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q62104374\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Swapfiets_-_rental_bicycles_in_Hanover_2.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Swapfiets_-_rental_bicycles_in_Hanover_2.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "SWell Cycle",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"SWell Cycle\"][\"network\"=\"SWell Cycle\"][\"operator\"=\"BCycle\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q4833723\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Sykkeli",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Sykkeli\"][\"network\"=\"Sykkeli\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Szczecinecka Wypo\u017cyczalnia Rower\u00f3w Miejskich",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Szczecinecka Wypo\u017cyczalnia Rower\u00f3w Miejskich\"][\"network\"=\"Szczecinecka Wypo\u017cyczalnia Rower\u00f3w Miejskich\"][\"operator\"=\"Komunikacja Miejska w Szczecinku\"][\"operator:type\"=\"public\"][\"operator:wikidata\"=\"Q11742146\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Taipei City Government",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Taipei City Government\"][\"brand:wikidata\"=\"Q9105560\"][\"name\"=\"Taipei City Government\"][\"operator\"=\"Taipei City Government\"][\"operator:type\"=\"government\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Emblem_of_Taipei_City.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Emblem_of_Taipei_City.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Tar Heel Bikes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Tar Heel Bikes\"][\"brand:wikidata\"=\"Q63977703\"][\"network\"=\"Tar Heel Bikes\"][\"network:wikidata\"=\"Q63977703\"][\"operator\"=\"Gotcha Bikes\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/North_Carolina_Tar_Heels_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/North_Carolina_Tar_Heels_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Tarnowski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Tarnowski Rower Miejski\"][\"brand:wikidata\"=\"Q117113400\"][\"network\"=\"Tarnowski Rower Miejski\"][\"network:wikidata\"=\"Q117113400\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Tashu",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Tashu\"][\"network\"=\"Tashu\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "TBike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"TBike\"][\"network\"=\"TBike\"][\"operator\"=\"\u81fa\u5357\u5e02\u653f\u5e9c\u4ea4\u901a\u5c40\"][\"operator:type\"=\"public\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Tel-O-Fun",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Tel-O-Fun\"][\"brand:wikidata\"=\"Q2915180\"][\"network\"=\"Tel-O-Fun\"][\"network:wikidata\"=\"Q2915180\"][\"operator\"=\"FSM\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "TFI Bikes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"TFI Bikes\"][\"brand:wikidata\"=\"Q111223030\"][\"network\"=\"TFI Bikes\"][\"operator\"=\"An Rothar Nua\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/TFI---Bike-Share-logo-Green.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/TFI---Bike-Share-logo-Green.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "TINK",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"TINK\"][\"brand:wikidata\"=\"Q130301909\"][\"network\"=\"TINK\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "TNGo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"TNGo\"][\"name\"=\"TNGo\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Torrebici",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"authentication:app\"=\"yes\"][\"bicycle_rental\"=\"dropoff_point\"][\"brand\"=\"Torrebici\"][\"brand:wikidata\"=\"Q117074164\"][\"fee\"=\"yes\"][\"name\"=\"Torrebici\"][\"network\"=\"Torrebici\"][\"network:wikidata\"=\"Q117074164\"][\"operator\"=\"Movilidad Urbana Sostenible SL\"][\"operator:short\"=\"MOVUS\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q117079539\"][\"rental\"=\"ebike\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Torrebici_logotipo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Torrebici_logotipo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Torvelo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Torvelo\"][\"brand:wikidata\"=\"Q19947082\"][\"network\"=\"Torvelo\"][\"network:wikidata\"=\"Q19947082\"][\"operator\"=\"BikeU\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Torvelo_w_Toruniu.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Torvelo_w_Toruniu.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Trondheim Bysykkel",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Trondheim Bysykkel\"][\"network\"=\"Trondheim Bysykkel\"][\"operator\"=\"UIP Trondheim Bysykkel AS\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "TusBic",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"TusBic\"][\"network\"=\"TusBic\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "twsRad",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"twsRad\"][\"brand:wikidata\"=\"Q130301986\"][\"network\"=\"twsRad\"][\"operator\"=\"Technische Werke Schussental\"][\"operator:type\"=\"public\"][\"operator:wikidata\"=\"Q2399365\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "U-bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"U-bike\"][\"network\"=\"U-bike\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "UDINebike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"UDINebike\"][\"network\"=\"UDINebike\"][\"operator\"=\"SSM & Comune di Udine\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "UMAbike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"UMAbike\"][\"network\"=\"UMAbike\"][\"operator\"=\"UFSM\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Urban Infrastructure Partner AS",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Urban Infrastructure Partner AS\"][\"name\"=\"Urban Infrastructure Partner AS\"][\"operator\"=\"Urban Infrastructure Partner AS\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "UsedomRad",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"UsedomRad\"][\"brand:wikidata\"=\"Q117302003\"][\"network\"=\"UsedomRad\"][\"network:wikidata\"=\"Q117302003\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V'Lille",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V'Lille\"][\"brand:wikidata\"=\"Q3552843\"][\"network\"=\"V'Lille\"][\"network:wikidata\"=\"Q3552843\"][\"operator\"=\"Cykleo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q109250587\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_V'Lille.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_V'Lille.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "VAG_Rad",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"VAG_Rad\"][\"brand:wikidata\"=\"Q100455836\"][\"network\"=\"VAG_Rad\"][\"network:wikidata\"=\"Q100455836\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/VAG_Rad_Logo_2019.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/VAG_Rad_Logo_2019.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Valenbisi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Valenbisi\"][\"brand:wikidata\"=\"Q9092320\"][\"network\"=\"Valenbisi\"][\"network:wikidata\"=\"Q9092320\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Valenbisi.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Valenbisi.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "VCUB",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"VCUB\"][\"brand:wikidata\"=\"Q3552899\"][\"network\"=\"VCUB\"][\"network:wikidata\"=\"Q3552899\"][\"operator\"=\"Cykleo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q109250587\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Station-V3-Bordeaux.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Station-V3-Bordeaux.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Vel'in",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Vel'in\"][\"brand:wikidata\"=\"Q3555276\"][\"network\"=\"Vel'in\"][\"network:wikidata\"=\"Q3555276\"][\"operator\"=\"SITAC\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Vel'oh!",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Vel'oh!\"][\"brand:wikidata\"=\"Q16764959\"][\"network\"=\"Vel'oh!\"][\"network:wikidata\"=\"Q16764959\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Vel'OH!_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vel'OH!_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9lam",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9lam\"][\"brand:wikidata\"=\"Q3564038\"][\"network\"=\"V\u00e9lam\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Velektro",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Velektro\"][\"name\"=\"Velektro\"][\"operator\"=\"LTC\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Velespeed Lefko\u015fa",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Velespeed Lefko\u015fa\"][\"network\"=\"Velespeed Lefko\u015fa\"][\"operator\"=\"Lefko\u015fa T\u00fcrk Belediyesi\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9lhop",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9lhop\"][\"brand:wikidata\"=\"Q3564044\"][\"network\"=\"V\u00e9lhop\"][\"operator\"=\"Strasbourg Mobilit\u00e9s\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Strasbourg_place_de_la_Gare_station_automatique_V\u00e9lhop.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Strasbourg_place_de_la_Gare_station_automatique_V\u00e9lhop.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9lib' M\u00e9tropole",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"V\u00e9lib' M\u00e9tropole\"][\"brand:wikidata\"=\"Q1120762\"][\"network\"=\"V\u00e9lib' M\u00e9tropole\"][\"network:wikidata\"=\"Q1120762\"][\"operator\"=\"Smovengo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q47008427\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lib-M\u00e9tropole-Logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lib-M\u00e9tropole-Logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9libleu",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9libleu\"][\"network\"=\"V\u00e9libleu\"][\"operator\"=\"Txik Txak\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9liVert",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9liVert\"][\"brand:wikidata\"=\"Q3564061\"][\"network\"=\"V\u00e9liVert\"][\"network:wikidata\"=\"Q3564061\"][\"operator\"=\"Saint-\u00c9tienne M\u00e9tropole\"][\"operator:type\"=\"government\"][\"operator:wikidata\"=\"Q2986914\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9livert_Gare_de_Rive_de_Gier.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9livert_Gare_de_Rive_de_Gier.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Velo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"Velo\"][\"brand:wikidata\"=\"Q2413118\"][\"network\"=\"Velo\"][\"network:wikidata\"=\"Q2413118\"][\"operator\"=\"Velo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2413118\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Station_Velo_Antwerpen.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Station_Velo_Antwerpen.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9lo'+",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9lo'+\"][\"brand:wikidata\"=\"Q3564059\"][\"network\"=\"V\u00e9lo'+\"][\"network:wikidata\"=\"Q3564059\"][\"operator\"=\"Cykleo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q109250587\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Orl\u00e9ans_station_V\u00e9lo'+_place_Louis_XI.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Orl\u00e9ans_station_V\u00e9lo'+_place_Louis_XI.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9lo'v",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9lo'v\"][\"brand:wikidata\"=\"Q4096\"][\"network\"=\"V\u00e9lo'v\"][\"network:wikidata\"=\"Q4096\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_V\u00e9lo'V.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_V\u00e9lo'V.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9lO\u00b2",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9lO\u00b2\"][\"brand:wikidata\"=\"Q3564030\"][\"network\"=\"V\u00e9lO\u00b2\"][\"network:wikidata\"=\"Q3564030\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lo_2.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lo_2.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9lobleu",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"V\u00e9lobleu\"][\"brand:wikidata\"=\"Q3564072\"][\"network\"=\"V\u00e9lobleu\"][\"network:wikidata\"=\"Q3564072\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lo_bleu_nice.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lo_bleu_nice.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9loCit\u00e9 (Mulhouse)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9loCit\u00e9\"][\"brand:wikidata\"=\"Q3564067\"][\"network\"=\"V\u00e9loCit\u00e9\"][\"network:wikidata\"=\"Q3564067\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9locit\u00e9_mulhouse1.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9locit\u00e9_mulhouse1.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Velocity Aachen",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Velocity Aachen\"][\"brand:wikidata\"=\"Q102348696\"][\"network\"=\"Velocity Aachen\"][\"network:wikidata\"=\"Q102348696\"][\"operator\"=\"Velocity Aachen\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q102348696\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Velocity_GmbH_Logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Velocity_GmbH_Logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "VELOLEO",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"VELOLEO\"][\"brand:wikidata\"=\"Q117301923\"][\"network\"=\"VELOLEO\"][\"network:wikidata\"=\"Q117301923\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9lolib",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9lolib\"][\"network\"=\"V\u00e9lolib\"][\"operator\"=\"Cykleo\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q109250587\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9lomagg'",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9lomagg'\"][\"brand:wikidata\"=\"Q3564126\"][\"network\"=\"V\u00e9lomagg'\"][\"network:wikidata\"=\"Q3564126\"][\"operator\"=\"Transports de l'agglom\u00e9ration de Montpellier\"][\"operator:type\"=\"public\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lomagg'_hire_station_at_Antigone_Centre.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lomagg'_hire_station_at_Antigone_Centre.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Velospot",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Velospot\"][\"brand:wikidata\"=\"Q56314221\"][\"operator\"=\"PubliBike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3555363\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Velospot_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Velospot_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "v\u00e9lOstan'lib",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"v\u00e9lOstan'lib\"][\"brand:wikidata\"=\"Q3564032\"][\"network\"=\"v\u00e9lOstan'lib\"][\"network:wikidata\"=\"Q3564032\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lOstan'_lib_(logo).svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/V\u00e9lOstan'_lib_(logo).svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "VeloTM",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"VeloTM\"][\"network\"=\"VeloTM\"][\"operator\"=\"R.A.T.T.\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "V\u00e9l\u00f4Toulouse",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"V\u00e9l\u00f4Toulouse\"][\"brand:wikidata\"=\"Q3564141\"][\"network\"=\"V\u00e9l\u00f4Toulouse\"][\"network:wikidata\"=\"Q3564141\"][\"operator\"=\"Cyclocity\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3008464\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_du_service_v\u00e9lo_Toulouse.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_du_service_v\u00e9lo_Toulouse.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Verona Bike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Verona Bike\"][\"network\"=\"Verona Bike\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Veturilo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"dropoff_point\"][\"brand\"=\"Veturilo\"][\"brand:wikidata\"=\"Q3847868\"][\"network\"=\"Veturilo\"][\"network:wikidata\"=\"Q3847868\"][\"operator\"=\"Nextbike GZM\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q127573015\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Stacja_Veturilo_Kopernika-Obo\u017ana_2023.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Stacja_Veturilo_Kopernika-Obo\u017ana_2023.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Villo!",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Villo!\"][\"brand:wikidata\"=\"Q2510744\"][\"network\"=\"Villo!\"][\"network:wikidata\"=\"Q2510744\"][\"operator\"=\"JCDecaux\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q74877\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Villo7265.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Villo7265.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "VRNnextbike",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"VRNnextbike\"][\"brand:wikidata\"=\"Q72064021\"][\"network\"=\"VRNnextbike\"][\"network:wikidata\"=\"Q72064021\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "W\u0105growiecki Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"W\u0105growiecki Rower Miejski\"][\"brand:wikidata\"=\"Q119106937\"][\"network\"=\"W\u0105growiecki Rower Miejski\"][\"network:wikidata\"=\"Q119106937\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Wavelo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Wavelo\"][\"brand:wikidata\"=\"Q9380025\"][\"network\"=\"Wavelo\"][\"network:wikidata\"=\"Q9380025\"][\"operator\"=\"BikeU\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/StacjaSystemuRower\u00f3wMiejskich\u201eWavelo\u201d-RondoGrzeg\u00f3rzeckie-POL,_Krak\u00f3w.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/StacjaSystemuRower\u00f3wMiejskich\u201eWavelo\u201d-RondoGrzeg\u00f3rzeckie-POL,_Krak\u00f3w.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "WhiteBikes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"WhiteBikes\"][\"brand:wikidata\"=\"Q26868450\"][\"network\"=\"WhiteBikes Bratislava\"][\"network:wikidata\"=\"Q26868450\"][\"operator\"=\"WhiteBikes\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "WienMobil Rad",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"WienMobil Rad\"][\"brand:wikidata\"=\"Q111794110\"][\"network\"=\"WienMobil Rad\"][\"network:wikidata\"=\"Q111794110\"][\"operator\"=\"Nextbike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q2351279\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/WienMobil.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/WienMobil.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Wolszty\u0144ski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Wolszty\u0144ski Rower Miejski\"][\"brand:wikidata\"=\"Q117114836\"][\"network\"=\"Wolszty\u0144ski Rower Miejski\"][\"network:wikidata\"=\"Q117114836\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Wroc\u0142awski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Wroc\u0142awski Rower Miejski\"][\"brand:wikidata\"=\"Q24941606\"][\"network\"=\"Wroc\u0142awski Rower Miejski\"][\"network:wikidata\"=\"Q24941606\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Nextbike,_6001-Rynek,_Wroc\u0142aw.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nextbike,_6001-Rynek,_Wroc\u0142aw.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Y\u00e9lo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Y\u00e9lo\"][\"brand:wikidata\"=\"Q3574260\"][\"network\"=\"Y\u00e9lo\"][\"network:wikidata\"=\"Q3574260\"][\"operator\"=\"RTCR\"][\"operator:type\"=\"public\"][\"operator:wikidata\"=\"Q3454984\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Yelo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Yelo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "YouBike 2.0",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"YouBike 2.0\"][\"brand:wikidata\"=\"Q20687952\"][\"network\"=\"YouBike 2.0\"][\"network:wikidata\"=\"Q20687952\"][\"operator\"=\"Giant\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q703557\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Yulu",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Yulu\"][\"brand:wikidata\"=\"Q104871276\"][\"network\"=\"Yulu\"][\"network:wikidata\"=\"Q104871276\"][\"operator\"=\"Yulu\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Yulu_Wynn.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Yulu_Wynn.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Zagster",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Zagster\"][\"brand:wikidata\"=\"Q5124082\"][\"network\"=\"Zagster\"][\"network:wikidata\"=\"Q5124082\"][\"operator\"=\"Zagster\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Zagster_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Zagster_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u017barskie Rowery",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u017barskie Rowery\"][\"brand:wikidata\"=\"Q119107068\"][\"operator\"=\"Roovee\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q60860205\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Zelen\u00fd bicykel",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Zelen\u00fd bicykel\"][\"network\"=\"Zelen\u00fd bicykel\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Zielonog\u00f3rski Rower Miejski",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Zielonog\u00f3rski Rower Miejski\"][\"brand:wikidata\"=\"Q117113230\"][\"network\"=\"Zielonog\u00f3rski Rower Miejski\"][\"network:wikidata\"=\"Q117113230\"][\"operator\"=\"Nextbike Polska\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "Z\u00fcri Velo",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"Z\u00fcri Velo\"][\"network\"=\"Z\u00fcri Velo\"][\"operator\"=\"PubliBike\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q3555363\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u0412\u0435\u043b\u043e\u0431\u0430\u0439\u043a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u0412\u0435\u043b\u043e\u0431\u0430\u0439\u043a\"][\"brand:en\"=\"Velobike\"][\"brand:ru\"=\"\u0412\u0435\u043b\u043e\u0431\u0430\u0439\u043a\"][\"brand:wikidata\"=\"Q20655763\"][\"network\"=\"\u0412\u0435\u043b\u043e\u0431\u0430\u0439\u043a\"][\"network:en\"=\"Velobike\"][\"network:ru\"=\"\u0412\u0435\u043b\u043e\u0431\u0430\u0439\u043a\"][\"network:wikidata\"=\"Q20655763\"][\"operator\"=\"\u0410\u041e \u00ab\u0421\u0438\u0442\u0438\u0411\u0430\u0439\u043a\u00bb\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Velobike_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Velobike_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u0628\u06cc\u062f\u0648\u062f",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u0628\u06cc\u062f\u0648\u062f\"][\"brand:en\"=\"Bdood\"][\"brand:fa\"=\"\u0628\u06cc\u062f\u0648\u062f\"][\"brand:wikidata\"=\"Q85746093\"][\"network\"=\"\u0628\u06cc\u062f\u0648\u062f\"][\"network:en\"=\"Bdood\"][\"network:fa\"=\"\u0628\u06cc\u062f\u0648\u062f\"][\"network:wikidata\"=\"Q85746093\"][\"operator\"=\"\u0628\u06cc\u062f\u0648\u062f\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\uac70\ucc3d\uad70",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\uac70\ucc3d\uad70\"][\"brand:ko\"=\"\uac70\ucc3d\uad70\"][\"name\"=\"\uac70\ucc3d\uad70\"][\"name:ko\"=\"\uac70\ucc3d\uad70\"][\"operator\"=\"\uac70\ucc3d\uad70\"][\"operator:ko\"=\"\uac70\ucc3d\uad70\"][\"operator:type\"=\"public\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\uc11c\uc6b8\uc790\uc804\uac70 \ub530\ub989\uc774",
    query: "[out:json][timeout:25];(nwr[\"access\"=\"customers\"][\"amenity\"=\"bicycle_rental\"][\"authentication:app\"=\"yes\"][\"bicycle_rental\"=\"docking_station\"][\"brand\"=\"\uc11c\uc6b8\uc790\uc804\uac70 \ub530\ub989\uc774\"][\"brand:en\"=\"Seoul Bike\"][\"brand:ko\"=\"\uc11c\uc6b8\uc790\uc804\uac70 \ub530\ub989\uc774\"][\"brand:wikidata\"=\"Q28127084\"][\"fee\"=\"yes\"][\"network\"=\"\uc11c\uc6b8\uc790\uc804\uac70 \ub530\ub989\uc774\"][\"network:en\"=\"Seoul Bike\"][\"network:ko\"=\"\uc11c\uc6b8\uc790\uc804\uac70 \ub530\ub989\uc774\"][\"operator\"=\"\uc11c\uc6b8\uc2dc\uc124\uacf5\ub2e8\"][\"operator:en\"=\"Seoul Facilities Corporation\"][\"operator:ko\"=\"\uc11c\uc6b8\uc2dc\uc124\uacf5\ub2e8\"][\"operator:type\"=\"public\"][\"payment:app\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Seoul_Bike_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Seoul_Bike_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\uc138\uc885\ub3c4\uc2dc\uad50\ud1b5\uacf5\uc0ac",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\uc138\uc885\ub3c4\uc2dc\uad50\ud1b5\uacf5\uc0ac\"][\"brand:ko\"=\"\uc138\uc885\ub3c4\uc2dc\uad50\ud1b5\uacf5\uc0ac\"][\"name\"=\"\uc138\uc885\ub3c4\uc2dc\uad50\ud1b5\uacf5\uc0ac\"][\"name:ko\"=\"\uc138\uc885\ub3c4\uc2dc\uad50\ud1b5\uacf5\uc0ac\"][\"operator\"=\"\uc138\uc885\ub3c4\uc2dc\uad50\ud1b5\uacf5\uc0ac\"][\"operator:ko\"=\"\uc138\uc885\ub3c4\uc2dc\uad50\ud1b5\uacf5\uc0ac\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u30c0\u30a4\u30c1\u30e3\u30ea",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u30c0\u30a4\u30c1\u30e3\u30ea\"][\"brand:en\"=\"DAICHARI\"][\"brand:ja\"=\"\u30c0\u30a4\u30c1\u30e3\u30ea\"][\"brand:wikidata\"=\"Q115826550\"][\"fee\"=\"yes\"][\"network\"=\"HELLO CYCLING\"][\"network:en\"=\"HELLO CYCLING\"][\"network:ja\"=\"\u30cf\u30ed\u30fc\u30b5\u30a4\u30af\u30ea\u30f3\u30b0\"][\"network:wikidata\"=\"Q91231927\"][\"operator\"=\"\u30b7\u30ca\u30cd\u30f3\u30e2\u30d3\u30ea\u30c6\u30a3+\"][\"operator:ja\"=\"\u30b7\u30ca\u30cd\u30f3\u30e2\u30d3\u30ea\u30c6\u30a3+\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q115826116\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HelloCycling_IY_Tateba.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HelloCycling_IY_Tateba.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u3061\u3088\u304f\u308b",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u3061\u3088\u304f\u308b\"][\"brand:en\"=\"Chiyocle\"][\"brand:ja\"=\"\u3061\u3088\u304f\u308b\"][\"brand:wikidata\"=\"Q91498542\"][\"fee\"=\"yes\"][\"name\"=\"\u3061\u3088\u304f\u308b\"][\"name:en\"=\"Chiyocle\"][\"name:ja\"=\"\u3061\u3088\u304f\u308b\"][\"official_name\"=\"\u5343\u4ee3\u7530\u533a\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30b5\u30a4\u30af\u30eb\"][\"official_name:en\"=\"Chiyoda City Bike Share\"][\"official_name:ja\"=\"\u5343\u4ee3\u7530\u533a\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30b5\u30a4\u30af\u30eb\"][\"operator\"=\"\u3061\u3088\u304f\u308b\"][\"operator:en\"=\"Chiyocle\"][\"operator:ja\"=\"\u3061\u3088\u304f\u308b\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q91498542\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u3064\u308b\u304c\u30b7\u30a7\u30a2\u30b5\u30a4\u30af\u30eb",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u3064\u308b\u304c\u30b7\u30a7\u30a2\u30b5\u30a4\u30af\u30eb\"][\"brand:en\"=\"TSURUGA SHARE CYCLE\"][\"brand:ja\"=\"\u3064\u308b\u304c\u30b7\u30a7\u30a2\u30b5\u30a4\u30af\u30eb\"][\"name\"=\"\u3064\u308b\u304c\u30b7\u30a7\u30a2\u30b5\u30a4\u30af\u30eb\"][\"name:en\"=\"TSURUGA SHARE CYCLE\"][\"name:ja\"=\"\u3064\u308b\u304c\u30b7\u30a7\u30a2\u30b5\u30a4\u30af\u30eb\"][\"operator\"=\"\u682a\u5f0f\u4f1a\u793e \u65e5\u672c\u6d77\u30b3\u30f3\u30b5\u30eb\u30bf\u30f3\u30c8\"][\"operator:ja\"=\"\u682a\u5f0f\u4f1a\u793e \u65e5\u672c\u6d77\u30b3\u30f3\u30b5\u30eb\u30bf\u30f3\u30c8\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u30c9\u30b3\u30e2\u30fb\u30d0\u30a4\u30af\u30b7\u30a7\u30a2",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u30c9\u30b3\u30e2\u30fb\u30d0\u30a4\u30af\u30b7\u30a7\u30a2\"][\"brand:en\"=\"Docomo Bike Share\"][\"brand:ja\"=\"\u30c9\u30b3\u30e2\u30fb\u30d0\u30a4\u30af\u30b7\u30a7\u30a2\"][\"brand:wikidata\"=\"Q55533296\"][\"fee\"=\"yes\"][\"name\"=\"\u30c9\u30b3\u30e2\u30fb\u30d0\u30a4\u30af\u30b7\u30a7\u30a2\"][\"name:en\"=\"Docomo Bike Share\"][\"name:ja\"=\"\u30c9\u30b3\u30e2\u30fb\u30d0\u30a4\u30af\u30b7\u30a7\u30a2\"][\"operator\"=\"\u30c9\u30b3\u30e2\u30fb\u30d0\u30a4\u30af\u30b7\u30a7\u30a2\"][\"operator:en\"=\"Docomo Bike Share\"][\"operator:ja\"=\"\u30c9\u30b3\u30e2\u30fb\u30d0\u30a4\u30af\u30b7\u30a7\u30a2\"][\"operator:type\"=\"private\"][\"operator:wikidata\"=\"Q55533296\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Docomo_bike_share_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Docomo_bike_share_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u5170\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66\u670d\u52a1\u53d1\u5c55\u6709\u9650\u516c\u53f8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u5170\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66\u670d\u52a1\u53d1\u5c55\u6709\u9650\u516c\u53f8\"][\"name\"=\"\u5170\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66\u670d\u52a1\u53d1\u5c55\u6709\u9650\u516c\u53f8\"][\"operator\"=\"\u5170\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66\u670d\u52a1\u53d1\u5c55\u6709\u9650\u516c\u53f8\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u5317\u4eac\u4e2d\u57ce\u6c38\u5b89\u73af\u4fdd\u79d1\u6280\u6709\u9650\u516c\u53f8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u5317\u4eac\u4e2d\u57ce\u6c38\u5b89\u73af\u4fdd\u79d1\u6280\u6709\u9650\u516c\u53f8\"][\"name\"=\"\u5317\u4eac\u4e2d\u57ce\u6c38\u5b89\u73af\u4fdd\u79d1\u6280\u6709\u9650\u516c\u53f8\"][\"operator\"=\"\u5317\u4eac\u4e2d\u57ce\u6c38\u5b89\u73af\u4fdd\u79d1\u6280\u6709\u9650\u516c\u53f8\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u5357\u660c\u516c\u4ea4\u987a\u9053\u516c\u5171\u81ea\u884c\u8f66\u79d1\u6280\u6709\u9650\u516c\u53f8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u5357\u660c\u516c\u4ea4\u987a\u9053\u516c\u5171\u81ea\u884c\u8f66\u79d1\u6280\u6709\u9650\u516c\u53f8\"][\"name\"=\"\u5357\u660c\u516c\u4ea4\u987a\u9053\u516c\u5171\u81ea\u884c\u8f66\u79d1\u6280\u6709\u9650\u516c\u53f8\"][\"operator\"=\"\u5357\u660c\u516c\u4ea4\u987a\u9053\u516c\u5171\u81ea\u884c\u8f66\u79d1\u6280\u6709\u9650\u516c\u53f8\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u5357\u901a\u6c38\u4e45\u516c\u5171\u81ea\u884c\u8f66\u516c\u53f8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u5357\u901a\u6c38\u4e45\u516c\u5171\u81ea\u884c\u8f66\u516c\u53f8\"][\"name\"=\"\u5357\u901a\u6c38\u4e45\u516c\u5171\u81ea\u884c\u8f66\u516c\u53f8\"][\"operator\"=\"\u5357\u901a\u6c38\u4e45\u516c\u5171\u81ea\u884c\u8f66\u516c\u53f8\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u53ee\u55d2\u51fa\u884c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u53ee\u55d2\u51fa\u884c\"][\"name\"=\"\u53ee\u55d2\u51fa\u884c\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u5de8\u5927\u6a5f\u68b0\u5de5\u696d(\u80a1)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u5de8\u5927\u6a5f\u68b0\u5de5\u696d(\u80a1)\"][\"name\"=\"\u5de8\u5927\u6a5f\u68b0\u5de5\u696d(\u80a1)\"][\"operator\"=\"\u5de8\u5927\u6a5f\u68b0\u5de5\u696d(\u80a1)\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u5fae\u7b11\u55ae\u8eca\u80a1\u4efd\u6709\u9650\u516c\u53f8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u5fae\u7b11\u55ae\u8eca\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"name\"=\"\u5fae\u7b11\u55ae\u8eca\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"operator\"=\"\u5fae\u7b11\u55ae\u8eca\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u65b0\u7af9\u5e02\u653f\u5e9c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u65b0\u7af9\u5e02\u653f\u5e9c\"][\"name\"=\"\u65b0\u7af9\u5e02\u653f\u5e9c\"][\"operator\"=\"\u65b0\u7af9\u5e02\u653f\u5e9c\"][\"operator:type\"=\"government\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u676d\u5dde\u516c\u5171\u81ea\u884c\u8f66",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u676d\u5dde\u516c\u5171\u81ea\u884c\u8f66\"][\"brand:en\"=\"Hangzhou Public Bicycle\"][\"brand:wikidata\"=\"Q5648122\"][\"brand:zh\"=\"\u676d\u5dde\u516c\u5171\u81ea\u884c\u8f66\"][\"name\"=\"\u676d\u5dde\u516c\u5171\u81ea\u884c\u8f66\"][\"name:en\"=\"Hangzhou Public Bicycle\"][\"name:zh\"=\"\u676d\u5dde\u516c\u5171\u81ea\u884c\u8f66\"][\"operator\"=\"\u676d\u5dde\u516c\u5171\u81ea\u884c\u8f66\u4ea4\u901a\u670d\u52a1\u53d1\u5c55\u6709\u9650\u516c\u53f8\"][\"operator:type\"=\"private\"][\"operator:zh\"=\"\u676d\u5dde\u516c\u5171\u81ea\u884c\u8f66\u4ea4\u901a\u670d\u52a1\u53d1\u5c55\u6709\u9650\u516c\u53f8\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/20180520\u88c5\u6709\u7535\u5b50\u9501\u7684\u676d\u5dde\u516c\u5171\u81ea\u884c\u8f66.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/20180520\u88c5\u6709\u7535\u5b50\u9501\u7684\u676d\u5dde\u516c\u5171\u81ea\u884c\u8f66.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u6c38\u5b89\u884c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u6c38\u5b89\u884c\"][\"brand:en\"=\"Youon Bike Share\"][\"brand:wikidata\"=\"Q109342786\"][\"brand:zh\"=\"\u6c38\u5b89\u884c\"][\"name\"=\"\u6c38\u5b89\u884c\"][\"name:en\"=\"Youon Bike Share\"][\"name:zh\"=\"\u6c38\u5b89\u884c\"][\"operator\"=\"\u6c38\u5b89\u884c\"][\"operator:en\"=\"Youon Bike Share\"][\"operator:type\"=\"private\"][\"operator:zh\"=\"\u6c38\u5b89\u884c\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u6c38\u5b89\u884c\uff08\u5357\u901a\uff09",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u6c38\u5b89\u884c\"][\"brand:en\"=\"Youon Bike Share\"][\"brand:wikidata\"=\"Q109342786\"][\"brand:zh\"=\"\u6c38\u5b89\u884c\"][\"name\"=\"\u6c38\u5b89\u884c\"][\"name:en\"=\"Youon Bike Share\"][\"name:zh\"=\"\u6c38\u5b89\u884c\"][\"operator\"=\"\u5357\u901a\u6c38\u5b89\u516c\u5171\u81ea\u884c\u8f66\u516c\u53f8\"][\"operator:type\"=\"private\"][\"operator:zh\"=\"\u5357\u901a\u6c38\u5b89\u516c\u5171\u81ea\u884c\u8f66\u516c\u53f8\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u6c38\u5b89\u884c\uff08\u660c\u9091\uff09",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u6c38\u5b89\u884c\"][\"brand:en\"=\"Youon Bike Share\"][\"brand:wikidata\"=\"Q109342786\"][\"brand:zh\"=\"\u6c38\u5b89\u884c\"][\"name\"=\"\u6c38\u5b89\u884c\"][\"name:en\"=\"Youon Bike Share\"][\"name:zh\"=\"\u6c38\u5b89\u884c\"][\"operator\"=\"\u6c38\u5b89\u884c\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8\u660c\u9091\u5206\u516c\u53f8\"][\"operator:type\"=\"private\"][\"operator:zh\"=\"\u6c38\u5b89\u884c\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8\u660c\u9091\u5206\u516c\u53f8\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u81fa\u5317\u5e02\u653f\u5e9c",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u81fa\u5317\u5e02\u653f\u5e9c\"][\"name\"=\"\u81fa\u5317\u5e02\u653f\u5e9c\"][\"operator\"=\"\u81fa\u5317\u5e02\u653f\u5e9c\"][\"operator:type\"=\"government\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u81fa\u5357\u5e02\u653f\u5e9c\u4ea4\u901a\u5c40",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u81fa\u5357\u5e02\u653f\u5e9c\u4ea4\u901a\u5c40\"][\"name\"=\"\u81fa\u5357\u5e02\u653f\u5e9c\u4ea4\u901a\u5c40\"][\"operator\"=\"\u81fa\u5357\u5e02\u653f\u5e9c\u4ea4\u901a\u5c40\"][\"operator:type\"=\"public\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u82cf\u5dde\u4e1c\u5927\u91d1\u70b9\u7269\u8054\u79d1\u6280\u6709\u9650\u516c\u53f8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u82cf\u5dde\u4e1c\u5927\u91d1\u70b9\u7269\u8054\u79d1\u6280\u6709\u9650\u516c\u53f8\"][\"name\"=\"\u82cf\u5dde\u4e1c\u5927\u91d1\u70b9\u7269\u8054\u79d1\u6280\u6709\u9650\u516c\u53f8\"][\"operator\"=\"\u82cf\u5dde\u4e1c\u5927\u91d1\u70b9\u7269\u8054\u79d1\u6280\u6709\u9650\u516c\u53f8\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u9752\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u9752\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66\"][\"brand:en\"=\"Qing Zhou Public Bicycle\"][\"brand:wikidata\"=\"Q110012327\"][\"brand:zh\"=\"\u9752\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66\"][\"name\"=\"\u9752\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66\"][\"name:en\"=\"Qing Zhou Public Bicycle\"][\"name:zh\"=\"\u9752\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66\"][\"network\"=\"\u9752\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66\"][\"network:en\"=\"Qing Zhou Public Bicycle\"][\"network:wikidata\"=\"Q110012327\"][\"network:zh\"=\"\u9752\u5dde\u5e02\u516c\u5171\u81ea\u884c\u8f66\"][\"operator\"=\"\u6c38\u5b89\u884c\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"operator:type\"=\"private\"][\"operator:zh\"=\"\u6c38\u5b89\u884c\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bicycle_rental'),
    title: "\u9ad8\u96c4\u6377\u904b\u80a1\u4efd\u6709\u9650\u516c\u53f8",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"bicycle_rental\"][\"brand\"=\"\u9ad8\u96c4\u6377\u904b\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"name\"=\"\u9ad8\u96c4\u6377\u904b\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"operator\"=\"\u9ad8\u96c4\u6377\u904b\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
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