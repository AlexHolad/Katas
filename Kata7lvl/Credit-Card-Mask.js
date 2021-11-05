// return masked string
const maskify = (cc) => {
  const arr = cc.split("");
  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = "#";
  }
  return arr.join("");
};

console.log(maskify("3333"));
