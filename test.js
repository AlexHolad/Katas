function alphabetPosition(text) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  console.log(alphabet);
  let result = [];
  text
    .toLowerCase()
    .split("")
    .forEach((char, i) => {
      result.push(alphabet.indexOf(char) + 1);
    });
  result = result.filter((el) => el !== 0);

  return result.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
