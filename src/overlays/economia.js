// Overlay category: Economía
window.overlayCategory_economia = [
  {
    group: 'Economía',
    title: 'Banco Sabadell',
    query: '(nwr["brand:wikidata"="Q762330"]({{bbox}});node(w););out meta;',
    iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/BSabadell_Logo.svg/220px-BSabadell_Logo.svg.png',
    iconStyle: 'background-color:rgba(255,255,255,0.4)',
    style: function (feature) {
      var key_regex = /^name:ca$/;
      var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name";
      var name = feature.get(name_key) || '';
      var fill = new ol.style.Fill({ color: 'rgba(255,0,0,0.4)' });
      var stroke = new ol.style.Stroke({ color: 'rgba(255,0,0,1)', width: 1 });
      var style = new ol.style.Style({
        image: new ol.style.Icon({ src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/BSabadell_Logo.svg/220px-BSabadell_Logo.svg.png', rotation:0.9, scale:0.30 }),
        text: new ol.style.Text({ text: name, font: 'bold 13px Arial, Verdana, Helvetica, sans-serif', rotation:0.9, offsetX: 7, offsetY: -12, fill: new ol.style.Fill({ color: 'rgba(255,255,255,1)' }) }),
        fill: fill,
        stroke: stroke
      });
      return style;
    }
  }
];
