import * as THREE from "three";
import Scenes from "../../Scenes";
import Sceneloader from "../../Utils/sceneLoader";
import Experience from "../../Experience";
import Resources from "../../Utils/Resources";
import Environment from "../../World/Environment";
export default class Island1{
    constructor(){
        this.scene = new THREE.Scene();
        this.experience = new Experience();
        let scene=new Scenes("island1")
        this.sceneloader=new Sceneloader();
      this.sceneloader.loadScene(scene.scene);
      this.addElements()
      new Environment();
    }
    addElements=()=>{
      let model = this.experience.resources.items["home_of_an_exiled_seeress"].scene;
      console.log(model.animation);

      model.traverse(function (node) {

        if (node.isMesh) {

            // console.log(node.name)

            // console.log(node.parent)
            // console.log(node.animation.length)

            // node.material.side = THREE.DoubleSide
            node.material.depthWrite = true;
            node.material.transparent = false;
            // node.material.wireframe = true; 
            // node.material.opacity = 1
            console.log(node)
            // if(node.a)
            //node.material.transparent = false
        }
    })
      console.log(model);
      this.experience.scene.add(model)
      console.log(
      );
    }
}
