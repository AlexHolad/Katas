const moveZeroes = (nums) => {
  let indexOfZero;
  for (let i = 0; i < nums.length; i++) {
    indexOfZero = nums.indexOf(0);
    console.log('IndexOfZero', nums.indexOf(0))
    if (indexOfZero !== -1) {
      nums.splice(indexOfZero, 1);
      nums.push(0);
    }
  }
  return nums;
};



// console.log(moveZeroes([0]));
// console.log(moveZeroes([1,3,12,0,0]))
console.log(moveZeroes([0,0,1]))