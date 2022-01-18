let { Shape } = require("../classes/main/shape")

let shape = new Shape("blue", true);
console.log(shape.#color);
console.log(shape.#filled);