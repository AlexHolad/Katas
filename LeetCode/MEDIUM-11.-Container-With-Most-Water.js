const maxArea = (arr) => {

    let len = arr.length;
    let left = 0;
    let right = len - 1;
    let max = 0;
  
    while (left < right) {
      let area = Math.min(arr[left], arr[right]) * (right - left);
      if (area > max) {
        max = area;
      }
      if (arr[left] < arr[right]) {
        left++;
      } else if (arr[left] >= arr[right]) {
        right--;
      }
    }
    return max;
  };
  
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));