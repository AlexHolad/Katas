const searchInsert = (nums, target) => {
    if(nums.includes(target)){
        return nums.indexOf(target)
    }
    const resultArray = [...nums]
    let final=resultArray.concat(target).sort((a,b)=>a-b)
    return final.indexOf(target)
};

console.log(searchInsert([1, 3, 5, 6], 6));
