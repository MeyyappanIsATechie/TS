"use strict";
function add(a, b) {
    return a + b;
}
let result = add(2, 3);
console.log(result);
const sub = (a, b) => a - b;
console.log(sub(5, 3));
//optional parameters
function greet(name, age) {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    else {
        return `Hello, ${name}!`;
    }
}
console.log(greet("John", 20));
//default parameters
function greet2(name, age = 30) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet2("John", 20));
//rest parameters
function greet3(n, ...names) {
    return names.join(", ") + n;
}
console.log(greet3(5, "John", "Doe"));
//generic functions
function getItems(items) {
    return new Array().concat(items);
}
console.log(getItems([1, 2, 3]));
