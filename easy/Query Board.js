var matrix = [];

for (x = 0; x < 256; x++) {
    matrix.push([]);
    for (y = 0; y < 256; y++) {
        matrix[x].push([0]);
    }
}

function SetRow(n, m) {
    for (i = 0; i < 256; i++) {
        matrix[n][i] = m;
    }
}

function SetCol(j, k) {
    for (t = 0; t < 256; t++)
        matrix[t][j] = k;
}

function QueryRow(e) {
    var sum = 0;
    for (w = 0; w < 256; w++) {
        sum += parseInt(matrix[e][w]);
    }
    console.log(sum);
}

function QueryCol(q) {
    var sum = 0;
    for (u = 0; u < 256; u++) {
        sum += parseInt(matrix[u][q]);
    }
    console.log(sum);
}

var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var input = line.split(' ');
        if (input[0] === "SetCol") {
            SetCol(input[1], [input[2]]);
        } else if (input[0] === "SetRow") {
            SetRow(input[2], input[2]);
        } else if (input[0] === "QueryCol") {
            QueryCol(input[1]);
        } else if (input[0] === "QueryRow") {
            QueryRow(input[1]);
        }
    }
});
