module.exports = function reverse(n) {
    if (n < 0) n = -1 * n;

    var m = 0;
    while (n > 0) {
        m = m * 10;
        m = m + (n % 10);
        n = Math.floor(n / 10);
    }

    return m;
};
