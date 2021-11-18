// complete the function
const solution = (string) => {
  if (string === "") {
    return string;
  }
  return string
    .split("")
    .map((el) => (el.toUpperCase() === el ? (el = ` ${el}`) : (el = el)))
    .join("");
};

console.log(solution("camelCasing"));
