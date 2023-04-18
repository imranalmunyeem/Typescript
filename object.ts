// you can create objects using either object literal notation or constructor notation. 

// Using Object literal notation:
// Define an object using object literal notation
let user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isAdmin: false,
    greet: function() {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
  };

  // Using Constructor notation:
  // Define a class
class User {
    firstName: string;
    lastName: string;
    age: number;
    isAdmin: boolean;
  
    constructor(firstName: string, lastName: string, age: number, isAdmin: boolean) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.isAdmin = isAdmin;
    }
  
    greet() {
      console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
  }
  
  // Create an object using constructor notation
  let user2 = new User("John", "Doe", 30, false);
  

//Both of these approaches allow you to define objects with properties and methods. Note that in the constructor notation example, we defined a class that has a constructor to initialize the object's properties. You can also define methods directly on the class definition, as shown with the greet() method.

//Once you have defined an object, you can access its properties and methods using dot notation, as you would with any JavaScript object:
console.log(user.firstName); // "John"
user.greet(); // "Hello, John Doe!"
