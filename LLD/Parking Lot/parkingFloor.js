 class ParkingFloor  {
    constructor(_floor)
    {
        this.floor = _floor;
        this.spots = _spots;
    }
    showTotalFloor()
    {
        console.log(this.floor)
    }
}

module.exports = { ParkingFloor };