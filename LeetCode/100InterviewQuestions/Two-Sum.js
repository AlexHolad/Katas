// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to
// target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
  let twoResultNum = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let z = 0; z < nums.length; z++) {
      if (nums[i] + nums[z] === target && i !== z) {
        twoResultNum[i] = nums[i];
        twoResultNum[z] = nums[z];
      }
    }
  }
  twoResultNum.forEach((e, i) => {
    if (typeof e === "number") {
      result.push(i);
    }
  });
  return result;
};

console.log(twoSum([3, 3], 6)); // => [0,1] Because nums[0] + nums[1] == 9, we return [0, 1]
