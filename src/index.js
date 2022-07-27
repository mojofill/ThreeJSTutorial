"use strict";
exports.__esModule = true;
var box_1 = require("./entities/box");
var world_1 = require("./world");
var world = new world_1.World();
function setupObjects() {
    var cube = new box_1.boxObject(); // default a cube
    console.log(cube.id);
}
function init() {
    setupObjects();
}
init();
