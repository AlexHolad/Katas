const isValid = (s) => {
    const length = s.length;
    for (let i = 0; i < length; i++) {
      if (s.includes("()")) {
        s = s.replace("()", "");
      }
      if (s.includes("[]")) {
        s = s.replace("[]", "");
      }
      if (s.includes("{}")) {
        s = s.replace("{}", "");
      }
    }
    return s.length ? false : true;
  };
  
  console.log(isValid("(()()[]{}()))"));
  