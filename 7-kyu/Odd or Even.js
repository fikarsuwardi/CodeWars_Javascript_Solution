function oddOrEven(array) {
  //enter code here
  return array.reduce((total, current) => total + current, 0) % 2
    ? "odd"
    : "even";
}
