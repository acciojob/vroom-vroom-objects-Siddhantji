// Complete the js code
function Car(make, model) {
	constructor(make,model){
		this.make = make;
		this.model = model;
	}
	getMakeModel(){
		return '${this.make} ${this.model}';
	}
}

function SportsCar(make, model, topSpeed) {
	constructor(make,model,topSpeed){
		this.make=make;
		this.model = model;
		this.topSpeed = topSpeed;
	}
	getTopSpeed(){
		return this.topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
