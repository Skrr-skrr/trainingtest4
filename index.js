class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  getMake() {
    return this.make;
  }

  getModel() {
    return this.model;
  }

  getYear() {
    return this.year;
  }

  getColor() {
    return this.color;
  }

  setMake(newMake) {
    this.make = newMake;
  }

  setModel(newModel) {
    this.model = newModel;
  }

  setYear(newYear) {
    this.year = newYear;
  }

  setColor(newColor) {
    this.color = newColor;
  }
}

let newCar = new Car("Toyota", "Camry", "2020", "Silver");

console.log("");
console.log("OUTPUT:");
console.log("--------------------------");
console.log("Your car specs are:");
console.log("--------------------------");
console.log("##########################");
console.log(" ");
console.log("Make: " + newCar.getMake());
console.log("");
console.log("Model: " + newCar.getModel());
console.log("");
console.log("Year: " + newCar.getYear());
console.log("");
console.log("Color: " + newCar.getColor());
console.log(" ");
console.log("##########################");
console.log("--------------------------");
console.log("Thank You ...");
console.log("--------------------------");
