var fs = require("fs");
var inputFile = process.argv[2]

fs.readFileSync(inputFile) 	// Returns contents of input file
    .toString()				        // Converts contents to String type
    .split('\n')			      	// Data is now an array of lines
    .forEach(fizzBuzz);

function fizzBuzz(input) {
    if (input === "") return;

    input = input.split(' ');
    var output = "";
    var number = 1;
    var x = input[0];
    var y = input[1];
    var n = input[2];

    for (i = 0; i < n; i++) {
        if (number % x === 0 && number % y === 0) {
            output += "FB";
        } else if (number % y === 0) {
            output += "B";
        } else if (number % x === 0) {
            output += "F";
        } else {
            output += number;
        }
        output += " ";
        number++;
    }
    console.log(output);
    output = "";
    number = 1;
}
