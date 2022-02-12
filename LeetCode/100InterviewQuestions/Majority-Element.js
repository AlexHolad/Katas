const majorityElement = (nums) => {
    let sorted = nums.sort((a, b) => a - b);
    let n = sorted.length;
    let counter = 1;
    for (let i = 0; i < n; i++) {
      
      if (sorted[i] !== sorted[i + 1]) {
        counter = 1;
      }
      if (sorted[i] === sorted[i + 1]) {
        counter++;
      }
      if (counter > n / 2) {
        return sorted[i];
      }
    }
  };
  
  console.log(majorityElement([1,1,1,1,1,2,2,2,2]));
  // console.log(majorityElement([3, 2, 3]));