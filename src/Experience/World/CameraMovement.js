import * as THREE from "three";
import Experience from "../Experience";
import { gsap } from "gsap";
import Sceneloader from "../Utils/sceneLoader";
import Scenes from "../Scenes";
import Island1 from "../MiniGames/Island1/Island";
import Island2 from "../MiniGames/Island2/Island";
export default class CameraMovement {
  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.experience = new Experience();
    this.camera = this.experience.camera;

    this.targetcubes = this.experience.cubes;
    this.isIntersected = [];
    this.mouse = new THREE.Vector2(0, 0);
    this.setMouseEvents();
  }

  setMouseEvents() {
    window.addEventListener(
      "click",
      (e) => {
        this.onMouseClick(e);
      },
      false
    );
    window.addEventListener(
      "mousemove",
      (e) => {
        this.onMouseMove(e);
      },
      false
    );
  }

  islandSelection(name) {
    switch (name) {
      case this.touchabeobjects[0]:
        new Island1();
        break;

      case this.touchabeobjects[1]:
        new Island2();
        break;

      // case this.touchabeobjects[2]:
      //   new Island3();
      //   break;

      // case this.touchabeobjects[3]:
      //   new Island4();
      //   break;
    }
  }
  open = (name) => {
    gsap
      .to(this.camera.instance.position, {
        duration: 3,
        x: this.isIntersected[0].object.position.x / 0.9,
        y: this.isIntersected[0].object.position.y / 0.9,
        z: this.isIntersected[0].object.position.z / 0.9,
      })
      .then(() => {
        this.islandSelection(name);
      });

    // this.camera.instance.position.setZ();
    // this.camera.instance.position.setX();
    // this.camera.instance.position.setY();

    console.log("opened");
  };
  onMouseClick = (event) => {
    this.touchabeobjects = ["island1", "island2", "island3", "island4"];
    if (this.isIntersected.length) {
      switch (this.isIntersected[0].object.name) {
        case this.touchabeobjects[1]:
          this.open(this.touchabeobjects[1]);
          break;
        case this.touchabeobjects[0]:
          this.open(this.touchabeobjects[0]);
          break;
        case this.touchabeobjects[2]:
          this.open(this.touchabeobjects[2]);
          break;
        case this.touchabeobjects[3]:
          this.open(this.touchabeobjects[3]);
          break;
        default:
          break;
      }
      console.log("Mesh clicked!", this.isIntersected);
    }
  };
  onMouseMove = (event) => {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -1 * (event.clientY / window.innerHeight) * 2 + 1;
  };
  update() {
    this.raycaster.setFromCamera(this.mouse, this.camera.instance);
    this.isIntersected = this.raycaster.intersectObjects(this.experience.cubes);
  }
}
