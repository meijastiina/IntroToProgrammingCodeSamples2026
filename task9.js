// Create a variable for name
let name = "John";
// Ask for user name
process.stdout.write("Name: ");
// Read user input
process.stdin.on("data",function(inputFromUser) {
    //The statements below will be executed automatically after the user has typed in something.
    name = inputFromUser;
    // Print out greeting
    process.stdout.write("Hello " + name);
    process.exit();
});

