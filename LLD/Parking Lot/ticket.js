let ticketCounter = 0;

class Ticket {
  constructor(vehicle, level, slot) {
    this.id = `TICKET-${++ticketCounter}`;
    this.vehicleNumber = vehicle.number;
    this.vehicleType = vehicle.type;
    this.slot = slot;
    this.color = vehicle.color;

    this.entryTime = new Date();
    this.level = level;
  }

  getTicket()
  {
    return({
        TicketID: this.id,
        VehicleNumber: this.vehicleNumber,
        VehicleType: this.vehicleType,
        ParkedAtSpot: this.slot +"on Level"+this.level,
        EntryTime: this.entryTime.toLocaleString(),
    })
  }
}
export default Ticket;
