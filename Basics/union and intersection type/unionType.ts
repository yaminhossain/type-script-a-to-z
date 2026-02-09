{
  //Union types
  //literal type
  type FrontEndDeveloper = "Senior Frontend Developer" | "Junior Frontend Developer";
  type BackEndDeveloper = "Senior Backend Developer" | "Junior Backend Developer";
  //Mixing multiple type
  type FullStackDeveloper = FrontEndDeveloper | BackEndDeveloper
  
  const dev: FrontEndDeveloper = "Senior Frontend Developer";
  // const dev:frontEndDeveloper = "Senior Frontend Dev" // This will throw an error

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const user1: User = {
    name: "Yamin",
    gender: "male",
    bloodGroup: "O+",
  };

  //Intersection types
  type MachineLearningEngineer = {
    skills:string[];
    experience: string;
  }

  type SoftwareEngineer ={
    skills: string[];
    department: "Engineering"
  }

  type EngineeringDept = MachineLearningEngineer & SoftwareEngineer;

  const engineer:EngineeringDept={
    skills:["Tesorflow.js", "Next.js"],
    experience:"2years",
    department:"Engineering"
  }

}











