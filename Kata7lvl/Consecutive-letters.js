const solve = (s) => {
  let arr = s.split("").sort().join("");
  console.log(arr);
  let checker = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr.charCodeAt(i + 1) - arr.charCodeAt(i) === 1) {
      console.log(`${s.charCodeAt(i + 1)} - ${s.charCodeAt(i)} = 1 True`);
      checker = true;
    } else {
      console.log(`${s.charCodeAt(i + 1)} - ${s.charCodeAt(i)} = not 1 False`);
      return (checker = false);
    }
  }
  return checker;
};

console.log(solve("dabc"));
