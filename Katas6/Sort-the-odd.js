const sortArray = (array) => {
  let odd = [];
  let indexes = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
      indexes.push(i);
    }
  }
  odd.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = odd[counter];
      counter++;
    }
  }
  return array;
}

console.log(
  sortArray([
    -2, -43, 44, -39, -37, 30, -27, -25, -25, -13, 6, -3, 46, 22, -46, -6, -48,
    9, 9, 13, 44, 33, 14, 37,
  ])
);
// console.log(sortArray([5, 3, 1, 8, 0]));
