const removeElement = (nums, val) => {
    let count = 0
    for(let i=0;i<nums.length; i++){
     
        if(nums[0]===val){
        nums.shift()
        nums.push('_')
      } 
      
        else {
        nums.push(nums[0])
        nums.shift()
        count++
      }
    }
    nums.sort()
    return count
};

console.log(removeElement([0, 1, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));
