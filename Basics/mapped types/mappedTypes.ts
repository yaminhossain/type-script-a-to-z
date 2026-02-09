{
  //Basic map
  const numberArr: number[] = [1, 2, 4];

  //converting array of number to array of string
  const stringArr: string[] = numberArr.map((num) => num.toString());
  console.log(stringArr);

  type User = {
    age: number;
    phone: number;
  };

  // type UserString = {
  //   age: string;
  //   phone: string;
  // };

  // ==================================Using mappedType==============================
  type ExampleUserString = {
    [key in "height" | "width"]: string;
  };

  /* 
  Output:
  type ExampleUserString = {
    height: string;
    width: string;
  }
  */
  type UserString = {
    [Properties in keyof User]: string;
  };
  /* 
  Output:
  type UserString = {
    age: string;
    phone: string;
  }
  */
  //===============================Lookup type===============================
  type Person = {
    name: string;
    age: number;
  };

  type PersonName = Person["name"];
  // Output: type PersonName = string

  //===================================Using Generics=======================
  type StudentData = { name: string; age: number };
  type Student<T> = {
    [Property in keyof T]: T[Property];
  };

  // const newStudent: Student<{ name: string; age: number }> = {
  const newStudent: Student<StudentData> = {
    name: "Yamin",
    age: 26,
  };
}
