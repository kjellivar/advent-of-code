import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const input = readLines().map((line) => [
    line.charAt(0),
    Number(line.substring(1)),
]);

function part1() {
    const ship = new Ship(90, 0, 0);
    for (const [dir, amount] of input) {
        ship.move(dir, amount);
    }
    return Math.abs(ship.x) + Math.abs(ship.y);
}

function part2() {
    const ship = new VelocityShip(0, 0, 10, 1);
    for (const [dir, amount] of input) {
        ship.move(dir, amount);
    }
    return Math.abs(ship.x) + Math.abs(ship.y);
}

class Ship {
    constructor(angle, x, y) {
        this.angle = angle;
        this.x = x;
        this.y = y;
    }

    move(dir, amount) {
        switch (dir) {
            case 'N':
                this.y -= amount;
                break;
            case 'E':
                this.x += amount;
                break;
            case 'S':
                this.y += amount;
                break;
            case 'W':
                this.x -= amount;
                break;
            case 'L':
                this.angle -= amount;
                if (this.angle < 0) {
                    this.angle += 360;
                }
                break;
            case 'R':
                this.angle = (this.angle + amount) % 360;
                break;
            case 'F':
                if (this.angle === 0) {
                    this.move('N', amount);
                } else if (this.angle === 90) {
                    this.move('E', amount);
                } else if (this.angle === 180) {
                    this.move('S', amount);
                } else if (this.angle === 270) {
                    this.move('W', amount);
                }
                break;
        }
    }
}

class VelocityShip {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velocityX = velX;
        this.velocityY = velY;
    }

    move(dir, amount) {
        switch (dir) {
            case 'N':
                this.velocityY += amount;
                break;
            case 'E':
                this.velocityX += amount;
                break;
            case 'S':
                this.velocityY -= amount;
                break;
            case 'W':
                this.velocityX -= amount;
                break;
            case 'L':
                for (let i = amount / 90; i > 0; i--) {
                    const tempy = this.velocityY;
                    this.velocityY = this.velocityX;
                    this.velocityX = tempy * -1;
                }
                break;
            case 'R':
                for (let i = amount / 90; i > 0; i--) {
                    const tempy = this.velocityY;
                    this.velocityY = this.velocityX * -1;
                    this.velocityX = tempy;
                }
                break;
            case 'F':
                this.x += amount * this.velocityX;
                this.y += amount * this.velocityY;
                break;
        }
    }
}

test('2020 - Day 12', () => {
    assert.strictEqual(part1(), 1177);
    assert.strictEqual(part2(), 46530);
});
