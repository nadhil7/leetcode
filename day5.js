var majorityElement = function(nums) {
    const counts = {};
    const majorityCount = Math.floor(nums.length / 2);
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > majorityCount) {
            return num;
        }
    }
};
const nums = [3,2,2,3,3];