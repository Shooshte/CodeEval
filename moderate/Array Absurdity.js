var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.split(";");
        N = parseInt(line[0]);
        line = line[1].split(",");

        for (y = 0; y < N - 2; y++) {
            var repeatCount = 0;
            for (x = 0; x < N; x++) {
                if (parseInt(line[x]) == y) {
                    repeatCount++;
                }
            }
            if (repeatCount == 2) {
                console.log(y);
            }
        }
    }
});