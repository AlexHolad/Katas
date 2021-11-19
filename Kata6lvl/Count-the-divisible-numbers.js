const divisibleCount = (x, y, k) => {
  let counter = 0;
    let start = 0
  for (let i = x; i <= y; i++) {
    if (i % k === 0) {
        start = i
        break
        
      }
  }
  for (let i = start; i <= y; i+k) {
    if (i % k === 0) {
        counter++
        start += k
        console.log(start, counter)
      }
  }
  return counter;
};

console.log(divisibleCount(6, 11, 2)); // => 3  because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10
