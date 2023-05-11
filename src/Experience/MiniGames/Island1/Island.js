import * as THREE from "three"
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
      let i=0.1
      let model = this.experience.resources.items["home_of_an_exiled_seeress"].scene;
      model.traverse(function (node) {

        // console.log(node.name)

        if (node.isMesh) {

            // console.log(node.name)

            // console.log(node.parent)

            // node.material.side = THREE.DoubleSide
            node.material.depthWrite = true;
            node.material.transparent = false;
node.position.setZ(node.position.z+i)
i=i+0.1
            // node.material.wireframe = true; 
            // node.material.opacity = 1
            console.log(node.material)
            //node.material.transparent = false
        }
    })
      console.log(model);
      this.experience.scene.add(model)
      console.log(
      );
    }
}