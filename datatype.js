// This module defines the primitive data types in JavaScript.

// A primitive data type is a basic data type that is not composed of other data types.
// In JavaScript, the primitive data types are:
const primitiveDataTypes = {
  string: "A sequence of characters used to represent text.",
  number: "A numeric value, which can be an integer or a floating-point number.",
  boolean: "A logical value that can be either true or false.",
  null: "A special value that represents the absence of any object value.",
  undefined: "A variable that has been declared but has not yet been assigned a value.",
  symbol: "A unique and immutable primitive value often used as object property keys.",
  bigint: "An integer with arbitrary precision, allowing for very large integers."
};

let fname = 'Saffan';
console.log(fname);
let age = 20;
console.log(age);
let isStudent = true; 
console.log(isStudent);
let address = null; 
console.log(address);

console.log(typeof fname); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof address); // object (null is considered an object in JavaScript)
console.log(typeof undefined); // undefined 

