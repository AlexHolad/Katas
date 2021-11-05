const disemvowel = (str) => {
  const newArr = [];
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newArr.push(str[i]);
    }
  }
  return newArr.join("");
};

console.log(disemvowel("This website is for losers LOL!"));
