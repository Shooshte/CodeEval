var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var n = parseInt(line);
        var i;
        var fib = [];

        fib[0] = 0;
        fib[1] = 1;
        for (i = 2; i <= n; i++) {
            // Next fibonacci number = previous + one before previous
            fib[i] = fib[i - 2] + fib[i - 1];
        }
        console.log(fib[n]);
    }
});
