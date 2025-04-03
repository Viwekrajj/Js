class Player {
    constructor(name) {
      this.name = name;
      this.position = 0;
    }
  
    move(steps) {
      this.position += steps;
      if (this.position > 100) this.position = 100; // Limit max position
    }
  
    getPosition() {
      return this.position;
    }
  
    getName() {
      return this.name;
    }
  }
  
  module.exports = Player;
  