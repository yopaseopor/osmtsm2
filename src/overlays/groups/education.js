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
},
{
    group: getTranslation('kindergarten'),
	title: "Arbeiter-Samariter-Bund (Deutschland)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Arbeiter-Samariter-Bund\"][\"brand:wikidata\"=\"Q627071\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Arbeiter-Samariter-Bund_Deutschland_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Arbeiter-Samariter-Bund_Deutschland_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Arbeiterwohlfahrt",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Arbeiterwohlfahrt\"][\"brand:wikidata\"=\"Q627256\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('kindergarten'),
	title: "Auckland Kindergarten Association",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Auckland Kindergarten Association\"][\"brand:wikidata\"=\"Q116824744\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Babilou",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Babilou\"][\"brand:wikidata\"=\"Q16530800\"][\"name\"=\"Babilou\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Babilou_logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Babilou_logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "BestStart Educare",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"BestStart Educare\"][\"brand:wikidata\"=\"Q115565848\"][\"name\"=\"BestStart Educare\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Bright Horizons",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Bright Horizons\"][\"brand:wikidata\"=\"Q4967421\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"Bright Horizons\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bright_Horizons_539a_W29_jeh.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bright_Horizons_539a_W29_jeh.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "CEFA Early Learning",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"CEFA Early Learning\"][\"brand:wikidata\"=\"Q120491807\"][\"max_age\"=\"5\"][\"min_age\"=\"1\"][\"name\"=\"CEFA Early Learning\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Chesterbrook Academy",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Chesterbrook Academy\"][\"brand:wikidata\"=\"Q109137942\"][\"fee\"=\"yes\"][\"name\"=\"Chesterbrook Academy\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Childcare Network",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Childcare Network\"][\"brand:wikidata\"=\"Q121356406\"][\"name\"=\"Childcare Network\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Children's Learning Adventure",
    query: "[out:json][timeout:25];(nwr[\"after_school\"=\"yes\"][\"amenity\"=\"kindergarten\"][\"brand\"=\"Children's Learning Adventure\"][\"brand:short\"=\"CLA\"][\"brand:wikidata\"=\"Q64821213\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"Children's Learning Adventure\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Childtime",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Childtime\"][\"brand:wikidata\"=\"Q64877793\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"Childtime\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Childtime_Learning_Centers_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Childtime_Learning_Centers_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Cr\u00e8che People & Baby",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Cr\u00e8che People & Baby\"][\"brand:wikidata\"=\"Q112913569\"][\"name\"=\"Cr\u00e8che People & Baby\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_People_and_baby.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_People_and_baby.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Deutscher Kinderschutzbund",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Deutscher Kinderschutzbund\"][\"brand:short\"=\"DKSB\"][\"brand:wikidata\"=\"Q1205011\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Deutsches Rotes Kreuz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Deutsches Rotes Kreuz\"][\"brand:wikidata\"=\"Q694104\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('kindergarten'),
	title: "Diakonie",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Diakonie\"][\"brand:wikidata\"=\"Q126501\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Diakonie.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Diakonie.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Guidepost Montessori",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Guidepost Montessori\"][\"brand:wikidata\"=\"Q114840336\"][\"name\"=\"Guidepost Montessori\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "K\u00efdo",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"Kido\"][\"amenity\"=\"kindergarten\"][\"brand\"=\"K\u00efdo\"][\"brand:wikidata\"=\"Q104849185\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"K\u00efdo\"][\"nursery\"=\"yes\"][\"official_name\"=\"K\u00efdo International Preschool\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Kidsfirst",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Kidsfirst Kindergartens\"][\"brand:wikidata\"=\"Q111022330\"][\"name\"=\"Kidsfirst\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Kindercare (New Zealand)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Kindercare\"][\"brand:wikidata\"=\"Q111023246\"][\"name\"=\"Kindercare\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "KinderCare (USA)",
    query: "[out:json][timeout:25];(nwr[\"after_school\"=\"yes\"][\"alt_name\"=\"KinderCare Learning Center\"][\"amenity\"=\"kindergarten\"][\"brand\"=\"KinderCare\"][\"brand:wikidata\"=\"Q6410551\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"KinderCare\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "La Petite Academy",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"La Petite Academy\"][\"brand:wikidata\"=\"Q64877784\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"La Petite Academy\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Lebenshilfe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Lebenshilfe\"][\"brand:wikidata\"=\"Q20533\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesvereinigung_Lebenshilfe_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesvereinigung_Lebenshilfe_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Les Petits Chaperons Rouges",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Les Petits Chaperons Rouges\"][\"brand:wikidata\"=\"Q130214582\"][\"name\"=\"Les Petits Chaperons Rouges\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Lollipops Educare",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Lollipops Educare\"][\"brand:wikidata\"=\"Q116824919\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Merryhill Preschool",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Merryhill Preschool\"][\"brand:wikidata\"=\"Q6820493\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"Merryhill Preschool\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "New Horizon Academy",
    query: "[out:json][timeout:25];(nwr[\"after_school\"=\"yes\"][\"amenity\"=\"kindergarten\"][\"brand\"=\"New Horizon Academy\"][\"brand:wikidata\"=\"Q64821306\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"New Horizon Academy\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Primrose School",
    query: "[out:json][timeout:25];(nwr[\"after_school\"=\"yes\"][\"alt_name\"=\"Primrose Schools\"][\"amenity\"=\"kindergarten\"][\"brand\"=\"Primrose School\"][\"brand:wikidata\"=\"Q7243677\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"max_age\"=\"12\"][\"min_age\"=\"6 weeks\"][\"name\"=\"Primrose School\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Safari Kid",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Safari Kid\"][\"brand:wikidata\"=\"Q104849344\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"Safari Kid\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "The Children's Courtyard",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"The Children's Courtyard\"][\"brand:wikidata\"=\"Q64877852\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"The Children's Courtyard\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Children's_Courtyard_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Children's_Courtyard_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "The Goddard School",
    query: "[out:json][timeout:25];(nwr[\"after_school\"=\"yes\"][\"alt_name\"=\"Goddard School\"][\"amenity\"=\"kindergarten\"][\"brand\"=\"The Goddard School\"][\"brand:wikidata\"=\"Q5576260\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"min_age\"=\"6 weeks\"][\"name\"=\"The Goddard School\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Tutor Time",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Tutor Time\"][\"brand:wikidata\"=\"Q64877826\"][\"fee\"=\"yes\"][\"isced:level\"=\"0\"][\"name\"=\"Tutor Time\"][\"nursery\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Tutor_Time_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tutor_Time_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "Volkssolidarit\u00e4t",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"Volkssolidarit\u00e4t\"][\"brand:wikidata\"=\"Q2532186\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Signet_Volkssolidaritaet.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Signet_Volkssolidaritaet.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "\u5927\u98ce\u8f66\u5e7c\u513f\u56ed",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"\u5927\u98ce\u8f66\u5e7c\u513f\u56ed\"][\"brand:wikidata\"=\"Q114390650\"][\"fee\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "\u67ab\u53f6\u5c0f\u718a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"\u67ab\u53f6\u5c0f\u718a\"][\"brand:wikidata\"=\"Q10324823\"][\"name\"=\"\u67ab\u53f6\u5c0f\u718a\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Maple_Bear.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Maple_Bear.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "\u7ea2\u7f28\u5e7c\u513f\u56ed",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"\u7ea2\u7f28\u5e7c\u513f\u56ed\"][\"brand:wikidata\"=\"Q114390577\"][\"fee\"=\"yes\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('kindergarten'),
	title: "\u7ea2\u9ec4\u84dd\u5e7c\u513f\u56ed",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"kindergarten\"][\"brand\"=\"\u7ea2\u9ec4\u84dd\u5e7c\u513f\u56ed\"][\"brand:en\"=\"RYB Education\"][\"brand:wikidata\"=\"Q43452224\"][\"brand:zh\"=\"\u7ea2\u9ec4\u84dd\u5e7c\u513f\u56ed\"][\"fee\"=\"yes\"][\"name\"=\"\u7ea2\u9ec4\u84dd\u5e7c\u513f\u56ed\"][\"name:en\"=\"RYB Education\"][\"name:zh\"=\"\u7ea2\u9ec4\u84dd\u5e7c\u513f\u56ed\"][\"preschool\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "AEON",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"AEON\"][\"brand:en\"=\"AEON\"][\"brand:ja\"=\"\u30a4\u30fc\u30aa\u30f3\"][\"brand:ja-Hira\"=\"\u3044\u30fc\u304a\u3093\"][\"brand:ja-Latn\"=\"\u012aon\"][\"brand:wikidata\"=\"Q4687898\"][\"language:en\"=\"main\"][\"name\"=\"AEON\"][\"name:en\"=\"AEON\"][\"name:ja\"=\"\u30a4\u30fc\u30aa\u30f3\"][\"name:ja-Hira\"=\"\u3044\u30fc\u304a\u3093\"][\"name:ja-Latn\"=\"\u012aon\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Aeon_(eikaiwa)_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aeon_(eikaiwa)_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "Berlitz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"Berlitz\"][\"brand:wikidata\"=\"Q821960\"][\"name\"=\"Berlitz\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Berlitz_Sprachschulen_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Berlitz_Sprachschulen_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "CCAA",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"CCAA\"][\"brand:wikidata\"=\"Q9669735\"][\"language:en\"=\"yes\"][\"language:es\"=\"yes\"][\"name\"=\"CCAA\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "CNA",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"CNA\"][\"brand:wikidata\"=\"Q18465698\"][\"language:en\"=\"main\"][\"language:es\"=\"yes\"][\"name\"=\"CNA\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo-CNA-2018.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo-CNA-2018.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "Cultura Inglesa",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"Cultura Inglesa\"][\"brand:wikidata\"=\"Q777467\"][\"language:en\"=\"main\"][\"name\"=\"Cultura Inglesa\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "ECC\u5916\u8a9e\u5b66\u9662",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"ECC\u5916\u8a9e\u5b66\u9662\"][\"brand:en\"=\"ECC Foreign Language Institute\"][\"brand:ja\"=\"ECC\u5916\u8a9e\u5b66\u9662\"][\"brand:ja-Hira\"=\"\u3044\u30fc\u3057\u30fc\u3057\u30fc\u304c\u3044\u3054\u304c\u304f\u3044\u3093\"][\"brand:ja-Latn\"=\"\u012ash\u012bsh\u012b Gaigo Gakuin\"][\"brand:short\"=\"ECC\"][\"brand:short:en\"=\"ECC\"][\"brand:short:ja\"=\"ECC\"][\"brand:short:ja-Hira\"=\"\u3044\u30fc\u3057\u30fc\u3057\u30fc\"][\"brand:short:ja-Latn\"=\"\u012ash\u012bsh\u012b\"][\"brand:wikidata\"=\"Q5322655\"][\"language:en\"=\"main\"][\"name\"=\"ECC\u5916\u8a9e\u5b66\u9662\"][\"name:en\"=\"ECC Foreign Language Institute\"][\"name:ja\"=\"ECC\u5916\u8a9e\u5b66\u9662\"][\"name:ja-Hira\"=\"\u3044\u30fc\u3057\u30fc\u3057\u30fc\u304c\u3044\u3054\u304c\u304f\u3044\u3093\"][\"name:ja-Latn\"=\"\u012ash\u012bsh\u012b Gaigo Gakuin\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/ECC_(eikaiwa)_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/ECC_(eikaiwa)_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "ELS",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"ELS\"][\"brand:en\"=\"ELS\"][\"brand:wikidata\"=\"Q5323325\"][\"language:en\"=\"main\"][\"name\"=\"ELS\"][\"name:en\"=\"ELS\"][\"official_name\"=\"ELS Language Centers\"][\"official_name:en\"=\"ELS Language Centers\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "Fisk",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"Fisk\"][\"brand:wikidata\"=\"Q10286392\"][\"language:en\"=\"yes\"][\"language:es\"=\"yes\"][\"name\"=\"Fisk\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "GABA",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"GABA\"][\"brand:en\"=\"Gaba\"][\"brand:ja\"=\"GABA\"][\"brand:ja-Hira\"=\"\u304c\u3070\"][\"brand:ja-Latn\"=\"GABA\"][\"brand:wikidata\"=\"Q5515241\"][\"language:en\"=\"main\"][\"name\"=\"GABA\"][\"name:en\"=\"Gaba\"][\"name:ja\"=\"GABA\"][\"name:ja-Hira\"=\"\u304c\u3070\"][\"name:ja-Latn\"=\"GABA\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gaba-logo.gif",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gaba-logo.gif",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "NOVA",
    query: "[out:json][timeout:25];(nwr[\"alt_name:ja\"=\"\u30ce\u30f4\u30a1\"][\"alt_name:ja-Latn\"=\"Nobua\"][\"amenity\"=\"language_school\"][\"brand\"=\"NOVA\"][\"brand:en\"=\"Nova\"][\"brand:ja\"=\"NOVA\"][\"brand:ja-Hira\"=\"\u306e\u3070\"][\"brand:ja-Latn\"=\"Noba\"][\"brand:wikidata\"=\"Q7064000\"][\"language:en\"=\"main\"][\"name\"=\"NOVA\"][\"name:en\"=\"Nova\"][\"name:ja\"=\"NOVA\"][\"name:ja-Hira\"=\"\u306e\u3070\"][\"name:ja-Latn\"=\"Noba\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Nova_(eikaiwa)_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nova_(eikaiwa)_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "Shane English School",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"Shane English School\"][\"brand:en\"=\"Shane English School\"][\"brand:ja\"=\"\u30b7\u30a7\u30fc\u30f3\u82f1\u4f1a\u8a71\"][\"brand:ja-Latn\"=\"Sh\u0113n Eikaiwa\"][\"brand:wikidata\"=\"Q17054332\"][\"language:en\"=\"main\"][\"name\"=\"Shane English School\"][\"name:en\"=\"Shane English School\"][\"name:ja\"=\"\u30b7\u30a7\u30fc\u30f3\u82f1\u4f1a\u8a71\"][\"name:ja-Latn\"=\"Sh\u0113n Eikaiwa\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "Wall Street English",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"Wall Street English\"][\"brand:wikidata\"=\"Q561407\"][\"name\"=\"Wall Street English\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "Wizard",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"Wizard\"][\"brand:wikidata\"=\"Q10393925\"][\"name\"=\"Wizard\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Wizard_by_Pearson.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Wizard_by_Pearson.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "Yes! Idiomas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"Yes! Idiomas\"][\"brand:wikidata\"=\"Q121365811\"][\"name\"=\"Yes! Idiomas\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u30b7\u30a7\u30fc\u30f3\u82f1\u4f1a\u8a71",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u30b7\u30a7\u30fc\u30f3\u82f1\u4f1a\u8a71\"][\"brand:en\"=\"Shane English School\"][\"brand:ja\"=\"\u30b7\u30a7\u30fc\u30f3\u82f1\u4f1a\u8a71\"][\"brand:ja-Latn\"=\"Sh\u0113n Eikaiwa\"][\"brand:wikidata\"=\"Q17054332\"][\"language:en\"=\"main\"][\"name\"=\"\u30b7\u30a7\u30fc\u30f3\u82f1\u4f1a\u8a71\"][\"name:en\"=\"Shane English School\"][\"name:ja\"=\"\u30b7\u30a7\u30fc\u30f3\u82f1\u4f1a\u8a71\"][\"name:ja-Latn\"=\"Sh\u0113n Eikaiwa\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u30bb\u30a4\u30cf\u82f1\u8a9e\u5b66\u9662",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u30bb\u30a4\u30cf\u82f1\u8a9e\u5b66\u9662\"][\"brand:en\"=\"Seiha English Academy\"][\"brand:ja\"=\"\u30bb\u30a4\u30cf\u82f1\u8a9e\u5b66\u9662\"][\"brand:ja-Hira\"=\"\u305b\u3044\u306f\u3048\u3044\u3054\u304c\u304f\u3044\u3093\"][\"brand:ja-Latn\"=\"Seiha Eigo Gakuin\"][\"brand:wikidata\"=\"Q7446694\"][\"language:en\"=\"main\"][\"name\"=\"\u30bb\u30a4\u30cf\u82f1\u8a9e\u5b66\u9662\"][\"name:en\"=\"Seiha English Academy\"][\"name:ja\"=\"\u30bb\u30a4\u30cf\u82f1\u8a9e\u5b66\u9662\"][\"name:ja-Hira\"=\"\u305b\u3044\u306f\u3048\u3044\u3054\u304c\u304f\u3044\u3093\"][\"name:ja-Latn\"=\"Seiha Eigo Gakuin\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u30da\u30c3\u30d4\u30fc\u30ad\u30c3\u30ba\u30af\u30e9\u30d6",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u30da\u30c3\u30d4\u30fc\u30ad\u30c3\u30ba\u30af\u30e9\u30d6\"][\"brand:en\"=\"Peppy Kids Club\"][\"brand:ja\"=\"\u30da\u30c3\u30d4\u30fc\u30ad\u30c3\u30ba\u30af\u30e9\u30d6\"][\"brand:ja-Latn\"=\"Peppi Kizzu Kurabu\"][\"brand:wikidata\"=\"Q7166471\"][\"language:en\"=\"main\"][\"name\"=\"\u30da\u30c3\u30d4\u30fc\u30ad\u30c3\u30ba\u30af\u30e9\u30d6\"][\"name:en\"=\"Peppy Kids Club\"][\"name:ja\"=\"\u30da\u30c3\u30d4\u30fc\u30ad\u30c3\u30ba\u30af\u30e9\u30d6\"][\"name:ja-Latn\"=\"Peppi Kizzu Kurabu\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u30d9\u30eb\u30ea\u30c3\u30c4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u30d9\u30eb\u30ea\u30c3\u30c4\"][\"brand:en\"=\"Berlitz\"][\"brand:ja\"=\"\u30d9\u30eb\u30ea\u30c3\u30c4\"][\"brand:ja-Hira\"=\"\u3079\u308b\u308a\u3063\u3064\"][\"brand:wikidata\"=\"Q4892545\"][\"name\"=\"\u30d9\u30eb\u30ea\u30c3\u30c4\"][\"name:en\"=\"Berlitz\"][\"name:ja\"=\"\u30d9\u30eb\u30ea\u30c3\u30c4\"][\"name:ja-Hira\"=\"\u3079\u308b\u308a\u3063\u3064\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Berlitz_Sprachschulen_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Berlitz_Sprachschulen_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u5730\u7403\u6751\u6587\u6559\u6a5f\u69cb",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u5730\u7403\u6751\"][\"brand:en\"=\"Global Village Organization\"][\"brand:wikidata\"=\"Q65681329\"][\"brand:zh\"=\"\u5730\u7403\u6751\"][\"language:en\"=\"main\"][\"language:ja\"=\"yes\"][\"language:ko\"=\"yes\"][\"name\"=\"\u5730\u7403\u6751\"][\"name:en\"=\"Global Village Organization\"][\"name:zh\"=\"\u5730\u7403\u6751\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u590f\u6069\u82f1\u8a9e\u5b78\u6821",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u590f\u6069\u82f1\u8a9e\u5b78\u6821\"][\"brand:en\"=\"Shane English School\"][\"brand:wikidata\"=\"Q17054332\"][\"brand:zh\"=\"\u590f\u6069\u82f1\u8a9e\u5b78\u6821\"][\"language:en\"=\"main\"][\"name\"=\"\u590f\u6069\u82f1\u8a9e\u5b78\u6821\"][\"name:en\"=\"Shane English School\"][\"name:zh\"=\"\u590f\u6069\u82f1\u8a9e\u5b78\u6821\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u590f\u6069\u82f1\u8bed\u5b66\u6821",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u590f\u6069\u82f1\u8bed\u5b66\u6821\"][\"brand:en\"=\"Shane English School\"][\"brand:wikidata\"=\"Q17054332\"][\"brand:zh\"=\"\u590f\u6069\u82f1\u8bed\u5b66\u6821\"][\"language:en\"=\"main\"][\"name\"=\"\u590f\u6069\u82f1\u8bed\u5b66\u6821\"][\"name:en\"=\"Shane English School\"][\"name:zh\"=\"\u590f\u6069\u82f1\u8bed\u5b66\u6821\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u5de8\u5320\u6771\u5927\u65e5\u8a9e",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u5de8\u5320\u6559\u80b2\"][\"brand:en\"=\"Gjun\"][\"brand:wikidata\"=\"Q11057516\"][\"brand:zh\"=\"\u5de8\u5320\u6559\u80b2\"][\"language:ja\"=\"main\"][\"name\"=\"\u5de8\u5320\u6771\u5927\u65e5\u8a9e\"][\"name:zh\"=\"\u5de8\u5320\u6771\u5927\u65e5\u8a9e\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u5de8\u5320\u7f8e\u8a9e",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u5de8\u5320\u6559\u80b2\"][\"brand:en\"=\"Gjun\"][\"brand:wikidata\"=\"Q11057516\"][\"brand:zh\"=\"\u5de8\u5320\u6559\u80b2\"][\"language:en\"=\"main\"][\"name\"=\"\u5de8\u5320\u7f8e\u8a9e\"][\"name:en\"=\"Gjun English\"][\"name:zh\"=\"\u5de8\u5320\u7f8e\u8a9e\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u65b0\u4e1c\u65b9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u65b0\u4e1c\u65b9\"][\"brand:en\"=\"New Oriental Education\"][\"brand:wikidata\"=\"Q13631921\"][\"brand:zh\"=\"\u65b0\u4e1c\u65b9\"][\"name\"=\"\u65b0\u4e1c\u65b9\"][\"name:en\"=\"New Oriental Education\"][\"name:zh\"=\"\u65b0\u4e1c\u65b9\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/New_Oriental.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/New_Oriental.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('language_school'),
	title: "\u6a31\u82b1\u65e5\u8bed",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"language_school\"][\"brand\"=\"\u6a31\u82b1\u65e5\u8bed\"][\"brand:en\"=\"Sakura JP\"][\"brand:ja\"=\"\u685c\u306b\u307b\u3093\u3054\"][\"brand:wikidata\"=\"Q7403164\"][\"brand:zh\"=\"\u6a31\u82b1\u65e5\u8bed\"][\"name\"=\"\u6a31\u82b1\u65e5\u8bed\"][\"name:en\"=\"Sakura JP\"][\"name:ja\"=\"\u685c\u306b\u307b\u3093\u3054\"][\"name:zh\"=\"\u6a31\u82b1\u65e5\u8bed\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('library'),
	title: "CCRLS",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"library\"][\"brand\"=\"Chemeketa Cooperative Regional Library Service\"][\"brand:short\"=\"CCRLS\"][\"brand:wikidata\"=\"Q55075378\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('library'),
	title: "LEO",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"library\"][\"brand\"=\"Libraries of Eastern Oregon\"][\"brand:short\"=\"LEO\"][\"brand:wikidata\"=\"Q108936556\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('library'),
	title: "LINCC",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"library\"][\"brand\"=\"Libraries in Clackamas County\"][\"brand:short\"=\"LINCC\"][\"brand:wikidata\"=\"Q6542507\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('library'),
	title: "WCCLS",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"library\"][\"brand\"=\"Washington County Cooperative Library Services\"][\"brand:short\"=\"WCCLS\"][\"brand:wikidata\"=\"Q7971759\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
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