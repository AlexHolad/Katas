const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const firstWord = s.split("").sort();
  const secondWord = t.split("").sort();
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== secondWord[i]) {
      return false;
    }
  }

  

  return true;
};