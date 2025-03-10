import Elevator from "./Elevator"

class ElevatorControl {
    constructor(noOfElevetors)
    {
        this.elevator= Array.from({lenght:noOfElevetors},(_,i)=> new Elevator(0,6,0,i+1))
        this.request=[]
    }
    
}

module.export = ElevatorControl;