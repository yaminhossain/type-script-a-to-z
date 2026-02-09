{
  interface Developer<T, X = null> { // default parameter for X is null
    // Parameter "T" will receive each configuration for smartWatch property
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X; // optional type
  }

  //code clean up
  type FrontEndDeveloperWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const frontEnd: Developer<FrontEndDeveloperWatch, null> = { // if we don't set default parameter for X, we have to set null for X
    name: "Yamin",
    computer: {
      brand: "AMD",
      model: "RTX 3050",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "Apple",
      model: "iWatch 4",
      display: "OLED",
    },
  };

  //code clean up
  interface BackEndDeveloperWatch {
    brand: string;
    model: string;
    hearthBeatTrack: boolean;
    sleepTrack: boolean;
  }
  interface BackEndDeveloperBike {
    model: string;
    engineCapacity: string;
  }
  const backEnd: Developer<BackEndDeveloperWatch, BackEndDeveloperBike> = {
    name: "Yamin",
    computer: {
      brand: "intel",
      model: "RTX 3060",
      releaseYear: 2017,
    },
    smartWatch: {
      brand: "Apple",
      model: "iWatch 4",
      hearthBeatTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "YAMAHA",
      engineCapacity: "100CC",
    },
  };
  
}
