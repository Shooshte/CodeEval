var output = 0;
var primes = [];
var palindromes = [];

for (x = 0; x < 1000; x++) {
    Prime(x);
}

for (y = 0; y < primes.length; y++) {
    if (checkPalindrom(primes[y].toString())) {
        palindromes.push(primes[y].toString());
    }
}

palindromes.sort(function (a, b) {
    return b - a
});

console.log(palindromes[0]);

function Prime(num) {
    if (num <= 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    primes.push(num);
}

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}
