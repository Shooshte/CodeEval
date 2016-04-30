var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(",");
        line[1] = line[1].replace(" ", "").split("");

        for (x = 0; x < line[1].length; x++) {
            line[0] = line[0].replace(new RegExp(line[1][x], "g"), "");
        }

        console.log(line[0]);
    }
});