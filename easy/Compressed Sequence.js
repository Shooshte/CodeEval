var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var num = "";
        var numCount = 0;
        var output = ""
        line = line.split(" ");
        for (x = 0; x < line.length; x++) {
            if (x < line.length) {
                if (line[x] == line[x + 1]) {
                    num = line[x];
                    numCount++;
                } else if (line[x] !== line[x + 1]) {
                    numCount++;
                    if (output === "") {
                        output = output + numCount + " " + num;
                    } else {
                        output = output + " " + numCount + " " + num;
                    }
                    num = "";
                    numCount = 0;
                }
            } else if (x == line.length) {
                if (line[x] == line[x - 1]) {
                    numCount++
                    if (output === "") {
                        output = output + numCount + " " + num;
                    } else {
                        output = output + " " + numCount + " " + num;
                    }
                }
                else if (line[x] !== line[x - 1]) {
                    numCount = 1;
                    num = line[x];
                    output = output + " " + numCount + " " + num;
                }

            }
        }
        console.log(output);

    }
});
