function squareSum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    console.log(n);
    result += n ** 2;
  }
  return result;
}

console.log(squareSum([1, 2]));
