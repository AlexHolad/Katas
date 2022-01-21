const removeDuplicates = (nums) => {
    const numsWithoutRepeat = [...new Set(nums)];
  
    for (let i = 0; i < nums.length; i++) {
      if (i < numsWithoutRepeat.length) {
        nums[i] = numsWithoutRepeat[i];
      } else {
        nums[i] = "_";
      }
    }
  
    return numsWithoutRepeat.length;
  };
  
  console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
  console.log(removeDuplicates([1, 1, 2]));