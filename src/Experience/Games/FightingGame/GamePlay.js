import Sceneloader from "../../Utils/Sceneloader";
// import { touchableobjects } from "../../Utils/Touchableconstants";
import * as THREE from "three";
import Scenes from "../../Scenes";
// import Sceneloader from "../../Utils/Sceneloader";
import Experience from "../../Experience";
import Camera from "../../Camera";
import { gsap } from "gsap";
import {
  touchableobjectsarray,
  touchableobjects,
} from "../../Utils/Touchableconstants";
import Time from "../../Utils/Time";
import Sizes from "../../Utils/Sizes";
export default class GamePlay {
  constructor() {
    this.scene = new THREE.Scene();
    this.experience = new Experience();
    this.scenes = new Scenes("GamePlay");
    this.scenes.scene.background = "#ffffff";
    this.time = new Time();
    this.sceneloader = new Sceneloader();
  }

  addElements = () => {
    this.addCharacter();
    let camera = new Camera(42, 4);
    camera.instance.position.set(0, -90, 300);

    this.experience.camera = camera;

    this.addFloor();
    this.playAnimation();
    this.update();
  };

  playAnimation() {
    // testing;
    let animation =
      this.experience.resources.items["characterAnimation"].animations;
    this.model = this.experience.resources.items["character"];
    this.touchableObject = touchableobjectsarray;
    // model.animations = animation;

    this.model.animations = [...animation];

    this.animation = {};
    this.animation.mixer = new THREE.AnimationMixer(this.model);
    this.animation.actions = {};
    this.animation.actions.idle = this.animation.mixer.clipAction(
      this.model.animations[0]
    );

    this.animation.actions.current = this.animation.actions.idle;
    this.experience.scene.background = this.experience.scene.add(this.model);
    this.animation.actions.current.play();
  }

  addCharacter() {
    this.model = this.experience.resources.items["character"];
    this.model.position.y = -100;
    this.model.rotation.y = Math.PI * 0.5;
    this.experience.scene.add(this.model);
  }

  addFloor() {
    this.floor = this.experience.resources.items["fightingGameFloor"].scene;
    this.floor.traverse((node) => {
      (node.position.x = 0), (node.position.y = 0), (node.position.z = -1);
      //   node.rotation.z = Math.PI * 0.5;
    });
    this.experience.scene.add(this.floor);
  }

  update = () => {
    this.animation.mixer.update(this.time.delta / 1000);
    window.requestAnimationFrame(this.update);
  };
}
