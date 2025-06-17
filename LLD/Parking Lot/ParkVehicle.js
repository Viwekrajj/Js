// import Ticket from './Ticket.js';

// class ParkingLot {
//   constructor({ levels, slotsPerLevel }) {
//     this.levels = levels;
//     this.slotsPerLevel = slotsPerLevel;

//     // Create a 2D array to track free/occupied slots
//     this.slots = Array.from({ length: levels }, () =>
//       Array(slotsPerLevel).fill(null)
//     );
//   }

//   parkVehicle(vehicle) {
//     for (let level = 0; level < this.levels; level++) {
//       for (let slot = 0; slot < this.slotsPerLevel; slot++) {
//         if (this.slots[level][slot] === null) {
//           // Mark slot as occupied
//           this.slots[level][slot] = vehicle;

//           // Generate and return ticket
//           return new Ticket(vehicle, level, slot);
//         }
//       }
//     }

//     // If no slot found
//     return null;
//   }
// }

// export default ParkingLot;
