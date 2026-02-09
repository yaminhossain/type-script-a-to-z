{
  //=============================Basics Of class and objects======================
  class Animal {
    public name: string;
    species: string;
    sound: string;
    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
    makeNoise(): void {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  //Creating an object
  const dog = new Animal("German Shepard", "dog", "Wof Wof");
  const cat = new Animal("Persian", "cat", "meow meow");

  //Accessing object properties
  const dogSound = dog.sound;
  console.log("The dog sounds:", dogSound);

  //calling a method
  cat.makeNoise();

  //=============================Basic Access modifier======================
  class Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  //using parameter properties

  class PersonWithParameterProperties {
    // public name: string;
    // public age: number;
    // private address: string;
    public readonly university: string = "United International University";
    constructor(
      public name: string,
      public age: number,
      private address: string
    ) {
      // this.name = name;
      // this.age = age;
      // this.address = address;
    }
  }

  class Student {
    constructor(
      public name: string,
      public age: number,
      private address: string
    ) {}
  }
}
