import { getTranslation } from '../../i18n/index.js';

export function cultureOverlays() {
    return [
        {
	group: getTranslation('public_bookcase'),
	title: "Bibliocabine",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Bibliocabine\"][\"brand:wikidata\"=\"Q130461884\"][\"name\"=\"Bibliocabina\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Bieb Bieb Aalst",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Bieb Bieb Aalst\"][\"name\"=\"Bieb Bieb\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Boekentil (Stad Leuven)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Boekentil\"][\"brand:wikidata\"=\"Q118958\"][\"name\"=\"Boekentil\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Leuven.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Leuven.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Bo\u00eete \u00e0 lire",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Bo\u00eete \u00e0 lire\"][\"name\"=\"Bo\u00eete \u00e0 lire\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "B\u00fccherh\u00e4uschen (Seiteneinsteiger e.V.)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"books\"=\"children\"][\"brand\"=\"B\u00fccherh\u00e4uschen\"][\"brand:wikidata\"=\"Q1589627\"][\"name\"=\"B\u00fccherh\u00e4uschen\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/SAGA_Unternehmensgruppe_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/SAGA_Unternehmensgruppe_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Cabane \u00e0 livres",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Cabane \u00e0 livres\"][\"name\"=\"Cabane \u00e0 livres\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Croque-livres",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"books\"=\"children\"][\"brand\"=\"Croque-livres\"][\"name\"=\"Croque-livres\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Enjoy a book (NMBS/SNCB)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Enjoy a book\"][\"brand:wikidata\"=\"Q524255\"][\"name\"=\"Enjoy a book\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/SNCB_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/SNCB_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Innogy B\u00fccherschrank",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Innogy B\u00fccherschrank\"][\"brand:wikidata\"=\"Q2124721\"][\"name\"=\"Innogy B\u00fccherschrank\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Innogy_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Innogy_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "KinderzwerfboekStation",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"books\"=\"children\"][\"brand\"=\"Kinderzwerfboek\"][\"name\"=\"KinderzwerfboekStation\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Lesekiosk (Foreningen !les)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Lesekiosk\"][\"brand:wikidata\"=\"Q11008642\"][\"name\"=\"Lesekiosk\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Libros Libres",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Libros Libres\"][\"name\"=\"Libros Libres\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Lilliput Library",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Lilliput Libraries\"][\"name\"=\"Lilliput Library\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Little Free Library",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Little Free Library\"][\"brand:wikidata\"=\"Q6650101\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Mercator B\u00fccherschrank",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Mercator B\u00fccherschrank\"][\"brand:wikidata\"=\"Q2349075\"][\"name\"=\"Mercator B\u00fccherschrank\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Stiftung_Mercator_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Stiftung_Mercator_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Minibib Torhout",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Minibib Torhout\"][\"brand:wikidata\"=\"Q270633\"][\"name\"=\"Minibib\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Torhout_-_City_hall_1.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Torhout_-_City_hall_1.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Minibieb",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Minibieb\"][\"name\"=\"Minibieb\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "\u00d6ffentlicher B\u00fccherschrank",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"\u00d6ffentlicher B\u00fccherschrank\"][\"name\"=\"\u00d6ffentlicher B\u00fccherschrank\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Official BookCrossing Zone (OBCZ)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"BookCrossing\"][\"brand:wikidata\"=\"Q324286\"][\"name\"=\"OBCZ\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Leipzig_Bookcrossing.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Leipzig_Bookcrossing.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "RWE B\u00fccherschrank",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"RWE B\u00fccherschrank\"][\"brand:wikidata\"=\"Q138133\"][\"name\"=\"RWE B\u00fccherschrank\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/RWE_Logo_2018.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/RWE_Logo_2018.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Street Library",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Street Library\"][\"brand:wikidata\"=\"Q110910587\"][\"name\"=\"Street Library\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "Westenergie B\u00fccherschrank",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"Westenergie B\u00fccherschrank\"][\"brand:wikidata\"=\"Q104871107\"][\"name\"=\"Westenergie B\u00fccherschrank\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Westenergie_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Westenergie_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('public_bookcase'),
	title: "\u05e1\u05e4\u05e8\u05d9\u05d9\u05ea \u05e9\u05d1\u05d9\u05dc \u05d9\u05e9\u05e8\u05d0\u05dc (Israel National Trail Library)",
    query: "[out:json][timeout:25];(nwr[\"amenity\"=\"public_bookcase\"][\"brand\"=\"\u05e1\u05e4\u05e8\u05d9\u05d9\u05ea \u05e9\u05d1\u05d9\u05dc \u05d9\u05e9\u05e8\u05d0\u05dc\"][\"brand:en\"=\"Israel National Trail Library\"][\"brand:he\"=\"\u05e1\u05e4\u05e8\u05d9\u05d9\u05ea \u05e9\u05d1\u05d9\u05dc \u05d9\u05e9\u05e8\u05d0\u05dc\"][\"brand:wikidata\"=\"Q583897\"][\"colour\"=\"white;blue;orange\"][\"name\"=\"\u05e1\u05e4\u05e8\u05d9\u05d9\u05ea \u05e9\u05d1\u05d9\u05dc\"][\"name:en\"=\"Trail Library\"][\"name:he\"=\"\u05e1\u05e4\u05e8\u05d9\u05d9\u05ea \u05e9\u05d1\u05d9\u05dc\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Israel_National_Trail_east_Wadi_Dishon.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Israel_National_Trail_east_Wadi_Dishon.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
   }
},
{
    group: getTranslation('freemasonry'),
	title: "The Grand Lodge of Tennessee",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"The Grand Lodge of Tennessee\"][\"brand:wikidata\"=\"Q107473613\"][\"club\"=\"freemasonry\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('anime'),
	title: "\u30a2\u30cb\u30e1\u30a4\u30c8",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30a2\u30cb\u30e1\u30a4\u30c8\"][\"brand:en\"=\"Animate\"][\"brand:ja\"=\"\u30a2\u30cb\u30e1\u30a4\u30c8\"][\"brand:wikidata\"=\"Q1041890\"][\"name\"=\"\u30a2\u30cb\u30e1\u30a4\u30c8\"][\"name:en\"=\"Animate\"][\"name:ja\"=\"\u30a2\u30cb\u30e1\u30a4\u30c8\"][\"shop\"=\"anime\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Animate_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Animate_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('anime'),
	title: "\u30b1\u30a4\u30fb\u30d6\u30c3\u30af\u30b9",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30b1\u30a4\u30fb\u30d6\u30c3\u30af\u30b9\"][\"brand:en\"=\"K-BOOKS\"][\"brand:ja\"=\"\u30b1\u30a4\u30fb\u30d6\u30c3\u30af\u30b9\"][\"brand:wikidata\"=\"Q11227310\"][\"name\"=\"\u30b1\u30a4\u30fb\u30d6\u30c3\u30af\u30b9\"][\"name:en\"=\"K-BOOKS\"][\"name:ja\"=\"\u30b1\u30a4\u30fb\u30d6\u30c3\u30af\u30b9\"][\"shop\"=\"anime\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/KBooks_Logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/KBooks_Logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('anime'),
	title: "\u30b8\u30e3\u30f3\u30d7\u30b7\u30e7\u30c3\u30d7",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30b8\u30e3\u30f3\u30d7\u30b7\u30e7\u30c3\u30d7\"][\"brand:en\"=\"Jump Shop\"][\"brand:ja\"=\"\u30b8\u30e3\u30f3\u30d7\u30b7\u30e7\u30c3\u30d7\"][\"brand:wikidata\"=\"Q11310200\"][\"name\"=\"\u30b8\u30e3\u30f3\u30d7\u30b7\u30e7\u30c3\u30d7\"][\"name:en\"=\"Jump Shop\"][\"name:ja\"=\"\u30b8\u30e3\u30f3\u30d7\u30b7\u30e7\u30c3\u30d7\"][\"shop\"=\"anime\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('anime'),
	title: "\u30dd\u30b1\u30e2\u30f3\u30bb\u30f3\u30bf\u30fc",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30dd\u30b1\u30e2\u30f3\u30bb\u30f3\u30bf\u30fc\"][\"brand:en\"=\"Pok\u00e9mon Center\"][\"brand:ja\"=\"\u30dd\u30b1\u30e2\u30f3\u30bb\u30f3\u30bf\u30fc\"][\"brand:wikidata\"=\"Q89673816\"][\"name\"=\"\u30dd\u30b1\u30e2\u30f3\u30bb\u30f3\u30bf\u30fc\"][\"name:en\"=\"Pok\u00e9mon Center\"][\"name:ja\"=\"\u30dd\u30b1\u30e2\u30f3\u30bb\u30f3\u30bf\u30fc\"][\"shop\"=\"anime\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Pokemon_centre.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Pokemon_centre.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('anime'),
	title: "\u307e\u3093\u3060\u3089\u3051",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u307e\u3093\u3060\u3089\u3051\"][\"brand:en\"=\"Mandarake\"][\"brand:ja\"=\"\u307e\u3093\u3060\u3089\u3051\"][\"brand:wikidata\"=\"Q6747833\"][\"name\"=\"\u307e\u3093\u3060\u3089\u3051\"][\"name:en\"=\"Mandarake\"][\"name:ja\"=\"\u307e\u3093\u3060\u3089\u3051\"][\"shop\"=\"anime\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mandarake_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mandarake_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('anime'),
	title: "\u3089\u3057\u3093\u3070\u3093",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u3089\u3057\u3093\u3070\u3093\"][\"brand:en\"=\"Lashinbang\"][\"brand:ja\"=\"\u3089\u3057\u3093\u3070\u3093\"][\"brand:wikidata\"=\"Q11281322\"][\"name\"=\"\u3089\u3057\u3093\u3070\u3093\"][\"name:en\"=\"Lashinbang\"][\"name:ja\"=\"\u3089\u3057\u3093\u3070\u3093\"][\"shop\"=\"anime\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('art'),
	title: "DeSerres",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"DeSerres\"][\"brand:wikidata\"=\"Q3020049\"][\"name\"=\"DeSerres\"][\"shop\"=\"art\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('art'),
	title: "Lumas",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Lumas\"][\"brand:wikidata\"=\"Q1452381\"][\"name\"=\"Lumas\"][\"shop\"=\"art\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('art'),
	title: "YellowKorner",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"YellowKorner\"][\"brand:wikidata\"=\"Q3572115\"][\"name\"=\"YellowKorner\"][\"shop\"=\"art\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Admiral Sportwetten",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Admiral Sportwetten\"][\"brand:wikidata\"=\"Q359138\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "ATG",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"ATG\"][\"brand:wikidata\"=\"Q4668637\"][\"name\"=\"ATG\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Bar One Racing",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Bar One Racing\"][\"brand:wikidata\"=\"Q113045943\"][\"name\"=\"Bar One Racing\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "BetBoom",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"BetBoom\"][\"name\"=\"BetBoom\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Betcity",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Betcity\"][\"name\"=\"Betcity\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Betfred",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Betfred\"][\"brand:wikidata\"=\"Q4897425\"][\"name\"=\"Betfred\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/New-betfred-logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/New-betfred-logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "BoyleSports",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"BoyleSports\"][\"brand:wikidata\"=\"Q56760280\"][\"name\"=\"BoyleSports\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Boylesports_logo_blue_bg.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Boylesports_logo_blue_bg.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Casa Pariurilor",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Casa Pariurilor\"][\"name\"=\"Casa Pariurilor\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Coral",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Coral\"][\"brand:wikidata\"=\"Q54621344\"][\"name\"=\"Coral\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "efbet",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"efbet\"][\"brand:wikidata\"=\"Q25484853\"][\"name\"=\"efbet\"][\"name:bg\"=\"\u0435\u0444\u0431\u0435\u0442\"][\"name:en\"=\"efbet\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Eurobet",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Eurobet\"][\"brand:wikidata\"=\"Q21190011\"][\"name\"=\"Eurobet\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Eurobet_Logo1.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eurobet_Logo1.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Fortuna",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Fortuna\"][\"brand:wikidata\"=\"Q12016781\"][\"name\"=\"Fortuna\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Praha_Nove_Mesto_Karlovo_namesti_Fortuna.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Praha_Nove_Mesto_Karlovo_namesti_Fortuna.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "GoldBet",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"GoldBet\"][\"brand:wikidata\"=\"Q119972678\"][\"name\"=\"GoldBet\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "JenningsBet",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"JenningsBet\"][\"brand:wikidata\"=\"Q112925339\"][\"name\"=\"JenningsBet\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Joe Jennings",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Joe Jennings\"][\"brand:wikidata\"=\"Q113499916\"][\"name\"=\"Joe Jennings\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Kiosque LONASE",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Kiosque LONASE\"][\"name\"=\"Kiosque LONASE\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Ladbrokes",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Ladbrokes\"][\"brand:wikidata\"=\"Q1799875\"][\"name\"=\"Ladbrokes\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ladbrokes_Logo2.gif",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ladbrokes_Logo2.gif",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Meridianbet (Malta/\u0421\u0440\u0431\u0438\u0458\u0430)",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Meridianbet\"][\"brand:wikidata\"=\"Q97647150\"][\"name\"=\"Meridianbet\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Meridianbet (Tanzania)",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Meridianbet\"][\"brand:wikidata\"=\"Q97669809\"][\"name\"=\"Meridianbet\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Mozzart",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Mozzart\"][\"name\"=\"Mozzart\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Nik\u00e9",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Nik\u00e9\"][\"brand:wikidata\"=\"Q12772537\"][\"name\"=\"Nik\u00e9\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Nik\u00e9_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Nik\u00e9_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Paddy Power",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Paddy Power\"][\"brand:wikidata\"=\"Q3888718\"][\"name\"=\"Paddy Power\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Paddypowerplc.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Paddypowerplc.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "SNAI",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"SNAI\"][\"brand:wikidata\"=\"Q3943772\"][\"name\"=\"SNAI\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Stanleybet",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Stanleybet\"][\"brand:wikidata\"=\"Q25466489\"][\"name\"=\"Stanleybet\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Stanleybet_logo_international.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Stanleybet_logo_international.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "STS",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"STS\"][\"name\"=\"STS\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Superbet",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Superbet\"][\"brand:wikidata\"=\"Q61082636\"][\"name\"=\"Superbet\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Superbet_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Superbet_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "TAB (Australia)",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"TAB\"][\"brand:wikidata\"=\"Q110288149\"][\"name\"=\"TAB\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "TAB (New Zealand)",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"TAB\"][\"brand:wikidata\"=\"Q110288070\"][\"name\"=\"TAB\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Tipico",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Tipico\"][\"brand:wikidata\"=\"Q15851003\"][\"name\"=\"Tipico\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Tipico_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tipico_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "Tipsport",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Tipsport\"][\"brand:wikidata\"=\"Q7808973\"][\"name\"=\"Tipsport\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Jilemnice_Ke_Stadionu_Tipsport.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Jilemnice_Ke_Stadionu_Tipsport.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "William Hill",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"William Hill\"][\"brand:wikidata\"=\"Q4053147\"][\"name\"=\"William Hill\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/William_Hill_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/William_Hill_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "\u039f\u03a0\u0391\u03a0",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u039f\u03a0\u0391\u03a0\"][\"brand:wikidata\"=\"Q2007823\"][\"name\"=\"\u039f\u03a0\u0391\u03a0\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "\u041b\u0438\u0433\u0430 \u0441\u0442\u0430\u0432\u043e\u043a",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u041b\u0438\u0433\u0430 \u0441\u0442\u0430\u0432\u043e\u043a\"][\"brand:en\"=\"Liga Stavok\"][\"brand:ru\"=\"\u041b\u0438\u0433\u0430 \u0441\u0442\u0430\u0432\u043e\u043a\"][\"brand:wikidata\"=\"Q6545804\"][\"name\"=\"\u041b\u0438\u0433\u0430 \u0441\u0442\u0430\u0432\u043e\u043a\"][\"name:en\"=\"Liga Stavok\"][\"name:ru\"=\"\u041b\u0438\u0433\u0430 \u0441\u0442\u0430\u0432\u043e\u043a\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('bookmaker'),
	title: "\u0424\u043e\u043d\u0431\u0435\u0442",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0424\u043e\u043d\u0431\u0435\u0442\"][\"brand:en\"=\"Fonbet\"][\"brand:ru\"=\"\u0424\u043e\u043d\u0431\u0435\u0442\"][\"brand:wikidata\"=\"Q49137910\"][\"name\"=\"\u0424\u043e\u043d\u0431\u0435\u0442\"][\"name:en\"=\"Fonbet\"][\"name:ru\"=\"\u0424\u043e\u043d\u0431\u0435\u0442\"][\"shop\"=\"bookmaker\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Fonbet_logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Fonbet_logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Akademibokhandeln",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Akademibokhandeln\"][\"brand:wikidata\"=\"Q10403918\"][\"name\"=\"Akademibokhandeln\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Akademibokhandeln_Smedjegatan.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Akademibokhandeln_Smedjegatan.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Akateeminen Kirjakauppa",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Akateeminen Kirjakauppa\"][\"brand:wikidata\"=\"Q10403942\"][\"name\"=\"Akateeminen Kirjakauppa\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Akateeminen_Kirjakauppa.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Akateeminen_Kirjakauppa.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "AKO",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"AKO\"][\"brand:wikidata\"=\"Q2159963\"][\"name\"=\"AKO\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Alpha Buchhandlung",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Alpha Buchhandlung\"][\"brand:wikidata\"=\"Q294493\"][\"name\"=\"Alpha Buchhandlung\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Amazon Books",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Amazon Books\"][\"brand:wikidata\"=\"Q22906322\"][\"name\"=\"Amazon Books\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_Books_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_Books_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Ark bokhandel",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Ark bokhandel\"][\"brand:wikidata\"=\"Q11958706\"][\"name\"=\"Ark\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ark01.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ark01.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Asia Books",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Asia Books\"][\"brand:wikidata\"=\"Q4806347\"][\"name\"=\"Asia Books\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Bargain Books",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Bargain Books\"][\"brand:wikidata\"=\"Q116741024\"][\"name\"=\"Bargain Books\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Barnes & Noble",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Barnes & Noble\"][\"brand:wikidata\"=\"Q795454\"][\"name\"=\"Barnes & Noble\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Barnes_and_Noble_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Barnes_and_Noble_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Barnes & Noble College",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Barnes & Noble College\"][\"brand:wikidata\"=\"Q4861508\"][\"name\"=\"Barnes & Noble College\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Bertrand",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Bertrand\"][\"brand:wikidata\"=\"Q1866547\"][\"name\"=\"Bertrand\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Bertrand.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Bertrand.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Boekenvoordeel",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Boekenvoordeel\"][\"brand:wikidata\"=\"Q3345649\"][\"name\"=\"Boekenvoordeel\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Boekenvoordeel,_Deventer_(2019).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Boekenvoordeel,_Deventer_(2019).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Bog & id\u00e9",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Bog & id\u00e9\"][\"brand:wikidata\"=\"Q12303981\"][\"name\"=\"Bog & id\u00e9\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bog_&_ide.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bog_&_ide.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Bonito",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Bonito\"][\"brand:wikidata\"=\"Q113308389\"][\"name\"=\"Bonito\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Books-A-Million",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Books-A-Million\"][\"brand:wikidata\"=\"Q4943266\"][\"name\"=\"Books-A-Million\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Booktrading",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Booktrading\"][\"brand:wikidata\"=\"Q124151521\"][\"name\"=\"Booktrading\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Bruna",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Bruna\"][\"brand:wikidata\"=\"Q3317555\"][\"name\"=\"Bruna\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bruna_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bruna_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "B\u00fccher Pustet",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"B\u00fccher Pustet\"][\"brand:wikidata\"=\"Q1461605\"][\"name\"=\"B\u00fccher Pustet\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Buchhandlung Walther K\u00f6nig",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Buchhandlung Walther K\u00f6nig\"][\"brand:wikidata\"=\"Q998441\"][\"name\"=\"Buchhandlung Walther K\u00f6nig\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Buchhandlung_Walther_K\u00f6nig_K\u00f6ln_(0637-39).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Buchhandlung_Walther_K\u00f6nig_K\u00f6ln_(0637-39).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "C\u0103rture\u0219ti",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"C\u0103rture\u0219ti\"][\"brand:wikidata\"=\"Q12726202\"][\"name\"=\"C\u0103rture\u0219ti\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Casa del Libro",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Casa del Libro\"][\"brand:wikidata\"=\"Q5755514\"][\"name\"=\"Casa del Libro\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Casa_del_Libro_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Casa_del_Libro_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Chapters",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Chapters\"][\"brand:wikidata\"=\"Q5073540\"][\"name\"=\"Chapters\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Chapters_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Chapters_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Christian Science Reading Room",
    query: "[out:json][timeout:25];(nwr[\"books\"=\"religion\"][\"brand\"=\"Christian Science Reading Room\"][\"brand:wikidata\"=\"Q5110122\"][\"name\"=\"Christian Science Reading Room\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/5054_christian-science-reading-room-e.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/5054_christian-science-reading-room-e.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Ciela",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Ciela\"][\"brand:wikidata\"=\"Q124151518\"][\"name\"=\"Ciela\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Coles",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Coles\"][\"brand:wikidata\"=\"Q5144641\"][\"name\"=\"Coles\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Coles_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Coles_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Crossword Bookstores",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Crossword Bookstores\"][\"brand:wikidata\"=\"Q5188909\"][\"name\"=\"Crossword Bookstores\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Cultura",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Cultura\"][\"brand:wikidata\"=\"Q3007154\"][\"name\"=\"Cultura\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "CUM Books",
    query: "[out:json][timeout:25];(nwr[\"books\"=\"religion\"][\"brand\"=\"CUM Books\"][\"brand:wikidata\"=\"Q128930625\"][\"name\"=\"CUM Books\"][\"religion\"=\"christian\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "D&R",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"D&R\"][\"brand:wikidata\"=\"Q27431235\"][\"name\"=\"D&R\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Inside_of_D&R_Book_Store.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Inside_of_D&R_Book_Store.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Daunt Books",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Daunt Books\"][\"brand:wikidata\"=\"Q5228057\"][\"name\"=\"Daunt Books\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Daunt_Books's_famous_gallery.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Daunt_Books's_famous_gallery.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Dedalus",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Dedalus\"][\"brand:wikidata\"=\"Q113308417\"][\"name\"=\"Dedalus\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Delfi",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0414\u0435\u043b\u0444\u0438\"][\"brand:sr\"=\"\u0414\u0435\u043b\u0444\u0438\"][\"brand:sr-Latn\"=\"Delfi\"][\"brand:wikidata\"=\"Q62081796\"][\"name\"=\"\u0414\u0435\u043b\u0444\u0438\"][\"name:sr\"=\"\u0414\u0435\u043b\u0444\u0438\"][\"name:sr-Latn\"=\"Delfi\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Delfi_knji\u017eara_Milo\u0161_Crnjanski.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Delfi_knji\u017eara_Milo\u0161_Crnjanski.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Dymocks",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Dymocks\"][\"brand:wikidata\"=\"Q1280883\"][\"name\"=\"Dymocks\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Dym_IFC.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Dym_IFC.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Eason",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Eason\"][\"brand:wikidata\"=\"Q3046482\"][\"name\"=\"Eason\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Eason.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eason.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Empik",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Empik\"][\"brand:wikidata\"=\"Q3045978\"][\"name\"=\"Empik\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Empik.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Empik.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Exclusive Books",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Exclusive Books\"][\"brand:wikidata\"=\"Q5419679\"][\"name\"=\"Exclusive Books\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Foyles",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Foyles\"][\"brand:wikidata\"=\"Q1440267\"][\"name\"=\"Foyles\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Foyles_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Foyles_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "France Loisirs",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"France Loisirs\"][\"brand:wikidata\"=\"Q3080726\"][\"name\"=\"France Loisirs\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Funside",
    query: "[out:json][timeout:25];(nwr[\"books\"=\"comic;manga\"][\"brand\"=\"Funside\"][\"brand:wikidata\"=\"Q131386237\"][\"name\"=\"Funside\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Gandhi",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Gandhi\"][\"brand:wikidata\"=\"Q17071066\"][\"name\"=\"Gandhi\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Giunti al Punto",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Giunti al Punto\"][\"brand:wikidata\"=\"Q76505309\"][\"name\"=\"Giunti al Punto\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Gramedia",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Gramedia\"][\"brand:wikidata\"=\"Q19646130\"][\"name\"=\"Gramedia\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Gramedia_wordmark.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Gramedia_wordmark.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Half Price Books",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Half Price Books\"][\"brand:wikidata\"=\"Q5641744\"][\"name\"=\"Half Price Books\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HPB_Dallas_NWH_20100329.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HPB_Dallas_NWH_20100329.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Higginbotham's",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Higginbotham's\"][\"brand:wikidata\"=\"Q1572944\"][\"name\"=\"Higginbotham's\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Higginbothams.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Higginbothams.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Hudson Booksellers",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Hudson Booksellers\"][\"brand:wikidata\"=\"Q111534550\"][\"name\"=\"Hudson Booksellers\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Hudson_Booksellers_logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hudson_Booksellers_logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Hugendubel",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Hugendubel\"][\"brand:wikidata\"=\"Q1634142\"][\"name\"=\"Hugendubel\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Hugendubel-Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hugendubel-Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Indigo",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"!ndigo\"][\"brand\"=\"Indigo\"][\"brand:wikidata\"=\"Q2477358\"][\"name\"=\"Indigo\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Indigo_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Indigo_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Jokers",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Jokers\"][\"brand:wikidata\"=\"Q27801057\"][\"name\"=\"Jokers\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Kanzelsberger",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Kanzelsberger\"][\"brand:wikidata\"=\"Q8531793\"][\"name\"=\"Kanzelsberger\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Praha_Vrsovice_Vrsovicka_70_Kanzelsberger.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Praha_Vrsovice_Vrsovicka_70_Kanzelsberger.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Kinokuniya",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Kinokuniya\"][\"brand:wikidata\"=\"Q703227\"][\"name\"=\"Kinokuniya\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\u7d00\u4f0a\u570b\u5c4b\u66f8\u5e97_(3574888639).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\u7d00\u4f0a\u570b\u5c4b\u66f8\u5e97_(3574888639).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "La Feltrinelli",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"La Feltrinelli\"][\"brand:wikidata\"=\"Q96311190\"][\"name\"=\"La Feltrinelli\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/LaFeltrinelli_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/LaFeltrinelli_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "La Procure",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"La Procure\"][\"brand:wikidata\"=\"Q3211977\"][\"name\"=\"La Procure\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo-La-Procure.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo-La-Procure.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Laguna",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u041b\u0430\u0433\u0443\u043d\u0430\"][\"brand:sr\"=\"\u041b\u0430\u0433\u0443\u043d\u0430\"][\"brand:sr-Latn\"=\"Laguna\"][\"brand:wikidata\"=\"Q12754418\"][\"name\"=\"\u041b\u0430\u0433\u0443\u043d\u0430\"][\"name:sr\"=\"\u041b\u0430\u0433\u0443\u043d\u0430\"][\"name:sr-Latn\"=\"Laguna\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Laguna_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Laguna_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Leitura",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"Livraria Leitura\"][\"brand\"=\"Leitura\"][\"brand:wikidata\"=\"Q6176628\"][\"name\"=\"Leitura\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Libris",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Libris\"][\"brand:wikidata\"=\"Q2933427\"][\"name\"=\"Libris\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Libro",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Libro\"][\"brand:wikidata\"=\"Q1823138\"][\"name\"=\"Libro\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Libro_Logo_(seit_2018).svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Libro_Logo_(seit_2018).svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "L\u00fcthy",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"L\u00fcthy Balmer Stocker\"][\"brand:wikidata\"=\"Q14018409\"][\"name\"=\"L\u00fcthy\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Martinus",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Martinus\"][\"brand:wikidata\"=\"Q15089074\"][\"name\"=\"Martinus\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Maxilivres",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Maxilivres\"][\"brand:wikidata\"=\"Q3302434\"][\"name\"=\"Maxilivres\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Mayersche",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Mayersche\"][\"brand:wikidata\"=\"Q1462383\"][\"name\"=\"Mayersche\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mayersche.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mayersche.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Mondadori",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Mondadori\"][\"brand:wikidata\"=\"Q85355\"][\"name\"=\"Mondadori\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Mondadori_group_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mondadori_group_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Morawa",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Morawa\"][\"brand:wikidata\"=\"Q1947238\"][\"name\"=\"Morawa\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Morawa_Holding_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Morawa_Holding_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "National Book Store",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"National Book Store\"][\"brand:wikidata\"=\"Q6971094\"][\"name\"=\"National Book Store\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Norli",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Norli\"][\"brand:wikidata\"=\"Q1999199\"][\"name\"=\"Norli\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Norli.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Norli.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Orange",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Orange\"][\"brand:wikidata\"=\"Q124151524\"][\"name\"=\"Orange\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Orell F\u00fcssli",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Orell F\u00fcssli\"][\"brand:wikidata\"=\"Q1511140\"][\"name\"=\"Orell F\u00fcssli\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Orell_F\u00fcssli.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Orell_F\u00fcssli.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Osiander",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Osiander\"][\"brand:wikidata\"=\"Q1800686\"][\"name\"=\"Osiander\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Oxfam Bookshop",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Oxfam Bookshop\"][\"brand:wikidata\"=\"Q7115196\"][\"name\"=\"Oxfam Bookshop\"][\"second_hand\"=\"only\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Oxford Bookstore",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Oxford Bookstore\"][\"brand:wikidata\"=\"Q7115252\"][\"name\"=\"Oxford Bookstore\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Pandayan Bookshop",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Pandayan Bookshop\"][\"brand:wikidata\"=\"Q120220745\"][\"name\"=\"Pandayan Bookshop\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Panta Rhei",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Panta Rhei\"][\"brand:wikidata\"=\"Q93431299\"][\"name\"=\"Panta Rhei\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Panta_Rhei_Logo.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Panta_Rhei_Logo.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Paper Plus",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Paper Plus\"][\"brand:wikidata\"=\"Q110437236\"][\"name\"=\"Paper Plus\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Popular",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Popular\"][\"brand:en\"=\"Popular\"][\"brand:wikidata\"=\"Q4167785\"][\"brand:zh\"=\"\u5927\u4f17\u4e66\u5c40\"][\"name\"=\"Popular\"][\"name:en\"=\"Popular\"][\"name:zh\"=\"\u5927\u4f17\u4e66\u5c40\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/700_Nathan_Road_Popular_Book_Store_2018.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/700_Nathan_Road_Popular_Book_Store_2018.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Porr\u00faa",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Porr\u00faa\"][\"brand:wikidata\"=\"Q981374\"][\"name\"=\"Porr\u00faa\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/PorruaBookstoreRepArgJusSierra.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/PorruaBookstoreRepArgJusSierra.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Press & Books",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Press & Books\"][\"brand:wikidata\"=\"Q100407277\"][\"name\"=\"Press & Books\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Press_&_Books.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_Press_&_Books.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "QBD Books",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"QBD Books\"][\"brand:wikidata\"=\"Q7270909\"][\"name\"=\"QBD Books\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Qbd-the-bookshop-logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Qbd-the-bookshop-logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Remzi Kitabevi",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Remzi Kitabevi\"][\"brand:wikidata\"=\"Q2143214\"][\"name\"=\"Remzi Kitabevi\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Rupprecht",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Rupprecht\"][\"brand:wikidata\"=\"Q89431762\"][\"name\"=\"Rupprecht\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Seagull Book",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Seagull Book\"][\"brand:wikidata\"=\"Q7440458\"][\"name\"=\"Seagull Book\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Seagull_Book_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Seagull_Book_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Slu\u017ebeni glasnik",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0421\u043b\u0443\u0436\u0431\u0435\u043d\u0438 \u0433\u043b\u0430\u0441\u043d\u0438\u043a\"][\"brand:sr\"=\"\u0421\u043b\u0443\u0436\u0431\u0435\u043d\u0438 \u0433\u043b\u0430\u0441\u043d\u0438\u043a\"][\"brand:sr-Latn\"=\"Slu\u017ebeni glasnik\"][\"brand:wikidata\"=\"Q110045562\"][\"name\"=\"\u0421\u043b\u0443\u0436\u0431\u0435\u043d\u0438 \u0433\u043b\u0430\u0441\u043d\u0438\u043a\"][\"name:sr\"=\"\u0421\u043b\u0443\u0436\u0431\u0435\u043d\u0438 \u0433\u043b\u0430\u0441\u043d\u0438\u043a\"][\"name:sr-Latn\"=\"Slu\u017ebeni glasnik\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Standaard Boekhandel",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Standaard Boekhandel\"][\"brand:wikidata\"=\"Q3496554\"][\"name\"=\"Standaard Boekhandel\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Rijhuis_Peperstraat_24.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Rijhuis_Peperstraat_24.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Suomalainen Kirjakauppa",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Suomalainen Kirjakauppa\"][\"brand:wikidata\"=\"Q7641808\"][\"name\"=\"Suomalainen Kirjakauppa\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Suomalainen_Kirjakauppa.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Suomalainen_Kirjakauppa.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u015awiat Ksi\u0105\u017cki",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u015awiat Ksi\u0105\u017cki\"][\"brand:wikidata\"=\"Q9396199\"][\"name\"=\"\u015awiat Ksi\u0105\u017cki\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_\u015awiata_Ksi\u0105\u017cki_-_znaczek.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_\u015awiata_Ksi\u0105\u017cki_-_znaczek.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Thalia",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Thalia\"][\"brand:wikidata\"=\"Q2408854\"][\"name\"=\"Thalia\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Thalia_Logo_10.2019.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Thalia_Logo_10.2019.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "The Readshop",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"The Readshop\"][\"brand:wikidata\"=\"Q114905224\"][\"name\"=\"The Readshop\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Readshop_in_Rijnsburg.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Readshop_in_Rijnsburg.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "The Works",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"The Works\"][\"brand:wikidata\"=\"Q7775853\"][\"name\"=\"The Works\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Works_-_New_Street_-_geograph.org.uk_-_1700433.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Works_-_New_Street_-_geograph.org.uk_-_1700433.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "TSUTAYA",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"TSUTAYA\"][\"brand:wikidata\"=\"Q5193457\"][\"name\"=\"TSUTAYA\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Culture_Convenience_Club_(CCC)_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Culture_Convenience_Club_(CCC)_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Ubik",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Ubik\"][\"brand:wikidata\"=\"Q103169450\"][\"name\"=\"Ubik\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Van Schaik",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Van Schaik\"][\"brand:wikidata\"=\"Q116741158\"][\"name\"=\"Van Schaik\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Vulkan",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0412\u0443\u043b\u043a\u0430\u043d\"][\"brand:sr\"=\"\u0412\u0443\u043b\u043a\u0430\u043d\"][\"brand:sr-Latn\"=\"Vulkan\"][\"brand:wikidata\"=\"Q114735398\"][\"name\"=\"\u0412\u0443\u043b\u043a\u0430\u043d\"][\"name:sr\"=\"\u0412\u0443\u043b\u043a\u0430\u043d\"][\"name:sr-Latn\"=\"Vulkan\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Waterstones",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Waterstones\"][\"brand:wikidata\"=\"Q151779\"][\"name\"=\"Waterstones\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Waterstone's.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Waterstone's.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Weltbild",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Weltbild\"][\"brand:wikidata\"=\"Q883522\"][\"name\"=\"Weltbild\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_weltbild_de.gif",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_weltbild_de.gif",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "Whitcoulls",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Whitcoulls\"][\"brand:wikidata\"=\"Q7994237\"][\"name\"=\"Whitcoulls\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "WHSmith",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"WHSmith\"][\"brand:wikidata\"=\"Q1548712\"][\"name\"=\"WHSmith\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/WHSmith_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/WHSmith_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "WH\u53f2\u5bc6\u65af",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"WH\u53f2\u5bc6\u65af\"][\"brand:en\"=\"WHSmith\"][\"brand:wikidata\"=\"Q1548712\"][\"brand:zh\"=\"WH\u53f2\u5bc6\u65af\"][\"name\"=\"WH\u53f2\u5bc6\u65af\"][\"name:en\"=\"WHSmith\"][\"name:zh\"=\"WH\u53f2\u5bc6\u65af\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/WHSmith_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/WHSmith_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u0411\u0435\u043b\u043a\u043d\u0456\u0433\u0430",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0411\u0435\u043b\u043a\u043d\u0456\u0433\u0430\"][\"brand:be\"=\"\u0411\u0435\u043b\u043a\u043d\u0456\u0433\u0430\"][\"brand:en\"=\"Belkniga\"][\"brand:ru\"=\"\u0411\u0435\u043b\u043a\u043d\u0438\u0433\u0430\"][\"brand:wikidata\"=\"Q60793563\"][\"name\"=\"\u0411\u0435\u043b\u043a\u043d\u0456\u0433\u0430\"][\"name:be\"=\"\u0411\u0435\u043b\u043a\u043d\u0456\u0433\u0430\"][\"name:en\"=\"Belkniga\"][\"name:ru\"=\"\u0411\u0435\u043b\u043a\u043d\u0438\u0433\u0430\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u0411\u0443\u043a\u0432\u043e\u0435\u0434",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0411\u0443\u043a\u0432\u043e\u0435\u0434\"][\"brand:wikidata\"=\"Q4098549\"][\"name\"=\"\u0411\u0443\u043a\u0432\u043e\u0435\u0434\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u0414\u043e\u043c \u043a\u043d\u0438\u0433\u0438",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0414\u043e\u043c \u043a\u043d\u0438\u0433\u0438\"][\"brand:wikidata\"=\"Q48950742\"][\"name\"=\"\u0414\u043e\u043c \u043a\u043d\u0438\u0433\u0438\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u0404",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0404\"][\"brand:wikidata\"=\"Q12073058\"][\"name\"=\"\u0404\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u041a\u0421\u0414",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u041a\u0421\u0414\"][\"brand:en\"=\"KSD\"][\"brand:uk\"=\"\u041a\u0421\u0414\"][\"brand:wikidata\"=\"Q12129440\"][\"name\"=\"\u041a\u0421\u0414\"][\"name:en\"=\"KSD\"][\"name:uk\"=\"\u041a\u0421\u0414\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u0425\u0435\u043b\u0438\u043a\u043e\u043d",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0425\u0435\u043b\u0438\u043a\u043e\u043d\"][\"brand:wikidata\"=\"Q124151519\"][\"name\"=\"\u0425\u0435\u043b\u0438\u043a\u043e\u043d\"][\"name:bg\"=\"\u0425\u0435\u043b\u0438\u043a\u043e\u043d\"][\"name:en\"=\"Helikon\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u0427\u0438\u0442\u0430\u0439-\u0433\u043e\u0440\u043e\u0434",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0427\u0438\u0442\u0430\u0439-\u0433\u043e\u0440\u043e\u0434\"][\"brand:wikidata\"=\"Q4516645\"][\"name\"=\"\u0427\u0438\u0442\u0430\u0439-\u0433\u043e\u0440\u043e\u0434\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\u0427\u0438\u0442\u0430\u0439-\u0433\u043e\u0440\u043e\u0434.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\u0427\u0438\u0442\u0430\u0439-\u0433\u043e\u0440\u043e\u0434.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u10d1\u10d8\u10d1\u10da\u10e3\u10e1\u10d8",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u10d1\u10d8\u10d1\u10da\u10e3\u10e1\u10d8\"][\"brand:en\"=\"Biblus\"][\"brand:ka\"=\"\u10d1\u10d8\u10d1\u10da\u10e3\u10e1\u10d8\"][\"brand:wikidata\"=\"Q131470008\"][\"name\"=\"\u10d1\u10d8\u10d1\u10da\u10e3\u10e1\u10d8\"][\"name:en\"=\"Biblus\"][\"name:ka\"=\"\u10d1\u10d8\u10d1\u10da\u10e3\u10e1\u10d8\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u10de\u10e0\u10dd\u10e1\u10de\u10d4\u10e0\u10dd\u10e1 \u10ec\u10d8\u10d2\u10dc\u10d4\u10d1\u10d8",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u10de\u10e0\u10dd\u10e1\u10de\u10d4\u10e0\u10dd\u10e1 \u10ec\u10d8\u10d2\u10dc\u10d4\u10d1\u10d8\"][\"brand:en\"=\"Prospero's Books\"][\"brand:ka\"=\"\u10de\u10e0\u10dd\u10e1\u10de\u10d4\u10e0\u10dd\u10e1 \u10ec\u10d8\u10d2\u10dc\u10d4\u10d1\u10d8\"][\"brand:wikidata\"=\"Q131470010\"][\"name\"=\"\u10de\u10e0\u10dd\u10e1\u10de\u10d4\u10e0\u10dd\u10e1 \u10ec\u10d8\u10d2\u10dc\u10d4\u10d1\u10d8\"][\"name:en\"=\"Prospero's Books\"][\"name:ka\"=\"\u10de\u10e0\u10dd\u10e1\u10de\u10d4\u10e0\u10dd\u10e1 \u10ec\u10d8\u10d2\u10dc\u10d4\u10d1\u10d8\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u10e1\u10e3\u10da\u10d0\u10d9\u10d0\u10e3\u10e0\u10d8",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u10e1\u10e3\u10da\u10d0\u10d9\u10d0\u10e3\u10e0\u10d8\"][\"brand:en\"=\"Sulakauri\"][\"brand:ka\"=\"\u10e1\u10e3\u10da\u10d0\u10d9\u10d0\u10e3\u10e0\u10d8\"][\"brand:wikidata\"=\"Q131470009\"][\"name\"=\"\u10e1\u10e3\u10da\u10d0\u10d9\u10d0\u10e3\u10e0\u10d8\"][\"name:en\"=\"Sulakauri\"][\"name:ka\"=\"\u10e1\u10e3\u10da\u10d0\u10d9\u10d0\u10e3\u10e0\u10d8\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u05e1\u05d8\u05d9\u05de\u05e6\u05e7\u05d9",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u05e1\u05d8\u05d9\u05de\u05e6\u05e7\u05d9\"][\"brand:en\"=\"Steimatzky\"][\"brand:he\"=\"\u05e1\u05d8\u05d9\u05de\u05e6\u05e7\u05d9\"][\"brand:wikidata\"=\"Q2903995\"][\"name\"=\"\u05e1\u05d8\u05d9\u05de\u05e6\u05e7\u05d9\"][\"name:en\"=\"Steimatzky\"][\"name:he\"=\"\u05e1\u05d8\u05d9\u05de\u05e6\u05e7\u05d9\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u05e6\u05d5\u05de\u05ea \u05e1\u05e4\u05e8\u05d9\u05dd",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u05e6\u05d5\u05de\u05ea \u05e1\u05e4\u05e8\u05d9\u05dd\"][\"brand:en\"=\"Tzomet Sfarim\"][\"brand:he\"=\"\u05e6\u05d5\u05de\u05ea \u05e1\u05e4\u05e8\u05d9\u05dd\"][\"brand:wikidata\"=\"Q6743833\"][\"name\"=\"\u05e6\u05d5\u05de\u05ea \u05e1\u05e4\u05e8\u05d9\u05dd\"][\"name:en\"=\"Tzomet Sfarm\"][\"name:he\"=\"\u05e6\u05d5\u05de\u05ea \u05e1\u05e4\u05e8\u05d9\u05dd\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/TsometSfarim.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/TsometSfarim.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u0645\u0643\u062a\u0628\u0629 \u0627\u0644\u0639\u0628\u064a\u0643\u0627\u0646",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0645\u0643\u062a\u0628\u0629 \u0627\u0644\u0639\u0628\u064a\u0643\u0627\u0646\"][\"brand:ar\"=\"\u0645\u0643\u062a\u0628\u0629 \u0627\u0644\u0639\u0628\u064a\u0643\u0627\u0646\"][\"brand:en\"=\"ObeikanStores\"][\"brand:wikidata\"=\"Q12244784\"][\"name\"=\"\u0645\u0643\u062a\u0628\u0629 \u0627\u0644\u0639\u0628\u064a\u0643\u0627\u0646\"][\"name:ar\"=\"\u0645\u0643\u062a\u0628\u0629 \u0627\u0644\u0639\u0628\u064a\u0643\u0627\u0646\"][\"name:en\"=\"ObeikanStores\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u0645\u0643\u062a\u0628\u0629 \u062c\u0631\u064a\u0631",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u0645\u0643\u062a\u0628\u0629 \u062c\u0631\u064a\u0631\"][\"brand:ar\"=\"\u0645\u0643\u062a\u0628\u0629 \u062c\u0631\u064a\u0631\"][\"brand:en\"=\"Jarir Bookstore\"][\"brand:wikidata\"=\"Q6160243\"][\"name\"=\"\u0645\u0643\u062a\u0628\u0629 \u062c\u0631\u064a\u0631\"][\"name:ar\"=\"\u0645\u0643\u062a\u0628\u0629 \u062c\u0631\u064a\u0631\"][\"name:en\"=\"Jarir Bookstore\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u3042\u304a\u3044\u66f8\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u3042\u304a\u3044\u66f8\u5e97\"][\"brand:en\"=\"AOI\"][\"brand:ja\"=\"\u3042\u304a\u3044\u66f8\u5e97\"][\"brand:wikidata\"=\"Q11256783\"][\"name\"=\"\u3042\u304a\u3044\u66f8\u5e97\"][\"name:en\"=\"AOI\"][\"name:ja\"=\"\u3042\u304a\u3044\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u30aa\u30ea\u30aa\u30f3\u66f8\u623f",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30aa\u30ea\u30aa\u30f3\u66f8\u623f\"][\"brand:en\"=\"Orion Books\"][\"brand:ja\"=\"\u30aa\u30ea\u30aa\u30f3\u66f8\u623f\"][\"brand:wikidata\"=\"Q11292597\"][\"name\"=\"\u30aa\u30ea\u30aa\u30f3\u66f8\u623f\"][\"name:en\"=\"Orion Books\"][\"name:ja\"=\"\u30aa\u30ea\u30aa\u30f3\u66f8\u623f\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u304f\u307e\u3056\u308f\u66f8\u5e97",
    query: "[out:json][timeout:25];(nwr[\"alt_name:en\"=\"Kumabook\"][\"brand\"=\"\u304f\u307e\u3056\u308f\u66f8\u5e97\"][\"brand:en\"=\"Kumazawa Books\"][\"brand:ja\"=\"\u304f\u307e\u3056\u308f\u66f8\u5e97\"][\"brand:wikidata\"=\"Q11265517\"][\"name\"=\"\u304f\u307e\u3056\u308f\u66f8\u5e97\"][\"name:en\"=\"Kumazawa Books\"][\"name:ja\"=\"\u304f\u307e\u3056\u308f\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Kumazawa_Bookstore.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Kumazawa_Bookstore.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u30b8\u30e5\u30f3\u30af\u5802\u66f8\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30b8\u30e5\u30f3\u30af\u5802\u66f8\u5e97\"][\"brand:en\"=\"Junkudo\"][\"brand:ja\"=\"\u30b8\u30e5\u30f3\u30af\u5802\u66f8\u5e97\"][\"brand:wikidata\"=\"Q3190093\"][\"name\"=\"\u30b8\u30e5\u30f3\u30af\u5802\u66f8\u5e97\"][\"name:en\"=\"Junkudo\"][\"name:ja\"=\"\u30b8\u30e5\u30f3\u30af\u5802\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u3068\u3089\u306e\u3042\u306a",
    query: "[out:json][timeout:25];(nwr[\"books\"=\"comic\"][\"brand\"=\"\u3068\u3089\u306e\u3042\u306a\"][\"brand:en\"=\"Toranoana\"][\"brand:ja\"=\"\u3068\u3089\u306e\u3042\u306a\"][\"brand:wikidata\"=\"Q865297\"][\"name\"=\"\u3068\u3089\u306e\u3042\u306a\"][\"name:en\"=\"Comic Toranoana\"][\"name:ja\"=\"\u3068\u3089\u306e\u3042\u306a\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Toranoana_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Toranoana_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u30d6\u30c3\u30af\u30aa\u30d5",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30d6\u30c3\u30af\u30aa\u30d5\"][\"brand:en\"=\"Book Off\"][\"brand:ja\"=\"\u30d6\u30c3\u30af\u30aa\u30d5\"][\"brand:wikidata\"=\"Q893011\"][\"name\"=\"\u30d6\u30c3\u30af\u30aa\u30d5\"][\"name:en\"=\"Book Off\"][\"name:ja\"=\"\u30d6\u30c3\u30af\u30aa\u30d5\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Bookoff_Corporation_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Bookoff_Corporation_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u30d6\u30c3\u30af\u30d5\u30a1\u30fc\u30b9\u30c8",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30d6\u30c3\u30af\u30d5\u30a1\u30fc\u30b9\u30c8\"][\"brand:en\"=\"Book1st\"][\"brand:ja\"=\"\u30d6\u30c3\u30af\u30d5\u30a1\u30fc\u30b9\u30c8\"][\"brand:wikidata\"=\"Q11334365\"][\"name\"=\"\u30d6\u30c3\u30af\u30d5\u30a1\u30fc\u30b9\u30c8\"][\"name:en\"=\"Book1st\"][\"name:ja\"=\"\u30d6\u30c3\u30af\u30d5\u30a1\u30fc\u30b9\u30c8\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u30e1\u30ed\u30f3\u30d6\u30c3\u30af\u30b9",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30e1\u30ed\u30f3\u30d6\u30c3\u30af\u30b9\"][\"brand:en\"=\"Melonbooks\"][\"brand:ja\"=\"\u30e1\u30ed\u30f3\u30d6\u30c3\u30af\u30b9\"][\"brand:wikidata\"=\"Q10851653\"][\"name\"=\"\u30e1\u30ed\u30f3\u30d6\u30c3\u30af\u30b9\"][\"name:en\"=\"Melonbooks\"][\"name:ja\"=\"\u30e1\u30ed\u30f3\u30d6\u30c3\u30af\u30b9\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Melonbooks_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Melonbooks_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u30ea\u30d6\u30ed",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30ea\u30d6\u30ed\"][\"brand:en\"=\"LIBRO\"][\"brand:ja\"=\"\u30ea\u30d6\u30ed\"][\"brand:wikidata\"=\"Q6542768\"][\"name\"=\"\u30ea\u30d6\u30ed\"][\"name:en\"=\"Libro\"][\"name:ja\"=\"\u30ea\u30d6\u30ed\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u4e09\u7701\u5802\u66f8\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u4e09\u7701\u5802\u66f8\u5e97\"][\"brand:en\"=\"Books Sanseido\"][\"brand:ja\"=\"\u4e09\u7701\u5802\u66f8\u5e97\"][\"brand:wikidata\"=\"Q10866539\"][\"name\"=\"\u4e09\u7701\u5802\u66f8\u5e97\"][\"name:en\"=\"Books Sanseido\"][\"name:ja\"=\"\u4e09\u7701\u5802\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u4e09\u806f\u66f8\u5e97 Joint Publishing",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u4e09\u806f\u66f8\u5e97 Joint Publishing\"][\"brand:en\"=\"Joint Publishing\"][\"brand:wikidata\"=\"Q17012917\"][\"brand:zh\"=\"\u4e09\u806f\u66f8\u5e97\"][\"brand:zh-Hans\"=\"\u4e09\u8054\u4e66\u5e97\"][\"brand:zh-Hant\"=\"\u4e09\u806f\u66f8\u5e97\"][\"name\"=\"\u4e09\u806f\u66f8\u5e97 Joint Publishing\"][\"name:en\"=\"Joint Publishing\"][\"name:zh\"=\"\u4e09\u806f\u66f8\u5e97\"][\"name:zh-Hans\"=\"\u4e09\u8054\u4e66\u5e97\"][\"name:zh-Hant\"=\"\u4e09\u806f\u66f8\u5e97\"][\"operator\"=\"\u806f\u5408\u51fa\u7248\uff08\u96c6\u5718\uff09\u6709\u9650\u516c\u53f8 Sino United Publishing (Holdings) Limited\"][\"operator:en\"=\"Sino United Publishing (Holdings) Limited\"][\"operator:wikidata\"=\"Q15912494\"][\"operator:zh\"=\"\u806f\u5408\u51fa\u7248\uff08\u96c6\u5718\uff09\u6709\u9650\u516c\u53f8\"][\"operator:zh-Hans\"=\"\u8054\u5408\u51fa\u7248\uff08\u96c6\u56e2\uff09\u6709\u9650\u516c\u53f8\"][\"operator:zh-Hant\"=\"\u806f\u5408\u51fa\u7248\uff08\u96c6\u5718\uff09\u6709\u9650\u516c\u53f8\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u4e2d\u4fe1\u4e66\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u4e2d\u4fe1\u4e66\u5e97\"][\"brand:en\"=\"CITIC Books\"][\"brand:wikidata\"=\"Q108178107\"][\"brand:zh\"=\"\u4e2d\u4fe1\u4e66\u5e97\"][\"name\"=\"\u4e2d\u4fe1\u4e66\u5e97\"][\"name:en\"=\"CITIC Books\"][\"name:zh\"=\"\u4e2d\u4fe1\u4e66\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u4e2d\u83ef\u66f8\u5c40 Chung Hwa Book Company",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u4e2d\u83ef\u66f8\u5c40 Chung Hwa Book Company\"][\"brand:en\"=\"Chung Hwa Book Company\"][\"brand:wikidata\"=\"Q10876287\"][\"brand:zh\"=\"\u4e2d\u83ef\u66f8\u5c40\"][\"brand:zh-Hans\"=\"\u4e2d\u534e\u4e66\u5c40\"][\"brand:zh-Hant\"=\"\u4e2d\u83ef\u66f8\u5c40\"][\"name\"=\"\u4e2d\u83ef\u66f8\u5c40 Chung Hwa Book Company\"][\"name:en\"=\"Chung Hwa Book Company\"][\"name:zh\"=\"\u4e2d\u83ef\u66f8\u5c40\"][\"name:zh-Hans\"=\"\u4e2d\u534e\u4e66\u5c40\"][\"name:zh-Hant\"=\"\u4e2d\u83ef\u66f8\u5c40\"][\"operator\"=\"\u806f\u5408\u51fa\u7248\uff08\u96c6\u5718\uff09\u6709\u9650\u516c\u53f8 Sino United Publishing (Holdings) Limited\"][\"operator:en\"=\"Sino United Publishing (Holdings) Limited\"][\"operator:wikidata\"=\"Q15912494\"][\"operator:zh\"=\"\u806f\u5408\u51fa\u7248\uff08\u96c6\u5718\uff09\u6709\u9650\u516c\u53f8\"][\"operator:zh-Hans\"=\"\u8054\u5408\u51fa\u7248\uff08\u96c6\u56e2\uff09\u6709\u9650\u516c\u53f8\"][\"operator:zh-Hant\"=\"\u806f\u5408\u51fa\u7248\uff08\u96c6\u5718\uff09\u6709\u9650\u516c\u53f8\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u4e38\u5584",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u4e38\u5584\"][\"brand:en\"=\"MARUZEN\"][\"brand:ja\"=\"\u4e38\u5584\"][\"brand:wikidata\"=\"Q1906012\"][\"name\"=\"\u4e38\u5584\"][\"name:en\"=\"MARUZEN\"][\"name:ja\"=\"\u4e38\u5584\"][\"official_name\"=\"\u4e38\u5584\u96c4\u677e\u5802\"][\"official_name:en\"=\"Maruzen Yushodo\"][\"official_name:ja\"=\"\u4e38\u5584\u96c4\u677e\u5802\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u5546\u52d9\u5370\u66f8\u9928 The Commercial Press",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u5546\u52d9\u5370\u66f8\u9928 The Commercial Press\"][\"brand:en\"=\"The Commercial Press\"][\"brand:wikidata\"=\"Q10923130\"][\"brand:zh\"=\"\u5546\u52d9\u5370\u66f8\u9928\"][\"brand:zh-Hans\"=\"\u5546\u52a1\u5370\u4e66\u9986\"][\"brand:zh-Hant\"=\"\u5546\u52d9\u5370\u66f8\u9928\"][\"name\"=\"\u5546\u52d9\u5370\u66f8\u9928 The Commercial Press\"][\"name:en\"=\"The Commercial Press\"][\"name:zh\"=\"\u5546\u52d9\u5370\u66f8\u9928\"][\"name:zh-Hans\"=\"\u5546\u52a1\u5370\u4e66\u9986\"][\"name:zh-Hant\"=\"\u5546\u52d9\u5370\u66f8\u9928\"][\"operator\"=\"\u806f\u5408\u51fa\u7248\uff08\u96c6\u5718\uff09\u6709\u9650\u516c\u53f8 Sino United Publishing (Holdings) Limited\"][\"operator:en\"=\"Sino United Publishing (Holdings) Limited\"][\"operator:wikidata\"=\"Q15912494\"][\"operator:zh\"=\"\u806f\u5408\u51fa\u7248\uff08\u96c6\u5718\uff09\u6709\u9650\u516c\u53f8\"][\"operator:zh-Hans\"=\"\u8054\u5408\u51fa\u7248\uff08\u96c6\u56e2\uff09\u6709\u9650\u516c\u53f8\"][\"operator:zh-Hant\"=\"\u806f\u5408\u51fa\u7248\uff08\u96c6\u5718\uff09\u6709\u9650\u516c\u53f8\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u588a\u8173\u77f3\u5716\u66f8\u6587\u5316\u5ee3\u5834",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u588a\u8173\u77f3\u5716\u66f8\u6587\u5316\u5ee3\u5834\"][\"brand:en\"=\"Stepping Stone Bookstore\"][\"brand:wikidata\"=\"Q20687906\"][\"brand:zh\"=\"\u588a\u8173\u77f3\u5716\u66f8\u6587\u5316\u5ee3\u5834\"][\"name\"=\"\u588a\u8173\u77f3\u5716\u66f8\u6587\u5316\u5ee3\u5834\"][\"name:en\"=\"Stepping Stone Bookstore\"][\"name:zh\"=\"\u588a\u8173\u77f3\u5716\u66f8\u6587\u5316\u5ee3\u5834\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u5927\u4f17\u4e66\u5c40",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u5927\u4f17\u4e66\u5c40\"][\"brand:en\"=\"DAZO\"][\"brand:wikidata\"=\"Q108178095\"][\"brand:zh\"=\"\u5927\u4f17\u4e66\u5c40\"][\"name\"=\"\u5927\u4f17\u4e66\u5c40\"][\"name:en\"=\"DAZO\"][\"name:zh\"=\"\u5927\u4f17\u4e66\u5c40\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u5bae\u8107\u66f8\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u5bae\u8107\u66f8\u5e97\"][\"brand:en\"=\"Miyawaki Shoten\"][\"brand:ja\"=\"\u5bae\u8107\u66f8\u5e97\"][\"brand:wikidata\"=\"Q11455237\"][\"name\"=\"\u5bae\u8107\u66f8\u5e97\"][\"name:en\"=\"Miyawaki Shoten\"][\"name:ja\"=\"\u5bae\u8107\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u5f53\u5f53\u9605\u754c\u4e66\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u5f53\u5f53\u9605\u754c\u4e66\u5e97\"][\"brand:en\"=\"Dang Dang Yuejie Bookstore\"][\"brand:wikidata\"=\"Q108178124\"][\"brand:zh\"=\"\u5f53\u5f53\u9605\u754c\u4e66\u5e97\"][\"name\"=\"\u5f53\u5f53\u9605\u754c\u4e66\u5e97\"][\"name:en\"=\"Dang Dang Yuejie Bookstore\"][\"name:zh\"=\"\u5f53\u5f53\u9605\u754c\u4e66\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u6587\u6559\u5802",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u6587\u6559\u5802\"][\"brand:en\"=\"Bunkyodo\"][\"brand:ja\"=\"\u6587\u6559\u5802\"][\"brand:wikidata\"=\"Q11499974\"][\"name\"=\"\u6587\u6559\u5802\"][\"name:en\"=\"Bunkyodo\"][\"name:ja\"=\"\u6587\u6559\u5802\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u65b0\u534e\u4e66\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u65b0\u534e\u4e66\u5e97\"][\"brand:en\"=\"Xinhua Bookstore\"][\"brand:wikidata\"=\"Q6124193\"][\"brand:zh\"=\"\u65b0\u534e\u4e66\u5e97\"][\"name\"=\"\u65b0\u534e\u4e66\u5e97\"][\"name:en\"=\"Xinhua Bookstore\"][\"name:zh\"=\"\u65b0\u534e\u4e66\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\u96c1\u5854_\u8299\u84c9\u65b0\u5929\u5730\u65b0\u534e\u4e66\u5e97.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\u96c1\u5854_\u8299\u84c9\u65b0\u5929\u5730\u65b0\u534e\u4e66\u5e97.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u6709\u96a3\u5802",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u6709\u96a3\u5802\"][\"brand:en\"=\"Yurindo\"][\"brand:ja\"=\"\u6709\u96a3\u5802\"][\"brand:wikidata\"=\"Q8061680\"][\"name\"=\"\u6709\u96a3\u5802\"][\"name:en\"=\"Yurindo\"][\"name:ja\"=\"\u6709\u96a3\u5802\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Yurindo02.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Yurindo02.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u672a\u6765\u5c4b\u66f8\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u672a\u6765\u5c4b\u66f8\u5e97\"][\"brand:en\"=\"Miraiya Shoten\"][\"brand:ja\"=\"\u672a\u6765\u5c4b\u66f8\u5e97\"][\"brand:wikidata\"=\"Q11519563\"][\"name\"=\"\u672a\u6765\u5c4b\u66f8\u5e97\"][\"name:en\"=\"Miraiya Shoten\"][\"name:ja\"=\"\u672a\u6765\u5c4b\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u6a0a\u767b\u4e66\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u6a0a\u767b\u4e66\u5e97\"][\"brand:en\"=\"FAN DENG BOOKS\"][\"brand:wikidata\"=\"Q108178138\"][\"brand:zh\"=\"\u6a0a\u767b\u4e66\u5e97\"][\"name\"=\"\u6a0a\u767b\u4e66\u5e97\"][\"name:en\"=\"FAN DENG BOOKS\"][\"name:zh\"=\"\u6a0a\u767b\u4e66\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u732b\u7684\u5929\u7a7a\u4e4b\u57ce\u6982\u5ff5\u4e66\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u732b\u7684\u5929\u7a7a\u4e4b\u57ce\u6982\u5ff5\u4e66\u5e97\"][\"brand:en\"=\"Momicafe\"][\"brand:wikidata\"=\"Q16259482\"][\"brand:zh\"=\"\u732b\u7684\u5929\u7a7a\u4e4b\u57ce\u6982\u5ff5\u4e66\u5e97\"][\"name\"=\"\u732b\u7684\u5929\u7a7a\u4e4b\u57ce\u6982\u5ff5\u4e66\u5e97\"][\"name:en\"=\"Momicafe\"][\"name:zh\"=\"\u732b\u7684\u5929\u7a7a\u4e4b\u57ce\u6982\u5ff5\u4e66\u5e97\"][\"operator\"=\"\u82cf\u5dde\u5929\u7a7a\u4e4b\u57ce\u56fe\u4e66\u6709\u9650\u516c\u53f8\"][\"operator:en\"=\"momibook\"][\"operator:zh\"=\"\u82cf\u5dde\u5929\u7a7a\u4e4b\u57ce\u56fe\u4e66\u6709\u9650\u516c\u53f8\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u7d00\u4f0a\u570b\u5c4b\u66f8\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u7d00\u4f0a\u570b\u5c4b\u66f8\u5e97\"][\"brand:en\"=\"Books Kinokuniya\"][\"brand:ja\"=\"\u7d00\u4f0a\u570b\u5c4b\u66f8\u5e97\"][\"brand:wikidata\"=\"Q703227\"][\"name\"=\"\u7d00\u4f0a\u570b\u5c4b\u66f8\u5e97\"][\"name:en\"=\"Books Kinokuniya\"][\"name:ja\"=\"\u7d00\u4f0a\u570b\u5c4b\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/\u7d00\u4f0a\u570b\u5c4b\u66f8\u5e97_(3574888639).jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/\u7d00\u4f0a\u570b\u5c4b\u66f8\u5e97_(3574888639).jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u81fa\u7063\u8526\u5c4b",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"TSUTAYA\"][\"brand:en\"=\"TSUTAYA\"][\"brand:wikidata\"=\"Q5193457\"][\"brand:zh\"=\"\u8526\u5c4b\u66f8\u5e97\"][\"name\"=\"TSUTAYA\"][\"name:en\"=\"TSUTAYA\"][\"name:zh\"=\"\u8526\u5c4b\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Culture_Convenience_Club_(CCC)_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Culture_Convenience_Club_(CCC)_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u897f\u897f\u5f17\u4e66\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u897f\u897f\u5f17\u4e66\u5e97\"][\"brand:en\"=\"Sisyphe Bookstore\"][\"brand:wikidata\"=\"Q15904402\"][\"brand:zh\"=\"\u897f\u897f\u5f17\u4e66\u5e97\"][\"name\"=\"\u897f\u897f\u5f17\u4e66\u5e97\"][\"name:en\"=\"Sisyphe Bookstore\"][\"name:zh\"=\"\u897f\u897f\u5f17\u4e66\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u8a00\u51e0\u53c8",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u8a00\u51e0\u53c8\"][\"brand:en\"=\"Yan Ji You\"][\"brand:wikidata\"=\"Q56419889\"][\"brand:zh\"=\"\u8a00\u51e0\u53c8\"][\"name\"=\"\u8a00\u51e0\u53c8\"][\"name:en\"=\"Yan Ji You\"][\"name:zh\"=\"\u8a00\u51e0\u53c8\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u8aa0\u54c1\u66f8\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u8aa0\u54c1\u66f8\u5e97\"][\"brand:en\"=\"Eslite Bookstore\"][\"brand:wikidata\"=\"Q391988\"][\"brand:zh\"=\"\u8aa0\u54c1\u66f8\u5e97\"][\"name\"=\"\u8aa0\u54c1\u66f8\u5e97\"][\"name:en\"=\"Eslite Bookstore\"][\"name:zh\"=\"\u8aa0\u54c1\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Eslite_Bookstore_Xinyi_Store_20091010.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eslite_Bookstore_Xinyi_Store_20091010.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u8aa0\u54c1\u66f8\u5e97 Eslite Bookstore",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u8aa0\u54c1\u66f8\u5e97 Eslite Bookstore\"][\"brand:en\"=\"Eslite Bookstore\"][\"brand:wikidata\"=\"Q391988\"][\"brand:zh\"=\"\u8aa0\u54c1\u66f8\u5e97\"][\"brand:zh-Hans\"=\"\u8bda\u54c1\u4e66\u5e97\"][\"brand:zh-Hant\"=\"\u8aa0\u54c1\u66f8\u5e97\"][\"name\"=\"\u8aa0\u54c1\u66f8\u5e97 Eslite Bookstore\"][\"name:en\"=\"Eslite Bookstore\"][\"name:zh\"=\"\u8aa0\u54c1\u66f8\u5e97\"][\"name:zh-Hans\"=\"\u8bda\u54c1\u4e66\u5e97\"][\"name:zh-Hant\"=\"\u8aa0\u54c1\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Eslite_Bookstore_Xinyi_Store_20091010.jpg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Eslite_Bookstore_Xinyi_Store_20091010.jpg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u8afe\u8c9d\u723e\u5716\u66f8\u57ce",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u8afe\u8c9d\u723e\u5716\u66f8\u57ce\"][\"brand:en\"=\"Nobel Bookstore\"][\"brand:wikidata\"=\"Q130214130\"][\"brand:zh\"=\"\u8afe\u8c9d\u723e\u5716\u66f8\u57ce\"][\"name\"=\"\u8afe\u8c9d\u723e\u5716\u66f8\u57ce\"][\"name:en\"=\"Nobel Bookstore\"][\"name:zh\"=\"\u8afe\u8c9d\u723e\u5716\u66f8\u57ce\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u91d1\u77f3\u5802\u66f8\u5e97",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u91d1\u77f3\u5802\u66f8\u5e97\"][\"brand:en\"=\"Kingstone Bookstore\"][\"brand:wikidata\"=\"Q15911680\"][\"brand:zh\"=\"\u91d1\u77f3\u5802\u66f8\u5e97\"][\"name\"=\"\u91d1\u77f3\u5802\u66f8\u5e97\"][\"name:en\"=\"Kingstone Bookstore\"][\"name:zh\"=\"\u91d1\u77f3\u5802\u66f8\u5e97\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('books'),
	title: "\u58a8\u683c",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u58a8\u683c\"][\"brand:en\"=\"monogram\"][\"brand:wikidata\"=\"Q108178296\"][\"brand:zh\"=\"\u58a8\u683c\"][\"name\"=\"\u58a8\u683c\"][\"name:en\"=\"monogram\"][\"name:zh\"=\"\u58a8\u683c\"][\"operator\"=\"\u82cf\u5dde\u5929\u7a7a\u4e4b\u57ce\u56fe\u4e66\u6709\u9650\u516c\u53f8\"][\"operator:en\"=\"momibook\"][\"operator:zh\"=\"\u82cf\u5dde\u5929\u7a7a\u4e4b\u57ce\u56fe\u4e66\u6709\u9650\u516c\u53f8\"][\"shop\"=\"books\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music'),
	title: "FYE",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"FYE\"][\"brand:wikidata\"=\"Q5424141\"][\"name\"=\"FYE\"][\"shop\"=\"music\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music'),
	title: "Golden Discs",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Golden Discs\"][\"brand:wikidata\"=\"Q5579324\"][\"name\"=\"Golden Discs\"][\"shop\"=\"music\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music'),
	title: "HMV",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"HMV\"][\"brand:wikidata\"=\"Q10854572\"][\"name\"=\"HMV\"][\"shop\"=\"music\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/HMV_Canada_logo.png",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/HMV_Canada_logo.png",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music'),
	title: "Oxfam Books & Music",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Oxfam Books & Music\"][\"brand:wikidata\"=\"Q117838013\"][\"name\"=\"Oxfam Books & Music\"][\"second_hand\"=\"only\"][\"shop\"=\"music\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music'),
	title: "Sunrise Records",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Sunrise Records\"][\"brand:wikidata\"=\"Q30600373\"][\"name\"=\"Sunrise Records\"][\"shop\"=\"music\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise_Records_Logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise_Records_Logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music'),
	title: "TSUTAYA",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"TSUTAYA\"][\"brand:wikidata\"=\"Q5193457\"][\"name\"=\"TSUTAYA\"][\"shop\"=\"music\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Culture_Convenience_Club_(CCC)_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Culture_Convenience_Club_(CCC)_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music'),
	title: "\u30bf\u30ef\u30fc\u30ec\u30b3\u30fc\u30c9",
    query: "[out:json][timeout:25];(nwr[\"alt_name\"=\"\u30bf\u30ef\u30ec\u30b3\"][\"brand\"=\"\u30bf\u30ef\u30fc\u30ec\u30b3\u30fc\u30c9\"][\"brand:en\"=\"Tower Records\"][\"brand:ja\"=\"\u30bf\u30ef\u30fc\u30ec\u30b3\u30fc\u30c9\"][\"brand:wikidata\"=\"Q3265728\"][\"name\"=\"\u30bf\u30ef\u30fc\u30ec\u30b3\u30fc\u30c9\"][\"name:en\"=\"Tower Records\"][\"name:ja\"=\"\u30bf\u30ef\u30fc\u30ec\u30b3\u30fc\u30c9\"][\"shop\"=\"music\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Tower_Records_Japan_logo.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Tower_Records_Japan_logo.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('music'),
	title: "\u30c7\u30a3\u30b9\u30af\u30e6\u30cb\u30aa\u30f3",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u30c7\u30a3\u30b9\u30af\u30e6\u30cb\u30aa\u30f3\"][\"brand:en\"=\"Disk Union\"][\"brand:ja\"=\"\u30c7\u30a3\u30b9\u30af\u30e6\u30cb\u30aa\u30f3\"][\"brand:wikidata\"=\"Q11320039\"][\"name\"=\"\u30c7\u30a3\u30b9\u30af\u30e6\u30cb\u30aa\u30f3\"][\"name:en\"=\"Disk Union\"][\"name:ja\"=\"\u30c7\u30a3\u30b9\u30af\u30e6\u30cb\u30aa\u30f3\"][\"shop\"=\"music\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('musical_instrument'),
	title: "Guitar Center",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Guitar Center\"][\"brand:wikidata\"=\"Q3622794\"][\"name\"=\"Guitar Center\"][\"shop\"=\"musical_instrument\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('musical_instrument'),
	title: "Long & McQuade",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Long & McQuade\"][\"brand:wikidata\"=\"Q6672180\"][\"name\"=\"Long & McQuade\"][\"shop\"=\"musical_instrument\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('musical_instrument'),
	title: "Music & Arts",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Music & Arts\"][\"brand:wikidata\"=\"Q28227686\"][\"name\"=\"Music & Arts\"][\"shop\"=\"musical_instrument\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('musical_instrument'),
	title: "Muziker",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"Muziker\"][\"brand:wikidata\"=\"Q114425580\"][\"name\"=\"Muziker\"][\"shop\"=\"musical_instrument\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('musical_instrument'),
	title: "\u5c71\u91ce\u697d\u5668",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u5c71\u91ce\u697d\u5668\"][\"brand:en\"=\"Yamano Music\"][\"brand:ja\"=\"\u5c71\u91ce\u697d\u5668\"][\"brand:wikidata\"=\"Q11471074\"][\"name\"=\"\u5c71\u91ce\u697d\u5668\"][\"name:en\"=\"Yamano Music\"][\"name:ja\"=\"\u5c71\u91ce\u697d\u5668\"][\"shop\"=\"musical_instrument\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/Ginza_Yamano_Music.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ginza_Yamano_Music.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('musical_instrument'),
	title: "\u5cf6\u6751\u697d\u5668",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u5cf6\u6751\u697d\u5668\"][\"brand:en\"=\"Shimamura Music\"][\"brand:ja\"=\"\u5cf6\u6751\u697d\u5668\"][\"brand:wikidata\"=\"Q11476395\"][\"name\"=\"\u5cf6\u6751\u697d\u5668\"][\"name:en\"=\"Shimamura Music\"][\"name:ja\"=\"\u5cf6\u6751\u697d\u5668\"][\"shop\"=\"musical_instrument\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('musical_instrument'),
	title: "\u67cf\u65af\u7434\u884c Parsons Music",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u67cf\u65af\u7434\u884c Parsons Music\"][\"brand:en\"=\"Parsons Music\"][\"brand:wikidata\"=\"Q11108147\"][\"brand:zh\"=\"\u67cf\u65af\u7434\u884c\"][\"name\"=\"\u67cf\u65af\u7434\u884c Parsons Music\"][\"name:en\"=\"Parsons Music\"][\"name:zh\"=\"\u67cf\u65af\u7434\u884c\"][\"shop\"=\"musical_instrument\"]({{bbox}});node(w););out meta;",
    iconSrc: "src/img/logos/generic.svg",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "src/img/logos/generic.svg",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,1)'
                }),
            }),
            fill: fill,
            stroke: stroke
        });
        return style;
    }
},
{
    group: getTranslation('musical_instrument'),
	title: "\u901a\u5229\u7434\u884c Tom Lee Music",
    query: "[out:json][timeout:25];(nwr[\"brand\"=\"\u901a\u5229\u7434\u884c Tom Lee Music\"][\"brand:en\"=\"Tom Lee Music\"][\"brand:wikidata\"=\"Q43487\"][\"brand:zh\"=\"\u901a\u5229\u7434\u884c\"][\"name\"=\"\u901a\u5229\u7434\u884c Tom Lee Music\"][\"name:en\"=\"Tom Lee Music\"][\"name:zh\"=\"\u901a\u5229\u7434\u884c\"][\"shop\"=\"musical_instrument\"]({{bbox}});node(w););out meta;",
    iconSrc: "https://commons.wikimedia.org/wiki/Special:FilePath/LippoSunSilvercord.JPG",
    iconStyle: "background-color:rgba(255,255,255,0.4)",
    style: function (feature) {
        var key_regex = /^name$/
        var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
        var name = feature.get(name_key) || '';
        var fill = new ol.style.Fill({
            color: 'rgba(255,0,0,0.4)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgba(255,0,0,1)',
            width: 1
        });
        var style = new ol.style.Style({
            image: new ol.style.Icon({
                src: "https://commons.wikimedia.org/wiki/Special:FilePath/LippoSunSilvercord.JPG",
                scale:0.30
            }),
            text: new ol.style.Text({
                text: name,
                offsetX : 7,
                offsetY : -12,
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