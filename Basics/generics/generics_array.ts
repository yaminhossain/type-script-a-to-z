{
  //Array generics
  // const rollNumbers: number[] = [1, 2, 3, 4];
  const rollNumbers: Array<number> = [1, 2, 3, 4];

  // const mentors: string[] = ["Yamin", "Hossain"];
  const mentors: Array<string> = ["Yamin", "Hossain"];

  // const boolArray: boolean[]=[true,false,true]
  const boolArray: Array<boolean> = [true, false, true];

  //Using generics with type aliasing
  type GenericsArr = Array<string>;
  const names: GenericsArr = ["Yamin", "Hossain", "Omi"];

  //-------------------Parameterized Generics------------------

  //Reusable Generics/ Parameterized Generics
  type GenArr<T> = Array<T>;

  // const rollNumbersDynamic: number[] = [1, 2, 3, 4];
  const rollNumbersDynamic: GenArr<number> = [1, 2, 3, 4];

  // const mentorsDynamic: string[] = ["Yamin", "Hossain"];
  const mentorsDynamic: GenArr<string> = ["Yamin", "Hossain"];

  // const boolArrayDynamic: boolean[]=[true,false,true]
  const boolArrayDynamic: GenArr<boolean> = [true, false, true];

  //--------------------------------Object type generics---------------------
  //not recommended
  const userNotRecommended: GenArr<object> = [
    {
      name: "Ymain",
      age: 24,
    },
    {
      name: "Hossain",
      age: "24",
    },
    {
      role: "student",
    },
  ];

  //Recommended
  const user: GenArr<{ name: string; age: number }> = [
    {
      name: "Ymain",
      age: 24,
    },
    {
      name: "Ymain",
      age: 25,
    },
  ];

  type User = {
    name: string;
    age: number;
  };
  const userWithType: GenArr<User> = [
    {
      name: "Ymain",
      age: 24,
    },
    {
      name: "Ymain",
      age: 25,
    },
  ];

  interface UserI {
    name: string;
    age: number;
  }
  const userWithInterface: GenArr<UserI> = [
    {
      name: "Ymain",
      age: 24,
    },
    {
      name: "Ymain",
      age: 25,
    },
  ];

  //----------------------------------------Generic Tuple---------------------

  type GenericTuple<X, Y> = [X, Y];
  const student: GenericTuple<string, number> = ["Yamin", 24];
  const userData: GenericTuple<number, { name: string; age: number }> = [
    118,
    { name: "Yamin", age: 23 },
  ];
}
