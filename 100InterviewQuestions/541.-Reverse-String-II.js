const reverseStr = (s, k) => {
    if (s.length < k) {
      return s.split('').reverse().join('');
    }
    let final = "";
  
    for (let i = 0; i < s.length; i = i + k) {
      // 'abcdefg'
      let sliced = s.slice(i, i + k);
      let reversed = sliced.split("").reverse().join("");
      console.log("REVERSED: ", sliced, reversed, i);
      final = final + reversed;
  
      let slicedUnreversed = s.slice(i + k, i + k + k);
      final = final + slicedUnreversed;
      console.log("UNREVERSED: ", slicedUnreversed, i);
  
      i = i + k;
    }
  
    return final;
  };
  
  console.log(reverseStr("abcdefg", 2));