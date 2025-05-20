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
        }
    ];
}