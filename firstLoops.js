// Ask the user to enter a name
process.stdout.write("Name: ");
// Read user input
process.stdin.on("data", function( inputFromUser ) {
    let userInput = inputFromUser;
    let counter = 0;
    // Repeat 5 times
    while ( counter < 5 ) {
        // Print out user name
        process.stdout.write(userInput);
        // Increase counter by one
        counter++;
    }
    process.exit(); // Terminate the program
});
