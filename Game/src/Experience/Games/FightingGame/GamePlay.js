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
export default class GamePlay {
  constructor() {
    this.scene = new THREE.Scene();
    this.experience = new Experience();
    this.scenes = new Scenes("GamePlay");
    this.time = new Time();
    this.sceneloader = new Sceneloader();
  }
  addElements = () => {
    //testing
    let animation =
      this.experience.resources.items["characterAnimation"].animations;
    let jump =
      this.experience.resources.items["characterAnimationJump"].animations;
    let model = this.experience.resources.items["character"];
    this.touchableObject = touchableobjectsarray;
    // model.animations = animation;
    model.animations = [...jump, ...animation];
    
    this.animation = {};
    this.animation.mixer = new THREE.AnimationMixer(model);
    this.animation.actions = {};
    this.animation.actions.idle = this.animation.mixer.clipAction(
      model.animations[1]
    );
   

    this.animation.actions.current = this.animation.actions.idle;
    this.experience.scene.background = "#fffff";
    this.experience.scene.add(model);
    this.animation.actions.current.play();


    this.experience.camera = new Camera(42, 4);
    this.update();
  };

  update = () => {
    this.animation.mixer.update(this.time.delta / 1000);
    window.requestAnimationFrame(this.update);
  };
}
