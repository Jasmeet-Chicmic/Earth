import * as lil from "lil-gui";
<<<<<<< HEAD
import Experience from "../Experience";
import GamePlay from "../Games/FightingGame/GamePlay";
export default class Debug {
  constructor() {
    this.experience = new Experience();
    this.active = window.location.hash === "#debug";
    if (this.active) {
      this.gui = new lil.GUI();

      this.gui
        .add(this.experience.camera.instance.position, "x", -100, 1000, 1)
        .onChange((x) => {
          this.experience.camera.instance.position.setX(x);
        });
      this.gui
        .add(this.experience.camera.instance.position, "y", -100, 1000, 1)
        .onChange((x) => {
          this.experience.camera.instance.position.setY(x);
        });
      this.gui
        .add(this.experience.camera.instance.position, "z", -100, 1000, 1)
        .onChange((x) => {
          this.experience.camera.instance.position.setZ(x);
        });

      // this.gui.add()
    }
  }
}
=======
export default class Debug{
    constructor(){
       this.active = window.location.hash === "#debug";
       if(this.active){
        this.gui = new lil.GUI();
       }
    }
}
>>>>>>> 97ccfeb1b1b47f5d5f5b2f0b11697a0d6b4773b8
