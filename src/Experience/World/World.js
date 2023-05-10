import Experience from "../Experience";

import Environment from "./Environment";
import Floor from "./Floor";
export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    //Test cube
   
    this.resources.on("resourcesLoaded", () => {
        this.floor = new Floor()
     
        this.environment = new Environment();
    });
   
    
  }

  update(){
    
  }
}
