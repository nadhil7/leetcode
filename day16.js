var plusOne = function (digits) {
    let n = digits.length - 1
    let number = 0n;
    let answer = [];
    for (let i = 0; i <= n; i++) {
        if (i == n) {
            number = (number * 10n) + BigInt(digits[i]);
            answer.push(digits[i] + 1);
        } else {

            number = (number * 10n) + BigInt(digits[i]);
            answer.push(digits[i])
        }
    }

    return answer
};
const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 8, 12, 3, 4];
// console.log(plusOne(digits))