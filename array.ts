//In TypeScript, you can define an array using a similar syntax to JavaScript

//1. Array literal notation:
// Define an array using array literal notation
let myArray: number[] = [1, 2, 3, 4, 5];

//2. Array constructor notation:
// Define an array using array constructor notation
let myArray2: Array<number> = new Array(1, 2, 3, 4, 5);

//You can also define arrays with mixed types, or even with custom types:
// Define an array with mixed types
let myArray3: (number | string)[] = [1, "two", 3, "four", 5];

// Define an array of custom objects
type Person = {
  name: string;
  age: number;
};

let people: Person[] = [
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
  { name: "Bob Johnson", age: 40 }
];

//Once you have defined an array, you can access its elements using bracket notation:
console.log(myArray[0]); // 1

// Some array methods
//push
myArray.push(4, 5);
console.log(myArray); // [1, 2, 3, 4, 5]

//pop
let lastElement = myArray.pop();
console.log(myArray); // [1, 2]
console.log(lastElement); // 3

//shift
let firstElement = myArray.shift();
console.log(myArray); // [2, 3]
console.log(firstElement); // 1

//unshift
myArray.unshift(-1, 0);
console.log(myArray); // [-1, 0, 1, 2, 3]

//slice
let subset = myArray.slice(1, 4);
console.log(subset); // [2, 3, 4]

//splice
myArray.splice(1, 3, 6, 7, 8);
console.log(myArray); // [1, 6, 7, 8, 5]
