var fs = require("fs");

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function (v) {
		if (v == "") return;

		v = v.split(",");

		var x = parseInt(v[0], 10),
			n = parseInt(v[1], 10);

		var multiplier = 2;
		var originalN = Number(n);

		while (n < x) {
			n = originalN * multiplier++;
		}

		console.log(n);
    });
