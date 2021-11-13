const comp = (array1, array2) => {
  if (array1 === null || array2 === null) {
    return false;
  }
  let sortedArray1 = array1.sort((a, b) => a - b);
  let sortedArray2 = array2.sort((a, b) => a - b);
  let resultingArr = [];
  resultingArr = sortedArray1.filter((el, i) => {
    return el * el !== sortedArray2[i];
  });
  return resultingArr.length === 0;
};

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
  )
);
