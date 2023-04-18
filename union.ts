/*In TypeScript, a union type allows you to specify that a variable or parameter can have more than one type. 
A union type is written using the pipe symbol | to separate the different types. Here's an example:  */

let myVariable: string | number;


/* In this example, myVariable can be either a string or a number. 
This means that you can assign a string to myVariable, or you can assign a number to it, but you cannot assign any other type to it.*/

//Union types are useful when you have a function or a variable that can work with multiple types of data. 

//For example, consider a function that takes a parameter that can be either a string or an array of strings:

function logStringOrArray(data: string | string[]) {
    if (typeof data === 'string') {
      console.log(data);
    } else {
      for (let item of data) {
        console.log(item);
      }
    }
  }
  
  logStringOrArray('hello'); // logs "hello"
  logStringOrArray(['hello', 'world']); // logs "hello" and "world"

/*In this example, the logStringOrArray function takes a parameter data that can be either a string or an array of strings. 
The function checks the type of data using the typeof operator and performs different actions depending on whether it is a string or an array. */  

//Union types can also be combined with other type annotations, such as interfaces and type aliases. 
//For example, you could define an interface for an object that can have a string or a number property:

interface MyObject {
    value: string | number;
  }
  
  let myObj: MyObject = { value: 'hello' };
  console.log(myObj); // { value: 'hello' }
  
  myObj.value = 123;
  console.log(myObj); // { value: 123 }

/*In this example, MyObject is an interface that has a property called value that can be either a string or a number. 
myObj is an object that conforms to this interface and initially has a string value. Later, we assign a number to myObj.
value and the TypeScript compiler allows it because value can be a number according to the interface. */  
