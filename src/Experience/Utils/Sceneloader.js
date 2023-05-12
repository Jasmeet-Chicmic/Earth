import * as THREE from "three"
import Experience from "../Experience";
export default class Sceneloader{
    constructor(){
        this.experience = new Experience();
    }

    loadScene(scene)
    {
        console.log("scene loader",scene);
// this.experience.scene.clear()
        this.experience.cubes=[]
        this.experience.scene=scene;
    }
}