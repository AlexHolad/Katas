const search = (nums, target) => {
  return nums.some(el => el === target)
};

console.log(search([2,5,6,0,0,1,2], 9))