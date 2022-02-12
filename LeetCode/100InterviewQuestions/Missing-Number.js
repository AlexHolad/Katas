const missingNumber = (nums) => {
    let sorted= nums.sort((a,b)=> a-b)
    const found = sorted.findIndex((el, i) => el !== i)
    return found !== -1 ?  found : nums.length
};

console.log(missingNumber([0,1]))
