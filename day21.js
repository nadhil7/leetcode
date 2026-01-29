var search = function (nums, target) {
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      count++;
      return i;
    }
  }
  if (count == 0) {
    return -1;
  }
};
const nums = [-1, 0, 3, 5, 9, 12];
const target = 10;
console.log(search(nums, target));
