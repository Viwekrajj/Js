class Player{
    constructor(name,)
    {
        this.name=name;
        this.position=0;
    }
    move(steps)
    {
      this.position+=steps;
      if(this.position>100)
      {
        this.position=100
      }
    }
    getPosition(position)
    {
      return this.position
    }
    getName(name){
        return this.name
    }
}

module.export=Player;