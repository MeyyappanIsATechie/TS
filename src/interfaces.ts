//interfaces

interface IPerson {
  firstName: string;
  lastName?: string;
}

let person1: IPerson = { firstName: "John" };

console.log(person1.firstName);

interface IEmployee extends IPerson {
  salary: number;
}
let employee1: IEmployee = { firstName: "John", salary: 10000 };

console.log(employee1.firstName, employee1.salary);

export interface ILogin {
  login(): void;
}

//object destructuring

let person2: IPerson = { firstName: "Jane", lastName: "Doe" };

let { firstName: name, lastName } = person2;

console.log(name, lastName);

//interface array destructuring

let employees: IEmployee[] = [
  { firstName: "John", salary: 10000 },
  { firstName: "Jane", salary: 15000 },
  { firstName: "James", salary: 25000 },
];

let [{ firstName: name1, salary: salary1 }, ...users] = employees;

console.log(name1, salary1);

let result = users.filter((user) => user.salary > 15000);

console.log(result);
