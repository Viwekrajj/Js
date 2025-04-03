import { Elevator } from "./elevator";

export class ElevatorSystem {
    elevators: Elevator[];

    constructor(numElevators: number, totalFloors: number) {
        this.elevators = Array.from({ length: numElevators }, (_, id) => new Elevator(id, totalFloors));
    }

    requestElevator(floor: number, direction: "UP" | "DOWN"): void {
        let bestElevator = this.findBestElevator(floor, direction);
        if (bestElevator) {
            console.log(`Elevator ${bestElevator.id} assigned to Floor ${floor} for ${direction} direction`);
            bestElevator.requestFloor(floor);
        } else {
            console.log("No available elevators at the moment.");
        }
    }

    private findBestElevator(floor: number, direction: "UP" | "DOWN"): Elevator | null {
        return this.elevators.reduce<Elevator | null>((best, elevator) => {
            if (!best) return elevator;
            let bestDistance = Math.abs(best.currentFloor - floor);
            let elevatorDistance = Math.abs(elevator.currentFloor - floor);
            return elevatorDistance < bestDistance ? elevator : best;
        }, null);
    }
}
