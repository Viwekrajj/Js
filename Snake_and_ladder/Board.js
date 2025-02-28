const Snake = require("./Snake");
const Ladder = require("./Ladder");

class Board{
    constructor(size)
    {
        this.size=size;
        this.snakes=[];
        this.laddes=[]
    }
    addSnake(start,end)
    {
       this.snakes.push(new Snake(start,end));
    }
    addLadder()
    {
        this.laddes.push(new Ladder(start,end))
    }

    checkPosition(position){
        for(const snake of this.snakes)
        {
            if(snake.start == position)
            {
                return snake.end;
            }
        }
        for(const ladder of this.laddes)
            {
                if(ladder.start == position)
                {
                    return ladder.end;
                } 
            }  
        return position; 
    }
}

module.export = Board;