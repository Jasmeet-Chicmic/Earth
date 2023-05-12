import Experience from "../Experience";

import Environment from "./Environment";
import Earth from "./Earth";
import Cube from "./Cube";
export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.cubeDirection = ["x", "y", "z","xy"];
    //Test cube

    this.resources.on("resourcesLoaded", () => {
      this.earth = new Earth();
      this.cube = new Cube(this.cubeDirection[0],"island1");
      this.cube = new Cube(this.cubeDirection[1],"island2");
      this.cube = new Cube(this.cubeDirection[2],"island3");
      this.cube = new Cube(this.cubeDirection[3],"island4");
      this.environment = new Environment();
    });
  }

  update() {}
}
