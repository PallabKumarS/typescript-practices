{
  let a: number = 45;
  let b: number = 46;

  const test = (a: number, b: number) => {
    if (a > b) {
      console.log("A is bigger");
    } else {
      console.log("B is bigger");
    }
  };

  // test(a, b);

  type Student = {
    name: string;
    contactNo?: string;
    age: number;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Pallab",
    age: 25,
    gender: "male",
    address: "Rangpur",
  };

  // console.log(student1);

  const isAuthenticated = null;

  const result1 = isAuthenticated ?? "Guest";

  console.log({ result1 });
}
