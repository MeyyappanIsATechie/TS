import { ILogin } from "./interfaces";

class Employee implements ILogin {
  id: number;
  name: string;
  salary: number;
  hike!: number;
  #password: string; //or private keyword

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.#password = "password123"; // Private field
  }
  login(): void {
    console.log("interface implemented");
  }

  //static method

  static getStatic(): string {
    return "static";
  }
  displayDetails(): void {
    console.log(`ID: ${this.id}, Name: ${this.name}, salary: ${this.salary}`);
  }
  static compareSalary(e1: Employee, e2: Employee): number {
    return e1.salary - e2.salary;
  }
}

console.log(Employee.getStatic());

let emp1 = new Employee(1, "John Doe", 10000);

emp1.login();

emp1.hike = 1000;

console.log(`New Salary: ${emp1.salary + emp1.hike}`);

emp1.displayDetails();

let emp2 = new Employee(2, "Jane Smith", 4000);

emp2.displayDetails();

console.log(Employee.compareSalary(emp1, emp2));

//inheritance

class Manager extends Employee {
  department: string;

  constructor(id: number, name: string, salary: number, department: string) {
    super(id, name, salary);
    this.department = department;
  }

  displayDetails(): void {
    super.displayDetails();
    console.log(`Department: ${this.department}`);
  }
}

let manager = new Manager(3, "Michael Johnson", 50000, "Finance");

manager.displayDetails();
