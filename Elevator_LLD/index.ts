import { ElevatorSystem } from "./elevatorSystem";
import { Floor } from "./floor";

const system = new ElevatorSystem(2, 10);
const floor3 = new Floor(3);
const floor7 = new Floor(7);
const floor1 = new Floor(1);

// Request elevators from different floors
floor3.requestElevator("UP", system);
floor7.requestElevator("DOWN", system);
floor1.requestElevator("UP", system);
