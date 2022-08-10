function findSmallestInt(args) {
  let result = Infinity;
  for (let i = 0; i < args.length; i++) {
    if (args[i] < result) {
      result = args[i];
    }
  }
  return result;
}

console.log(findSmallestInt([78,56,232,12,18]));