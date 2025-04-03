class Dice {
    static roll() {
      return Math.floor(Math.random() * 6) + 1; // Random number between 1-6
    }
  }
  
  module.exports = Dice;
  