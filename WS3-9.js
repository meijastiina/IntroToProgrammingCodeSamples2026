let word = "Foobaar";
process.stdout.write("Length of the word " + word.length);
for (let index = word.length; index >= 0; index--) {
    process.stdout.write(word.charAt(index));
    
 }