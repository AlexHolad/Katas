const containsDuplicate = (nums) => {
    let sorted = nums.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i + 1]) {
        return true;
      }
    }
    return false;
  };
  
  console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
  console.log(containsDuplicate([1, 2, 3, 4, 4]));