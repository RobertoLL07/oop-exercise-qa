let { Shape } = require("../main/shape");

class Rectangle extends Shape {
    #width;
    #length;
    constructor(color, filled, width = 1.0, length = 1.0) {
        super(color, filled);
        this.#width = width;
        this.#length = length;
    }

    // -------------------------------- //
    getWidth() {
        return this.#width.toFixed(2);
    }

    // -------------------------------- //
    setWidth(updateWidth) {
        this.#width = updateWidth;
        return this.#width.toFixed(2);
    }

    // -------------------------------- //
    getLength() {
        return this.#length.toFixed(2);
    }

    // -------------------------------- //
    setLength(updateLength) {
        this.#length = updateLength;
        return this.#length.toFixed(2);
    }

    // -------------------------------- //
    getArea() {
        let area = this.#width * this.#length;
        return area.toFixed(2);
    }

    // -------------------------------- //
    getPerimeter() {
        let perimeter = this.width + this.length + this.width + this.length;
        return perimeter.toFixed(2);
    }

    // -------------------------------- //
    toString() {
        let color = super.getColor();
        let filled = super.isFilled();
        return `Rectangle[Shape[color = ${color}, filled = ${filled}], width = ${this.#width}, length = ${this.#length}]`;
    }
}
module.exports = { Rectangle };