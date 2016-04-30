//the first argument to the program will be a path to a filename containing a positive integer, one per line. E.g. 
//Print out the sum of all the integers read from the file. E.g. 

var fs = require("fs")
var sum = 0;
fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function (line) {
        if (line != "") {
            sum += parseInt(line);
        }
    });
console.log(sum);
