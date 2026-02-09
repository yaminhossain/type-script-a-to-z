{
  /////////////////////////////////////

  /*
  In JavaScript, we can create and object in 2 ways :
  1. direct object 
  2. From a class
  */

  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    makeSound(sound: string) {
      console.log(`The animal ${this.name} sounds like this ${sound}`);
    }
  }

  // Initialize like an general javascript object. Although this is valid but not recommended.
  // TypeScript only checks shape, unless private/protected members exist.
  // Because although private and protected properties are inaccessible from outside, TypeScript still waits for the unassigned properties.
  let dog: Animal = {
    name: "German Shepard",
    makeSound(sound) {
      console.log(`The animal ${this.name} sounds like this ${sound}`);
    },
  };

  // Initialize like object creation
  let cat: Animal = new Animal("Siamese");

  class Student {
    name: string;
    age: string;
    constructor(name: string, age: string) {
      this.name = name;
      this.age = age;
    }
    getGPA() {
      console.log(`This is the gpa of ${this.name}`);
    }
  }

  function studentData(data: Student) {
    const result = data.name;
    console.log(`The result is ${result}`);
    data.getGPA();
  }

  const student1: Student = new Student("Yamin", "26");
  studentData(student1);

  //Using parent classname as type for child class

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    getName() {
      console.log(`The name is ${this.name}`);
    }
  }

  class Teacher extends Person {
    dept: string;
    constructor(name: string, age: number, dept: string) {
      super(name, age);
      this.dept = dept;
    }
    getDpt() {
      console.log(`The teacher's department is ${this.dept}`);
    }
  }

  const teacher1: Person = new Teacher("Yamin", 26, "CSE");
  // teacher1.getDept(); // This will not work

  //Using Type assertion. We tell TypeScript: "Trust me, this Person is actually a Teacher"
  (teacher1 as Teacher).getDpt();
  
  // Using type guard
  if (teacher1 instanceof Teacher) {
    teacher1.getDpt();
  }
  /////////////////////////////////////////
}
