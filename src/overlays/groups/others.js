import { getTranslation } from '../../i18n/index.js';

export function othersOverlays() {
    return [
        {
    group: getTranslation('community_centre'),
    title: "Deutsches Rotes Kreuz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"community_centre\"][\"brand\"=\"Deutsches Rotes Kreuz\"][\"brand:wikidata\"=\"Q694104\"][\"name\"=\"Deutsches Rotes Kreuz\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('community_centre'),
    title: "Pilares",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"community_centre\"][\"brand\"=\"Pilares\"][\"brand:wikidata\"=\"Q111737852\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Pilares_CDMX_03.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pilares_CDMX_03.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('community_centre'),
    title: "The Royal British Legion",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"community_centre\"][\"brand\"=\"The Royal British Legion\"][\"brand:wikidata\"=\"Q1621811\"][\"name\"=\"British Legion\"][\"official_name\"=\"The Royal British Legion\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Royal_British_Legion,_Birkenhead.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Royal_British_Legion,_Birkenhead.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('conference_centre'),
    title: "etc.venues",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"conference_centre\"][\"brand\"=\"etc.venues\"][\"brand:wikidata\"=\"Q120081345\"][\"name\"=\"etc.venues\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('mortuary'),
	title: "Icebolethu Funerals",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"mortuary\"][\"brand\"=\"Icebolethu Funerals\"][\"brand:wikidata\"=\"Q122594408\"][\"name\"=\"Icebolethu Funerals\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('mortuary'),
	title: "Ve\u017eica",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"mortuary\"][\"brand\"=\"Ve\u017eica\"][\"name\"=\"Ve\u017eica\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('photo_booth'),
	title: "Boft",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"photo_booth\"][\"brand\"=\"Boft\"][\"name\"=\"Boft\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('photo_booth'),
	title: "Fotofix",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"photo_booth\"][\"brand\"=\"Fotofix\"][\"name\"=\"Fotofix\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('photo_booth'),
	title: "Ki-Re-i",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"photo_booth\"][\"brand\"=\"Ki-Re-i\"][\"name\"=\"Ki-Re-i\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('photo_booth'),
	title: "Max Spielmann photo booth",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"photo_booth\"][\"brand\"=\"Max Spielmann\"][\"brand:wikidata\"=\"Q76221051\"][\"name\"=\"Max Spielmann\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('photo_booth'),
	title: "Photo Signature",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"photo_booth\"][\"brand\"=\"Photo Signature\"][\"brand:en\"=\"Photo Signature\"][\"brand:ko\"=\"\ud3ec\ud1a0\uc2dc\uadf8\ub2c8\ucc98\"][\"brand:wikidata\"=\"Q120989590\"][\"name\"=\"Photo Signature\"][\"name:en\"=\"Photo Signature\"][\"name:ko\"=\"\ud3ec\ud1a0\uc2dc\uadf8\ub2c8\ucc98\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('photo_booth'),
	title: "Photo-Me",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"photo_booth\"][\"brand\"=\"Photo-Me\"][\"brand:wikidata\"=\"Q123456627\"][\"name\"=\"Photo-Me\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('photo_booth'),
	title: "Photomaton",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"photo_booth\"][\"brand\"=\"Photomaton\"][\"brand:wikidata\"=\"Q27847769\"][\"name\"=\"Photomaton\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Photomaton.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Photomaton.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('photo_booth'),
	title: "Prontophot",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"photo_booth\"][\"brand\"=\"Prontophot\"][\"brand:wikidata\"=\"Q123401542\"][\"name\"=\"Prontophot\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Prontophot_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Prontophot_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('photo_booth'),
	title: "\uc778\uc0dd\ub124\ucef7",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"photo_booth\"][\"brand\"=\"\uc778\uc0dd\ub124\ucef7\"][\"brand:en\"=\"Life4Cut\"][\"brand:ko\"=\"\uc778\uc0dd\ub124\ucef7\"][\"brand:wikidata\"=\"Q120990259\"][\"name\"=\"\uc778\uc0dd\ub124\ucef7\"][\"name:en\"=\"Life4Cut\"][\"name:ko\"=\"\uc778\uc0dd\ub124\ucef7\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
  }
},
{
    group: getTranslation('recycling'),
	title: "AIM Recyclage",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"AIM Recycling\"][\"brand:wikidata\"=\"Q130508451\"][\"name\"=\"AIM Recyclage\"][\"recycling_type\"=\"centre\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "AIM Recycling",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"AIM Recycling\"][\"brand:wikidata\"=\"Q130508451\"][\"name\"=\"AIM Recycling\"][\"recycling_type\"=\"centre\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Arbeiter-Samariter-Bund",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Arbeiter-Samariter-Bund\"][\"brand:wikidata\"=\"Q627071\"][\"recycling_type\"=\"container\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('recycling'),
	title: "Arbeiterwohlfahrt",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Arbeiterwohlfahrt\"][\"brand:wikidata\"=\"Q627256\"][\"recycling_type\"=\"container\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('recycling'),
	title: "Bayerisches Rotes Kreuz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Bayerisches Rotes Kreuz\"][\"brand:wikidata\"=\"Q812433\"][\"recycling_type\"=\"container\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/BRK_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/BRK_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "BottleDrop Express",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"BottleDrop\"][\"brand:wikidata\"=\"Q107673127\"][\"name\"=\"BottleDrop Express\"][\"operator\"=\"Oregon Beverage Recycling Cooperative\"][\"recycling_type\"=\"centre\"][\"recycling:cans\"=\"yes\"][\"recycling:glass_bottles\"=\"yes\"][\"recycling:plastic_bottles\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "BottleDrop Redemption Center",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"BottleDrop\"][\"brand:wikidata\"=\"Q107673127\"][\"name\"=\"BottleDrop Redemption Center\"][\"operator\"=\"Oregon Beverage Recycling Cooperative\"][\"recycling_type\"=\"centre\"][\"recycling:cans\"=\"yes\"][\"recycling:glass_bottles\"=\"yes\"][\"recycling:plastic_bottles\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Caritas (Deutschland)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Caritas\"][\"brand:wikidata\"=\"Q29508174\"][\"recycling_type\"=\"container\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Consignaction",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Consignaction\"][\"brand:wikidata\"=\"Q132858940\"][\"name\"=\"Consignaction\"][\"recycling_type\"=\"centre\"][\"recycling:beverage_cartons\"=\"yes\"][\"recycling:cans\"=\"yes\"][\"recycling:glass_bottles\"=\"yes\"][\"recycling:plastic_bottles\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Consignaction.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Consignaction.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Containers for Change",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Containers for Change\"][\"brand:wikidata\"=\"Q124060523\"][\"name\"=\"Containers for Change\"][\"recycling_type\"=\"centre\"][\"recycling:cans\"=\"yes\"][\"recycling:glass_bottles\"=\"yes\"][\"recycling:plastic_bottles\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Depoz\u012bta punkts",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Depoz\u012bta punkts\"][\"brand:wikidata\"=\"Q110979381\"][\"name\"=\"Depoz\u012bta punkts\"][\"recycling:cans\"=\"yes\"][\"recycling:glass_bottles\"=\"yes\"][\"recycling:plastic_bottles\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Deutsches Rotes Kreuz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Deutsches Rotes Kreuz\"][\"brand:wikidata\"=\"Q694104\"][\"recycling_type\"=\"container\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('recycling'),
	title: "Diakonie",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Diakonie\"][\"brand:wikidata\"=\"Q126501\"][\"recycling_type\"=\"container\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('recycling'),
	title: "ecoATM",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"ecoATM\"][\"brand:wikidata\"=\"Q108793413\"][\"name\"=\"ecoATM\"][\"recycling_type\"=\"vending_machine\"][\"recycling:mobile_phones\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "ecoco",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"ecoco\"][\"brand:en\"=\"ecoco\"][\"brand:wikidata\"=\"Q131689024\"][\"brand:zh\"=\"\u5b9c\u53ef\u53ef\"][\"name\"=\"ecoco\"][\"name:en\"=\"ecoco\"][\"name:zh\"=\"\u5b9c\u53ef\u53ef\"][\"operator\"=\"\u51e1\u7acb\u6a59\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"operator:en\"=\"Fun Lead Chabge Co., Ltd\"][\"operator:zh\"=\"\u51e1\u7acb\u6a59\u80a1\u4efd\u6709\u9650\u516c\u53f8\"][\"recycling_type\"=\"container\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Islamic Relief",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Islamic Relief\"][\"brand:wikidata\"=\"Q239714\"][\"name\"=\"Islamic Relief\"][\"operator\"=\"Islamic Relief\"][\"operator:wikidata\"=\"Q239714\"][\"recycling_type\"=\"container\"][\"recycling:clothes\"=\"yes\"][\"recycling:shoes\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Kolpingwerk",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Kolpingwerk\"][\"brand:wikidata\"=\"Q315825\"][\"recycling_type\"=\"container\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Kolpingwerk_2018_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kolpingwerk_2018_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Malteser Hilfsdienst",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Malteser Hilfsdienst\"][\"brand:short\"=\"MHD\"][\"brand:wikidata\"=\"Q1318397\"][\"recycling_type\"=\"container\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Malteser_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Malteser_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Oxfam",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Oxfam\"][\"brand:wikidata\"=\"Q267941\"][\"operator\"=\"Oxfam\"][\"operator:wikidata\"=\"Q267941\"][\"recycling_type\"=\"container\"][\"recycling:clothes\"=\"yes\"][\"recycling:shoes\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Oxfam_logo,_2016_(cropped).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Oxfam_logo,_2016_(cropped).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Planet Aid",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Planet Aid\"][\"brand:wikidata\"=\"Q7201055\"][\"name\"=\"Planet Aid\"][\"recycling_type\"=\"container\"][\"recycling:clothes\"=\"yes\"][\"recycling:shoes\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Planet_Aid_Collection_Box_Dexter_Michigan.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Planet_Aid_Collection_Box_Dexter_Michigan.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Recolight",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Recolight\"][\"brand:wikidata\"=\"Q111370781\"][\"name\"=\"Recolight\"][\"operator\"=\"Recolight\"][\"operator:wikidata\"=\"Q111370781\"][\"recycling_type\"=\"container\"][\"recycling:low_energy_bulbs\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "Saint Vincent de Paul",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"Saint Vincent de Paul\"][\"brand:wikidata\"=\"Q7592120\"][\"name\"=\"Saint Vincent de Paul\"][\"recycling:clothes\"=\"yes\"][\"recycling:shoes\"=\"yes\"][\"short_name\"=\"SVdP\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Society_of_Saint_Vincent_de_Paul_-_Central_Store_in_Ottawa,_Ontario.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Society_of_Saint_Vincent_de_Paul_-_Central_Store_in_Ottawa,_Ontario.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "The Salvation Army (UK)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"The Salvation Army\"][\"brand:wikidata\"=\"Q188307\"][\"recycling_type\"=\"container\"][\"recycling:clothes\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Salvation_Army_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Salvation_Army_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "The Salvation Army (USA)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"The Salvation Army\"][\"brand:wikidata\"=\"Q188307\"][\"name\"=\"The Salvation Army\"][\"recycling_type\"=\"container\"][\"recycling:clothes\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Salvation_Army_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Salvation_Army_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "TRAID",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"TRAID\"][\"brand:wikidata\"=\"Q109717195\"][\"name\"=\"TRAID\"][\"operator\"=\"TRAID\"][\"operator:wikidata\"=\"Q109717195\"][\"recycling_type\"=\"container\"][\"recycling:clothes\"=\"yes\"][\"recycling:shoes\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "USAgain",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"USAgain\"][\"brand:wikidata\"=\"Q107673127\"][\"name\"=\"USAgain\"][\"name:pronunciation\"=\"\u02c8juz \u0259\u02c8\u0261\u025bn\"][\"recycling_type\"=\"container\"][\"recycling:clothes\"=\"yes\"][\"recycling:shoes\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "\u041b\u0463\u043f\u0442\u0430",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"\u041b\u0435\u043f\u0442\u0430\"][\"amenity\"=\"recycling\"][\"brand\"=\"\u041b\u0463\u043f\u0442\u0430\"][\"brand:wikidata\"=\"Q110234180\"][\"name\"=\"\u041b\u0463\u043f\u0442\u0430\"][\"operator\"=\"\u041b\u0463\u043f\u0442\u0430\"][\"operator:wikidata\"=\"Q110234180\"][\"recycling_type\"=\"container\"][\"recycling:bags\"=\"yes\"][\"recycling:clothes\"=\"yes\"][\"recycling:shoes\"=\"yes\"][\"recycling:toys\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e!",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!\"][\"brand:wikidata\"=\"Q110234301\"][\"name\"=\"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!\"][\"operator\"=\"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!\"][\"operator:wikidata\"=\"Q110234301\"][\"recycling_type\"=\"container\"][\"recycling:books\"=\"yes\"][\"recycling:clothes\"=\"yes\"][\"recycling:shoes\"=\"yes\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('recycling'),
	title: "\u7da0\u5728\u5340\u5340 GREEN@COMMUNITY",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"recycling\"][\"brand\"=\"\u7da0\u5728\u5340\u5340 GREEN@COMMUNITY\"][\"brand:en\"=\"GREEN@COMMUNITY\"][\"brand:wikidata\"=\"Q111079364\"][\"brand:zh\"=\"\u7da0\u5728\u5340\u5340\"][\"brand:zh-Hans\"=\"\u7eff\u5728\u533a\u533a\"][\"brand:zh-Hant\"=\"\u7da0\u5728\u5340\u5340\"][\"owner\"=\"\u74b0\u5883\u4fdd\u8b77\u7f72 Environmental Protection Department\"][\"owner:en\"=\"Environmental Protection Department\"][\"owner:wikidata\"=\"Q841892\"][\"owner:zh\"=\"\u74b0\u5883\u4fdd\u8b77\u7f72\"][\"owner:zh-Hans\"=\"\u73af\u5883\u4fdd\u62a4\u7f72\"][\"owner:zh-Hant\"=\"\u74b0\u5883\u4fdd\u8b77\u7f72\"][\"recycling_type\"=\"centre\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
     }
},
{
    group: getTranslation('social_centre'),
	title: "AHEPA Hall",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"AHEPA\"][\"brand:wikidata\"=\"Q4743973\"][\"name\"=\"AHEPA Hall\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "American Legion Hall",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"American Legion\"][\"brand:wikidata\"=\"Q468865\"][\"name\"=\"American Legion Hall\"][\"social_centre:for\"=\"veteran\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Legion_Seal_SVG.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/American_Legion_Seal_SVG.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "AMVETS Post",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"AMVETS\"][\"brand:wikidata\"=\"Q2819279\"][\"name\"=\"AMVETS Post\"][\"social_centre:for\"=\"veteran\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "Eagles Lodge",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"Aeries Lodge\"][\"amenity\"=\"social_centre\"][\"brand\"=\"Fraternal Order of Eagles\"][\"brand:short\"=\"FOE\"][\"brand:wikidata\"=\"Q5493810\"][\"name\"=\"Eagles Lodge\"][\"official_name\"=\"Fraternal Order of Eagles\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Seattle_Eagles_Auditorium_terracotta_01.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Seattle_Eagles_Auditorium_terracotta_01.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "Elks Lodge",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"Benevolent and Protective Order of Elks\"][\"brand:short\"=\"BPOE\"][\"brand:wikidata\"=\"Q2895789\"][\"name\"=\"Elks Lodge\"][\"official_name\"=\"Benevolent and Protective Order of Elks\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Elks_bridgewater_NJ.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Elks_bridgewater_NJ.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "Fraternal Order of Police",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"Fraternal Order of Police\"][\"brand:short\"=\"FOP\"][\"brand:wikidata\"=\"Q1451416\"][\"name\"=\"Fraternal Order of Police\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "Knights of Columbus",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"Knights of Columbus\"][\"brand:short\"=\"KofC\"][\"brand:wikidata\"=\"Q1046799\"][\"name\"=\"Knights of Columbus Council\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caballeros_de_colon.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caballeros_de_colon.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "Lions Clubs International",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"Lions Clubs International\"][\"brand:wikidata\"=\"Q270029\"][\"name\"=\"Lions Clubs International\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "Moose Lodge",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"Loyal Order of Moose\"][\"brand:wikidata\"=\"Q6908585\"][\"name\"=\"Moose Lodge\"][\"official_name\"=\"Loyal Order of Moose\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "Odd Fellows Hall",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"Independent Order of Odd Fellows\"][\"brand:short\"=\"IOOF\"][\"brand:wikidata\"=\"Q1425508\"][\"name\"=\"Odd Fellows Hall\"][\"official_name\"=\"Independent Order of Odd Fellows\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Groningen_-_Odd_Fellowhuis_-_logezaal_(1).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Groningen_-_Odd_Fellowhuis_-_logezaal_(1).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "Orioles Nest",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"Fraternal Order Orioles\"][\"brand:short\"=\"FOO\"][\"brand:wikidata\"=\"Q5493805\"][\"name\"=\"Orioles Nest\"][\"official_name\"=\"Fraternal Order Orioles\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "Royal Canadian Legion Hall",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"Royal Canadian Legion\"][\"brand:short\"=\"RCL\"][\"brand:wikidata\"=\"Q3270231\"][\"name\"=\"Royal Canadian Legion Hall\"][\"social_centre:for\"=\"veteran\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "The National Grange",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"The National Grange of the Order of Patrons of Husbandry\"][\"brand:wikidata\"=\"Q7753183\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Halcott_Grange_10-1-2016.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Halcott_Grange_10-1-2016.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_centre'),
	title: "VFW Post",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_centre\"][\"brand\"=\"Veterans of Foreign Wars of the United States\"][\"brand:short\"=\"VFW\"][\"brand:wikidata\"=\"Q3556413\"][\"name\"=\"VFW Post\"][\"name:en\"=\"VFW Post\"][\"official_name\"=\"Veterans of Foreign Wars of the United States\"][\"social_centre:for\"=\"veteran\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/VFW_2018-08-14_two-color_logo_with_name.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/VFW_2018-08-14_two-color_logo_with_name.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Arbeiter-Samariter-Bund",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Arbeiter-Samariter-Bund\"][\"brand:wikidata\"=\"Q627071\"][\"name\"=\"Arbeiter-Samariter-Bund\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('social_facility'),
	title: "Arbeiterwohlfahrt",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Arbeiterwohlfahrt\"][\"brand:wikidata\"=\"Q627256\"][\"name\"=\"Arbeiterwohlfahrt\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('social_facility'),
	title: "Bahnhofsmission",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Bahnhofsmission\"][\"brand:wikidata\"=\"Q801713\"][\"name\"=\"Bahnhofsmission\"][\"social_facility\"=\"outreach\"][\"social_facility:for\"=\"homeless;underprivileged\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bahnhofsmission_T\u00fcbingen_Eingang.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bahnhofsmission_T\u00fcbingen_Eingang.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Bahnhofsozialdienst",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Bahnhofsozialdienst\"][\"brand:wikidata\"=\"Q801713\"][\"name\"=\"Bahnhofsozialdienst\"][\"social_facility\"=\"outreach\"][\"social_facility:for\"=\"homeless;underprivileged\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bahnhofsmission_T\u00fcbingen_Eingang.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bahnhofsmission_T\u00fcbingen_Eingang.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Bayerisches Rotes Kreuz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Bayerisches Rotes Kreuz\"][\"brand:wikidata\"=\"Q812433\"][\"name\"=\"Bayerisches Rotes Kreuz\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/BRK_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/BRK_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Bethel",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Bethel\"][\"brand:wikidata\"=\"Q547995\"][\"name\"=\"Bethel\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bethel-Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bethel-Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Big Brothers Big Sisters Lone Star",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Big Brothers Big Sisters Lone Star\"][\"brand:wikidata\"=\"Q54678731\"][\"name\"=\"Big Brothers Big Sisters Lone Star\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Boys & Girls Club",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Boys & Girls Club\"][\"brand:wikidata\"=\"Q2923055\"][\"name\"=\"Boys & Girls Club\"][\"social_facility\"=\"outreach\"][\"social_facility:for\"=\"child\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Canadian Red Cross",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Canadian Red Cross\"][\"brand:en\"=\"Canadian Red Cross\"][\"brand:fr\"=\"Croix-Rouge canadienne\"][\"brand:short\"=\"CRC\"][\"brand:wikidata\"=\"Q5030521\"][\"operator\"=\"Canadian Red Cross\"][\"operator:en\"=\"Canadian Red Cross\"][\"operator:fr\"=\"Croix-Rouge canadienne\"][\"operator:short\"=\"CRC\"][\"operator:type\"=\"ngo\"][\"operator:wikidata\"=\"Q5030521\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Canadian_Red_Cross_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Canadian_Red_Cross_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Caritas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Caritas\"][\"brand:wikidata\"=\"Q533143\"][\"name\"=\"Caritas\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caritas_Austria-logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caritas_Austria-logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Caritas (Deutschland)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Caritas\"][\"brand:wikidata\"=\"Q29508174\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Caritas (\u00d6sterreich)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Caritas\"][\"brand:wikidata\"=\"Q1036350\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caritas_Austria-logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caritas_Austria-logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Caritas (Schweiz)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Caritas\"][\"brand:wikidata\"=\"Q1036336\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caritas_Switzerland-logo2.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caritas_Switzerland-logo2.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Caritas (Slovensko)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Caritas\"][\"brand:wikidata\"=\"Q1036340\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Centre Communal d'Action Sociale",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Centre Communal d'Action Sociale\"][\"brand:wikidata\"=\"Q2944984\"][\"name\"=\"Centre Communal d'Action Sociale\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Citizens Advice",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Citizens Advice\"][\"brand:wikidata\"=\"Q5122657\"][\"social_facility\"=\"outreach\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Citizens_Advice_Logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Citizens_Advice_Logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Croix-Rouge de Belgique",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Croix-Rouge de Belgique\"][\"brand:short\"=\"CRB\"][\"brand:wikidata\"=\"Q2537361\"][\"operator\"=\"Croix-Rouge de Belgique\"][\"operator:type\"=\"ngo\"][\"operator:wikidata\"=\"Q2537361\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian_Red_Cross_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian_Red_Cross_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Croix-Rouge fran\u00e7aise",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Croix-Rouge fran\u00e7aise\"][\"brand:wikidata\"=\"Q3003244\"][\"operator\"=\"Croix-Rouge fran\u00e7aise\"][\"operator:short\"=\"CRF\"][\"operator:type\"=\"ngo\"][\"operator:wikidata\"=\"Q3003244\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Croix-Rouge_Fran\u00e7aise.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Croix-Rouge_Fran\u00e7aise.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Croix-Rouge luxembourgeoise",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Croix-Rouge luxembourgeoise\"][\"brand:de\"=\"Luxemburgisches Rotes Kreuz\"][\"brand:fr\"=\"Croix-Rouge luxembourgeoise\"][\"brand:lb\"=\"L\u00ebtzebuergesche Roude Kr\u00e4iz\"][\"brand:wikidata\"=\"Q13102234\"][\"operator\"=\"Croix-Rouge luxembourgeoise\"][\"operator:de\"=\"Luxemburgisches Rotes Kreuz\"][\"operator:fr\"=\"Croix-Rouge luxembourgeoise\"][\"operator:lb\"=\"L\u00ebtzebuergesche Roude Kr\u00e4iz\"][\"operator:type\"=\"ngo\"][\"operator:wikidata\"=\"Q13102234\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Cross_headquarters_-_Luxembourg_-_DSC06655.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Cross_headquarters_-_Luxembourg_-_DSC06655.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Deutscher Kinderschutzbund",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Deutscher Kinderschutzbund\"][\"brand:short\"=\"DKSB\"][\"brand:wikidata\"=\"Q1205011\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Deutsches Rotes Kreuz",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Deutsches Rotes Kreuz\"][\"brand:wikidata\"=\"Q694104\"][\"name\"=\"Deutsches Rotes Kreuz\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('social_facility'),
	title: "Diakonie",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Diakonie\"][\"brand:wikidata\"=\"Q126501\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('social_facility'),
	title: "Ehpad du CH",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Ehpad du CH\"][\"name\"=\"Ehpad du CH\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Johanniter",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Johanniter\"][\"brand:wikidata\"=\"Q28131582\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Johanniterorden_Claim_rgb_150dpi.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Johanniterorden_Claim_rgb_150dpi.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Johanniter-Unfall-Hilfe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Johanniter-Unfall-Hilfe\"][\"brand:wikidata\"=\"Q14751117\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Johanniter-Unfall-Hilfe_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Johanniter-Unfall-Hilfe_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Lebenshilfe",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Lebenshilfe\"][\"brand:wikidata\"=\"Q20533\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('social_facility'),
	title: "Les Petites Cantines",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Les Petites Cantines\"][\"brand:wikidata\"=\"Q123965862\"][\"name\"=\"Les Petites Cantines\"][\"operator\"=\"Les Petites Cantines\"][\"operator:type\"=\"charitable\"][\"operator:wikidata\"=\"Q123965862\"][\"social_facility\"=\"soup_kitchen\"][\"social_facility:for\"=\"homeless;underprivileged\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Les_Petites_Cantines.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Les_Petites_Cantines.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Life Care Centers of America",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Life Care Centers of America\"][\"brand:short\"=\"LCCA\"][\"brand:wikidata\"=\"Q22073203\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Malteser Hilfsdienst",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Malteser Hilfsdienst\"][\"brand:wikidata\"=\"Q1318397\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Malteser_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Malteser_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Miejski O\u015brodek Pomocy Spo\u0142ecznej",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Miejski O\u015brodek Pomocy Spo\u0142ecznej\"][\"name\"=\"Miejski O\u015brodek Pomocy Spo\u0142ecznej\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Mini cit\u00e9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Mini cit\u00e9\"][\"name\"=\"Mini cit\u00e9\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Office of the Senior Citizen Affairs",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Office of the Senior Citizen Affairs\"][\"name\"=\"Office of the Senior Citizen Affairs\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "ONCE",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"ONCE\"][\"brand:wikidata\"=\"Q1750397\"][\"name\"=\"ONCE\"][\"official_name\"=\"Organizaci\u00f3n Nacional de Ciegos Espa\u00f1oles\"][\"social_facility\"=\"outreach\"][\"social_facility:for\"=\"blind\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logotipo_ONCE.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logotipo_ONCE.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "SOMPO\u30b1\u30a2",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"SOMPO\u30b1\u30a2\"][\"brand:en\"=\"Sompo Care\"][\"brand:ja\"=\"SOMPO\u30b1\u30a2\"][\"brand:wikidata\"=\"Q11343758\"][\"name\"=\"SOMPO\u30b1\u30a2\"][\"name:en\"=\"Sompo Care\"][\"name:ja\"=\"SOMPO\u30b1\u30a2\"][\"social_facility\"=\"nursing_home\"][\"social_facility:for\"=\"senior\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Stationswerk",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Stationswerk\"][\"brand:wikidata\"=\"Q801713\"][\"name\"=\"Stationswerk\"][\"social_facility\"=\"outreach\"][\"social_facility:for\"=\"homeless;underprivileged\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bahnhofsmission_T\u00fcbingen_Eingang.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bahnhofsmission_T\u00fcbingen_Eingang.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Tafel",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Tafel\"][\"brand:wikidata\"=\"Q89909230\"][\"name\"=\"Tafel\"][\"social_facility\"=\"food_bank\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Tafel_Deutschland_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tafel_Deutschland_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Vet Center",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"VA\"][\"brand:wikidata\"=\"Q6580225\"][\"healthcare\"=\"counselling\"][\"healthcare:counselling\"=\"psychiatry\"][\"healthcare:for\"=\"veteran\"][\"name\"=\"Vet Center\"][\"social_facility\"=\"healthcare;outreach\"][\"social_facility:for\"=\"veteran\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/US_Veterans_Health_Administration_logo_stacked.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/US_Veterans_Health_Administration_logo_stacked.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Violence Against Women and Children Desk",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Violence Against Women and Children Desk\"][\"name\"=\"Violence Against Women and Children Desk\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Violence Against Women and Children Office",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Violence Against Women and Children Office\"][\"name\"=\"Violence Against Women and Children Office\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "Volkssolidarit\u00e4t",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Volkssolidarit\u00e4t\"][\"brand:wikidata\"=\"Q2532186\"][\"name\"=\"Volkssolidarit\u00e4t\"]({{bbox}});node(w););out meta;",
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
    group: getTranslation('social_facility'),
	title: "Wei\u00dfer Ring",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"Wei\u00dfer Ring\"][\"brand:wikidata\"=\"Q2557081\"][\"name\"=\"Wei\u00dfer Ring\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Weisser_Ring_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Weisser_Ring_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "\u041a\u0430\u0440\u0456\u0442\u0430\u0441",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"\u041a\u0430\u0440\u0456\u0442\u0430\u0441\"][\"brand:en\"=\"Caritas\"][\"brand:uk\"=\"\u041a\u0430\u0440\u0456\u0442\u0430\u0441\"][\"brand:wikidata\"=\"Q12108931\"][\"name\"=\"\u041a\u0430\u0440\u0456\u0442\u0430\u0441\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_new_caritas.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_new_caritas.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "\u041a\u0430\u0440\u0456\u0442\u0430\u0441-\u0421\u043f\u0435\u0441",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"\u041a\u0430\u0440\u0456\u0442\u0430\u0441-\u0421\u043f\u0435\u0441\"][\"brand:en\"=\"Caritas-Spes\"][\"brand:uk\"=\"\u041a\u0430\u0440\u0456\u0442\u0430\u0441-\u0421\u043f\u0435\u0441\"][\"brand:wikidata\"=\"Q12108929\"][\"name\"=\"\u041a\u0430\u0440\u0456\u0442\u0430\u0441-\u0421\u043f\u0435\u0441\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\u041a\u0430\u0440\u0456\u0442\u0430\u0441-\u0421\u043f\u0435\u0441_\u0423\u043a\u0440\u0430\u0457\u043d\u0430.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\u041a\u0430\u0440\u0456\u0442\u0430\u0441-\u0421\u043f\u0435\u0441_\u0423\u043a\u0440\u0430\u0457\u043d\u0430.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "\u0422\u043e\u0432\u0430\u0440\u0438\u0441\u0442\u0432\u043e \u0427\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e \u0425\u0440\u0435\u0441\u0442\u0430 \u0423\u043a\u0440\u0430\u0457\u043d\u0438",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"\u0422\u043e\u0432\u0430\u0440\u0438\u0441\u0442\u0432\u043e \u0427\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e \u0425\u0440\u0435\u0441\u0442\u0430 \u0423\u043a\u0440\u0430\u0457\u043d\u0438\"][\"brand:en\"=\"Ukrainian Red Cross Society\"][\"brand:short\"=\"\u0422\u0427\u0425\u0423\"][\"brand:short:en\"=\"URCS\"][\"brand:short:uk\"=\"\u0422\u0427\u0425\u0423\"][\"brand:uk\"=\"\u0422\u043e\u0432\u0430\u0440\u0438\u0441\u0442\u0432\u043e \u0427\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e \u0425\u0440\u0435\u0441\u0442\u0430 \u0423\u043a\u0440\u0430\u0457\u043d\u0438\"][\"brand:wikidata\"=\"Q9364596\"][\"name\"=\"\u0422\u043e\u0432\u0430\u0440\u0438\u0441\u0442\u0432\u043e \u0427\u0435\u0440\u0432\u043e\u043d\u043e\u0433\u043e \u0425\u0440\u0435\u0441\u0442\u0430 \u0423\u043a\u0440\u0430\u0457\u043d\u0438\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ukrainian_red_cross_symbol.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ukrainian_red_cross_symbol.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "\u30c4\u30af\u30a4",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"\u30c4\u30af\u30a4\"][\"brand:en\"=\"Tsukui\"][\"brand:ja\"=\"\u30c4\u30af\u30a4\"][\"brand:wikidata\"=\"Q11318724\"][\"name\"=\"\u30c4\u30af\u30a4\"][\"name:en\"=\"Tsukui\"][\"name:ja\"=\"\u30c4\u30af\u30a4\"][\"social_facility\"=\"day_care\"][\"social_facility:for\"=\"senior\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "\u30ea\u30cf\u30d7\u30e9\u30a4\u30c9",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"\u30ea\u30cf\u30d7\u30e9\u30a4\u30c9\"][\"brand:en\"=\"RehaPride\"][\"brand:ja\"=\"\u30ea\u30cf\u30d7\u30e9\u30a4\u30c9\"][\"brand:wikidata\"=\"Q96186859\"][\"name\"=\"\u30ea\u30cf\u30d7\u30e9\u30a4\u30c9\"][\"name:en\"=\"RehaPride\"][\"name:ja\"=\"\u30ea\u30cf\u30d7\u30e9\u30a4\u30c9\"][\"social_facility\"=\"healthcare\"][\"social_facility:for\"=\"senior\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "\u30ec\u30b3\u30fc\u30c9\u30d6\u30c3\u30af",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"\u30ec\u30b3\u30fc\u30c9\u30d6\u30c3\u30af\"][\"brand:en\"=\"Record Book\"][\"brand:ja\"=\"\u30ec\u30b3\u30fc\u30c9\u30d6\u30c3\u30af\"][\"brand:wikidata\"=\"Q91915310\"][\"name\"=\"\u30ec\u30b3\u30fc\u30c9\u30d6\u30c3\u30af\"][\"name:en\"=\"Record Book\"][\"name:ja\"=\"\u30ec\u30b3\u30fc\u30c9\u30d6\u30c3\u30af\"][\"social_facility\"=\"day_care\"][\"social_facility:for\"=\"senior\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Record_book_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Record_book_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
	group: getTranslation('telephone'),
	title: "NTT",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"telephone\"][\"brand\"=\"NTT\"][\"brand:en\"=\"Nippon Telegraph and Telephone\"][\"brand:ja\"=\"\u65e5\u672c\u96fb\u4fe1\u96fb\u8a71\u682a\u5f0f\u4f1a\u793e\"][\"brand:short\"=\"NTT\"][\"brand:wikidata\"=\"Q1054787\"][\"name\"=\"NTT\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Nippon_Telegraph_and_Telephone_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nippon_Telegraph_and_Telephone_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('social_facility'),
	title: "\u660e\u611b\u6703 Caritas",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"social_facility\"][\"brand\"=\"\u660e\u611b\u6703 Caritas\"][\"brand:en\"=\"Caritas\"][\"brand:wikidata\"=\"Q533143\"][\"brand:zh\"=\"\u660e\u611b\u6703\"][\"name\"=\"\u660e\u611b\u6703 Caritas\"][\"name:en\"=\"Caritas\"][\"name:zh\"=\"\u660e\u611b\u6703\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Caritas_Austria-logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Caritas_Austria-logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;

    }
},
{
    group: getTranslation('trolley_bay'),
	title: "Chariots",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"trolley_bay\"][\"brand\"=\"Chariots\"][\"name\"=\"Chariots\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('trolley_bay'),
	title: "Smarte Carte",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"trolley_bay\"][\"brand\"=\"Smarte Carte\"][\"brand:wikidata\"=\"Q7544098\"][\"fee\"=\"yes\"][\"name\"=\"Smarte Carte\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Smarte_Carte_stand_SJC_2019.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Smarte_Carte_stand_SJC_2019.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('waste_basket'),
	title: "BigBelly Solar Compactor",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"waste_basket\"][\"brand\"=\"BigBelly\"][\"brand:wikidata\"=\"Q4904855\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bigbelly_Trash_and_Recycling_Stations.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bigbelly_Trash_and_Recycling_Stations.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('waste_basket'),
	title: "Dog-Station",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"waste_basket\"][\"brand\"=\"Dog-Station\"][\"brand:wikidata\"=\"Q63720061\"][\"waste\"=\"dog_excrement\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Dog_station,_avenue_de_la_Libert\u00e9,_D\u00e9ifferdeng.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dog_station,_avenue_de_la_Libert\u00e9,_D\u00e9ifferdeng.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('waste_basket'),
	title: "Robidog",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"waste_basket\"][\"brand\"=\"Robidog\"][\"brand:wikidata\"=\"Q2159689\"][\"waste\"=\"dog_excrement\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Robidog.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Robidog.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bail_bond_agent'),
	title: "Aladdin Bail Bonds",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Aladdin Bail Bonds\"][\"brand:wikidata\"=\"Q64166257\"][\"name\"=\"Aladdin Bail Bonds\"][\"office\"=\"bail_bond_agent\"][\"opening_hours\"=\"24/7\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Aladdin_Bail_Bonds_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Aladdin_Bail_Bonds_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('model'),
	title: "\u30bf\u30e0\u30bf\u30e0",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30bf\u30e0\u30bf\u30e0\"][\"brand:en\"=\"TamTam\"][\"brand:ja\"=\"\u30bf\u30e0\u30bf\u30e0\"][\"brand:wikidata\"=\"Q30926431\"][\"name\"=\"\u30bf\u30e0\u30bf\u30e0\"][\"name:en\"=\"TamTam\"][\"name:ja\"=\"\u30bf\u30e0\u30bf\u30e0\"][\"shop\"=\"model\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('model'),
	title: "\u30dd\u30dd\u30f3\u30c7\u30c3\u30bf",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30dd\u30dd\u30f3\u30c7\u30c3\u30bf\"][\"brand:en\"=\"Popondetta\"][\"brand:ja\"=\"\u30dd\u30dd\u30f3\u30c7\u30c3\u30bf\"][\"brand:wikidata\"=\"Q11339278\"][\"name\"=\"\u30dd\u30dd\u30f3\u30c7\u30c3\u30bf\"][\"name:en\"=\"Popondetta\"][\"name:ja\"=\"\u30dd\u30dd\u30f3\u30c7\u30c3\u30bf\"][\"shop\"=\"model\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "Ahern Rentals",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Ahern Rentals\"][\"brand:wikidata\"=\"Q114487657\"][\"name\"=\"Ahern Rentals\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "Briggs Equipment",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Briggs Equipment\"][\"brand:wikidata\"=\"Q114478098\"][\"name\"=\"Briggs Equipment\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "Equipment Depot",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Equipment Depot\"][\"brand:wikidata\"=\"Q114478386\"][\"name\"=\"Equipment Depot\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "H&E Equipment Services",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"H&E Equipment Services\"][\"brand:wikidata\"=\"Q114485951\"][\"name\"=\"H&E Equipment Services\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "Herc Rentals",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Herc Rentals\"][\"brand:wikidata\"=\"Q114487859\"][\"name\"=\"Herc Rentals\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "Hirepool",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Hirepool\"][\"brand:wikidata\"=\"Q114352983\"][\"name\"=\"Hirepool\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "Kennards Hire",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Kennards Hire\"][\"brand:wikidata\"=\"Q63557330\"][\"name\"=\"Kennards Hire\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "Maxim Crane Works",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Maxim Crane Works\"][\"brand:wikidata\"=\"Q114486980\"][\"name\"=\"Maxim Crane Works\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "Star Rentals",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Star Rentals\"][\"brand:wikidata\"=\"Q114487866\"][\"name\"=\"Star Rentals\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "Sunbelt Rentals",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Sunbelt Rentals\"][\"brand:wikidata\"=\"Q102396721\"][\"name\"=\"Sunbelt Rentals\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "Sunstate Equipment",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Sunstate Equipment\"][\"brand:wikidata\"=\"Q114487875\"][\"name\"=\"Sunstate Equipment\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('plant_hire'),
	title: "United Rentals",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"United Rentals\"][\"brand:wikidata\"=\"Q7889101\"][\"name\"=\"United Rentals\"][\"shop\"=\"plant_hire\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/United_Rentals_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/United_Rentals_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "20 \u0433\u0440\u0430\u043c\u043c",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"20 \u0433\u0440\u0430\u043c\u043c\"][\"name\"=\"20 \u0433\u0440\u0430\u043c\u043c\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "Cignall",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Cignall\"][\"name\"=\"Cignall\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "Nemzeti Doh\u00e1nybolt",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Nemzeti Doh\u00e1nybolt\"][\"brand:wikidata\"=\"Q20639040\"][\"name\"=\"Nemzeti Doh\u00e1nybolt\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "Smoke",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Smoke\"][\"name\"=\"Smoke\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "T-ZONE",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"T-ZONE\"][\"brand:wikidata\"=\"Q115111848\"][\"name\"=\"T-ZONE\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "Tabac Presse",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Tabac Presse\"][\"name\"=\"Tabac Presse\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "Tabacs",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Tabacs\"][\"name\"=\"Tabacs\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "Tabaktrafik",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Tabaktrafik\"][\"name\"=\"Tabaktrafik\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "TRAFICON",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"TRAFICON\"][\"brand:wikidata\"=\"Q67807570\"][\"name\"=\"TRAFICON\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "Wolsdorff",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Wolsdorff\"][\"brand:wikidata\"=\"Q108131193\"][\"name\"=\"Wolsdorff\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('tobacco'),
	title: "\u0422\u0430\u0431\u0430\u043a\u0435\u0440\u043a\u0430",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0422\u0430\u0431\u0430\u043a\u0435\u0440\u043a\u0430\"][\"brand:wikidata\"=\"Q121727302\"][\"name\"=\"\u0422\u0430\u0431\u0430\u043a\u0435\u0440\u043a\u0430\"][\"shop\"=\"tobacco\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
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