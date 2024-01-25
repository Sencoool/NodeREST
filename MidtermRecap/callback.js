function gcd(a, b, success) {
    let result;
    let min = a < b ? a : b;
    for (let i = min; i >= 1; i--) {
        if (a % i == 0 && b % i == 0) {
            result = i;
            break;
        }
    }
    // Call function and send result back
    success(result);
}

gcd(6, 15, function (result) {
    console.log("GCD = " + result);
});