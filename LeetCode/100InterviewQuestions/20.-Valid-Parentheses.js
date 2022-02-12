const isValid = (s) => {
  let str = s;
  for (let i = 0; i < s.length; i++) {
    console.log(str);
    if (str.includes("()")) {
      str = str.replace("()", "");
    } else if (str.includes("{}")) {
      str = str.replace("{}", "");
    } else if (str.includes("[]")) {
      str = str.replace("[]", "");
    } else if (str.length < 1) {
      return true;
    } else {
      return false;
    }
  }
  return str;
};

console.log(isValid("("));

