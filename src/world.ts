import * as THREE from "three";
import { GameObject } from "./entities/gameObject";

export class World extends THREE.Scene {
    objects: GameObject[] = [];
    constructor() {
        super();
    }
}