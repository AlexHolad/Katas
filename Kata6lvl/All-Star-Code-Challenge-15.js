const rotate = (str) => {
  let strArr = str.split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let x = strArr.shift();
    strArr.push(x);
    arr.push(strArr.join(""));
  }

  return arr;
};

console.log(rotate("Hello")); // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]









