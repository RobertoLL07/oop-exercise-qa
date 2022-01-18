const { Shape } = require("../main/shape");

let exp = Math.pow;

class EqTriangle extends Shape {
    #sideLength;
    constructor(color, filled, side = 1.0) {
        super(color, filled);
        this.#sideLength = side;
    }

    // -------------------------------- //
    getSideLength() {
        return this.#sideLength.toFixed(2);
    }

    // -------------------------------- //
    setSideLength(updateSideLength) {
        this.#sideLength = updateSideLength;
    }

    // -------------------------------- //
    getArea() {
        const area = (Math.sqrt(3) * exp(this.#sideLength,2)) / 4;
        return area.toFixed(2);
    }

    // -------------------------------- //
    getPerimeter() {
        const perimeter = this.#sideLength * 3;
        return perimeter.toFixed(2);
    }

    // -------------------------------- //
    toString() {
        const color = super.getColor();
        const filled = super.isFilled();
        return `Triangle [ Shape [ color = ${color}, filled = ${filled} ], side = ${this.#sideLength}]`;
    }
}
module.exports = { EqTriangle };