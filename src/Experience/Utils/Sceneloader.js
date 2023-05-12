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
        console.log("Floor_Cone");
        let scene4=this.experience.scenes["island1"]
        console.log(this.experience.scenes["island1"]);
        this.addWorld(null,scene4)
        break;
      case "Floor_Cone":
        console.log("Floor_Cone");
        let scene3=this.experience.scenes["Earth"]
        console.log(this.experience.scenes["Earth"]);
        this.addWorld(null,scene3)
        break;
        case "Cube001":
          console.log("Cube001");
          let scene5=this.experience.scenes["Earth"]
        console.log(this.experience.scenes["Earth"]);
        this.addWorld(null,scene5)
          break;
      default:
        break;
    }
  }

  addWorld(scene=null,oldscene=null) {
    if(scene!=null&&oldscene==null){
      this.showScene(scene.scenes.scene);
      new Environment();
      scene.addElements();
    }
    else{
      this.showScene(oldscene)
      this.experience.camera.instance=oldscene.children[0]
      oldscene.traverse((e)=>{
        if(e.name.slice(0,e.name.length-1)=="island"){
          this.experience.cubes.push(e)
        }
      })
    }
    
  }

  showScene(scene) {
    this.experience.cubes = [];
    // this.experience.scene.clear();
    console.log(this.experience.scene);
    this.experience.scenes[        this.experience.scene.name]=this.experience.scene;
    this.experience.scene = scene;
    console.log(scene, this.experience.scene);
  }
}
