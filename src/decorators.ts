//decorators

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  };
}

//calling

class Greeter {
  @log
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}

const greeter = new Greeter();

console.log(greeter.greet("John Doe"));
