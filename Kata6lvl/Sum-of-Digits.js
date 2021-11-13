const digital_root = (n) => {
  let nArr = n;
  while (nArr.toString().length > 1) {
    let tempArr = nArr.toString().split("");
    let sum = tempArr.reduce((a, b) => Number(a) + Number(b), 0);
    nArr = sum;
  }
  return nArr;
};

console.log(digital_root(132189));
