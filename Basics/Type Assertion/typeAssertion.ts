{
  //Type Assertion
  //For single value
  let anything: any;
  anything = "United International University";
  (anything as string).match("UIU");

  //For function
  const KGToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 100;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 100;
    }
  };

  const result1 = KGToGram(1000) as number;
  const result2 = KGToGram(1000) as string;

  //Type aliasing for Type assertion
  type CustomError = {
    message: string;
  };

  try {
    //code block
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
