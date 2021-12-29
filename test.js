const plusOne = (digits) => {
  for (let i = 0; i < digits.length; i++) {
    let ifNine = digits[digits.length - i - 1];
    if (ifNine === 9) {
      digits[digits.length - i - 1] = 0;
    } else {
      digits[digits.length - i - 1] += 1;
      return digits;
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([9, 9]));
