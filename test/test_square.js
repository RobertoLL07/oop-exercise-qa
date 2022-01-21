let { Square } = require("../classes/main_childs/sub_childs/square")

let square = new Square("green", true, 5.5);
console.log(square.getPerimeter());
console.log(square.getArea());