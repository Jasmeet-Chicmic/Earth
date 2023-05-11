import Experience from "../Experience.js";
import * as THREE from "three";
export default class Cube {
  constructor(direction) {
    this.experience = new Experience();
    this.camera = this.experience.camera;
    this.scene = this.experience.scene;
    this.earth = this.experience.world.earth.earth;
    this.atmosphereRadius =
      this.earth.scene.children[0].children[0].children[2].geometry.boundingSphere.radius;
    console.log("this.atmosphere", this.atmosphereRadius);
    this.setGeomatery();
    this.setMaterial();
    this.setMesh(direction);
  }

  setGeomatery(object) {
    this.cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  }

  setMaterial() {
    this.cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
  }

  setMesh(direction) {
    this.cube = new THREE.Mesh(this.cubeGeometry, this.cubeMaterial);

    switch (direction) {
      case "x":
        this.cube.position.setX(this.atmosphereRadius * 0.6);
        break;
      case "y":
        this.cube.position.setY(this.atmosphereRadius * 0.6);
        break;

      case "z":
        this.cube.position.setZ(this.atmosphereRadius * 0.6);
        break;

      case "xy":
        this.cube.position.setX(-this.atmosphereRadius * 0.6);
        this.cube.position.setY(-this.atmosphereRadius * 0.6);
        break;
    }

    this.scene.add(this.cube);
  }
}
