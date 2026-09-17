/*
1.1 Task 1: Number Guessing Game
Create a simple game in which the user has to guess the secret number. Game has the following
functionality:
1. Program asks the user to enter a number.
2. Set secret number to be entered number plus one.
3. Print out whether the user won or not.
*/

// Ask for the user input
// Print out a prompt for the user to enter a numbe
process.stdout.write("Please enter a number: "); // Prints out the given text
// Read user input
process.stdin.on("data",function(inputFromUser) {
    // We come here once the user has entered something
    // Create a variable for secret number
    let secretNumber;
    // Set secret number to be entered number plus one.
    secretNumber = Number(inputFromUser) + 1;
    process.stdout.write("You typed in " + inputFromUser);
    process.stdout.write("Secret number is " + secretNumber);
    process.stdout.write("\nYou lost");
    process.exit(); // Stop asking for user input
});