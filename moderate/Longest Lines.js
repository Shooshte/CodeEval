var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split('\n');

var steviloVrstic = parseInt(input[0]);
input.splice(0, 1);
input.sort(function (a, b) {
  return b.length - a.length;
});

for (x = 0; x < steviloVrstic; x++) {
  console.log(input[x]);
}