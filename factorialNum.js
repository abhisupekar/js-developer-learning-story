function factorial(n) {
    if( n === 0) {
        return 1;
    } else {
        n = n * factorial(n - 1);
        if( n !== 0) {
            return n;
        }
    }
}

console.log(factorial(6))