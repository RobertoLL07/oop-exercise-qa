let { Circle } = require("../classes/main_childs/circle")

let circle = new Circle("blue", true, 5.5);
console.log(circle.getPerimeter());
console.log(circle.getArea());