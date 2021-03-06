// Write a program which determines the sum of the first 1000 prime numbers.

var prastevila = []; //array to store primes
var vsota = 0; //variable to store sum


function najdiPrastevilo(num) {  //function that checks if number is prime
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    prastevila.push(num);
}

for (var x = 0; prastevila.length < 1000; x++) { //loop that runs until it stores 1000 prime numbers
    najdiPrastevilo(x);
}

for (var i = 0, vsota = 0; i < prastevila.length; vsota += prastevila[i++]); //loop that sums up everything in the array

console.log(vsota);

