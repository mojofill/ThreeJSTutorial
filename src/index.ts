import { boxObject } from './entities/box';
import { World } from './world';

const world = new World();

function setupObjects() {
    const cube = new boxObject(); // default a cube
    console.log(cube.id);
}

function init() {
    setupObjects();
}

init();