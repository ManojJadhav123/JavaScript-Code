"use strict"
//what are variables :-
//variables can store some information 
// we can use that information later
// we can change that information later

// declare a variable 

// firstName = "Manoj"; // it will work but not a good practice and can cause problems later when complexity of the code increases, if we use strict mode by writing {"use strict"} at top our code then it will not work , will give reference error.

var firstName = "Manoj"; // var is a keyword , firstName is a variable and Manoj is the value. Always follow naming conventions(camel case) while declaring a variable or function or class.

// var firstName = "Arjun"; // in case of var we can redeclare a variable but not a good practice.

//use a variable

console.log(firstName); // will print Manoj

//change value

firstName = "Mohit"; // changed the value 

console.log(firstName); // will print Mohit