const pyramid = (n) => {
  let finalArr = [];
  for (let i = 1; i <= n; i++) {
    let tempArr = [];
    for (let j = 0; j < i; j++) {
      tempArr.push(1);
    }
    finalArr.push(tempArr);
  }
  return finalArr;
};

console.log(pyramid(3));
