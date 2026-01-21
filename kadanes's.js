// Find the Largest Sum Contiguous Subarray (Kadane’s Algorithm)
// Example: Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output: 6 (Subarray: [4,-1, 2, 1])

const Subarray = (arr) => {
  let max = -Infinity;
  let sum = 0;
  let start = 0;
  let arrayStart = 0;
  let arrayEnd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum == 0) {
      start = i;
    }

    sum = sum + arr[i];

    if (sum > max) {
      max = sum;
      arrayStart = start;
      arrayEnd = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
const Arrays = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(Subarray(Arrays));
