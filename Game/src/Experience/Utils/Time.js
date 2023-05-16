import EventEmitter from "./EventEmitter";
export default class Time extends EventEmitter {
  constructor() {
    super();
    //setup
    this.start = new Date();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16; // default delta time for most of the screens is 16
<<<<<<< HEAD
    window.requestAnimationFrame(() => {
      this.tick();
    });
=======
    // window.requestAnimationFrame(() => {
      this.tick();
    // });
>>>>>>> 97ccfeb1b1b47f5d5f5b2f0b11697a0d6b4773b8
  }

  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;
   
    this.trigger('tick')
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
