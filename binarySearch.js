var search = function (nums, target) {
  start = 0;
  end = nums.length - 1;
  while (start < end) {
    mid = Math.floor(start + end / 2);
    if (target == nums[mid]) {
      return mid;
    }
  }
};
const nums = [-1, 0, 3, 5, 9, 12];
const target = 0;
console.log(search(nums, target));
