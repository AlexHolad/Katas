const moveZeroes = (nums) => {
  let indexOfZero;
  for (let i = 0; i < nums.length; i++) {
    indexOfZero = nums.indexOf(0);
    if (indexOfZero !== -1) {
      nums.splice(indexOfZero, 1);
      nums.push(0);
    }
  }
  return nums;
};

console.log(moveZeroes([0]));
