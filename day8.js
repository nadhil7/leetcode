var searchRange = function (nums, target) {
    let arr = [];
    const posStarting = nums.indexOf(target)
    const posEnding = nums.lastIndexOf(target);
    arr.push(posStarting, posEnding)
    return arr
};
const target = 11;
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(searchRange(nums,target))