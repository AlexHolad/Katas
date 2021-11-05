const makeString = (s) => {
  const arr = [];
  const firstArr = s.split(" ");
  for (let i = 0; i < firstArr.length; i++) {
    arr.push(firstArr[i][0]);
  }
  return arr.join("");
};

console.log(makeString("brown eyes are nice"));
