var removeDuplicates = function (nums) {
const unique = Array.from(new Set(nums));
  return unique;
};
const nums = [2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 7];
console.log(removeDuplicates(nums));
