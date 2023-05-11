import * as THREE from "three"
import Scenes from "../../Scenes";
import Sceneloader from "../../Utils/sceneLoader";
import Experience from "../../Experience";
export default class Island1{
    constructor(){
        this.scene = new THREE.Scene();
        this.experience = new Experience();
       
        let scene=new Scenes("island1")
        this.sceneloader=new Sceneloader();
      this.sceneloader.loadScene(scene.scene);
    }
}