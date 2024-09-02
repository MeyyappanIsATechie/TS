function add(a: number, b: number): number {
  return a + b;
}

let result: number = add(2, 3);

console.log(result);

const sub = (a: number, b: number): number => a - b;

console.log(sub(5, 3));

//optional parameters

function greet(name: string, age?: number): string {
  if (age) {
    return `Hello, ${name}! You are ${age} years old.`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet("John", 20));

//default parameters

function greet2(name: string, age: number = 30): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet2("John", 20));

//rest parameters

function greet3(n: number, ...names: string[]): string {
  return names.join(", ") + n;
}

console.log(greet3(5, "John", "Doe"));

//generic functions

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

console.log(getItems([1, 2, 3]));
