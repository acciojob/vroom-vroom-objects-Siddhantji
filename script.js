function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call the Car constructor to initialize make and model
    this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype); // Inherit Car prototype
SportsCar.prototype.constructor = SportsCar; // Set correct constructor

SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

