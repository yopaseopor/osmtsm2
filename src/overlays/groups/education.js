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
},
{
    group: getTranslation('music_school'),
	title: "Bach to Rock",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"music_school\"][\"brand\"=\"Bach to Rock\"][\"brand:wikidata\"=\"Q132825628\"][\"name\"=\"Bach to Rock\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music_school'),
	title: "School of Rock",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"music_school\"][\"brand\"=\"School of Rock\"][\"brand:wikidata\"=\"Q7756376\"][\"name\"=\"School of Rock\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music_school'),
	title: "Yamaha\u97f3\u6a02\u6559\u5ba4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"music_school\"][\"brand\"=\"Yamaha\u97f3\u6a02\u6559\u5ba4\"][\"brand:en\"=\"Yamaha Music School\"][\"brand:ja\"=\"\u30e4\u30de\u30cf\u97f3\u697d\u6559\u5ba4\"][\"brand:wikidata\"=\"Q90327852\"][\"brand:zh\"=\"Yamaha\u97f3\u6a02\u6559\u5ba4\"][\"name\"=\"Yamaha\u97f3\u6a02\u6559\u5ba4\"][\"name:en\"=\"Yamaha Music School\"][\"name:ja\"=\"\u30e4\u30de\u30cf\u97f3\u697d\u6559\u5ba4\"][\"name:zh\"=\"Yamaha\u97f3\u6a02\u6559\u5ba4\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Praha_Lhotka_Ve_Lhotce_18_hudebni_skola.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Praha_Lhotka_Ve_Lhotce_18_hudebni_skola.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music_school'),
	title: "\u30e4\u30de\u30cf\u97f3\u697d\u6559\u5ba4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"music_school\"][\"brand\"=\"\u30e4\u30de\u30cf\u97f3\u697d\u6559\u5ba4\"][\"brand:en\"=\"Yamaha Music School\"][\"brand:ja\"=\"\u30e4\u30de\u30cf\u97f3\u697d\u6559\u5ba4\"][\"brand:ja-Latn\"=\"Yamaha Ongaku Ky\u014dshitsu\"][\"brand:wikidata\"=\"Q90327852\"][\"name\"=\"\u30e4\u30de\u30cf\u97f3\u697d\u6559\u5ba4\"][\"name:en\"=\"Yamaha Music School\"][\"name:ja\"=\"\u30e4\u30de\u30cf\u97f3\u697d\u6559\u5ba4\"][\"name:ja-Latn\"=\"Yamaha Ongaku Ky\u014dshitsu\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Praha_Lhotka_Ve_Lhotce_18_hudebni_skola.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Praha_Lhotka_Ve_Lhotce_18_hudebni_skola.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music_school'),
	title: "\u6416\u6efe\u6559\u5ba4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"music_school\"][\"brand\"=\"\u6416\u6efe\u6559\u5ba4\"][\"brand:en\"=\"School of Rock\"][\"brand:wikidata\"=\"Q7756376\"][\"brand:zh\"=\"\u6416\u6efe\u6559\u5ba4\"][\"name\"=\"\u6416\u6efe\u6559\u5ba4\"][\"name:en\"=\"School of Rock\"][\"name:zh\"=\"\u6416\u6efe\u6559\u5ba4\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "Best Brains",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"Best Brains\"][\"brand:wikidata\"=\"Q130507507\"][\"name\"=\"Best Brains\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "C2 Education",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"C2 Education\"][\"brand:wikidata\"=\"Q5008097\"][\"name\"=\"C2 Education\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/C2-education-company-logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/C2-education-company-logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "Huntington Learning Center",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"Huntington Learning Center\"][\"brand:wikidata\"=\"Q5945399\"][\"name\"=\"Huntington Learning Center\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "Kumon (International)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"Kumon\"][\"brand:wikidata\"=\"Q142054\"][\"name\"=\"Kumon\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Kumon_Method_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kumon_Method_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "KUMON (\u65e5\u672c)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"KUMON\"][\"brand:wikidata\"=\"Q142054\"][\"name\"=\"KUMON\"][\"name:ja\"=\"\u516c\u6587\"][\"name:ja-Hira\"=\"\u304f\u3082\u3093\"][\"name:ja-Latn\"=\"KUMON\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Kumon_Method_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kumon_Method_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "Mathnasium",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"Mathnasium\"][\"brand:wikidata\"=\"Q6787302\"][\"name\"=\"Mathnasium\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mathnasium_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mathnasium_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "Oxford Learning",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"Oxford Learning\"][\"brand:wikidata\"=\"Q126617389\"][\"name\"=\"Oxford Learning\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "Russian School of Mathematics",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"Russian School of Mathematics\"][\"brand:wikidata\"=\"Q7382122\"][\"name\"=\"Russian School of Mathematics\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "Sch\u00fclerhilfe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"Sch\u00fclerhilfe\"][\"brand:wikidata\"=\"Q2259702\"][\"name\"=\"Sch\u00fclerhilfe\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Sch\u00fclerhilfe_(Ochsenhausen).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sch\u00fclerhilfe_(Ochsenhausen).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "Studienkreis",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"Studienkreis\"][\"brand:wikidata\"=\"Q2358555\"][\"name\"=\"Studienkreis\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Studienkreis_Logo_negativ_rot.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Studienkreis_Logo_negativ_rot.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "Sylvan",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"Sylvan Learning Center\"][\"amenity\"=\"prep_school\"][\"brand\"=\"Sylvan\"][\"brand:wikidata\"=\"Q7660663\"][\"name\"=\"Sylvan\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/US_2016_SYLVAN_LOGO.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/US_2016_SYLVAN_LOGO.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u4e5d\u5927\u9032\u5b66\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u9032\u5b66\u4f1a\"][\"brand:en\"=\"SHINGAKUKAI\"][\"brand:ja\"=\"\u9032\u5b66\u4f1a\"][\"brand:wikidata\"=\"Q11640144\"][\"name\"=\"\u4e5d\u5927\u9032\u5b66\u4f1a\"][\"name:en\"=\"Kyudai Shingakukai\"][\"name:ja\"=\"\u4e5d\u5927\u9032\u5b66\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u4eac\u5927\u9032\u5b66\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u9032\u5b66\u4f1a\"][\"brand:en\"=\"SHINGAKUKAI\"][\"brand:ja\"=\"\u9032\u5b66\u4f1a\"][\"brand:wikidata\"=\"Q11640144\"][\"name\"=\"\u4eac\u5927\u9032\u5b66\u4f1a\"][\"name:en\"=\"Kyodai Shingakukai\"][\"name:ja\"=\"\u4eac\u5927\u9032\u5b66\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u4ed9\u53f0\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u4ed9\u53f0\u7df4\u6210\u4f1a\"][\"name:en\"=\"Sendai Renseikai\"][\"name:ja\"=\"\u4ed9\u53f0\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u4f73\u97f3\u82f1\u8a9e",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u4f73\u97f3\u82f1\u8a9e\"][\"brand:en\"=\"Joy English\"][\"brand:ja\"=\"\u4f73\u97f3\u82f1\u8a9e\"][\"brand:wikidata\"=\"Q10887049\"][\"name\"=\"\u4f73\u97f3\u82f1\u8a9e\"][\"name:en\"=\"Joy English\"][\"name:ja\"=\"\u4f73\u97f3\u82f1\u8a9e\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u500b\u5225\u6559\u5ba4\u306e\u30c8\u30e9\u30a4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u500b\u5225\u6559\u5ba4\u306e\u30c8\u30e9\u30a4\"][\"brand:ja\"=\"\u500b\u5225\u6559\u5ba4\u306e\u30c8\u30e9\u30a4\"][\"brand:wikidata\"=\"Q11455435\"][\"name\"=\"\u500b\u5225\u6559\u5ba4\u306e\u30c8\u30e9\u30a4\"][\"name:ja\"=\"\u500b\u5225\u6559\u5ba4\u306e\u30c8\u30e9\u30a4\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u51fd\u9928\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u51fd\u9928\u7df4\u6210\u4f1a\"][\"name:en\"=\"Hakodate Renseikai\"][\"name:ja\"=\"\u51fd\u9928\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u5317\u5927\u5b66\u529b\u5897\u9032\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u9032\u5b66\u4f1a\"][\"brand:en\"=\"SHINGAKUKAI\"][\"brand:ja\"=\"\u9032\u5b66\u4f1a\"][\"brand:wikidata\"=\"Q11640144\"][\"name\"=\"\u5317\u5927\u5b66\u529b\u5897\u9032\u4f1a\"][\"name:en\"=\"Hokudai Gakuryoku Zoshinkai\"][\"name:ja\"=\"\u5317\u5927\u5b66\u529b\u5897\u9032\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u5317\u898b\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u5317\u898b\u7df4\u6210\u4f1a\"][\"name:en\"=\"Kitami Renseikai\"][\"name:ja\"=\"\u5317\u898b\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u540d\u5927\u9032\u5b66\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u9032\u5b66\u4f1a\"][\"brand:en\"=\"SHINGAKUKAI\"][\"brand:ja\"=\"\u9032\u5b66\u4f1a\"][\"brand:wikidata\"=\"Q11640144\"][\"name\"=\"\u540d\u5927\u9032\u5b66\u4f1a\"][\"name:en\"=\"Meidai Shingakukai\"][\"name:ja\"=\"\u540d\u5927\u9032\u5b66\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u5c0f\u6a3d\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u5c0f\u6a3d\u7df4\u6210\u4f1a\"][\"name:en\"=\"Otaru Renseikai\"][\"name:ja\"=\"\u5c0f\u6a3d\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u5c71\u5f62\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u5c71\u5f62\u7df4\u6210\u4f1a\"][\"name:en\"=\"Yamagata Renseikai\"][\"name:ja\"=\"\u5c71\u5f62\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u5ca9\u898b\u6ca2\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u5ca9\u898b\u6ca2\u7df4\u6210\u4f1a\"][\"name:en\"=\"Iwamizawa Renseikai\"][\"name:ja\"=\"\u5ca9\u898b\u6ca2\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u65ed\u5ddd\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u65ed\u5ddd\u7df4\u6210\u4f1a\"][\"name:en\"=\"Asahikawa Renseikai\"][\"name:ja\"=\"\u65ed\u5ddd\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u660e\u5149\u7fa9\u587e",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u660e\u5149\u7fa9\u587e\"][\"brand:wikidata\"=\"Q11512003\"][\"name\"=\"\u660e\u5149\u7fa9\u587e\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u660e\u5149\u7fa9\u587e (\u81fa\u7063)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u660e\u5149\u7fa9\u587e\"][\"brand:wikidata\"=\"Q11512003\"][\"name\"=\"\u660e\u5149\u7fa9\u587e\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u672d\u5e4c\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u672d\u5e4c\u7df4\u6210\u4f1a\"][\"name:en\"=\"Sapporo Renseikai\"][\"name:ja\"=\"\u672d\u5e4c\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u6771\u5317\u5927\u9032\u5b66\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u9032\u5b66\u4f1a\"][\"brand:en\"=\"SHINGAKUKAI\"][\"brand:ja\"=\"\u9032\u5b66\u4f1a\"][\"brand:wikidata\"=\"Q11640144\"][\"name\"=\"\u6771\u5317\u5927\u9032\u5b66\u4f1a\"][\"name:en\"=\"Tohokudai Shingakukai\"][\"name:ja\"=\"\u6771\u5317\u5927\u9032\u5b66\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u6771\u5927\u9032\u5b66\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u9032\u5b66\u4f1a\"][\"brand:en\"=\"SHINGAKUKAI\"][\"brand:ja\"=\"\u9032\u5b66\u4f1a\"][\"brand:wikidata\"=\"Q11640144\"][\"name\"=\"\u6771\u5927\u9032\u5b66\u4f1a\"][\"name:en\"=\"Todai Shingakukai\"][\"name:ja\"=\"\u6771\u5927\u9032\u5b66\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u6771\u9032\u885b\u661f\u4e88\u5099\u6821",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u6771\u9032\u885b\u661f\u4e88\u5099\u6821\"][\"brand:en\"=\"Toshin Eisei Yobiko\"][\"brand:ja\"=\"\u6771\u9032\u885b\u661f\u4e88\u5099\u6821\"][\"brand:wikidata\"=\"Q11528409\"][\"name\"=\"\u6771\u9032\u885b\u661f\u4e88\u5099\u6821\"][\"name:en\"=\"Toshin Eisei Yobiko\"][\"name:ja\"=\"\u6771\u9032\u885b\u661f\u4e88\u5099\u6821\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u6804\u5149\u30bc\u30df\u30ca\u30fc\u30eb",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u6804\u5149\u30bc\u30df\u30ca\u30fc\u30eb\"][\"brand:ja\"=\"\u6804\u5149\u30bc\u30df\u30ca\u30fc\u30eb\"][\"brand:ja-Hira\"=\"\u3048\u3044\u3053\u3046\u305c\u307f\u306a\u30fc\u308b\"][\"brand:ja-Latn\"=\"Eik\u014d Zemin\u0101ru\"][\"brand:wikidata\"=\"Q11535632\"][\"name\"=\"\u6804\u5149\u30bc\u30df\u30ca\u30fc\u30eb\"][\"name:en\"=\"Eikoh Seminar\"][\"name:ja\"=\"\u6804\u5149\u30bc\u30df\u30ca\u30fc\u30eb\"][\"name:ja-Hira\"=\"\u3048\u3044\u3053\u3046\u305c\u307f\u306a\u30fc\u308b\"][\"name:ja-Latn\"=\"Eik\u014d Zemin\u0101ru\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Eikoh_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eikoh_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u6edd\u5ddd\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u6edd\u5ddd\u7df4\u6210\u4f1a\"][\"name:en\"=\"Takikawa Renseikai\"][\"name:ja\"=\"\u6edd\u5ddd\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u755c\u5927\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u755c\u5927\u7df4\u6210\u4f1a\"][\"name:en\"=\"Chikudai Renseikai\"][\"name:ja\"=\"\u755c\u5927\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u79c0\u82f1\u4e88\u5099\u6821",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u79c0\u82f1\u4e88\u5099\u6821\"][\"brand:en\"=\"Shuei-Yobiko\"][\"brand:ja\"=\"\u79c0\u82f1\u4e88\u5099\u6821\"][\"brand:wikidata\"=\"Q11594557\"][\"name\"=\"\u79c0\u82f1\u4e88\u5099\u6821\"][\"name:en\"=\"Shuei Yobiko\"][\"name:ja\"=\"\u79c0\u82f1\u4e88\u5099\u6821\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/SHUEI_YOBIKO_Co.,_Ltd._logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/SHUEI_YOBIKO_Co.,_Ltd._logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u82eb\u5c0f\u7267\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u82eb\u5c0f\u7267\u7df4\u6210\u4f1a\"][\"name:en\"=\"Tomakomai Renseikai\"][\"name:ja\"=\"\u82eb\u5c0f\u7267\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u91e7\u8def\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u91e7\u8def\u7df4\u6210\u4f1a\"][\"name:en\"=\"Kushiro Renseikai\"][\"name:ja\"=\"\u91e7\u8def\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('prep_school'),
	title: "\u9752\u68ee\u7df4\u6210\u4f1a",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"prep_school\"][\"brand\"=\"\u7df4\u6210\u4f1a\"][\"brand:en\"=\"RENSEIKAI\"][\"brand:ja\"=\"\u7df4\u6210\u4f1a\"][\"brand:wikidata\"=\"Q11608020\"][\"name\"=\"\u9752\u68ee\u7df4\u6210\u4f1a\"][\"name:en\"=\"Aomori Renseikai\"][\"name:ja\"=\"\u9752\u68ee\u7df4\u6210\u4f1a\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "APEC Schools",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"APEC Schools\"][\"brand:wikidata\"=\"Q24910804\"][\"operator\"=\"iPeople\"][\"operator:type\"=\"private\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "Bah\u00e7e\u015fehir Koleji",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Bah\u00e7e\u015fehir Koleji\"][\"brand:wikidata\"=\"Q4843100\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bah\u00e7e\u015fehir_Koleji_Dar\u0131ca_20220909_(7).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bah\u00e7e\u015fehir_Koleji_Dar\u0131ca_20220909_(7).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "Bilfen Okullar\u0131",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Bilfen Okullar\u0131\"][\"brand:wikidata\"=\"Q28940776\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "Do\u011fa Koleji",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Do\u011fa Koleji\"][\"brand:wikidata\"=\"Q5303858\"][\"official_name\"=\"\u0130T\u00dc ETA Vakf\u0131 Do\u011fa Koleji\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "Imagine Schools",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Imagine Schools\"][\"brand:wikidata\"=\"Q6002737\"][\"name\"=\"Imagine Schools\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "Jawahar Navodaya Vidyalaya",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Jawahar Navodaya Vidyalaya\"][\"brand:wikidata\"=\"Q2723540\"][\"name\"=\"Jawahar Navodaya Vidyalaya\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "Kendriya Vidyalaya",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Kendriya Vidyalaya\"][\"brand:wikidata\"=\"Q1156653\"][\"name\"=\"Kendriya Vidyalaya\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "KIPP",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"KIPP\"][\"brand:wikidata\"=\"Q6423304\"][\"name\"=\"KIPP\"][\"official_name\"=\"Knowledge Is Power Program\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/KIPP_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/KIPP_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "Maharishi Vidya Mandir",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Maharishi Vidya Mandir\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "Maple Bear",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Maple Bear\"][\"brand:wikidata\"=\"Q10324823\"][\"name\"=\"Maple Bear\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('school'),
	title: "Merryhill School",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Merryhill School\"][\"brand:wikidata\"=\"Q6820493\"][\"name\"=\"Merryhill School\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "Okyanus Koleji",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Okyanus Koleji\"][\"brand:wikidata\"=\"Q106802301\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "Success Academy",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"Success Academy\"][\"brand:wikidata\"=\"Q14707388\"][\"name\"=\"Success Academy\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Success_Academy_Charter_Schools_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Success_Academy_Charter_Schools_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('school'),
	title: "\u65b0\u4e1c\u65b9\u4f18\u80fd\u4e2d\u5b66",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"\u65b0\u4e1c\u65b9\"][\"brand:en\"=\"New Oriental Education\"][\"brand:wikidata\"=\"Q13631921\"][\"brand:zh\"=\"\u65b0\u4e1c\u65b9\"][\"name\"=\"\u65b0\u4e1c\u65b9\u4f18\u80fd\u4e2d\u5b66\"][\"name:en\"=\"New Oriental Youneng School\"][\"name:zh\"=\"\u65b0\u4e1c\u65b9\u4f18\u80fd\u4e2d\u5b66\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('school'),
	title: "\u9075\u7406\u5b78\u6821 Beacon College",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"school\"][\"brand\"=\"\u9075\u7406\u5b78\u6821 Beacon College\"][\"brand:en\"=\"Beacon College\"][\"brand:wikidata\"=\"Q28408488\"][\"brand:zh\"=\"\u9075\u7406\u5b78\u6821\"][\"name\"=\"\u9075\u7406\u5b78\u6821 Beacon College\"][\"name:en\"=\"Beacon College\"][\"name:zh\"=\"\u9075\u7406\u5b78\u6821\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Associa\u00e7\u00e3o de Escuteiros de Angola",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Associa\u00e7\u00e3o de Escuteiros de Angola\"][\"brand:wikidata\"=\"Q4810279\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Bund der Pfadfinderinnen und Pfadfinder",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Bund der Pfadfinderinnen und Pfadfinder\"][\"brand:wikidata\"=\"Q1005225\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/BdP_Wort-Bildmarke.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/BdP_Wort-Bildmarke.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Bund Muslimischer Pfadfinderinnen und Pfadfinder Deutschlands",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Bund Muslimischer Pfadfinderinnen und Pfadfinder Deutschlands\"][\"brand:wikidata\"=\"Q16318690\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Deutsche Pfadfinderschaft Sankt Georg",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Deutsche Pfadfinderschaft Sankt Georg\"][\"brand:wikidata\"=\"Q1203670\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Girl Scouts",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Girl Scouts\"][\"brand:wikidata\"=\"Q2576280\"][\"club\"=\"scout\"][\"name\"=\"Girl Scouts\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Norges KFUK-KFUM-speidere",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Norges KFUK-KFUM-speidere\"][\"brand:wikidata\"=\"Q8046067\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/KFUK-KFUM-speiderne.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/KFUK-KFUM-speiderne.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Norges speiderforbund",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Norges speiderforbund\"][\"brand:wikidata\"=\"Q1769346\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Pfadfinderbund Weltenbummler",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Pfadfinderbund Weltenbummler\"][\"brand:wikidata\"=\"Q1755705\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Pfadfinderinnenschaft St. Georg",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Pfadfinderinnenschaft St. Georg\"][\"brand:wikidata\"=\"Q2081993\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Royal Rangers",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Royal Rangers\"][\"brand:wikidata\"=\"Q453731\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/German_Royal_Rangers_uniform.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/German_Royal_Rangers_uniform.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Scoutisme B\u00e9ninois",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Scoutisme B\u00e9ninois\"][\"brand:wikidata\"=\"Q13534588\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Scouts South Africa",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Scouts South Africa\"][\"brand:wikidata\"=\"Q7565791\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "The Botswana Scouts Association",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"The Botswana Scouts Association\"][\"brand:wikidata\"=\"Q7719478\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "The Scout Association",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"The Scout Association\"][\"brand:wikidata\"=\"Q849740\"][\"club\"=\"scout\"][\"name\"=\"The Scout Association\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Boy_Scout_Association_1920-1967.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Boy_Scout_Association_1920-1967.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "Verband Christlicher Pfadfinder*innen",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Verband Christlicher Pfadfinder*innen\"][\"brand:wikidata\"=\"Q1316309\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Verband_Christlicher_Pfadfinderinnen_und_Pfadfinder_(VCP)_Logo_(Lilie).svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Verband_Christlicher_Pfadfinderinnen_und_Pfadfinder_(VCP)_Logo_(Lilie).svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "\u9999\u6e2f\u5973\u7ae5\u8ecd\u7e3d\u6703 Hong Kong Girl Guides Association",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u9999\u6e2f\u5973\u7ae5\u8ecd\u7e3d\u6703\"][\"brand:en\"=\"Hong Kong Girl Guides Association\"][\"brand:wikidata\"=\"Q5894627\"][\"brand:zh\"=\"\u9999\u6e2f\u5973\u7ae5\u8ecd\u7e3d\u6703\"][\"brand:zh-Hans\"=\"\u9999\u6e2f\u5973\u7ae5\u519b\u603b\u4f1a\"][\"brand:zh-Hant\"=\"\u9999\u6e2f\u5973\u7ae5\u8ecd\u7e3d\u6703\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('scout'),
	title: "\u9999\u6e2f\u7ae5\u8ecd\u7e3d\u6703 Scout Association of Hong Kong",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u9999\u6e2f\u7ae5\u8ecd\u7e3d\u6703 Scout Association of Hong Kong\"][\"brand:en\"=\"Scout Association of Hong Kong\"][\"brand:wikidata\"=\"Q1883585\"][\"brand:zh\"=\"\u9999\u6e2f\u7ae5\u8ecd\u7e3d\u6703\"][\"brand:zh-Hans\"=\"\u9999\u6e2f\u7ae5\u519b\u603b\u4f1a\"][\"brand:zh-Hant\"=\"\u9999\u6e2f\u7ae5\u8ecd\u7e3d\u6703\"][\"club\"=\"scout\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Hong_Kong_Scout_Centre_front_entrance.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hong_Kong_Scout_Centre_front_entrance.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
		
    }
},
{
    
    group: getTranslation('training'),
	title: "Aveda Institutes",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"training\"][\"brand\"=\"Aveda\"][\"brand:wikidata\"=\"Q4827965\"][\"name\"=\"Aveda Institute\"][\"training\"=\"cosmetology\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('training'),
	title: "Code Ninjas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"training\"][\"brand\"=\"Code Ninjas\"][\"brand:wikidata\"=\"Q96375193\"][\"name\"=\"Code Ninjas\"][\"training\"=\"computer\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('training'),
	title: "Color Me Mine",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"training\"][\"brand\"=\"Color Me Mine\"][\"brand:wikidata\"=\"Q121433027\"][\"name\"=\"Color Me Mine\"][\"training\"=\"ceramics_painting\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('training'),
	title: "Empire Beauty Schools",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"training\"][\"brand\"=\"Empire Beauty Schools\"][\"brand:wikidata\"=\"Q5374042\"][\"name\"=\"Empire Beauty School\"][\"training\"=\"cosmetology\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('training'),
	title: "GOLFTEC",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"training\"][\"brand\"=\"GOLFTEC\"][\"brand:wikidata\"=\"Q5580658\"][\"name\"=\"GOLFTEC\"][\"training\"=\"golf\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('training'),
	title: "Grafika",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"training\"][\"brand\"=\"Grafika\"][\"name\"=\"Grafika\"][\"training\"=\"art\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('training'),
	title: "Little Kitchen Academy",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"training\"][\"brand\"=\"Little Kitchen Academy\"][\"brand:wikidata\"=\"Q126111410\"][\"name\"=\"Little Kitchen Academy\"][\"training\"=\"cooking\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('training'),
	title: "Mad Science",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"training\"][\"brand\"=\"Mad Science\"][\"brand:wikidata\"=\"Q17009137\"][\"name\"=\"Mad Science\"][\"training\"=\"science\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('training'),
	title: "Paul Mitchell Schools",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"training\"][\"brand\"=\"Paul Mitchell\"][\"brand:wikidata\"=\"Q1597610\"][\"name\"=\"Paul Mitchell The School\"][\"training\"=\"cosmetology\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Paul_Mitchell_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Paul_Mitchell_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('training'),
	title: "\u0414\u0435\u0442\u0441\u043a\u0430\u044f \u0448\u043a\u043e\u043b\u0430 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"training\"][\"brand\"=\"\u0414\u0435\u0442\u0441\u043a\u0430\u044f \u0448\u043a\u043e\u043b\u0430 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\"][\"name\"=\"\u0414\u0435\u0442\u0441\u043a\u0430\u044f \u0448\u043a\u043e\u043b\u0430 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\"][\"training\"=\"art\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('university'),
	title: "American National University",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"university\"][\"brand\"=\"American National University\"][\"brand:short\"=\"ANU\"][\"brand:wikidata\"=\"Q19864730\"][\"name\"=\"American National University\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_American_National_University.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_American_National_University.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('university'),
	title: "DeVry University",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"university\"][\"brand\"=\"DeVry University\"][\"brand:short\"=\"DeVry\"][\"brand:wikidata\"=\"Q3298441\"][\"name\"=\"DeVry University\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('university'),
	title: "ECPI University",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"university\"][\"brand\"=\"ECPI University\"][\"brand:wikidata\"=\"Q5322728\"][\"name\"=\"ECPI University\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/ECPI-Seal.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/ECPI-Seal.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('university'),
	title: "Rasmussen University",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"university\"][\"brand\"=\"Rasmussen University\"][\"brand:wikidata\"=\"Q7295135\"][\"name\"=\"Rasmussen University\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('university'),
	title: "Strayer University",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"university\"][\"brand\"=\"Strayer University\"][\"brand:short\"=\"Strayer\"][\"brand:wikidata\"=\"Q7622587\"][\"name\"=\"Strayer University\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Strayer_University_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Strayer_University_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('university'),
	title: "University of Phoenix",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"university\"][\"brand\"=\"University of Phoenix\"][\"brand:short\"=\"UOPX\"][\"brand:wikidata\"=\"Q1889100\"][\"name\"=\"University of Phoenix\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
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