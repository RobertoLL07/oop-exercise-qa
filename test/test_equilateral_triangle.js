let { Equilateral_Triangle } = require("../classes/main_childs/equilateral_triangle")

let triangle = new Equilateral_Triangle("black", true, 4.8);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());