//undfined 
// null

let name;
// console.log(typeof name);
// name = "manoj";
// console.log(typeof name , name);

let myVariable = null;
console.log(typeof myVariable);
myVariable = "manoj";
console.log(myVariable, typeof myVariable);

console.log(typeof null);// its a bug/error in js , cannot fix this because already so many projects are running in companies with this error , if fixed then all that projects will be collapsed.

//BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber); // output - 12n
console.log(Number.MAX_SAFE_INTEGER ); // maximum value of an interger in JS
console.log(myNumber + sameMyNumber); // 135n
