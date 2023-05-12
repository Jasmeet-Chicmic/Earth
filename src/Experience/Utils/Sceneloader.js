import * as THREE from "three";
import Experience from "../Experience";
import Island1 from "../MiniGames/Island1/Island";
import Island2 from "../MiniGames/Island2/Island";
import Environment from "../World/Environment";
export default class Sceneloader {
  constructor() {
    this.experience = new Experience();
  }

  loadScene(name) {
    // console.log("scene loader", scene);
    // this.experience.scene.clear();

    switch (name) {
      case "island1":
        let scene = new Island1();
        this.addWorld(scene);
        break;
      case "island2":
        // new Island2();
        let scene2 = new Island2();
        this.addWorld(scene2);

        break;
      case "Balcony_Cone":
        console.log("Balcony_Co");
        break;
      case "Boat_Cone":
        console.log("Boat_Cone");
        break;
      case "Floor_Cone":
        console.log("Floor_Cone");
        break;

      default:
        break;
    }
  }

  addWorld(scene) {
    this.showScene(scene.scenes.scene);
    new Environment();
    scene.addElements();
  }

  showScene(scene) {
    this.experience.cubes = [];
    // this.experience.scene.clear();

    this.experience.scene = scene;
    console.log(scene, this.experience.scene);
  }
}
