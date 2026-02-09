{
  //================================Using interfaces=====================
  interface Vehicle {
    name: string;
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    startEngine(): void {
      console.log(`The ${this.name} car has started its engine`);
    }
    stopEngine(): void {
      console.log(`The ${this.name} car has stopped its engine`);
    }
    move(): void {
      console.log(`The ${this.name} car has moved`);
    }
    //Extra method
    turnRight(): void {
      console.log(`The ${this.name} car has turned right`);
    }
  }

  const toyoTaCar = new Car("Toyota");
  toyoTaCar.startEngine(); // The Toyota car has started its engine

  //================================Using abstract classes=====================

  abstract class Shape {
    constructor(protected name: string) {}

    // abstract method (no implementation)
    abstract getArea(): number;

    // concrete method (shared logic)
    describe(): void {
      console.log(`This is a ${this.name}`);
    }
  }

  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super("Rectangle");
    }

    getArea(): number {
      return this.width * this.height;
    }
  }

  class Circle extends Shape {
    constructor(private radius: number) {
      super("Circle");
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  function printArea(shape: Shape) {
    shape.describe();
    console.log("Area:", shape.getArea());
  }

  // const a = new Shape("a"); // This will throw an error
  printArea(new Rectangle(4, 5));
  printArea(new Circle(3));
}
