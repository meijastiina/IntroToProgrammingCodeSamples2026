let test = "Hello :) :) :)";
let regexp = /[:;][)()]|<3/g;
process.stdout.write(test.replace(regexp, "---"));
process.stdout.write(test.replaceAll(":)", "*smiling*"));