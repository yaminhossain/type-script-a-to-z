{
  // ================================Example 01===========================
  class Person {
    getSleep() {
      console.log("The person gets sleep for 8h");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("The person gets sleep for 7h");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("The person gets sleep for 6h");
    }
  }

  const getSleepingStatus = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingStatus(person1); //The person gets sleep for 8h
  getSleepingStatus(person2); //The person gets sleep for 7h
  getSleepingStatus(person3); //The person gets sleep for 6h

  // ================================================Example 02===============================
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape1); // 0
  getShapeArea(shape2); // 314.1592653589793
  getShapeArea(shape3); // 200
}
