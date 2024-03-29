import Experience from "./Experience";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.setInstance();
    this.setOrbitControl();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      45,
      this.sizes.width / this.sizes.height,
      0.2,
      1000000000
    );
    this.instance.position.set(6, 4, 6);
    this.experience.scene.add(this.instance);
  }

  setOrbitControl() {
    this.orbitControl = new OrbitControls(this.instance, this.canvas);
    this.orbitControl.enableDamping = true;
    this.orbitControl.update();
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    this
    this.orbitControl.update();
  }
}
