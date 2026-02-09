var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var add = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + a;
        }
        else {
            return a.toString() + b.toString();
        }
    };
    var result = add(1, 5);
    console.log(result);
    var getUser = function (user) {
        if ("role" in user) {
            console.log("My name is ".concat(user.name, " and my role is ").concat(user.role));
        }
        else {
            console.log("My name is ".concat(user.name));
        }
    };
    //========================================instance of==========================
    var Animal = /** @class */ (function () {
        function Animal(name, species) {
            this.name = name;
            this.species = species;
        }
        Animal.prototype.makeSound = function () {
            console.log("The animal is making sound");
        };
        return Animal;
    }());
    var Dog_1 = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, species) {
            return _super.call(this, name, species) || this;
        }
        Dog.prototype.doBark = function () {
            console.log("The dog is barking");
        };
        return Dog;
    }(Animal));
    var Cat_1 = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name, species) {
            return _super.call(this, name, species) || this;
        }
        Cat.prototype.doMeowing = function () {
            console.log("The dog is Meowing");
        };
        return Cat;
    }(Animal));
    //Refactoring
    var isDog_1 = function (animal) {
        return animal instanceof Dog_1;
    };
    var isCat_1 = function (animal) {
        return animal instanceof Cat_1;
    };
    //Function getting instances
    var getAnimal = function (animal) {
        if (isDog_1(animal)) {
            animal.doBark();
        }
        else if (isCat_1(animal)) {
            animal.doMeowing();
        }
        else {
            animal.makeSound();
        }
        // if (animal instanceof Dog) {
        //   animal.doBark();
        // } else if (animal instanceof Cat) {
        //   animal.doMeowing();
        // } else {
        //   animal.makeSound();
        // }
    };
    var dog = new Dog_1("German Shepard", "shepard");
    var cat = new Cat_1("Persian Cat", "persian");
    getAnimal(dog);
    getAnimal(cat);
}
