{
  // Declaring type using Type Aliasing
  type User1 = {
    name: string;
    age: number;
  };

  //Type aliasing for primitive type
  type userName = string;

  // Extending Type Alias using intersection operator
  type UserWithRole1 = User1 & { role: string };

  // Declaring type using interface
  interface User2 {
    name: string;
    age: number;
  }
  //Extend Interface
  interface userWithRole2 extends User2 {
    role: string;
  }

  //Extend type alias with interface
  interface userWithRole3 extends User1 {
    role: string;
  }

  //Extending a type using interface
  interface userPhone {
    phone: string;
  }
  type extendedTypeAliasingWithInterface = User1 & userPhone;

  //All kind of implementations
  //Normal Type declaration
  const user: User2 = {
    name: "Ymain",
    age: 26,
  };

  //Extending Type
  const userWithRole: userWithRole2 = {
    name: "Ymain",
    age: 26,
    role: "student",
  };
  //Extending TypeAlias by using an Interface
  const userX: extendedTypeAliasingWithInterface = {
    age: 24,
    name: "Yamin",
    phone: "01323",
  };

  //For arrays
  //Using type aliasing
  type arrTypeAlias = string[];

  //using interface
  interface arrInterface {
    [index: number]: string;
  }

  const arr: arrInterface = ["Yamin", "Hossain", "Omi"];

  //For functions
  //Using Type Aliasing
  type AddT = (num1: number, num2: number) => number;

  interface AddI {
    (num1: number, num2: number): number;
  }

  const add: AddI = (num1, num2) => num1 + num2;
}
