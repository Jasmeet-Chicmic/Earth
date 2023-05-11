import * as THREE from "three";
import Experience from "../Experience";
export default class RayCaster {
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
  onMouseClick = (event) => {
    let touchabeobjects = ["1", "2", "3", "4"];
    if (this.isIntersected.length) {
      switch (this.isIntersected[0].object.name) {
        case touchabeobjects[1]:
          open();
          break;
        case touchabeobjects[0]:
          break;
        case touchabeobjects[2]:
          break;
        case touchabeobjects[3]:
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
    this.isIntersected = this.raycaster.intersectObjects(this.targetcubes);
  }
}
