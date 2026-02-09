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
    //Parent class
    var Person = /** @class */ (function () {
        function Person(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        Person.prototype.getAge = function () {
            console.log("Mr. ".concat(this.name, " is ").concat(this.age, " years old"));
        };
        return Person;
    }());
    //Child class
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, address, contact) {
            var _this = _super.call(this, name, age, address) || this;
            _this.contact = contact;
            return _this;
        }
        Student.prototype.getGPA = function (cgpa) {
            console.log("The CGPA of Mr. ".concat(this.name, " is ").concat(cgpa));
        };
        return Student;
    }(Person));
    //Child class
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher(name, age, address, department) {
            var _this = _super.call(this, name, age, address) || this;
            _this.department = department;
            return _this;
        }
        Teacher.prototype.showTeacherDepartment = function () {
            console.log("Mr. ".concat(this.name, " is in ").concat(this.department));
        };
        return Teacher;
    }(Person));
    //Usage
    var student1 = new Student("Yamin", 26, "Dhaka", "y@gmail.com");
    var teacher1 = new Teacher("Hossain", 46, "Dhaka", "Computer Science");
    student1.getAge();
    student1.getGPA(3.5);
    teacher1.getAge();
    teacher1.showTeacherDepartment();
}
