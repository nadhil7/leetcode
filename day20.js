// Input: nums = [2,2,1]
// Output: 1

var singleNumber = function (nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
};
const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
