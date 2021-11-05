const solve = (nums, div) => {
  return nums.map((num) =>
    num === 0 ? 0 : num % div !== 0 ? num + (num % div) : num
  );
};

console.log(solve([2, 7, 5, 9, 100, 34, 32, 0], 3)); // [4,8,7,9,101,35,34,0]
