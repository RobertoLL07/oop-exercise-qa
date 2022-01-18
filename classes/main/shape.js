//clase padre

class Shape {
    #color;
    #filled;
    constructor(color = "red", filled = true) {
        this.#color = color;
        this.#filled = filled;
    }

    // -------------------------------- //
    getColor() {
        console.log(`Im color ${this.#color}`)
        return this.#color;
    }

    // -------------------------------- //
    setColor(updateColor) {
        this.#color = updateColor;
        console.log(`Now my color is ${this.#color}`)
        return this.#color;
    }

    // -------------------------------- //      
    isFilled() {
        if (this.#filled){
            console.log('I have something')
        } else {
            console.log('Im empty')
        }
        return this.#filled;
    }

    // -------------------------------- //
    setFilled(filling) {
        this.#filled = filling;
        return this.#filled;
    }

    // -------------------------------- //
    getArea() {}

    // -------------------------------- //
    getPerimeter() {}

    // -------------------------------- //
    toString() {
        return `Shape[color = ${this.#color}, filled = ${this.#filled}]`;
    }
}

// -------------------------------- //
module.exports = { Shape };