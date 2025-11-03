var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let counters = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (count > 0) {
                counters.push(count);
                count = 0;
            }
            continue;
        }
        count++;
        if (nums[i + 1] !== 1) {
            counters.push(count);
            count = 0;
        }
    }
    // if (counters.length === 0) return 0;
    let largest = Math.max(...counters);
    return largest;
};
const nums = [1, 0, 0, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums))