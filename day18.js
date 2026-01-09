var searchInsert = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
    if (nums[i] < target && nums[i + 1] > target) {
      return i + 1;
    }
    if (i == nums.length-1 && nums[i] < target) {
      return nums.length ;
    }
    if(target<nums[i])
    {
        return 0;
    }
  }
};
const target = 0;
const nums = [1,3,5,6];
console.log(searchInsert(nums, target));
