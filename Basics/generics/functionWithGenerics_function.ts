{
  //Array without generics
  const createArray = (params: string): string[] => {
    return [params];
  };

  const resWithoutGenerics = createArray("BAN");

  //------------------------Create an Array with generics through function-------------------
  const createArrayWithGenerics = <T>(params: T): T[] => {
    return [params];
  };

  //passing primitive value
  const resWithGenerics = createArrayWithGenerics<string>("Yamin");

  //passing an object
  const resWithGenerics2 = createArrayWithGenerics<object>({
    name: "Yamin",
    age: 24,
  });

  //specify object types
  const resWithGenerics3 = createArrayWithGenerics<{
    name: string;
    age: number;
  }>({
    name: "Yamin",
    age: 24,
  });

  //code cleanup
  type SpecifiedObjectType = {
    name: string;
    age: number;
  };

  const resWithGenerics4 = createArrayWithGenerics<SpecifiedObjectType>({
    name: "Yamin",
    age: 24,
  });
  //------------------------Create a tuple with generics through function-------------------
  const createTupleWithGenerics = <T, X>(param1: T, param2: X): [T, X] => {
    return [param1, param2];
  };

  //primitive type data
  const resWithPrimitive = createTupleWithGenerics<string, number>("Yamin", 25);

  //Non primitive data: Object
  const resWithNonPrimitive = createTupleWithGenerics<
    string,
    { address: string; age: number }
  >("Yamin", {
    address: "Dhaka",
    age: 25,
  });

  //With some fixed properties

  const studentData = <T>(params: T): object => {
    const program = "Computer Science";
    return {
      ...params,
      program,
    };
  };

  const student1 = studentData({
    name: "Mr. X",
    email: "x@gmail.com",
    address: "Dhaka, Bangladesh",
  });
  const student2 = studentData({
    name: "Mr. Y",
    email: "y@gmail.com",
    phone: "912121",
  });
}
