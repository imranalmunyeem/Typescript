# Typescript
#### How to install TypeScript?
        npm install -g typescript   //Install globally
        tsc -v                      //Check version


#### How to run TypeScript files?
        tsc filename.ts


#### What is Typescript?
    --- Superset of JavaScript that adds features and functionality to the language.
    --- Developed by Microsoft, open-source, and can run on any platform that supports JavaScript.
    --- TypeScript code is compiled to JavaScript, so it can run on any platform that supports JavaScript.
    

#### What are the benefits of using TypeScript?
    ---Improved code quality and maintainability
    ---Catching errors at compile time rather than at runtime
    ---Enhancing code editor functionality, such as code completion and navigation
    ---Enabling better collaboration and communication within a team


#### How does TypeScript help catch errors at compile time?
    ---TypeScript uses static typing, which means that types are checked at compile time. 
    ---This helps catch errors such as type mismatches and incorrect method calls before the code is even executed.


#### Difference between JavaScript and TypeScript?
    ---TypeScript is a statically typed language, which means that it requires variables and functions to have predefined types at compile-time. In contrast, JavaScript is a dynamically typed language, which means that types are determined at runtime.

    ---TypeScript provides the option to declare types, but it also allows for type inference, meaning that the type can be inferred by the context. JavaScript, on the other hand, does not provide type declarations or type inference.

    ---TypeScript has built-in support for object-oriented programming concepts, such as classes, interfaces, and inheritance. Although JavaScript can support object-oriented programming, it does not have built-in support for these concepts.

    ---TypeScript has better tooling and IDE support than JavaScript, which can help improve developer productivity by providing features such as code completion, error detection, and refactoring.

    ---TypeScript is a superset of JavaScript, which means that existing JavaScript code can be used in TypeScript without modification. However, TypeScript code cannot be used directly in JavaScript.

#### Why should use TypeScript over JavaScript?
    ---TypeScript offers static typing, object-oriented features, better tooling, compatibility with existing JavaScript code, scalability, and a large community. These benefits can make it a more suitable choice over JavaScript for large-scale applications that require maintainable, organized code.
    

#### What are the data types in TypeScript?
    ---boolean: Represents a logical value of true or false.
    ---number: Represents a numeric value, including integers and floating-point numbers.
    ---string: Represents a sequence of characters enclosed in quotes.
    ---array: Represents a collection of values of the same type. Arrays can be defined using the type followed by [] or using the Array<type> syntax.
    ---tuple: Represents an array with a fixed number of elements, where each element may have a different type.
    ---enum: Represents a set of named constants.
    ---any: Represents a value of any type. This is useful when the type of a variable is not known in advance.
    ---void: Represents the absence of a value.
    ---null: Represents a null value.
    ---undefined: Represents an undefined value.    


#### What is a type annotation in TypeScript?
    ---Is a way to specify the type of a variable, parameter, or function return value in TypeScript. 
    ---It is denoted using a colon and the type after the variable or function name, like this:
                let myVariable: string = "Hello, world!";


#### What are interfaces in TypeScript?
    ---Interfaces in TypeScript define a structure that an object should follow. 
    ---They specify the properties and methods that an object must have in order to be considered of that type.
    

#### What are classes in TypeScript?
    --- Classes in TypeScript are a way to create objects that have properties and methods. 
    --- They can also implement interfaces to ensure that they have a certain structure.  


#### What are generics in TypeScript?
    ---Generics in TypeScript allow for the creation of reusable functions, classes, and interfaces that can work with a variety of data types. 
    ---They allow for type safety and code reuse.      


#### What is the difference between a union and an intersection type in TypeScript?
    ---Union types allow for a value to be of one of several types, while intersection types require a value to have properties and methods from multiple types.


#### What is the "never" type in TypeScript?
    ---The "never" type in TypeScript is used to represent values that will never occur. It is often used as a return type for functions that throw errors or enter infinite loops.


#### What are decorators in TypeScript?
    ---Decorators in TypeScript are a way to add metadata to classes, methods, and properties. 
    ---They can be used to modify behavior or add additional functionality to code at runtime.
   

#### What is the difference between "var", "let", and "const" in TypeScript?
    ---var" is function-scoped, while "let" and "const" are block-scoped. "var" can be reassigned and redeclared, while "let" can be reassigned but not redeclared, and "const" cannot be reassigned or redeclared.


#### What are access modifiers in TypeScript?
    ---Access modifiers in TypeScript determine the visibility of properties and methods within a class. 
    ---They can be public (accessible from outside the class), protected (accessible within the class and its subclasses), or private (accessible only within the class).


#### What is the "this" keyword in TypeScript?
    ---The "this" keyword in TypeScript refers to the current instance of an object. 
    ---It is often used within methods to access and modify properties of the object.


