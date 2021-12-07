const point = (x, y) => ({ x, y });

export class LineSegment {
    constructor([[x1, y1], [x2, y2]]) {
        const from = point(x1, y1);
        const to = point(x2, y2);
        const delta = point(Math.sign(to.x - from.x), Math.sign(to.y - from.y));
        const points = [];
        for (
            let p = { ...from };
            p.x !== to.x || p.y !== to.y;
            p = point(p.x + delta.x, p.y + delta.y)
        ) {
            points.push(p);
        }
        points.push(to);

        this.from = from;
        this.to = to;
        this.delta = delta;
        this.points = points;
    }

    isHorizontal() {
        return !this.delta.x;
    }

    isVertical() {
        return !this.delta.y;
    }
}
