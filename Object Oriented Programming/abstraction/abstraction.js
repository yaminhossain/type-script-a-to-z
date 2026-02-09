{
    // const vehicle: Vehicle = {
    //   name: "Toyota",
    //   model: "2002",
    // };
    var Car = /** @class */ (function () {
        function Car(name) {
            this.name = name;
        }
        Car.prototype.startEngine = function () {
            console.log("The ".concat(this.name, " car has started its engine"));
        };
        Car.prototype.stopEngine = function () {
            console.log("The ".concat(this.name, " car has stopped its engine"));
        };
        Car.prototype.move = function () {
            console.log("The ".concat(this.name, " car has moved"));
        };
        //Extra method
        Car.prototype.turnRight = function () {
            console.log("The ".concat(this.name, " car has turned right"));
        };
        return Car;
    }());
    var toyoTaCar = new Car("Toyota");
    toyoTaCar.startEngine();
}
