{
  //Parent class
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getAge() {
      console.log(`Mr. ${this.name} is ${this.age} years old`);
    }
  }

  //Child class
  class Student extends Person {
    contact: string;
    constructor(name: string, age: number, address: string, contact: string) {
      super(name, age, address);
      this.contact = contact;
    }
    getGPA(cgpa: number) {
      console.log(`The CGPA of Mr. ${this.name} is ${cgpa}`);
    }
  }

  //Child class
  class Teacher extends Person {
    department: string;
    constructor(
      name: string,
      age: number,
      address: string,
      department: string
    ) {
      super(name, age, address);
      this.department = department;
    }
    showTeacherDepartment() {
      console.log(`Mr. ${this.name} is in ${this.department}`);
    }
  }

  //Usage
  const student1 = new Student("Yamin", 26, "Dhaka", "y@gmail.com");
  const teacher1 = new Teacher("Hossain", 46, "Dhaka", "Computer Science");

  student1.getAge();
  student1.getGPA(3.5);

  teacher1.getAge();
  teacher1.showTeacherDepartment();
}
