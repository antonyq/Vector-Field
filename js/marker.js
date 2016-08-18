class Marker extends Point {
	constructor(X, Y) {
		super(X, Y);
	}

	euler(tornados, delta=0.1) {
		const f = V(this, tornados);
		this.x += f.x * delta;
		this.y += f.y * delta;
	}

	adams(points, tornados, delta=0.1) {
		const point1 = new Point(points[points.length - 2][0], points[points.length - 2][1]);
		const point2 = new Point(points[points.length - 1][0], points[points.length - 1][1]); 
		this.x = point2.x + (3 * V(point2, tornados).x - V(point1, tornados).x) * delta / 2;
		this.y = point2.y + (3 * V(point2, tornados).y - V(point1, tornados).y) * delta / 2;
	}
}