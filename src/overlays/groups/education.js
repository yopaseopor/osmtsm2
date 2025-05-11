import { getTranslation } from '../../i18n/index.js';

export function educationOverlays() {
    return [
        {
        group: getTranslation('education'),
        title: getTranslation('schools'),
        query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"]({{bbox}});node(w););out meta;",
        iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/School_icon.svg",
        iconStyle: 'background-color:rgba(255,255,255,0.4)',
        style: function (feature) {
            var key_regex = /^name$/;
            var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
            var name = feature.get(name_key) || '';
            var fill = new ol.style.Fill({
                color: 'rgba(255,165,0,0.4)'
            });
            var stroke = new ol.style.Stroke({
                color: 'rgba(255,165,0,1)',
                width: 1
            });
            var style = new ol.style.Style({
                image: new ol.style.Icon({
                    src: "https://commons.wikimedia.org/wiki/Special:FilePath/School_icon.svg",
                    scale: 0.30
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
    group: getTranslation('childcare'),
    title: "Anganvady",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"Anganvady\"][\"name\"=\"Anganvady\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "Anganwadi",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"Anganwadi\"][\"brand:en\"=\"Anganwadi\"][\"brand:hi\"=\"\u0906\u0901\u0917\u0928\u0935\u093e\u0921\u0940\"][\"brand:pa\"=\"\u0a06\u0a02\u0a17\u0a23\u0a35\u0a3e\u0a5c\u0a40\"][\"brand:pnb\"=\"\u0622\u0646\u06af\u0646 \u0648\u0627\u0691\u06cc\"][\"brand:ur\"=\"\u0622\u0646\u06af\u0646 \u0648\u0627\u0691\u06cc\"][\"brand:wikidata\"=\"Q16251231\"][\"name\"=\"Anganwadi\"][\"name:en\"=\"Anganwadi\"][\"name:hi\"=\"\u0906\u0901\u0917\u0928\u0935\u093e\u0921\u0940\"][\"name:pa\"=\"\u0a06\u0a02\u0a17\u0a23\u0a35\u0a3e\u0a5c\u0a40\"][\"name:pnb\"=\"\u0622\u0646\u06af\u0646 \u0648\u0627\u0691\u06cc\"][\"name:ur\"=\"\u0622\u0646\u06af\u0646 \u0648\u0627\u0691\u06cc\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Anganwadi_Centre_-_Budhibili_-_Dandadhar_Road_-_Dhenkanal_2018-01-25_9601.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Anganwadi_Centre_-_Budhibili_-_Dandadhar_Road_-_Dhenkanal_2018-01-25_9601.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "Arbeiterwohlfahrt",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"Arbeiterwohlfahrt\"][\"brand:wikidata\"=\"Q627256\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Awo-logo-08.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Awo-logo-08.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "Busy Bees",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"Busy Bees\"][\"brand:wikidata\"=\"Q28134563\"][\"name\"=\"Busy Bees\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "CEN-CINAI",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"CEN-CINAI\"][\"name\"=\"CEN-CINAI\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "Deutsches Rotes Kreuz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"Deutsches Rotes Kreuz\"][\"brand:wikidata\"=\"Q694104\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/DRK-Logo_rund_RGB.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/DRK-Logo_rund_RGB.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "Kidango",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"Kidango\"][\"brand:wikidata\"=\"Q105378193\"][\"name\"=\"Kidango\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "Kids 'R' Kids",
    query: "[out:json][timeout:25];(nwr[\"after_school\"=\"yes\"][\"amenity\"=\"childcare\"][\"brand\"=\"Kids 'R' Kids\"][\"brand:wikidata\"=\"Q65560342\"][\"grades\"=\"PK\"][\"name\"=\"Kids 'R' Kids\"][\"nursery\"=\"yes\"][\"official_name\"=\"Kids 'R' Kids Learning Academies\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "Merryhill Preschool",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"Merryhill Preschool\"][\"brand:wikidata\"=\"Q6820493\"][\"name\"=\"Merryhill Preschool\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "N. Family Club",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"N. Family Club\"][\"brand:wikidata\"=\"Q123476376\"][\"name\"=\"N. Family Club\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "YMCA Child Care",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"YMCA\"][\"brand:wikidata\"=\"Q157169\"][\"name\"=\"YMCA Child Care\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/World_YMCA_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/World_YMCA_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "\u0411\u044d\u0431\u0438-\u043a\u043b\u0443\u0431",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"\u0411\u044d\u0431\u0438-\u043a\u043b\u0443\u0431\"][\"brand:en\"=\"Baby-Club\"][\"brand:ru\"=\"\u0411\u044d\u0431\u0438-\u043a\u043b\u0443\u0431\"][\"name\"=\"\u0411\u044d\u0431\u0438-\u043a\u043b\u0443\u0431\"][\"name:en\"=\"Baby-Club\"][\"name:ru\"=\"\u0411\u044d\u0431\u0438-\u043a\u043b\u0443\u0431\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "\u30b0\u30ed\u30fc\u30d0\u30eb\u30ad\u30c3\u30ba",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"\u30b0\u30ed\u30fc\u30d0\u30eb\u30ad\u30c3\u30ba\"][\"brand:en\"=\"Global Kids\"][\"brand:ja\"=\"\u30b0\u30ed\u30fc\u30d0\u30eb\u30ad\u30c3\u30ba\"][\"brand:wikidata\"=\"Q91950777\"][\"name\"=\"\u30b0\u30ed\u30fc\u30d0\u30eb\u30ad\u30c3\u30ba\"][\"name:en\"=\"Global Kids\"][\"name:ja\"=\"\u30b0\u30ed\u30fc\u30d0\u30eb\u30ad\u30c3\u30ba\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "\u3061\u3073\u3063\u3053\u30e9\u30f3\u30c9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"\u3061\u3073\u3063\u3053\u30e9\u30f3\u30c9\"][\"brand:en\"=\"Chibikko Land\"][\"brand:ja\"=\"\u3061\u3073\u3063\u3053\u30e9\u30f3\u30c9\"][\"brand:wikidata\"=\"Q91948998\"][\"name\"=\"\u3061\u3073\u3063\u3053\u30e9\u30f3\u30c9\"][\"name:en\"=\"Chibikko Land\"][\"name:ja\"=\"\u3061\u3073\u3063\u3053\u30e9\u30f3\u30c9\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Chibikko_Land_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Chibikko_Land_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('childcare'),
    title: "\u30dd\u30dd\u30e9\u30fc",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"childcare\"][\"brand\"=\"\u30dd\u30dd\u30e9\u30fc\"][\"brand:en\"=\"Popolar\"][\"brand:ja\"=\"\u30dd\u30dd\u30e9\u30fc\"][\"brand:wikidata\"=\"Q91945087\"][\"name\"=\"\u30dd\u30dd\u30e9\u30fc\"][\"name:en\"=\"Popolar\"][\"name:ja\"=\"\u30dd\u30dd\u30e9\u30fc\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Popolar_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Popolar_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('college'),
    title: "Akademie Deutsche POP",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"college\"][\"brand\"=\"Akademie Deutsche POP\"][\"brand:wikidata\"=\"Q413887\"][\"name\"=\"Akademie Deutsche POP\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/DPOP_Logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/DPOP_Logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('college'),
    title: "ComCave",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"college\"][\"brand\"=\"ComCave\"][\"brand:wikidata\"=\"Q121503226\"][\"name\"=\"ComCave\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('college'),
    title: "SAE Institute",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"college\"][\"brand\"=\"SAE Institute\"][\"brand:wikidata\"=\"Q201438\"][\"name\"=\"SAE Institute\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/SAE_Institute_Black_Logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/SAE_Institute_Black_Logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
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