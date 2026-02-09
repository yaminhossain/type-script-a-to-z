{
    var Animal = /** @class */ (function () {
        function Animal(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        Animal.prototype.makeNoise = function () {
            console.log("The ".concat(this.name, " says ").concat(this.sound));
        };
        return Animal;
    }());
    //Creating an object
    var dog = new Animal("German Shepard", "dog", "Wof Wof");
    var cat = new Animal("Persian", "cat", "meow meow");
    //Accessing object properties
    var dogSound = dog.sound;
    console.log("The dog sounds:", dogSound);
    //calling a method
    cat.makeNoise();
    var name_1;
    function example(name) {
        name = name;
    }
    example("Yamin");
    console.log(name_1);
}
