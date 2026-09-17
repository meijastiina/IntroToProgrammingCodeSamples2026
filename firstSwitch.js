// Ask the user to input a number.
process.stdout.write("Number: ");
// Read user input
process.stdin.on("data", function( inputFromUser ) {
    // create a variable 
    let userNumber = Number(inputFromUser);
    // Check if number is 0
    switch ( userNumber ) {
        case 0:
            // If yes -> print out "You entered a zero".
            process.stdout.write("You entered zero");
            break;
        default:
            // If no -> print out "You entered something else".
            process.stdout.write("You entered something else");
    }
    process.exit();
});

