const findNb = (m) => {
  let counter = m;
  let n = 1;
  for (let i = 1; counter > 0; i++) {
    counter = counter - n ** 3;
    n++;
  }
  return counter === 0 ? n - 1 : -1;
};

console.log(findNb(4183059834009)); // 2022
console.log(findNb(1071225)); //45

// IDEA
// Going from top to bottom
// 1. 4183059834009 - 1^3 = 4183059834007 and n++
// 2. 4183059834007 - 2^3 =

