//@@ Mapas de fondo
export const layers = [
	new ol.layer.Tile({
		title: 'OpenStreetMap',
		iconSrc: 'src/img/icones_web/osm_logo-layer.svg',
		source: new ol.source.OSM()
	}),
	new ol.layer.Tile({
		title: 'OpenStreetMap DE',
		iconSrc: 'src/img/icones_web/osmbw_logo-layer.png',
		maxZoom: 18,
		source: new ol.source.XYZ({
			attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
		}),
		visible: false
	}),
	new ol.layer.Tile({
		title: 'OpenStreetMap FR',
		iconSrc: 'src/img/icones_web/osmfr_logo-layer.png',
		source: new ol.source.OSM({
			attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
			url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
		}),
		visible: false
	})
];
