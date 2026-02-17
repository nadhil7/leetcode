const missingNumber = (number) => {
  const len = number.length;
  const expectedSum = (len+1)*(len+2)/2;
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
     sum += number[i];
  }
  return expectedSum - sum
};
const number = [1, 2, 3, 4, 6, 7];
console.log(missingNumber(number));
