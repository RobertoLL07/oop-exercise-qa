let { Shape } = require("../main/shape");

let pi = Math.PI;
let exp = Math.pow;

class Circle extends Shape {
    #radius;
    constructor(color, filled) {
        super(color, filled);
        this.#radius = 1;
    }

    // -------------------------------- //
    getRadius() {
        return this.#radius;
    }

    // -------------------------------- //
    setRadius(updateRadius) {
        this.#radius = updateRadius;
        return this.#radius;
    }

    // -------------------------------- //
    getArea() {
        let area = pi * exp(this.#radius, 2);
        return area.toFixed(2);
    }

    // -------------------------------- //
    getPerimeter() {
        let perimeter = 2 * pi * this.#radius;
        return perimeter.toFixed(2);
    }

    // -------------------------------- //
    toString() {
        let color = super.getColor();
        let filled = super.isFilled();
        return `Circle[Shape[color = ${color}, filled = ${filled}], radius = ${this.#radius}]`;
    }
}

// -------------------------------- //
module.exports = { Circle };