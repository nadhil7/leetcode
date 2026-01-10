function subsets(nums) {
  const result = [];
  const n = nums.length;

  for (let j = 0; j < (1 << n); j++) {
    const subset = [];
    for (let i = 0; i < n; i++) {
      if (j & (1 << i)) {
        subset.push(nums[i]);
      }
    }
    result.push(subset);
  }

  return result;
}
const nums = [1, 2, 3];
console.log(subsets(nums));
