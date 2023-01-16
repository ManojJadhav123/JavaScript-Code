//rules for naming variables

// you cannot start with number 
// example :-
//1value (invalid)
//value1 (valid)

var value1 = 10;
console.log(value1);

//console.log(value1 + 20); // will print 30;
//console.log(value1 ** 3) // will print 1000 , because 10^3 = 10*10*10

// you can only use underscore and dollar symbol

// first_Name (valid)
// _firstName (valid)

// first$name (valid)
// $firstname (valid)

//you cannot use spaces 

var first_name = "Manoj"; // snake case writing
var first_Name = "Manoj"; // camel case writing
// first name (invalid)

// Convetion :- start with small letter and use camelCase