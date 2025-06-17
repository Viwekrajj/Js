const Board = require("./Board");
const Player = require("./Player");
const Dice = require("./Dice");

class Game {
  constructor(boardSize, numPlayers) {
    this.board = new Board(boardSize);
    this.players = [];
    this.currentPlayerIndex = 0;

    for (let i = 1; i <= numPlayers; i++) {
      this.players.push(new Player(`Player ${i}`));
    }

    // Add some snakes
    this.board.addSnake(25, 5);
    this.board.addSnake(65, 45);

    // Add some ladders
    this.board.addLadder(10, 30);
    this.board.addLadder(50, 90);
  }

  play() {
    while (true) {
      const currentPlayer = this.players[this.currentPlayerIndex];
      const diceRoll = Dice.roll();
      console.log(`${currentPlayer.getName()} rolled a ${diceRoll}`);

      let newPos = currentPlayer.getPosition() + diceRoll;
      newPos = this.board.getNewPosition(newPos);
      currentPlayer.move(newPos - currentPlayer.getPosition());

      console.log(`${currentPlayer.getName()} moved to ${currentPlayer.getPosition()}`);

      if (currentPlayer.getPosition() === 100) {
        console.log(`${currentPlayer.getName()} wins! 🎉`);
        break;
      }

      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }
  }
}

module.exports = Game;
