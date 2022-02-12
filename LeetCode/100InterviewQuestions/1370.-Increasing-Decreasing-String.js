const sortString = (s) => {
  let sorted = s.split("").sort();

  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[sorted[i]]) {
      obj[sorted[i]] = 1;
    } else {
      obj[sorted[i]]++;
    }
  }

  const entries = Object.entries(obj);
  console.log(entries);
  const biggestVal = Math.max(...Object.values(obj));

  let str = "";

  for (let j = 0; j < biggestVal; j++) {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i][1] > 0) {
        str = str + entries[i][0];
        entries[i][1]--;
      }
    }
    entries.reverse();
  }

  return str;
};

// console.log(sortString("aaaabbbbcccc"));
// console.log(sortString("rat"));
console.log(sortString("leetcode"));
