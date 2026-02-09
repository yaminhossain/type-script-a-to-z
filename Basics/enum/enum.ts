{
  /*
  user roles:
  0 => Guest
  1 => Editor
  2 => Viewer
  3 => Admin
  */

  //Numeric type
  enum UserRole {
    Guest,
    Editor,
    Viewer,
    Admin,
  }

  let person: UserRole;

  let user: UserRole = UserRole.Admin;
  console.log(user); //3
  //Re assigning another value
  user = UserRole.Guest;
  console.log(user); //0

  enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized, // 401
    NotFound = 404,
  }

  // StatusCodes.Unauthorized = 201 // error;
  console.log(StatusCodes.Unauthorized);

  //String enum
  enum Role {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER",
  }
  // Accessing a value:
  console.log(Role.Admin); // Output: "ADMIN"

  //Heterogenous enum

  const enum RequestType {
    id = 101,
    readData = "Read_DATA",
    deleteData = "DELETE_DATA",
  }

  console.log(RequestType.id); //101
  console.log(RequestType.readData); //Read_Data

  //enum with interfaces
  enum ResourceType {
    Book,
    Author,
    Director,
    Person,
  }

  interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
  }

  const docOne: Resource<Object> = {
    uid: 1,
    resourceType: ResourceType.Author,
    data: { title: "name of the wind" },
  };
  const docTwo: Resource<Object> = {
    uid: 2,
    resourceType: ResourceType.Person,
    data: { title: "name of the wind" },
  };

  console.log(docOne); //{uid: 1, resourceType: 0, data: { title: "name of the wind" }}
}
