{
//Spread Operator

//On array
const bros1: string[] = ["Yamin", "Anik", "Udoy"];
const bros2: string[] = ["Rupom", "Avik", "Raza", ...bros1];
console.log(bros2);
bros2.push(...bros1);
// bros2.push(bros1) // Typescript will throw an error. JavaScript will throw that error on run time not before that. TypeScript is throwing that error before run time

//On objects
const teachers1 = {
  dsa: "Yamin",
  ml: "Rupom",
  security: "Udoy",
};
const teachers2 = {
  dbms: "Anik",
  ai: "Avik",
  architecture: "Hridoy",
};
const teachers = {
  ...teachers1,
  ...teachers2,
};

console.log(teachers);

//Rest operator
//Example 01:
const greetFriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};
greetFriends("Yamin", "Anik", "Rupom", "Uody");

//Example 02:
function greet(greeting: string, ...names: string[]) {
  return `${greeting}, ${names.join(" and ")}!`;
}
console.log(greet("Hello", "Alice", "Bob"));
// Output: Hello, Alice and Bob!



// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...restOfNumbers] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(restOfNumbers); // Output: [3, 4, 5]

// Object Destructuring
const person = {
  name: "John",
  age: 30,
  city: "New York",
  occupation: "Engineer",
};
const { name, age, ...otherDetails } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(otherDetails); // Output: { city: "New York", occupation: "Engineer" }

}