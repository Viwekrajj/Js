// import {Floor} from "./parkingFloor.js"
// let FloorNumber  = new Floor(5); 
// FloorNumber.showTotalFloor();
import ParkingLot from "./ParkingLot.js"
import Vehicle from "./vehicle.js"




// Step 1: Initialize Parking Lot
const parkingLot = new ParkingLot({
  levels: 3,
  slotsPerLevel: 10,
});

parkingLot.parkingLotDetials();

console.log("🚗 Parking Lot Initialized");

// Step 2: Create Vehicles
const car1 = new Vehicle('CAR', 'KA-01-HH-1234', 'Blue');
const bike1 = new Vehicle('BIKE', 'KA-01-HH-9999', 'Red');
car1.carDetials()
bike1.carDetials()


// Step 3: Park Vehicles
const ticket1 = parkingLot.parkVehicle(car1);
// console.log(ticket1,"ticket1====")
// console.log(`Ticket issued for car1: ${ticket1 ?? 'Parking Full'}`);

const ticket2 = parkingLot.parkVehicle(bike1);
// console.log(ticket2,"ticket1====")

// console.log(`Ticket issued for bike1: ${ticket2?? 'Parking Full'}`);
parkingLot?.displaySlot()
// Step 4: Unpark a Vehicle
const isUnparked = parkingLot.unparkVehicle(ticket1);
console.log(`Car1 ${isUnparked ? 'successfully unparked' : 'not found'}`);
const isUnparked2 = parkingLot.unparkVehicle(ticket1);
console.log(`Car1 ${isUnparked2 ? 'successfully unparked' : 'not found'}`);



// Step 5: Display status (optional)
// parkingLot.displayAvailableSlots();
