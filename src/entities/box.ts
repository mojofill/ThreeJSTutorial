import * as THREE from "three";

export class boxObject extends THREE.Mesh {
    velocity: THREE.Vector3 = new THREE.Vector3(); // default 0,0,0

    constructor(width: number = 1, length: number = 1, height: number = 1) {
        super(new THREE.BoxGeometry(width, height, length));
    }

    public setName(name: string) {
        this.name = name;
    }
}