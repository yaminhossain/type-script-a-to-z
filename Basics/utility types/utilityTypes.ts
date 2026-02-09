{
  //============================Pick utility==============
  type Person = {
    name: string;
    age: number;
    address: string;
    email?: string;
    contact: string;
  };

  type Person1 = Pick<Person, "name" | "age">;
  /* 
  Output: 
    type Person1 = {
    name: string;
    age: number;
    };
  */

  type Person1LookUp = Person["name" | "age"]; // Output: type Person1LookUp = string | number

  //=================Omit utility=================
  type Client = {
    name: string;
    age: number;
    address: string;
    email?: string;
    contact: string;
  };
  type COntactInfo = Omit<Client, "name" | "age">;
  /* 
  Output:
  type COntactInfo = {
    address: string;
    email?: string | undefined;
    contact: string;
  }
  */

  //===================================Required Utility===========================

  type Teacher = {
    name: string;
    age: number;
    address: string;
    email?: string;
    contact: string;
  };
  type HeadTeacher = Required<Client>;
  /* 
  Output:
  type HeadTeacher = {
    name: string;
    age: number;
    address: string;
    email: string;
    contact: string;
  }
  */

  //=====================================Partial=========================
  type Friends = {
    name: string;
    age: number;
    address: string;
    email?: string;
    contact: string;
  };
  type FakeFriends = Partial<Client>;

  /* 
  Output:
  type FakeFriends = {
    name?: string | undefined;
    age?: number | undefined;
    address?: string | undefined;
    email?: string | undefined;
    contact?: string | undefined;
  }
  */

  //=========================================Readonly============================
  type MySelf = {
    name: string;
    age: number;
    address: string;
    email?: string;
    contact: string;
  };
  type InfoType = Readonly<MySelf>;
  const myInfo: InfoType = {
    name: "Yamin",
    age: 26,
    address: "Dhaka",
    email: "y@gmail.com",
    contact: "0121212",
  };
  //myInfo.name = "Hossain"; // This will throw an error

  //=========================================Readonly============================
  type MyObj = Record<string, string>;
  const obj: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  type MyExplicitObject = {
    a: string;
    b: string;
  };
  const obj2: MyExplicitObject = {
    a: "aa",
    b: "bb",
    // c: "cc", // This will throw an error
  };

  // const emptyObject: object = {};
  // const emptyObject: {} = {};
  const emptyObject: Record<string, unknown> = {};
  emptyObject.name = "Yamin";
}
