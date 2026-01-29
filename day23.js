var threeConsecutiveOdds = function (arr) {
  let k = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      if (k >= 0) {
        k++;
      }
      if (k == 3) {
        return true;
      }
    } else {
      k = 0;
    }
  }
  if (k < 3) {
    return false;
  }
};

const arr = [1, 2, 3, 5, 6,11,13,15];
console.log(threeConsecutiveOdds(arr));
