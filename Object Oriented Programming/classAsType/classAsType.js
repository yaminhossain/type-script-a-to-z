{
    /////////////////////////////////////
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.makeSound = function (sound) {
            console.log("The animal ".concat(this.name, " sounds like this ").concat(sound));
        };
        return Animal;
    }());
    // Initialize like an general javascript object
    var dog = {
        name: "German Shepard",
        makeSound: function (sound) {
            console.log("The animal ".concat(this.name, " sounds like this ").concat(sound));
        },
    };
    // Initialize like object creation
    var cat = new Animal("Siamese");
    var Student = /** @class */ (function () {
        function Student(name, age) {
            this.name = name;
            this.age = age;
        }
        Student.prototype.getGPA = function () {
            console.log("This is the gpa of ".concat(this.name));
        };
        return Student;
    }());
    function studentData(data) {
        var result = data.name;
        console.log("The result is ".concat(result));
        data.getGPA();
    }
    var student1 = new Student("Yamin", "26");
    studentData(student1);
    /////////////////////////////////////////
}
