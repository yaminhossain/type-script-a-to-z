{
  //Promise (string)
  const createPromise = (): Promise<string> => {
    const data: string = "Hello";
    return new Promise<string>((resolve, reject) => {
      // Sending string as generics. TypeScript wraps the JavaScript Promise with generics.
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  const displayData = async () => {
    try {
      const result = await createPromise();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  displayData();

  //Promise (boolean)
  const createBoolPromise = (): Promise<boolean> => {
    const data: boolean = true;
    return new Promise<boolean>((resolve, reject) => {
      // Sending boolean as generics. TypeScript wraps the JavaScript Promise with generics.
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };
  //Async function always returns a Promise
  const displayBoolData = async (): Promise<boolean> => {
    const res: boolean = await createBoolPromise();
    return res;
  };

  const displayBool = async () => {
    const res = await displayBoolData();
    console.log(res);
  };

  displayBool();

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////

  // Send object as Promise data
  type User = {
    name: string;
    age: number;
  };

  const userData = (): Promise<User> => {
    const data: User = {
      name: "Yamin",
      age: 25,
    };
    return new Promise<User>((resolve, reject) => {
      if (data) {
        resolve(data);
      } else {
        reject("Data not found!");
      }
    });
  };

  const getUserData = async () => {
    try {
      const res: User = await userData();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  getUserData();

  ///////////////////////////////////////////////////////////////////////////
  //Promise with actual API
  
}
