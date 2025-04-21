export const overlays = [
	{
		group: 'Alimentación',
		title: 'Supermercados',
		query: '(nwr["shop"="supermarket"]({{bbox}});node(w););out meta;',
		iconSrc: 'src/img/icones/maxspeed_empty.svg',
		iconStyle: 'background-color:rgba(255,255,255,0.4)',
		style: function(feature) {
			return new ol.style.Style({
				image: new ol.style.Icon({
					src: this.iconSrc,
					anchor: [0.5, 1],
					anchorXUnits: 'fraction',
					anchorYUnits: 'fraction',
					scale: 0.7
				}),
				text: new ol.style.Text({
					text: feature.get('name') || '',
					offsetY: -15,
					fill: new ol.style.Fill({
						color: '#000'
					}),
					stroke: new ol.style.Stroke({
						color: '#fff',
						width: 3
					})
				})
			});
		}
	}
];
