{
  type vehicle = {
    bike: string;
    cycle: string;
    ship: string;
  };

  type Owner = "bike" | "cycle" | "ship";
  //using keyof operator
  type OwnerUsingKeys = keyof vehicle; // "bike" | "cycle" | "ship"

  const person: OwnerUsingKeys = "bike";

  // The function will return the value of given key from the object
  //error: key can be any value. So, we need to explicitly declare the type. We can get help of generics
  // const getPropertyValue = <T, S extends keyof T>(obj: object, key: string) => {} // this will not work because this allows key to be any string
  const getPropertyValue = <T, S extends keyof T>(obj: T, key: S) => {
    return obj[key];
  };

  const student1 = {
    name: "Yamin",
    age: 24,
    vehicle: "bike",
  };

  const student2 = {
    name: "Hossain",
    age: 24,
    address: "Dhaka",
  };

  const res = getPropertyValue(student1, "vehicle");
  console.log(res);
}
