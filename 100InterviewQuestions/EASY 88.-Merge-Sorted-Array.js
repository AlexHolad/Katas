const merge = (nums1, m, nums2, n) => {
    for (let i = 0; i < n; i++) {
      nums1.pop();
    }
    console.log(nums1)
    for (let i = 0; i < n; i++) {
      nums1.push(nums2[i]);
    }
    console.log(nums2)
  
    return nums1.sort((a, b) => a - b);
  };
  
  console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
  console.log(merge([1],1,[],0))
  