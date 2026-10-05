// Create a variable age
let age = 77;
// Print out age
console.log(age);

// Task 4
let courseName = "Introduction to Programming";
let amountOfCredits = 5;
let startDate;
startDate = "31.08.2026";

console.log("You are studying " + courseName + ". Course has started on " + startDate + " and it is worth " + amountOfCredits + " credits.");

// Task 5
let x = 5, y = 10, z = 15; 
x + y; // 15 
y - x; // 5 
x * y; // 50 
y / x; // 2 
x % 2; // 1 
x++; // 6 
console.log("x = " + x + " y = " + y + " z = " + z);
x--; // 4 
// Print out the values
console.log("x = " + x + " y = " + y + " z = " + z);
// Test modulo: I have 10 pizza slices and three students. How many are left if slices are divided equally?
console.log(10 % 3);

/* Task 6
Foobar
Foo
Another Foobar
Yet another change
jfklsjflksd
*/
let x2 = 5;
let y2 = "5";
let z2 = 3;
console.log(x2 + y2);
console.log(x2 + z2);
console.log(y2 + z2);
console.log(x2 + y2 + z2);
console.log(x2 + z2 + y2);
console.log(x2 + z2 + Number(y2));

process.stdout.write("Hello process");
let number = 4;
process.stdout.write(number.toString()); // toString() is needed for forcing a number to be a string because write only accepts strings