#### What is the "as" keyword in TypeScript?
    ---The "as" keyword in TypeScript is used to explicitly cast a value to a certain type. 
    ---It is similar to the "cast" operator in other languages.


#### What is a namespace in TypeScript?
    ---A namespace in TypeScript is a way to group related code into a single, named container. It helps avoid naming collisions and makes code organization more structured.


#### What is a module in TypeScript?
    ---A module in TypeScript is a way to organize code into reusable, self-contained units. 
    ---It can contain classes, interfaces, functions, and other code that can be imported and used in other parts of the application.


#### What are ambient declarations in TypeScript?
    ---Ambient declarations in TypeScript are a way to declare types and interfaces for external code that does not have TypeScript definitions. 
    ---They are often used to provide type safety when working with JavaScript libraries.


#### What is the difference between an interface and a class in TypeScript?
    ---An interface in TypeScript defines a structure that an object should follow, while a class is a blueprint for creating objects that have properties and methods. Interfaces do not have implementations, while classes can have constructors and other methods.


#### What is an abstract class in TypeScript?
    ---An abstract class in TypeScript is a class that cannot be instantiated directly, but can be used as a base class for other classes. 
    ---It may contain abstract methods, which are methods without implementations that must be implemented by subclasses.



#### What is a type guard in TypeScript?
    ---A type guard in TypeScript is a way to check the type of a value at runtime, using conditional statements and type predicates. 
    ---It helps ensure type safety and avoid runtime errors.


#### What is the difference between an array and a tuple in TypeScript?
    ---An array in TypeScript is a collection of values of the same type, while a tuple is a collection of values of different types. 
    ---Arrays are homogeneous, meaning that all elements must be of the same type, while tuples are heterogeneous and can contain elements of different types in a specific order.


#### What is the difference between "undefined" and "null" in TypeScript?
    ---"undefined" is a type that represents a value that has not been initialized or has no value, while "null" is a type that represents an intentional absence of any object value. 
    ---Both "undefined" and "null" can be used to indicate an error or absence of data.


#### What is the difference between "private" and "protected" access modifiers in TypeScript?
    --- The "private" access modifier in TypeScript restricts access to properties and methods to within the same class, while the "protected" access modifier allows access within the same class and any subclasses.


#### What is the difference between "==" and "===" in TypeScript?
    ---The "==" operator in TypeScript checks for equality between two values, but performs type coercion if necessary, while the "===" operator checks for equality without performing type coercion. The "===" operator is generally considered more type-safe and less error-prone.


#### What is the difference between "readonly" and "const" in TypeScript?
    ---The "readonly" keyword in TypeScript is used to make a property or variable read-only after it has been initialized, while the "const" keyword is used to declare a constant value that cannot be reassigned. 
    ---Readonly properties can be modified through methods, while const values cannot.


#### What is a mapped type in TypeScript?
    ---A mapped type in TypeScript is a way to create a new type by transforming the properties of an existing type. 
    ---It is denoted by using the "keyof" keyword to access the keys of an object type and a mapping function to transform the properties.
    ---For example, the mapped type "{ [K in keyof T]: string }" would transform all properties of an object type "T" to be strings.


#### What is the difference between a module and a namespace in TypeScript?
    ---A module is a file that exports one or more values, while a namespace is a way to group related code into a single namespace. 
    ---A module can contain both code and declarations, while a namespace can only contain declarations.


#### What is a conditional type in TypeScript?
    ---A conditional type in TypeScript is a type that depends on a condition. 
    ---It is denoted by using the "extends" keyword and a ternary operator to specify the type based on a condition. 
    ---For example, the conditional type "T extends string ? string : never" would return the type "string" if T is a string, or "never" otherwise.


#### What is a type assertion in TypeScript?
    ---A type assertion in TypeScript is a way to tell the compiler the type of a value when the compiler is unable to infer it. 
    ---It is denoted by using the angle bracket syntax or the "as" keyword. For example, the assertion "const name = (person as any).name" would tell the compiler to treat the "person" object as an "any" type, and then access the "name" property.


#### What is the "keyof" operator in TypeScript?
    ---The "keyof" operator in TypeScript is a way to access the keys of an object type. 
    ---It returns a union type of string literals that represent the keys of the object type. For example, the type "keyof Person" would return a union type of the strings "name", "age", and "address".


#### What is the "Partial" type in TypeScript?
    ---The "Partial" type in TypeScript allows you to create a new type that has all the properties of an existing type, but with each property marked as optional. 
    ---It is useful when you want to create a new object that inherits most of its properties from an existing object, but with some optional properties. 
    ---For example, the type "Partial<Person>" would create a new type that has all the properties of a "Person" object, but with each property marked as optional.





