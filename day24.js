var distributeCandies = function (candyType) {
  const k = candyType.length / 2;
  const double =new Set (candyType).size
    if(double < k){
        return double;
    }
    return k;
};
const candyType = [1, 1, 1, 1, 1, 1];
console.log(distributeCandies(candyType));
