var countPrimes = function (n) {
    let prime = 0;
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        if (num === 2) {
            return true;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            prime += 1;
        }
    }
    return prime
};
const n = 20;
console.log(countPrimes(n));