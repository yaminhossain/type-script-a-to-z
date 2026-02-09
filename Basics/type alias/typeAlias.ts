{
  //Type Aliasing for an object
  type Student = {
    name: string;
    age: number;
    address: string;
    contactNo: number;
    email?: string;
  };

  const student1: Student = {
    name: "Yamin",
    age: 24,
    address: "Dhaka",
    contactNo: 163232,
    email: "yamin@gmail.com",
  };

  const student2: Student = {
    name: "Hossain",
    age: 26,
    address: "Chattrogram",
    contactNo: 121121,
  };

  //Type Aliasing for string
  type StudentName = string;
  const name: StudentName = "Yamin";

  //Type Aliasing for boolean
  type IsGraduate = boolean;
  const studentShip: IsGraduate = true;

  //Type aliasing for function
  type Add = (num1: number, num2: number) => number; // number is the return type
  const add: Add = (numA, numB) => numA + numB;
  console.log(add(1, 2));

  //We can not do Type aliasing for normal functions
  
  //For arrays
  type arrTypeAlias = string[];
  const arr: arrTypeAlias = ["Yamin", "Hossain", "Omi"];
}
