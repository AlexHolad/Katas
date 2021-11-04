const foldTo = (target) => {
  if (target < 0) {
    return null;
  }
  let counter = 0;
  for (let i = 0.0001; i <= target; i *= 2) {
    counter++;
  }
  return counter;
};

console.log(foldTo(384000000));
