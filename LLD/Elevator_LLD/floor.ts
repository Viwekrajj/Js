import { ElevatorSystem } from "./elevatorSystem";

export class Floor {
    floorNumber: number;

    constructor(floorNumber: number) {
        this.floorNumber = floorNumber;
    }

    requestElevator(direction: "UP" | "DOWN", system: ElevatorSystem): void {
        console.log(`Floor ${this.floorNumber} requested an elevator to go ${direction}`);
        system.requestElevator(this.floorNumber, direction);
    }
}
