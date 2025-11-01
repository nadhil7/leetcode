var rotate = function(nums, k) {
  k = k % nums.length; 
  if (k === 0) return nums; 

  return nums.slice(-k).concat(nums.slice(0, -k));
};

var nums = [1,2,3,4,5,6,7,8,9];
var k = 1;
console.log(rotate(nums, k));
