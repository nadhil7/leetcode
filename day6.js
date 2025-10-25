var s = "({[]}"
var isValid = function (s) {
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];
    for (let i = 0; i <= s.length - 1; i++) {
        const init = s[i];
        if (map[init]) {
            if (stack.pop() !== map[init]) {
                return false;
            }
        } else {
            stack.push(init)
        }
    }
    return stack.length === 0;
};
console.log(isValid(s));