



//Creating all prime numbers...version1
for (var num = 0; num <= 20; num++) {
    var notPrime = false;
    for (var i = 2; i <= num; i++) {
        if (num % i===0 && i!==num) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(num);
    }
}
