function fakeBin(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    let n = x[i];
    if (n >= 5) {
      result += 1;
    } else {
      result += 0;
    }
  }
  return result;
}
