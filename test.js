const findLongest = (str) => {
  const spl = str.split(" ");
  let longest = 0;
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
};

console.log(findLongest("The quick white fox jumped around the massive dog"))
