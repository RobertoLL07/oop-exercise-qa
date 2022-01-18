// -------------------------------- //
let { Rectangle } = require("../rectangle");

let exp = Math.pow;

class Square extends Rectangle {
    constructor(color, filled, side) {
        super(color, filled);
        this.side = side;
    }

    // -------------------------------- //
    getSide() {
        return this.side.toFixed(2);
    }

    // -------------------------------- //

    setSide(updateSideLength) {
        this.side = updateSideLength;
    }

    // -------------------------------- //
    setWidth(updateWidth) {
        this.setSide(updateWidth);
    }
    
    // -------------------------------- //
    setLength(updateLength) {
        this.setSide(updateLength);
    }

    // -------------------------------- //
    getArea() {
        let area = exp(this.side, 2);
        return area.toFixed(2);
    }

    // -------------------------------- //
    getPerimeter() {
        let perimeter = this.side * 4;
        return perimeter.toFixed(2);
    }

    // -------------------------------- //
    toString() {
        let color = super.getColor();
        let filled = super.isFilled();
        return `Square[Rectangle[Shape[color = ${color}, filled = ${filled}], width = ${this.width}, length = ${this.length}]]`;
    }
}
module.exports = { Square };