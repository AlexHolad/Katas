const longestCommonPrefix = (strs) => {
  let sorted = strs.sort((a, b) => a.length - b.length);
  const strNew = sorted[0].split("");
  sorted.shift();
  let resultArr = [];
  for (let j = 0; j < strNew.length; j++) {
    resultArr[j] = sorted.every((word, i) => {
      return word.charAt(j) === strNew[j];
    });
  }
  for (let i = 0; i < strNew.length; i++) {
    if (resultArr[i]) {
      resultArr[i] = strNew[i];
    } else {
      resultArr.length = i;
    }
  }
  return resultArr.join("");
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["cir", "car"]));
