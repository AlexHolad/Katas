const singleNumber = (nums) => {
    let numsObj = {};
  
    for (let i = 0; i < nums.length; i++) {
      if (!numsObj[nums[i]]) {
        numsObj[nums[i]] = 1;
      } else {
        numsObj[nums[i]]++;
      }
    }
  
    let arr = Object.entries(numsObj);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] === 1) {
        return arr[i][0];
      }
    }
  
    return 0;
  };
  
  console.log(singleNumber([4, 1, 2, 1, 2]));
  console.log(singleNumber([2, 2, 1]));
  