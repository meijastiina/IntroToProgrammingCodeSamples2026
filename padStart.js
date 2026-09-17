for (let index = 0; index < 1000; index+=50.78) {
    process.stdout.write("\n*");
    process.stdout.write(index.toFixed(2).toString().padStart(10).padEnd(20));
    process.stdout.write("*");
}