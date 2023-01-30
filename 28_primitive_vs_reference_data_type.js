// primitve vs reference data types
let num1 = 6;
let num2 = num1; // num2 is just copying the value of num1 , so both are different variables , changes in num1 will not be reflected in num2
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);


// reference types 
// array 
let array1 = ["item1", "item2"];
let array2 = array1; // array2 will be pointing to the same array elements which are in heap memory , so changes in array1 will be reflected in array2
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);