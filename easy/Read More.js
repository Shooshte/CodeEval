var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {

        if (line.length <= 55) {
            console.log(line);
        } else if (line.length > 55) {
            line = line.slice(0, 40);
            var n = line.lastIndexOf(" ");
            if (n != -1) {
                line = line.slice(0, n);
            }
            line += "... <Read More>";
            console.log(line);
        }
    }
});
