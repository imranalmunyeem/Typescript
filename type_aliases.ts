/* Type aliases in TypeScript allow you to create custom types that can be referenced throughout your code. 
Essentially,they allow you to give a type a different name for ease of use and readability.*/

type Employee = {
    id: number;
    name: string;
    title: string;
    salary: number;
  }
  
  let employee: Employee = {
    id: 1,
    name: "John Doe",
    title: "Software Engineer",
    salary: 100000
  };

 /*In this example, we defined a type alias called Employee that represents an object with four properties: id, name, title, and salary. 
 We then created a variable employee of type Employee and assigned it an object that conforms to the Employee type. */
 
 
 //Using type aliases can make your code more readable and maintainable, especially when dealing with complex types or when you need to use the same type in multiple places throughout your code. 
 //It can also simplify refactoring, since you only need to update the type alias in one place instead of updating every instance of the type throughout your code.