const maxSubArray = (nums) => {
  let max_so_far = 0;
  let max_ending_here = 0
  for (let i = 0; i < nums.length; i++) {
    max_ending_here = max_ending_here + nums[i]
    if(max_so_far<max_ending_here){
        max_so_far=max_ending_here
    }
    if(max_ending_here<0){
        max_ending_here=0
    }
  }
  return max_so_far
};

let max_so_far = 6;
let max_ending_here = 5

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5,4,-1,7,8]))

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Input: nums = [5,4,-1,7,8]
// Output: 23

