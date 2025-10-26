const s = "M"
var romanToInt = function (s) {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sum = 0;
    for (let i = 0; i <= s.length - 1; i++) {
        const check = s[i];
        let next = map[s[i + 1]];
        if (next > map[check]) {
            sum = sum - map[check]
        }
        else sum = sum + map[check];
    }
    return sum;
};
console.log(romanToInt(s))