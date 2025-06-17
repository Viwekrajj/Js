class vehicle {
  constructor(type, numberPlate, color) {
    this.number = numberPlate;
    this.color = color;
    this.type = type;
  }
  carDetials() {
    console.log(
      " vechile type is " +
        this.type +
        "  color is " +
        this.color +
        " its number plate is " +
        this.number
    );
  }
}

export default  vehicle ;
 
