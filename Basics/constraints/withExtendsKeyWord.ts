{
  // Constraint: To be a student, a person needs to have an id, name, email.
  const createStudent = <
    T extends {
      // extends keyword set the constraint
      id: number;
      name: string;
      email: string;
    }
  >(
    params: T
  ) => {
    const university = "United International University";
    return {
      ...params,
      university,
    };
  };

  const student1 = createStudent<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>({
    id: 125,
    name: "Yamin",
    age: 25,
    email: "y@gamil.com",
  });
  const student2 = createStudent<{
    id: number;
    name: string;
    age: number;
    email: string;
    address: string;
  }>({
    id: 125,
    name: "Yamin",
    age: 25,
    email: "y@gamil.com",
    address: "Dhaka",
  });
}
