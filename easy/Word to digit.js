var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        line = line.replace(/zero/g, "0");
        line = line.replace(/one/g, "1");
        line = line.replace(/two/g, "2");
        line = line.replace(/three/g, "3");
        line = line.replace(/four/g, "4");
        line = line.replace(/five/g, "5");
        line = line.replace(/six/g, "6");
        line = line.replace(/seven/g, "7");
        line = line.replace(/eight/g, "8");
        line = line.replace(/nine/g, "9");
        line = line.replace(/;/g, "");
        console.log(line);
    }
});
