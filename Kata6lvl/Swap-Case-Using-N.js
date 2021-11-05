const swap = (s, n) => {
  let binary = (n >>> 0).toString(2); //code me!
  let counter = 0;
  let binArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/gi)) {
      binArr.push(binary[counter]);
      counter++;
      if (counter === binary.length) {
        counter = 0;
      }
    } else {
      binArr.push("x");
    }
  }
  //   [ '1', '0', '1', '1', '1', 'x', '0', '1', '1', '1', '0', 'x' ]
  //   [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]

  // if 1 swap case  if 0 leave case
  return s
    .split("")
    .map((letter, i) =>
      Number(binArr[i]) === 1
        ? s[i] === s[i].toUpperCase()
          ? s[i].toLowerCase()
          : s[i].toUpperCase()
        : s[i]
    )
    .join("");
};
console.log(swap("Hello world!", 11));


// swap=(a,b,c=0,d='',e=b.toString(2),f=a[0],g=/[a-z]/i.test(f),h=(a,b)=>b?a[`to${a>'`'?'Upp':'Low'}erCase`]():a)=>a?swap(a.slice(1),b,c+(g?1:0),d+h(f,g&&+e[c%e.length])):d