// Create a JS array that has the following items: "banana", "apple", "kiwi", "orange".
let fruits = ["banana", "apple", "kiwi", "orange"];
console.table(fruits);
// Print out "First item in the array is [first item]".
process.stdout.write("First item in the array is " + fruits[0]);
// Loop through the array backwards and print out the items.
// console.log(fruits.length);
for ( let i = fruits.length - 1; i >= 0; i-- ) {
    process.stdout.write("\n" + fruits[i]);
}
console.log(fruits.toString());
console.log(fruits.join("-"));
let number = [5, 12, 789, 3, 11];
console.log(number);
console.log(number.sort());
// Add a new element grapefruit in the beginning of the array.
fruits.unshift("grapefruit");
console.table(fruits);
// Add a new element watermelon in the end of the array.
fruits.push("watermelon");
console.table(fruits);
// Sort the array in descending alphabetical order (z-a).
console.table(fruits.sort().reverse());
console.table(fruits);