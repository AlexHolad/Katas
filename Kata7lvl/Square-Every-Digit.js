const squareDigits = (num) => {
  const str = num
    .toString()
    .split("")
    .map((num) => num * num);
  return Number(str.join(""));
};

console.log(squareDigits(3212));
