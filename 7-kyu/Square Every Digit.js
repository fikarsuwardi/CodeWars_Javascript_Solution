function squareDigits(num) {
  let result = ""
  let num2 = String(num)
  for (let i = 0; i < num2.length; i++) {
    let num3 = Number(num2[i])
    result += num3 * num3;
  }
  return Number(result)
}

console.log(squareDigits(9119));