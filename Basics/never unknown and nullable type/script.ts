{
  //Nullable type
  const searchName = (name: string | null): void => {
    if (name) {
      console.log("Searching...");
    } else {
      console.log("Nothing to search.");
    }
  };
  searchName(null);

  //unknown type
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed}`);
    } else if (typeof value === "string") {
      const [speed, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed}`);
    } else {
      console.log("Wrong input");
    }
  };
  getSpeedInMeterPerSecond("200 km/h");

  //never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("You are not allowed");

}
