{
  type ToDO = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getToDO = async (): Promise<ToDO> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data: ToDO = await res.json();
    console.log(data);
    return data;
  };
  getToDO();
}
