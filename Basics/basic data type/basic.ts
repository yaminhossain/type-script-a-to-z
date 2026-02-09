// Basic data types

// String
let firstName: string = "Yamin Hossain";
// Number
let roll: number = 123;
// boolean
let isAdmin: boolean = true;
// undefined
let x: undefined = undefined;
// null
let y: null = null;

//any data type

let a;

a = 123;
a = "Yamin";
a = false;

//Array
//Array of strings
let friends: string[] = ["Anik", "Rupom", "Udoy"];

//Array of numbers
let eligibleRollNumber: number[] = [1, 2, 4, 3];
eligibleRollNumber.push(6);

//Tuples
let user: [number, string] = [1, "Yamin"]; // if we add another element it will throw an error

let coordinates: [number, number] = [1, 2];
let ageName: [number, string, boolean] = [25, "Yamin", true];
ageName[0] = 26;
// ageName[1]= 27 //It will throw an error.

// Object
const userData: {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
} = {
  firstName: "Yamin",
  middleName: "Hossain",
  lastName: "Omi",
  age: 26,
};

// Object
const userData2: {
  firstName: string;
  middleName?: string; //Optional type
  lastName: string;
  age: number;
} = {
  firstName: "Yamin",
  lastName: "Omi",
  age: 26,
};
// Object
const userData3: {
  university: "United International University"; //Literal Type
  firstName: string;
  middleName?: string; //Optional type
  lastName: string;
  age: number;
} = {
  university: "United International University",
  firstName: "Anik",
  lastName: "Biswas",
  age: 26,
};
// Object
const userData4: {
  readonly university: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  age: number;
} = {
  university: "United International University",
  firstName: "Anik",
  lastName: "Biswas",
  age: 26,
};
// userData4.university = "UIU"; // Throws an error.

//Function
// Normal function
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
sum(1, 2);

//Arrow function
const arrowSum = (num1: number, num2: number): number => num1 + num2;

//Assigning a default value to a parameter
function sum2(num1: number, num2: number = 1): number {
  return num1 + num2;
}
sum2(1, 2);

// Declaring a method: Function inside an object
//Normal Function
const poorUser = {
  name: "Yamin",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
  age: 20,
};

//Arrow Function
const message = {
  sender: "Yamin",
  displayMessage: (input: string): string => {
    return `Message: ${input}`;
  },
};

//Callback function
const arr: number[] = [1, 2, 3];
const newArr: number[] = arr.map((elem: number): number => elem * elem);
