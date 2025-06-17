
import Ticket from "./ticket.js";


class ParkingLot {
  constructor({ levels, slotsPerLevel }) {
    this.levels = levels;
    this.slotsPerLevel = slotsPerLevel;
    this.slots = Array.from({ length: levels }, () =>
        Array(slotsPerLevel).fill(null)
      );
    
    }

  parkingLotDetials() {
    console.log("total Level " + this.levels);
    console.log("slotsPerLevel " + this.slotsPerLevel);
  }
parkVehicle(vehicle)
{
    for(let level =0;level<this.levels;level++)
        {
            for(let slot =0;slot<this.slotsPerLevel;slot++)
            {
                if(this.slots[level][slot]===null)
                {
                    this.slots[level][slot] = vehicle;
                    // console.log("slot +++++++",this.slots[level][slot])

                    return new Ticket(vehicle,level,slot);
                }

                
            }
      
        }
        return null;

}

displaySlot()
{
    for(let level =0;level<this.levels;level++)
        {
            for(let slot =0;slot<this.slotsPerLevel;slot++)
            {
                // console.log( this.slots[level][slot]?.number)
            }
        }
        // console.log("=================")
}

unparkVehicle(ticket)
{
    // console.log(ticket,"ticket",ticket?.vehicleNumber)
    const vehicleNumber = ticket?.vehicleNumber;
    if (!vehicleNumber) return false;
    for(let level =0;level<this.levels;level++)
        {
            for(let slot =0;slot<this.slotsPerLevel;slot++)
            {
            
                if(this.slots[level][slot]?.number===vehicleNumber)
                {
                    this.slots[level][slot] = null;
                    return  true;
                }

                
            }
            
      
        }
        return null;

}
 
}

export default ParkingLot;




