
for (var i = 1; i < 13; i++) {
    for (var j = 1; j < 13; j++) {
        var n = i * j;
        var output = "";

        if (n < 10)
            output += "   ";
        else if (n < 100)
            output += "  ";
        else
            output += " ";
        output += n;
        if (j == 1)
            output = output.trim();
        process.stdout.write(output);
    }
    process.stdout.write("\n");
}
