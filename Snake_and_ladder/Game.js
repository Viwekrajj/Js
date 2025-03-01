const Player = require("./Player");
const Dice = require("./dice");
const Board = require("./Board")



class Game{
    constructor(boardSize,palyerNum)
    {
        this.board = new Board(boardSize);
        this.palyer = [];
        this.currentPlayerIndex = 0;
    
    
  
      for (let i = 1; i <= numPlayers; i++) {
        this.players.push(new Player(`Player ${i}`));
      }
  
      //add snakes
      this.board.addSnake(25,5);
      this.board.addSnake(98,3);
      this.board.addSnake(70,40);

      //add Ladder
      this.board.addLadder(10,30);
      this.board.addLadder(50,93);
      this.board.addLadder(23,84);
    }
    play()
    {
        while(true)
        {
            const curret_player = this.Player[this.currentPlayerIndex];
            const diceRoll = Dice.roll();
            console.log(`${currentPlayer.getName()} rolled a ${diceRoll}`);

            let  newPos = curret_player.getPosition() + diceRoll;
            newPos = this.Board.checkPosition(newPos);
            curret_player.move(newPos - curret_player.getPosition());
            console.log(`${curret_player.getName()} moved to ${curret_player.getPosition()}`);

      if (curret_player.getPosition() === 100) {
        console.log(`${curret_player.getName()} wins! 🎉`);
        break;
      }

      this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;






        }

    }
}
module.export = Game;