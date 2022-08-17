function sumTwoSmallestNumbers(numbers) {
  //Code here
  let sortir = numbers.sort((a, b) => (a > b ? 1 : -1));
  return sortir[0] + sortir[1];
}
