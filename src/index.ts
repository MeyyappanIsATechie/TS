let lname: string;

lname = "John Doe";

let newName = lname.toUpperCase();

console.log(newName); // Output: JOHN DOE

let age: number;

age = 30;

let isAdult = age >= 18;

console.log(isAdult); // Output: true

let age2 = "30";

let isAdult2 = Number(age2) >= 18;

console.log(isAdult2); // Output: true

let empList: string[];

empList = ["John Doe", "Jane Smith", "Michael Johnson"];

let deptList: Array<string>;

deptList = ["HR", "IT", "Finance"];

let numbers: Array<number>;

numbers = [1, 2, 3, 4, 5];

console.log(empList); // Output: (3) ["John Doe", "Jane Smith", "Michael Johnson"]

console.log(deptList); // Output: (3) ["HR", "IT", "Finance"]

let nameStartsWithJ = empList.filter((emp: string) => emp.startsWith("J"));

let sumOfNums = numbers.reduce(
  (accumulator: number, currentValue: number) => accumulator + currentValue,
  0
);

console.log(sumOfNums); // Output: 15

console.log(nameStartsWithJ); // Output: (2) ["John Doe", "Jane Smith"]

let person: { firstName: string; lastName: string };

person = { firstName: "John", lastName: "Doe" };

console.log(person.firstName); // Output: John

//enum example

const enum Gender {
  Male,
  Female,
}

let gender: Gender;

gender = Gender.Male;

console.log(gender); // Output: 0
console.log(typeof typeof Gender.Male);

function add(a: number, b: number): number {
  return a + b;
}

console.log(typeof add); // "function"

type AddType = typeof add; // (a: number, b: number) => number

const addAnother: AddType = (x, y) => x + y; // Valid

console.log(add(5, 6));
console.log(addAnother(4, 3));

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const personInstance = new Person("Alice");

console.log(typeof Person); // "function"
console.log(typeof personInstance); // "object"

type PersonType = typeof Person;

let nothing = null;
let notDefined;

console.log(typeof nothing); // "object" (this is a well-known quirk in JavaScript)
console.log(typeof notDefined); // "undefined"

function handle(input: string | number) {
  if (typeof input === "string") {
    console.log("It's a string:", input.toUpperCase());
  } else {
    console.log("It's a number:", input.toFixed(2));
  }
}

handle("hello"); // It's a string: HELLO
handle(3.14159); // It's a number: 3.14

//tuples

let tuple: [number, number, boolean];

tuple = [15, 25, true];

console.log(tuple[0]); // Output: Alice

// function to swap tuple

function swapTupleValues(tuple: [number, number, boolean]): void {
  [tuple[0], tuple[1]] = [tuple[1], tuple[0]];
}

swapTupleValues(tuple);

console.log(tuple);

let department: any;
