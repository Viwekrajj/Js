const Snake = require("./Snake");
const Ladder = require("./Ladder");

class Board {
  constructor(size) {
    this.size = size;
    this.snakes = [];
    this.ladders = [];
  }

  addSnake(start, end) {
    this.snakes.push(new Snake(start, end));
  }

  addLadder(start, end) {
    this.ladders.push(new Ladder(start, end));
  }

  getNewPosition(position) {
    for (const snake of this.snakes) {
      if (snake.start === position) return snake.end;
    }
    for (const ladder of this.ladders) {
      if (ladder.start === position) return ladder.end;
    }
    return position;
  }
}

module.exports = Board;
