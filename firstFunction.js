// Call the function to test it.
printHello();

// Create a simple function that: prints out text "Hello!"
function printHello() {
    // This is where function body goes
    process.stdout.write("Hello!");
}

// Create a simple function that
// takes two numbers as input
function printSum(number1, number2){
    // Calculates the sum of these two
    let sum = number1 + number2;
    // prints out the result
    process.stdout.write(sum.toString());
    process.stdout.write("\n" + (number1 + number2));
}
// Call the function to test it.
printSum(1, 6);
// Create a simple function that:
// Takes two numbers as input.
function sum(number1, number2) {
    // Calculates the sum of given numbers.
    let sum = number1 + number2;
    // Returns the result.
    return sum;
    // return number1 + number2;
}
// When function is called use the returned value to print out the result.
let sum2 = sum(5, 10);
process.stdout.write("\n" + sum2);
process.stdout.write("\n" + sum(10000, 789456));

