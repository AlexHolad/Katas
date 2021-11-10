const persistence = (num) => {
  if (String(num).length === 1) {
    return 0;
  }
  let persistance = 0;
  let newNum = num;
  let newNumLength = String(num).length;
  for (let i = 0; newNumLength > 1; i++) {
    newNum = newNum
      .toString()
      .split("")
      .reduce((a, b) => Number(a) * Number(b));
    newNumLength = String(newNum).length;
    persistance++;
  }
  return persistance;
};

console.log(persistence(39));
