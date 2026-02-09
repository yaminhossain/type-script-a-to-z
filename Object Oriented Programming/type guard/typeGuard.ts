{
  //==============================Type Guard using "typeof" operator==========================
  type AlphaNumeric = string | number;

  const add = (a: AlphaNumeric, b: AlphaNumeric): AlphaNumeric => {
    if (typeof a === "number" && typeof b === "number") {
      return a + a;
    } else {
      return a.toString() + b.toString();
    }
  };

  const result = add(1, 5);
  console.log(result);

  //================================Type guard using "in" operator==========================
  type GeneralUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: GeneralUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  //========================================instance of==========================
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log(`The animal is making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    doBark() {
      console.log(`The dog is barking`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    doMeowing() {
      console.log(`The dog is Meowing`);
    }
  }

  //Refactoring
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  //Function getting instances
  //const getAnimal = (animal: Animal) => {
  // if (animal instanceof Dog) {
  //   animal.doBark();
  // } else if (animal instanceof Cat) {
  //   animal.doMeowing();
  // } else {
  //   animal.makeSound();
  // }
  // };
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.doBark();
    } else if (isCat(animal)) {
      animal.doMeowing();
    } else {
      animal.makeSound();
    }
  };
  const dog: Animal = new Dog("German Shepard", "shepard");
  const cat = new Cat("Persian Cat", "persian");

  getAnimal(dog);
  getAnimal(cat);
}
