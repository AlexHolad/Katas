const canBeTypedWords = function (text, brokenLetters) {
    const splittedText = text.split(" ");
    let count = splittedText.length;
    for (let i = 0; i < brokenLetters.length; i++) {
      for (let j = 0; j < splittedText.length; j++) {
        if (splittedText[j].includes(brokenLetters[i])) {
          count--;
          splittedText[j] = ''
        }
      }
    }
    return count;
  };
  console.log(canBeTypedWords("hello world", "ad"));
  console.log(canBeTypedWords("leet code", "lt"));
  