const V = (marker, tornados) => {
	let resX = resY = 0;
	for (let i = 0; i < tornados.length; i++) {
		resX += VmX(marker, tornados[i]);
		resY += VmY(marker, tornados[i]);
	}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								
	return new Marker(resX, resY);
}
const VmX = (marker, tornado) => (tornado.g / (2*Math.PI)) * ((tornado.y - marker.y) / Math.pow(Rm(marker, tornado), 2));
const VmY = (marker, tornado) => (tornado.g / (2*Math.PI)) * ((marker.x - tornado.x) / Math.pow(Rm(marker, tornado), 2));
const Rm = (marker, tornado, delta=0.1) => Math.max(delta, distance(marker, tornado));

const distance = (point1, point2) => Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
const random = (a, b) => Math.random() > 0.5 ? Math.random() * (b - a) / 2 : -1 * Math.random() * (b - a) / 2;