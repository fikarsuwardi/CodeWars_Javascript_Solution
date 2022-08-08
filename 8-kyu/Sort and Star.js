function twoSort(s) {
  const sorted = s.sort(); // the default sort function works
  return sorted[0] // take first element
    .split("") // split string into chars
    .join("***"); // join chars with ***
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
