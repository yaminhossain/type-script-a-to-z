{
  //ternary operator
  const age: number = 18;
  const isAdult: string = age >= 18 ? "adult" : "not adult";

  //nullish coalescing operator

  // const isAuthenticated: null | undefined | string = "OK";
  const isAuthenticated: null | undefined | string = null;
  const result: string = isAuthenticated ?? "Guest";
  console.log(result); // prints Guest

  const test = "";
  const result2: string = test ? "Guest" : test;
  console.log(result2); // prints empty string

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Yamin Hossain",
    address: {
      city: "Dhaka",
      road: "Salimullah Road",
      presentAddress: "Mugda",
    },
  };

  const permanentAddress: string =
    user?.address?.permanentAddress ?? "Permanent Address Not Found";
  console.log(permanentAddress);
}
