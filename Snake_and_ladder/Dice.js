class Dice{
    static roll(){
        return Math.floor(Math.random()*6) + 1;
    }
    
}

module.export = Dice;