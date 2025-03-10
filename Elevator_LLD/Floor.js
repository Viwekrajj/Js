class Floor {
  constructor(fN, up, down) {
    floorNo = this.fN;
    up = this.up;
    down = this.down;
  }
  requestElevator(elevate) {
    if (elevate) {
      up = true;
      down = false;
    } else {
      up = false;
      down = true;
    }
  }
}

module.export = Floor;