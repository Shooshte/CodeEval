var fs = require('fs');

fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function (list) {
		if (list == "") return;

		var map = {};

		list.split(',').forEach(function (n) {
			if (map[n] == undefined)
				map[n] = true;
		});

		console.log(Object.keys(map).join(","));
    });
