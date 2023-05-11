import * as THREE from "three";
import Experience from "../Experience";
import { gsap } from "gsap";
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
  open = () => {
    gsap.to(this.camera.instance.position, {
      duration: 3,
      x: this.isIntersected[0].object.position.x / 0.9,
      y: this.isIntersected[0].object.position.y / 0.9,
      z: this.isIntersected[0].object.position.z / 0.9,
    });
    // this.camera.instance.position.setZ();
    // this.camera.instance.position.setX();
    // this.camera.instance.position.setY();

    console.log("opened");
  };
  onMouseClick = (event) => {
    let touchabeobjects = ["1", "2", "3", "4"];
    if (this.isIntersected.length) {
      switch (this.isIntersected[0].object.name) {
        case touchabeobjects[1]:
          this.open();
          break;
        case touchabeobjects[0]:
          this.open();
          break;
        case touchabeobjects[2]:
          this.open();
          break;
        case touchabeobjects[3]:
          this.open();
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
