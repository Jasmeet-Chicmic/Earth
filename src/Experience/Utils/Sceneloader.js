import * as THREE from "three";
import Experience from "../Experience";
import Island1 from "../MiniGames/Island1/Island";
import Island2 from "../MiniGames/Island2/Island";
export default class Sceneloader {
  constructor() {
    this.experience = new Experience();
  }

  loadScene(name) {
    // console.log("scene loader", scene);
    // this.experience.scene.clear();

    switch (name) {
      case "island1":
        new Island1();

        break;
      case "island2":
        new Island2();
        break;
      case "Balcony_Cone":
        console.log("game opened");
        break;

      default:
        break;
    }
  }

  showScene(scene) {
    this.experience.cubes = [];
    this.experience.scene = scene;
  }
}
