var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {

        for (y = 0; y < line.length; y++) {
            for (x = 1; x < line.length - 1; x++) {
                if (line.charAt(0) == line.charAt(x)) {
                    line = line.replace(new RegExp(line.charAt(0), "g"), "");
                }
            }
        }

        console.log(line.charAt(0));
    }
});