// Create a matrix
let fruitsalad = [
    ["banana", 3, "yellow", 123],
    ["orange", 1, "orange", 456, "yammy"],
    ["apple", 5, "green", 777],
];
process.stdout.write("\nThe Best Fruitsalad Recipe\n");
/*
3 banana
1 orange
5 apple
*/
for ( let i = 0; i < fruitsalad.length; i++ ) {
    process.stdout.write("\n" + fruitsalad[i][1]);
    process.stdout.write(" " + fruitsalad[i][0]);
}
console.log("\nLength: " + fruitsalad.length);
for ( let i = 0; i < fruitsalad.length; i++ ) {
    process.stdout.write("\n");
    for ( let j = 0; j < fruitsalad[i].length; j++ ) {
        process.stdout.write(" " + fruitsalad[i][j]);
    }
}