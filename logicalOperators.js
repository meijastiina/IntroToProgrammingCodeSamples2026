let x = 15;
if ( x < 11 && x >= 1) {
    process.stdout.write("x is within 1-10");
} else {
    process.stdout.write("x is NOT within 1-10");
}

if ( x < 1 || x > 10) {
    process.stdout.write("x is outside range 1-10");
} else {
    process.stdout.write("x is NOT outside range 1-10");
}