function Disemvowel(str) {
  let result = "";
  let vocal = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      vocal += str[i];
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(Disemvowel("This website is for losers LOL!"));
