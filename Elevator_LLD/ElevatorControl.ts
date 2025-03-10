import Elevator from "./Elevator"
interface ElevatorControlInterface {
    elevators: Elevator[]
    request:number[]
}

class ElevatorControl {
    elevators: Elevator[];
    request: number[];
    constructor(noOfElevetors)
    {
        this.elevators= Array.from({length:noOfElevetors},(_,i)=> new Elevator(0,6,0,i+1));
        this.request=[];
        console.log("inside the ElevatorControl")
    }
    // console.log("hello world ")
    
}

export default ElevatorControl;