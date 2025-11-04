var containsDuplicate = function (nums) {
    let newobj = new Set(nums)
    return newobj.size!==nums.length
};
const nums = [1, 2, 3, 4, 5, 5];
console.log(containsDuplicate(nums))