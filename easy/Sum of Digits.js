var fs = require("fs");
fs.readFileSync(process.argv[2])
    .toString().split('\n')
    .forEach(function (digits) {
        if (digits !== "") {
            var sum = 0;
            for (x = 0; x < digits.length; x++) {
                sum += parseInt(digits[x]);
            }
            console.log(sum);
        }
    });
