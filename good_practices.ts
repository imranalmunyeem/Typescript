//Good practices of writing functions 

//1.Define the type of each parameter in your function to ensure type safety.
function addNumbers(a: number, b: number): number {
    return a + b;
  }

//2. Specify the return type of your function to ensure that the returned value is of the correct type.
function multiplyNumbers(a: number, b: number): number {
    return a * b;
  }

//3. Use default parameters to simplify your function and make it more readable.
function greet(name: string = "World") {
    console.log(`Hello, ${name}!`);
  }

//4. Use optional parameters to make your function more flexible and allow for different use cases.
function printName(firstName: string, lastName?: string) {
    if (lastName) {
      console.log(`${firstName} ${lastName}`);
    } else {
      console.log(firstName);
    }
  }

//5. Use destructuring to extract specific properties from objects or arrays.
function printUser({ firstName, lastName }: { firstName: string, lastName: string }) {
    console.log(`${firstName} ${lastName}`);
  }

//6. Use rest parameters to accept any number of arguments and convert them into an array.
function sumNumbers(...numbers: number[]) {
    return numbers.reduce((acc, val) => acc + val, 0);
  }

  
 //some other good practices for writing TypeScript code
 //1. Always explicitly define types for your variables, parameters, and function returns to ensure type safety.
 let myNumber: number = 42;

 //2. Use interfaces to define custom types and provide a clear contract for your code.
 interface User {
    firstName: string;
    lastName: string;
    age: number;
  }

 //3. Use enums to define a set of named constants, which can improve the readability of your code.
 enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
  }

//4. Use generics to write reusable code that can work with different types.
function reverse<T>(array: T[]): T[] {
    return array.reverse();
  }

//5. Take advantage of TypeScript's type inference system to avoid redundant type annotations.
const myNumber = 42; // TypeScript infers that myNumber is a number

//6. Enable strict mode in your TypeScript configuration to catch common errors at compile time.
// tsconfig.json
{
    "compilerOptions": {
      "strict": true
    }
  }
  
 