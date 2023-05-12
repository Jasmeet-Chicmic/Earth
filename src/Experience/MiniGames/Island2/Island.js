import * as THREE from "three";
import Scenes from "../../Scenes";
import Sceneloader from "../../Utils/sceneLoader";
import Experience from "../../Experience";
import Resources from "../../Utils/Resources";
import Environment from "../../World/Environment";
import { gsap } from "gsap";
export default class Island2 {
  constructor() {
    this.scene = new THREE.Scene();
    this.experience = new Experience();
    let scene = new Scenes("island2");
    this.sceneloader = new Sceneloader();
    this.sceneloader.loadScene(scene.scene);
    this.addElements();
    new Environment();
  }
  addElements = () => {
    let model = this.experience.resources.items["sea_house"].scene;
    model.traverse(function (node) {
      // console.log(node.name)

      if (node.isMesh) {
        node.material.depthWrite = true;
        node.material.transparent = false;
        node.position.setZ(node.position.z);
      }
    });

    this.addFog("#87CEEB", 0.1, 1100);
    this.experience.scene.add(model);
    this.moveCamera();
  };

  addFog(fogColor, fogNear, fogFar) {
    this.experience.scene.background = new THREE.Color("#87CEEB");
    let fog = new THREE.Fog(fogColor, fogNear, fogFar);
    this.experience.scene.fog = fog;
  }

  moveCamera() {
    gsap.to(this.experience.camera.instance.position, {
      duration: 4,
      x: 200,
      y: 200,
      z: 200,
    });
  }
}
