const intersect = (nums1, nums2) => {
  const shorter = nums1.length < nums2.length ? nums1 : nums2;
  const bigger = nums1.length >= nums2.length ? nums1 : nums2;
    console.log(shorter, bigger)
  let numsQuantityShorter = {};
  for (let i = 0; i < shorter.length; i++) {
    if (!numsQuantityShorter[shorter[i]]) {
      numsQuantityShorter[shorter[i]] = 1;
    } else {
      numsQuantityShorter[shorter[i]]++;
    }
  }
  let numsQuantityBigger = {};
  for (let i = 0; i < bigger.length; i++) {
    if (!numsQuantityBigger[bigger[i]]) {
      numsQuantityBigger[bigger[i]] = 1;
    } else {
      numsQuantityBigger[bigger[i]]++;
    }
  }

  console.log(numsQuantityShorter, numsQuantityBigger)
  let res = {};
  const entriesShorter = Object.entries(numsQuantityShorter);
  for (let i = 0; i < entriesShorter.length; i++) {
    if (numsQuantityBigger[entriesShorter[i][0]]) {
      if (numsQuantityBigger[entriesShorter[i][0]] > entriesShorter[i][1]) {
        res[entriesShorter[i][0]] = entriesShorter[i][1];
      } else {
        res[entriesShorter[i][0]] = numsQuantityBigger[entriesShorter[i][0]];
      }
    }
  }

  const entriesRes = Object.entries(res);
  let resultArray = [];
  console.log(entriesRes.length)
  for(let i = 0; i < entriesRes.length; i++){
      let countForLoop = entriesRes[i][1] 
      console.log(countForLoop)
    for(let j = 0; j < countForLoop; j++){
      resultArray.push(Number(entriesRes[i][0]))
    }
  }

  return resultArray;
};

// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([1, 2, 2, 2, 1], [2]));
console.log(intersect([1, 2], [1, 1]));
