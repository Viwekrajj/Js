export class Elevator {
    id: number;
    currentFloor: number;
    direction: "UP" | "DOWN" | null;
    requestQueue: number[];
    totalFloors: number;
    isMoving: boolean;

    constructor(id: number, totalFloors: number) {
        this.id = id;
        this.currentFloor = 0;
        this.direction = null;
        this.requestQueue = [];
        this.totalFloors = totalFloors;
        this.isMoving = false;
    }

    requestFloor(floor: number): void {
        if (floor < 0 || floor >= this.totalFloors) {
            console.log(`Invalid floor request: ${floor}`);
            return;
        }
        this.requestQueue.push(floor);
        this.processRequests();
    }

    private processRequests(): void {
        if (this.isMoving || this.requestQueue.length === 0) return;

        this.isMoving = true;
        this.requestQueue.sort((a, b) => Math.abs(a - this.currentFloor) - Math.abs(b - this.currentFloor));

        while (this.requestQueue.length > 0) {
            let nextFloor = this.requestQueue.shift()!;
            this.moveToFloor(nextFloor);
        }

        this.isMoving = false;
    }

    private moveToFloor(targetFloor: number): void {
        console.log(`Elevator ${this.id} moving from Floor ${this.currentFloor} to ${targetFloor}`);

        if (targetFloor > this.currentFloor) {
            this.direction = "UP";
        } else if (targetFloor < this.currentFloor) {
            this.direction = "DOWN";
        }

        this.currentFloor = targetFloor;
        console.log(`Elevator ${this.id} reached Floor ${this.currentFloor}`);
        this.direction = null;
    }
}
