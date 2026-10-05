process.stdout.write("Select difficulty level (1 = numbers 0-10, 2 = numbers 0-100)");
let difficultyLevel = -1;
let max = 10; // Define the difficulty level (numbers 0-10)
// Get random numbers
let number1 = Math.floor(Math.random() * max + 1); 
let number2 = Math.floor(Math.random() * max + 1);
// Get random calculation
let calculationArray = ["+", "-", "*", "/"];
let result;
let calculationRandom = Math.floor(Math.random() * 4);
// Keep track of score
let score = 0;
switch (calculationArray[calculationRandom]) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    default:
        break;
}


process.stdin.on("data", function( inputFromUser) {
    // Check whether difficulty level is set 
    if ( difficultyLevel == -1 ) {
        // if not, user has entered level
        difficultyLevel = inputFromUser;
        process.stdout.write(number1 + " " + calculationArray[calculationRandom] + " " + number2 + " = " );
    } else {
        // else user has entered an answer to a calculation
        if ( inputFromUser == result ) {
            score++;
            process.stdout.write("Correct answer! (Score: " + score + ")");
        } else {
            process.stdout.write("Incorrect answer. (Score: " + score + ")");
        }
        // Stop when 10 points earned
        if ( score == 10 ){
            process.exit();
        } else {
            // Give the  user a new task
            number1 = Math.floor(Math.random() * max); 
            number2 = Math.floor(Math.random() * max);
            calculationRandom = Math.floor(Math.random() * 4);
            switch (calculationArray[calculationRandom]) {
                case "+":
                    result = number1 + number2;
                    break;
                case "-":
                    result = number1 - number2;
                    break;
                case "*":
                    result = number1 * number2;
                    break;
                case "/":
                    result = number1 / number2;
                    break;
                default:
                    break;
            }
            process.stdout.write("\n" + number1 + " " + calculationArray[calculationRandom] + " " + number2 + " = " );
        }
    }
});