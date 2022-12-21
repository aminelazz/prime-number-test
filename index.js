function isPrime(num) {
    // 1 is not a prime number
    if (num === 1) {
        return false
    }

    // 2 is a prime number
    if (num === 2) {
        return true
    }

    // Check if num is divisible by any number between 2 and num - 1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

module.exports = {
    isPrime: isPrime,
}
