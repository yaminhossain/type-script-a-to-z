{
  // conditional type
  type a1 = null;
  type b1 = undefined;
  type x = a1 extends null ? true : false; // type x= true

  //nested conditional types
  type y = a1 extends number ? string : b1 extends undefined ? undefined : any;

  //using generics
  type Person = {
    name: string;
    age: number;
    address: string;
  }
  // keyof Person => "name" | "age" | "address"
  type CheckValidity<T>= T extends keyof Person ? true : false; 
  type HasName = CheckValidity<"name"> // type HasName = true
}
